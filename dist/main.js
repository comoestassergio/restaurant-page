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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _address_img_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address-img.png */ \"./src/address-img.png\");\n\n\n\nconst contact = {\n    create: function(){\n        this.contactPage = document.createElement('section')\n        this.contactPage.classList.add('tab__contact', 'tab')\n\n        const phoneNum = document.createElement('p')\n        phoneNum.classList.add('contact__number')\n        phoneNum.textContent = '+7 (917) 707 15 72'\n        this.contactPage.appendChild(phoneNum)\n\n        const address = new Image()\n        address.src = _address_img_png__WEBPACK_IMPORTED_MODULE_0__\n        address.classList.add('contact__image')\n        this.contactPage.appendChild(address)\n\n        const addressStreet = document.createElement('p')\n        addressStreet.classList.add('contact__street')\n        addressStreet.textContent = '19, Gagarina Street'\n        this.contactPage.appendChild(addressStreet)\n\n        return this.contactPage\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = {\n    create: function(){\n        this.logo = document.createElement('p')\n        this.logo.textContent = 'Rice&Fish'\n        this.logo.classList.add('header')\n\n        return this.logo\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.jpg */ \"./src/logo.jpg\");\n\n\nconst home = {\n    create: function(){\n        this.homePage = document.createElement('section')\n        this.homePage.classList.add('tab__home', 'tab')\n\n        const slogan = document.createElement('p')\n        slogan.classList.add('home__slogan')\n        slogan.textContent = 'Best sushi in town'\n        this.homePage.appendChild(slogan)\n\n        const logo = new Image()\n        logo.src = _logo_jpg__WEBPACK_IMPORTED_MODULE_0__\n        logo.classList.add('home__logo')\n        this.homePage.appendChild(logo)\n        \n\n        return this.homePage\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\nconst contentDiv = document.querySelector('#content')\ncontentDiv.appendChild(_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create())\ncontentDiv.appendChild(_nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create())\n\nconst tabs = _nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTabs()\n\nwindow.onload = start()\n\ntabs.forEach(tab => {\n    tab.addEventListener('click', function(){\n        if (tab.textContent === 'Home'){\n            clearSection()\n            clearActive()\n            tab.classList.add('active')\n            contentDiv.appendChild(_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create())\n        }\n        if (tab.textContent === \"Menu\"){\n            clearSection()\n            clearActive()\n            tab.classList.add('active')\n            contentDiv.appendChild(_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create())\n        }\n        if (tab.textContent === \"Contact\"){\n            clearSection()\n            clearActive()\n            tab.classList.add('active')\n            contentDiv.appendChild(_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"].create())\n        }\n        \n    })\n})\n\nfunction clearSection(){\n    if(contentDiv.childNodes.length > 2){\n        let lastChild = contentDiv.childNodes[contentDiv.childNodes.length - 1]\n        contentDiv.removeChild(lastChild)\n    }\n}\n\nfunction clearActive(){\n    tabs.forEach(tab => {\n        tab.classList.remove('active')\n    })\n}\n\nfunction start(){\n    tabs[0].classList.add('active')\n    contentDiv.appendChild(_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create())\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _philadelphia_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./philadelphia.jpg */ \"./src/philadelphia.jpg\");\n/* harmony import */ var _salmon_on_apple_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salmon-on-apple.jpg */ \"./src/salmon-on-apple.jpg\");\n/* harmony import */ var _avocado_and_cucumber_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avocado-and-cucumber.jpg */ \"./src/avocado-and-cucumber.jpg\");\n/* harmony import */ var _fresh_eel_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fresh-eel.jpg */ \"./src/fresh-eel.jpg\");\n/* harmony import */ var _creamy_california_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./creamy-california.jpg */ \"./src/creamy-california.jpg\");\n\n\n\n\n\n\nconst menu = {\n    create: function(){\n        this.menuPage = document.createElement('section')\n        this.menuPage.classList.add('tab__menu', 'tab')\n\n        this.menuItems.forEach(item => {\n            const newItem = menu.createMenuItem(item.name, item.image, item.description)\n\n            menu.menuPage.appendChild(newItem)\n        })\n\n        return this.menuPage\n    },\n\n    createMenuItem: function(title, image,  description){\n        const itemCard = document.createElement('div')\n        itemCard.classList.add('menu__item')\n\n        const itemTitle = document.createElement('h2')\n        itemTitle.classList.add('item__title')\n        itemTitle.textContent = title\n\n        const itemImage = new Image()\n        itemImage.src = image\n        itemImage.classList.add('item__img')\n\n        const itemDesc = document.createElement('p')\n        itemDesc.classList.add('item__desc')\n        itemDesc.textContent = description\n\n        itemCard.appendChild(itemTitle)\n        itemCard.appendChild(itemImage)\n        itemCard.appendChild(itemDesc)\n\n        return itemCard\n    },\n\n    menuItems: [\n        {\n            name: 'Philadelphia',\n            image: _philadelphia_jpg__WEBPACK_IMPORTED_MODULE_0__,\n            description: 'Rice, Nori, Cream Cheese, Cucumber, Salmon',\n        },\n        {\n            name: 'Sweet Salmon',\n            image: _salmon_on_apple_jpg__WEBPACK_IMPORTED_MODULE_1__,\n            description: 'Rice, Nori, Cream Cheese, Apple, Salmon',\n        },\n        {\n            name: 'Fresh Avocado',\n            image: _avocado_and_cucumber_jpg__WEBPACK_IMPORTED_MODULE_2__,\n            description: 'Rice, Nori, Sesame, Cucumber, Avocado',\n        },\n        {\n            name: 'Fresh Eel',\n            image: _fresh_eel_jpg__WEBPACK_IMPORTED_MODULE_3__,\n            description: 'Rice, Nori, Cream Cheese, Cucumber, Eel, Sesame, Unagi sauce',\n        },\n        {\n            name: 'Creamy California',\n            image: _creamy_california_jpg__WEBPACK_IMPORTED_MODULE_4__,\n            description: 'Rice, Nori, Cream Cheese, Avocado, Caviar, Crab',\n        },\n    ]\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst navBar = {\n    create: function(){\n        this.nav = document.createElement('ul')\n\n        this.nav.classList.add('nav')\n\n        this.homeTab = document.createElement('li')\n        this.menuTab = document.createElement('li')\n        this.contactTab = document.createElement('li')\n\n        this.homeTab.textContent = 'Home'\n        this.menuTab.textContent = 'Menu'\n        this.contactTab.textContent = 'Contact'\n\n        this.tabs = [this.homeTab, this.menuTab, this.contactTab]\n\n        this.tabs.forEach(tab => {\n            navBar.nav.appendChild(tab)\n        })\n\n        this.tabs.forEach(tab => {\n            tab.classList.add('nav__tab')\n        })\n\n\n        return this.nav\n    },\n\n    getTabs: function(){\n        return this.tabs\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);\n\n//# sourceURL=webpack://restaurant-page/./src/nav.js?");

/***/ }),

/***/ "./src/address-img.png":
/*!*****************************!*\
  !*** ./src/address-img.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb19668d72d6a224b430.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/address-img.png?");

/***/ }),

/***/ "./src/avocado-and-cucumber.jpg":
/*!**************************************!*\
  !*** ./src/avocado-and-cucumber.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e0be54e2756e60e92d3.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/avocado-and-cucumber.jpg?");

/***/ }),

/***/ "./src/creamy-california.jpg":
/*!***********************************!*\
  !*** ./src/creamy-california.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8474f1b6ed32ee9d5603.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/creamy-california.jpg?");

/***/ }),

/***/ "./src/fresh-eel.jpg":
/*!***************************!*\
  !*** ./src/fresh-eel.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"52ee1048078c51875bba.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/fresh-eel.jpg?");

/***/ }),

/***/ "./src/logo.jpg":
/*!**********************!*\
  !*** ./src/logo.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8e4b2de5cd98dc3af65f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/logo.jpg?");

/***/ }),

/***/ "./src/philadelphia.jpg":
/*!******************************!*\
  !*** ./src/philadelphia.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bd3e3e45660558375625.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/philadelphia.jpg?");

/***/ }),

/***/ "./src/salmon-on-apple.jpg":
/*!*********************************!*\
  !*** ./src/salmon-on-apple.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8c22291276c51cc4d290.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/salmon-on-apple.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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