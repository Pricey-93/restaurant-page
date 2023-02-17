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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createContactContent)\n/* harmony export */ });\nfunction createContactContent() {\n  const container = document.createElement('div');\n  const contactNumber = document.createElement('p');\n  const address = document.createElement('p');\n  const locationImage = document.createElement('img');\n  container.id = 'contact-content-container';\n  container.classList.add('active-content');\n  contactNumber.textContent = '123456789';\n  address.textContent = '317 Abbey Ln, Leicester LE4 5QJ, United Kingdom';\n  container.appendChild(contactNumber);\n  container.appendChild(address);\n  container.appendChild(locationImage);\n  return container;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createFooter)\n/* harmony export */ });\nfunction createFooter() {\n  const footer = document.createElement('footer');\n  const p = document.createElement('p');\n  p.textContent = 'placeholder';\n  footer.appendChild(p);\n  return footer;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHomeContent)\n/* harmony export */ });\nfunction createHomeContent() {\n  const container = document.createElement('div');\n  const topParagraph = document.createElement('p');\n  const image = document.createElement('img');\n  const bottomParagraph = document.createElement('p');\n  container.id = 'home-content-container';\n  container.classList.add('active-content');\n  topParagraph.textContent = 'we\\'ve been making the sickest pizzas since 1905!';\n  bottomParagraph.textContent = 'Order online or visit us in store!';\n  container.appendChild(topParagraph);\n  container.appendChild(image);\n  container.appendChild(bottomParagraph);\n  return container;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navigation_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-bar */ \"./src/navigation-bar.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\n\nconst content = document.getElementById('content');\ncontent.appendChild((0,_navigation_bar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\ncontent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\ncontent.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n\n// event listeners\nconst homeTab = document.getElementById('home-tab');\nhomeTab.addEventListener('click', () => {\n  console.log(document.querySelector('.active-content'));\n  content.replaceChild((0,_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), document.querySelector('.active-content'));\n});\n\nconst menuTab = document.getElementById('menu-tab');\nmenuTab.addEventListener('click', () => {\n  console.log(document.querySelector('.active-content'));\n  content.replaceChild((0,_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), document.querySelector('.active-content'));\n});\n\nconst contactTab = document.getElementById('contact-tab');\ncontactTab.addEventListener('click', () => {\n  console.log(document.querySelector('.active-content'));\n  content.replaceChild((0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), document.querySelector('.active-content'));\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenuItem(title, description) {\n  const container = document.createElement('div');\n  const image = document.createElement('img');\n  const h2 = document.createElement('h2');\n  const p = document.createElement('p');\n  container.classList.add('menu-item');\n  h2.textContent = title;\n  p.textContent = description;\n  container.appendChild(image);\n  container.appendChild(h2);\n  container.appendChild(p);\n  return container;\n}\n\nfunction createMenu() {\n  const container = document.createElement('div');\n  container.id = 'menu-content-container';\n  container.classList.add('active-content');\n  container.appendChild(createMenuItem('pepperoni pizza', 'This is a real good pizza'));\n  container.appendChild(createMenuItem('pinapple pizza', 'Only uncultured people disagree with this pizza'));\n  return container;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navigation-bar.js":
/*!*******************************!*\
  !*** ./src/navigation-bar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createNavigationBar)\n/* harmony export */ });\nfunction createNavigationBar() {\n  const header = document.createElement('header');\n  const h1 = document.createElement('h1');\n  const nav = document.createElement('nav');\n  const ul = document.createElement('ul');\n  const homeTab = document.createElement('li');\n  const menuTab = document.createElement('li');\n  const contactTab = document.createElement('li');\n\n  h1.textContent = 'Pizza Palace';\n  homeTab.textContent = 'Home';\n  menuTab.textContent = 'Menu';\n  contactTab.textContent = 'Contact';\n\n  nav.id = 'nav-container';\n  ul.id = 'nav-links';\n  homeTab.id = 'home-tab';\n  menuTab.id = 'menu-tab';\n  contactTab.id = 'contact-tab';\n  ul.appendChild(homeTab);\n  ul.appendChild(menuTab);\n  ul.appendChild(contactTab);\n  nav.appendChild(ul);\n  header.appendChild(h1);\n  header.appendChild(nav);\n  return header;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/navigation-bar.js?");

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