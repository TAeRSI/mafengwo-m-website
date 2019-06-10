// cmmonjs规范
const Name = require('./controllers/Name')
const aaTpl = require('./views/aa.art')

// es6
// import {name} from './controllers/name'
// console.log(name)

async function getName(){
    console.log(Name.name)
    const name = await Name.getName()
    console.log(name)
}
getName()


const newStr = template.render(aaTpl, {title:'buff'})
console.log(newStr)