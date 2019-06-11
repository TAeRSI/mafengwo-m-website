// cmmonjs规范
const indexTpl = require('./views/index.html')
const { list } = require('./controllers/index')
// es6
// import {name} from './controllers/name'
// console.log(name)

const renderIndexTpl = template.render(indexTpl, {})

$('#app').html(renderIndexTpl)

list()


// banner
var mySwiper = new Swiper('.swiper-container',{
    autoplay : true,
    loop : true,
    scrollbar : {
        el : '.swiper-scrollbar',
        dragSize : 30,
    },
});
mySwiper.scrollbar.$dragEl.css('background','#ffa630')
mySwiper.scrollbar.$el.css('background','rgba(255,255,255,0.6)');