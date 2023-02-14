/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function createNavigationBar() {\n  const header = document.createElement('header');\n  const h1 = document.createElement('h1');\n  const nav = document.createElement('nav');\n  const ul = document.createElement('ul');\n  const homeTab = document.createElement('li');\n  const menuTab = document.createElement('li');\n  const contactTab = document.createElement('li');\n  h1.textContent = 'Pizza Palace';\n  ul.appendChild(homeTab);\n  ul.appendChild(menuTab);\n  ul.appendChild(contactTab);\n  nav.appendChild(ul);\n  header.appendChild(h1);\n  header.appendChild(nav);\n  return header;\n}\n\nconst content = document.getElementById('content');\nconst navigationBar = createNavigationBar();\ncontent.appendChild(navigationBar);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;