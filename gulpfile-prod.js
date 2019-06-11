const { src, dest, series, parallel } = require('gulp')
const rev = require('gulp-rev')
const revCollector = require('gulp-rev-collector')
// 辅助目录解析
const path = require('path')

const webpackStream = require('webpack-stream')
const gulpSass = require('gulp-sass')

//拷贝 index.html 到dev 根目录下
function copyhtml(){
    return src('./*.html')
    .pipe(dest('./dist/'))
}

function copylibs(){
    return src('./src/libs/**/*')
    .pipe(dest('./dist/libs'))
}

function copyimages(){
    return src('./src/images/**/*')
    .pipe(dest('./dist/images'))
}

function copyicons(){
    return src('./src/icons/**/*')
    .pipe(dest('./dist/icons'))
}

// 编译js模块
function packjs(){
    return src('./src/**/*')
    .pipe(webpackStream({
        //生产环境
        mode: 'production',
        //入口（app:入口名字）
        entry: {
            app : './src/app.js'
        },
        // 出口
        output: {
            // 文件名字（[name] == app)
            filename : '[name].js',
            // 绝对路径(nodejs怎么写绝对路径：__dirname(1.字符串拼接 2.路径解析))
            path : path.resolve(__dirname, './dist')
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
                    test : /\.html$/,
                    loader : 'string-loader'
                }
            ]
        }
    }))
    .pipe(rev())
    .pipe(dest('./dist/scripts'))
    .pipe(rev.manifest())
    .pipe(dest('./rev/scripts'))
}

function revColl(){
    return src(['./rev/**/*.json', './dist/*.html'])
    .pipe(revCollector())
    .pipe(dest('./dist'))
}

function packCss(){
    return src('./src/styles/app.scss')
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(rev())
    .pipe(dest('./dist/styles'))
    .pipe(rev.manifest())
    .pipe(dest('./rev/styles'))
}

//私有任务、公有任务定义。公有任务需要在exports里显示的定义
// exports.webserver = series(webserver)
exports.default = series(parallel(packjs, packCss, copylibs, copyimages, copyicons),copyhtml, revColl)