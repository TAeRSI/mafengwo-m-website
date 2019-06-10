// commonjs 规范
// module.exports = 'TA尔'

// es6
// export const name = 'TA尔'

module.exports = {
    name : 'TA',
    getName : ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                // this.name = '尔' //大坑
                resolve('尔')
            },2000)
        })
    }
}