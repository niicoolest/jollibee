/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nconst contact = (() => {\n    let contentElement;\n\n    function init() {\n        contentElement = document.getElementById(\"content\");\n        addTitle();\n        addContactContents();\n    }\n\n    function addTitle () {\n        let jollibeeName = document.createElement('div');\n        jollibeeName.setAttribute('id', 'jollibee-name');\n\n        let title = document.createElement('div');\n        title.id= 'title';\n        title.innerText = 'Contact';\n\n        let signature = document.createElement('div');\n        signature.id = 'signature';\n        signature.innerText = 'Delicious is the Main Character XD';\n\n        jollibeeName.appendChild(title);\n        jollibeeName.appendChild(signature);\n\n        contentElement.appendChild(jollibeeName);\n    }\n\n    function addContactContents() {\n        let contactContent = document.createElement('div');\n        contactContent.className = 'row';\n\n        let homeBodyText = document.createElement('div');\n        homeBodyText.className = 'home-body-text';\n\n        let contactJollibeeHeader = document.createElement('h3');\n        contactJollibeeHeader.innerText = 'Contact Jollibee';\n\n        let twitterContact = document.createElement('a');\n        twitterContact.className = 'twitter-follow-button';\n        twitterContact.setAttribute('href', 'https://twitter.com/jollibee?ref_src=twsrc%5Etfw');\n        twitterContact.setAttribute('data-show-count', 'false');\n        twitterContact.innerText = 'Follow @jollibee';\n\n        let twitterScript = document.createElement('script');\n        twitterScript.setAttribute('async', 'async');\n        twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js');\n        twitterScript.setAttribute('charset', 'utf-8');\n\n\n        homeBodyText.appendChild(contactJollibeeHeader);\n        homeBodyText.appendChild(twitterContact);\n        homeBodyText.appendChild(twitterScript);\n        homeBodyText.appendChild(breakElement());\n        homeBodyText.appendChild(spanElement('654-098-999'));\n        homeBodyText.appendChild(breakElement());\n        homeBodyText.appendChild(spanElement('All over Philippines'));\n\n        contactContent.appendChild(homeBodyText);\n\n        contentElement.appendChild(contactContent);\n\n    }\n\n    function breakElement() {\n        return document.createElement('br');\n    }\n\n    function spanElement(str) {\n        let spanElement = document.createElement('span');\n        spanElement.innerText = str;\n\n        return spanElement;\n    }\n\n    init();\n});\n\n\n\n//# sourceURL=webpack://jollibee/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\nconst home = (() => {\n    let contentElement;\n\n    function init() {\n        contentElement = document.getElementById(\"content\");\n        addTitle();\n        addHomeContents();\n    }\n\n    function addTitle () {\n        let jollibeeName = document.createElement('div');\n        jollibeeName.setAttribute('id', 'jollibee-name');\n\n        let title = document.createElement('div');\n        title.id= 'title';\n        title.innerText = 'Jollibee';\n\n        let signature = document.createElement('div');\n        signature.id = 'signature';\n        signature.innerText = 'Delicious is the Main Character XD';\n\n        jollibeeName.appendChild(title);\n        jollibeeName.appendChild(signature);\n\n        contentElement.appendChild(jollibeeName);\n    }\n\n    function addHomeContents() {\n        let homeBodyRow = document.createElement('div');\n        homeBodyRow.className = 'home-body row';\n\n        let column1 = document.createElement('div');\n        column1.className = 'column';\n        column1.appendChild(createHomeBodyText('Deliciously satisfying spaghetti'));\n        column1.appendChild(createHomeBodyText('Superior-tasting Chickenjoy'));\n        column1.appendChild(createHomeBodyText('Mouth-watering Yumburger'));\n        \n        let column2 = document.createElement('div');\n        column2.className = 'column';\n\n        let jollibeePic = document.createElement('img');\n        jollibeePic.id = 'jollibee-pic';\n        jollibeePic.setAttribute('src', 'images/jabee.png');\n\n        column2.appendChild(jollibeePic);\n\n        homeBodyRow.appendChild(column1);\n        homeBodyRow.appendChild(column2);\n\n        contentElement.appendChild(homeBodyRow);\n    }\n\n    function createHomeBodyText(text) {\n        let homeBodyText = document.createElement('div');\n        homeBodyText.className = 'home-body-text';\n\n        let italicizedText = document.createElement('em');\n        italicizedText.innerText = text;\n\n        homeBodyText.appendChild(italicizedText);\n\n        return homeBodyText;\n    }\n\n    init();\n});\n\n\n\n//# sourceURL=webpack://jollibee/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\nfunction addListenerToNavigation() {\n    let home = document.getElementById('home');\n    let menu = document.getElementById('menu');\n    let contact = document.getElementById('contact');\n\n    home.addEventListener('click', homeTabListener);\n    menu.addEventListener('click', menuTabListener);\n    contact.addEventListener('click', contactTabListener);\n}\n\nfunction homeTabListener() {\n    removeContainerContents();\n    this.className = 'chosen';\n    document.getElementById('menu').className = '';\n    document.getElementById('contact').className = '';\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.home)();\n}\n\nfunction menuTabListener() {\n    removeContainerContents();\n    this.className = 'chosen';\n    document.getElementById('home').className = '';\n    document.getElementById('contact').className = '';\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu)();\n}\n\nfunction contactTabListener() {\n    removeContainerContents();\n    this.className = 'chosen';\n    document.getElementById('menu').className = '';\n    document.getElementById('home').className = '';\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_0__.contact)();\n}\n\nfunction removeContainerContents() {\n    document.getElementById('content').innerHTML = '';\n}\n\nfunction init() {\n    addListenerToNavigation();\n    document.getElementById('home').className = 'chosen';\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.home)();\n}\n\ninit();\n\n//# sourceURL=webpack://jollibee/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = (() => {\n    let contentElement;\n\n    function init() {\n        contentElement = document.getElementById(\"content\");\n        addTitle();\n        addMenuContents();\n    }\n\n    function addTitle () {\n        let jollibeeName = document.createElement('div');\n        jollibeeName.setAttribute('id', 'jollibee-name');\n\n        let title = document.createElement('div');\n        title.id= 'title';\n        title.innerText = 'Menu';\n\n        let signature = document.createElement('div');\n        signature.id = 'signature';\n        signature.innerText = 'Delicious is the Main Character XD';\n\n        jollibeeName.appendChild(title);\n        jollibeeName.appendChild(signature);\n\n        contentElement.appendChild(jollibeeName);\n    }\n\n    function addMenuContents() {\n        let divRow = document.createElement('div');\n        divRow.className = 'row';\n\n        let divRowWithRowDirection = document.createElement('div');\n        divRowWithRowDirection.className = 'row-row-direction';\n\n        let column1 = document.createElement('div');\n        column1.className = 'column';\n        column1.appendChild(menuPic('images/spaghetti.jpeg', 'Jolly Spaghetti'));\n        column1.appendChild(menuPic('images/chickenjoy.png', 'Chicken Joy'));\n        column1.appendChild(menuPic('images/umburg.jpg', 'Yumburger'));\n\n        let column2 = document.createElement('div');\n        column2.className = 'column';\n        column2.appendChild(menuDescription('JOLLY SPAG', \n            'Deliciously satisfying spaghetti'));\n        column2.appendChild(menuDescription('CHICKEN JOY',\n            'Superior tasting Chickenjoy'));\n        column2.appendChild(menuDescription('YUM BURGER',\n            'Mouth-watering Yumburger'));\n\n        divRowWithRowDirection.appendChild(column1);\n        divRowWithRowDirection.appendChild(column2);\n\n        divRow.appendChild(divRowWithRowDirection);\n        contentElement.appendChild(divRow);\n    }\n\n    function menuPic(src, alt) {\n        let menuPic = document.createElement('img');\n        menuPic.className = 'menu-pic column';\n        menuPic.setAttribute('src', src);\n        menuPic.setAttribute('alt', alt);\n\n        return menuPic;\n    }\n\n    function menuDescription(h2, description) {\n        let menuDescription = document.createElement('div');\n        menuDescription.className = 'pic-description column';\n\n        let homeBodyText = document.createElement('div');\n        homeBodyText.className = 'home-body-text';\n\n        let header = document.createElement('h2');\n        header.innerText = h2;\n\n        let breakElement = document.createElement('br');\n        let desc = document.createElement('span');\n        desc.innerText = description;\n\n        homeBodyText.appendChild(header);\n        homeBodyText.appendChild(breakElement);\n        homeBodyText.appendChild(desc);\n\n        menuDescription.appendChild(homeBodyText);\n\n        return menuDescription;\n    }\n\n    init();\n});\n\n\n\n//# sourceURL=webpack://jollibee/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;