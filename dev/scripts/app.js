/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// cmmonjs规范\nvar indexTpl = __webpack_require__(/*! ./views/index.html */ \"./src/views/index.html\");\n\nvar _require = __webpack_require__(/*! ./controllers/index */ \"./src/controllers/index.js\"),\n    list = _require.list; // es6\n// import {name} from './controllers/name'\n// console.log(name)\n\n\nvar renderIndexTpl = template.render(indexTpl, {});\n$('#app').html(renderIndexTpl);\nlist(); // banner\n\nvar mySwiper = new Swiper('.swiper-container', {\n  autoplay: true,\n  loop: true,\n  scrollbar: {\n    el: '.swiper-scrollbar',\n    dragSize: 30\n  }\n});\nmySwiper.scrollbar.$dragEl.css('background', '#ffa630');\nmySwiper.scrollbar.$el.css('background', 'rgba(255,255,255,0.6)');\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/controllers/index.js":
/*!**********************************!*\
  !*** ./src/controllers/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  list: function list() {\n    $.ajax({\n      url: '/api?category=get_info_flow_list&page=0',\n      // 相当于success ：function(){}\n      success: function success(res) {\n        res = JSON.parse(res);\n        console.log(res);\n      }\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/controllers/index.js?");

/***/ }),

/***/ "./src/views/index.html":
/*!******************************!*\
  !*** ./src/views/index.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"container\\\">    <header>        <div class=\\\"LBtn\\\">            <a href=\\\"/\\\" class=\\\"logo\\\"></a>        </div>        <div class=\\\"CBtn\\\">            <div class=\\\"searchBox\\\">                <form action=\\\"\\\" class=\\\"search_wrap\\\">                    <input id=\\\"search_input\\\" name=\\\"key\\\" placeholder=\\\"搜索目的地/攻略/游记\\\">                    <button class=\\\"s_btn\\\" type=\\\"button\\\"></button>                </form>            </div>        </div>        <div class=\\\"RBtn\\\">           <a href=\\\"\\\" id=\\\"btn_login\\\" class=\\\"login\\\">登录</a>        </div>    </header>    <main>        <!-- banner -->        <div class=\\\"swiper-container\\\">            <div class=\\\"swiper-wrapper\\\">                <div class=\\\"swiper-slide\\\">                    <a>                        <img src = \\'./images/banner1.jpg\\' />                    </a>                </div>                <div class=\\\"swiper-slide\\\">                    <a>                        <img src = \\'./images/banner2.jpg\\'/>                    </a>                </div>                <div class=\\\"swiper-slide\\\">                    <a>                        <img src = \\'./images/banner3.jpg\\'/>                    </a>                </div>            </div>            <div class=\\\"swiper-scrollbar\\\"></div>        </div>        <!-- nav -->        <div class=\\\"nav\\\">            <ul class=\\\"nav_li\\\">                <li>                    <a href=\\\"\\\" class=\\\"i1\\\">                        <i></i>                        <span>找攻略</span>                    </a>                </li>                <li>                    <a href=\\\"\\\" class=\\\"i5\\\">                        <i></i>                        <span>看游记</span>                    </a>                </li>                <li>                    <a href=\\\"\\\" class=\\\"i7\\\">                        <i></i>                        <span>问达人</span>                    </a>                </li>                <li>                    <a href=\\\"\\\" class=\\\"i6\\\">                        <i></i>                        <span>结伴</span>                    </a>                </li>                <li>                    <a href=\\\"\\\" class=\\\"i2\\\">                        <i></i>                        <span>酒店</span>                    </a>                </li>                <li>                    <a href=\\\"\\\" class=\\\"i3\\\">                        <i></i>                        <span>去旅行</span>                    </a>                </li>                <li>                    <a href=\\\"\\\" class=\\\"i4\\\">                        <i></i>                        <span>机票</span>                    </a>                </li>                <li>                    <a href=\\\"\\\" class=\\\"i8\\\">                        <i></i>                        <span>当地玩乐</span>                    </a>                </li>            </ul>        </div>        <!-- cont -->        <div class=\\\"title\\\">            <h3>推荐攻略</h3>        </div>        <div class=\\\"cont\\\">            <a href=\\\"\\\">                <div class=\\\"tit\\\">                    <span>我在关西，独自庆生———送自己的6个新奇与8件小事</span>                    <div class=\\\"tag\\\">                        <img src=\\\"./images/fengshou.png\\\">                    </div>                </div>                <dl class=\\\"ct\\\">                    <dt>                        <img src=\\\"./images/c1.jpg\\\">                    </dt>                    <dd>                        <div class=\\\"summary\\\">                            我以为的日本 在我浅薄的认知里： 日本 只有两个美女，滨崎步和苍老师 日本 最火的动漫一定是千与千寻， 宫崎 骏就是国民英雄 日本 人一定不会说英语，要么就口音超级重 日本 的马桶盖就是世界上最好的马桶盖 日本 人里中文说的最好的就是福原爱 。。。 哎 你别急 你给我点时间 你得让我成长 女生年过25，未满30之间的这些年是很微妙的，看世界逐渐清晰，也越来越爱自己。四月生日临近，我默默盘算着要在这微妙的年岁里，把陌生的国度逐出认知盲区。 这个小脑袋，实在想不到更好的生日礼物了。 我能数出太平洋对面的美利坚至少20个州，能                        </div>                        <div class=\\\"info\\\">                            <div class=\\\"extra\\\">                                16447浏览                            </div>                            <div class=\\\"author\\\">                                跳舞的四月                                <img src=\\\"./images/c11.jpeg\\\">                            </div>                        </div>                    </dd>                </dl>            </a>        </div>    </main></div>\"\n\n//# sourceURL=webpack:///./src/views/index.html?");

/***/ })

/******/ });