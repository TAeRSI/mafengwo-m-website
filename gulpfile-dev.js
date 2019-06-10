const { src, dest, series, parallel, watch } = require('gulp')
// 辅助目录解析
const path = require('path')

const gulpWebserver = require('gulp-webserver')
const webpackStream = require('webpack-stream')
const gulpSass = require('gulp-sass')
const proxy = require('http-proxy-middleware')
const del = require('del')

//拷贝 index.html 到dev 根目录下
function copyhtml(){
    return src('./*.html')
    .pipe(dest('./dev/'))
}

function copylibs(){
    return src('./src/libs/**/*')
    .pipe(dest('./dev/libs'))
}

function copyimages(){
    return src('./src/images/**/*')
    .pipe(dest('./dev/images'))
}

function copyicons(){
    return src('./src/icons/**/*')
    .pipe(dest('./dev/icons'))
}

// connect
function webserver(){
    return src('./dev')
    .pipe(gulpWebserver({
        port : 8000,
        livereload : true,
        middleware: [
            proxy('/api', {
                target: 'https://m.mafengwo.cn',
                changeOrigin: true,//访问不同的域名，需要配置成true
                //重定向
                pathRewrite: {
                    '^/api':''
                }
            })
        ]
            
        
    }))
}

// 编译js模块
function packjs(){
    return src('./src/**/*')
    .pipe(webpackStream({
        //开发环境里配webpack，不压缩
        mode: 'development',
        //入口（app:入口名字）
        entry: {
            app : './src/app.js'
        },
        // 出口
        output: {
            // 文件名字（[name] == app)
            filename : '[name].js',
            // 绝对路径(nodejs怎么写绝对路径：__dirname(1.字符串拼接 2.路径解析))
            path : path.resolve(__dirname, './dev')
            // 字符串拼接
            // path : __dirname + '/dev'
        },
        // es6-es8转es5
        module : {
            rules: [
                {
                    // 解析js（以js结尾的）文件
                    test: /\.js$/,
                    // 排除
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        // 选项 预设（还有react预设）
                        options: {
                            presets: ['@babel/preset-env'],//presets是pluigns的合集
                            plugins: ['@babel/plugin-transform-runtime']
                        }
                    }
                },
                {
                    test : /\.art$/,
                    loader : 'string-loader'
                }
            ]
        }
    }))
    .pipe(dest('./dev/scripts'))
}

function packCss(){
    return src('./src/styles/app.scss')
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(dest('./dev/styles'))
}

function clear(target){
    return function(){
        return del(target)
    }
}

function watcher(){
    watch('./src/images/**/*', series(clear('./dev/images'), copyimages))
    watch('./src/icons/**/*', series(copyicons))
    watch('./*.html', series(clear('./dev/*.html'), copyhtml))
    watch('./src/libs/**/*', series(copylibs))
    watch('./src/styles/**/*', series(packCss))
    watch(['./src/**/*', '!src/libs/**/*', '!src/icons/**/*', '!src/images/**/*', '!src/styles/**/*'], series(packjs))

}

//私有任务、公有任务定义。公有任务需要在exports里显示的定义
// exports.webserver = series(webserver)
exports.default = series(parallel(packjs, packCss, copylibs, copyimages, copyicons),copyhtml, webserver, watcher)