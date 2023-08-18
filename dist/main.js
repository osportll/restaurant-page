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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutDiv: () => (/* binding */ aboutDiv),\n/* harmony export */   initializeAbout: () => (/* binding */ initializeAbout)\n/* harmony export */ });\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\n\n\nlet aboutDiv;\n\nfunction initializeAbout() {\n  aboutDiv = _pageLoad__WEBPACK_IMPORTED_MODULE_0__.newDiv.appendChild((0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createElement)('div'));\n  aboutDiv.classList.add('aboutDiv');\n\n  const aboutH1 = aboutDiv.appendChild((0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1'));\n  aboutH1.classList.add('menuH1');\n  aboutH1.textContent = 'Our Philosophy';\n\n  const aboutText = aboutDiv.appendChild((0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createElement)('p'));\n  aboutText.classList.add('aboutText');\n  aboutText.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, nulla! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis cupiditate nihil molestias labore eos atque consequuntur ea quam quia sapiente? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae autem aliquid saepe accusamus illum natus debitis hic, doloribus quae nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae porro culpa animi aperiam sapiente itaque consequatur quo inventore, eveniet eos?`;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\nconsole.log('test');\n\n\n\n\n\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.initializePage)();\n\n_pageLoad__WEBPACK_IMPORTED_MODULE_0__.home.addEventListener('click', () => {\n  _pageLoad__WEBPACK_IMPORTED_MODULE_0__.newDiv.appendChild(_pageLoad__WEBPACK_IMPORTED_MODULE_0__.description);\n\n  if (_pageLoad__WEBPACK_IMPORTED_MODULE_0__.newDiv.contains(_menu__WEBPACK_IMPORTED_MODULE_1__.menuDiv)) {\n    _pageLoad__WEBPACK_IMPORTED_MODULE_0__.newDiv.removeChild(_menu__WEBPACK_IMPORTED_MODULE_1__.menuDiv);\n  } else if (_pageLoad__WEBPACK_IMPORTED_MODULE_0__.newDiv.contains(_about__WEBPACK_IMPORTED_MODULE_2__.aboutDiv)) {\n    _pageLoad__WEBPACK_IMPORTED_MODULE_0__.newDiv.removeChild(_about__WEBPACK_IMPORTED_MODULE_2__.aboutDiv);\n  }\n});\n\n_pageLoad__WEBPACK_IMPORTED_MODULE_0__.menu.addEventListener('click', () => {\n  _pageLoad__WEBPACK_IMPORTED_MODULE_0__.newDiv.textContent = '';\n  (0,_menu__WEBPACK_IMPORTED_MODULE_1__.initializeMenu)();\n});\n\n_pageLoad__WEBPACK_IMPORTED_MODULE_0__.about.addEventListener('click', () => {\n  _pageLoad__WEBPACK_IMPORTED_MODULE_0__.newDiv.textContent = '';\n  (0,_about__WEBPACK_IMPORTED_MODULE_2__.initializeAbout)();\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeMenu: () => (/* binding */ initializeMenu),\n/* harmony export */   menuDiv: () => (/* binding */ menuDiv)\n/* harmony export */ });\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\n\n\nlet menuDiv;\n\nfunction initializeMenu() {\n  menuDiv = _pageLoad__WEBPACK_IMPORTED_MODULE_0__.newDiv.appendChild((0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createElement)('div'));\n  menuDiv.classList.add('menuDiv');\n\n  const menuH1 = menuDiv.appendChild((0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1'));\n  menuH1.classList.add('menuH1');\n  menuH1.textContent = 'Our Sushis';\n\n  const menuItems = menuDiv.appendChild((0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createElement)('div'));\n  menuItems.classList.add('menuItems');\n\n  const item1 = menuItems.appendChild((0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createElement)('p'));\n  item1.classList.add('item1');\n  item1.textContent = 'Nigiri .......................................... 25 $';\n  const item2 = menuItems.appendChild((0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createElement)('p'));\n  item2.classList.add('item2');\n  item2.textContent = 'Sashimi ..................................... 25 $';\n  const item3 = menuItems.appendChild((0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createElement)('p'));\n  item3.classList.add('item3');\n  item3.textContent = 'Uramaki .................................... 15 $';\n  const item4 = menuItems.appendChild((0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createElement)('p'));\n  item4.classList.add('item4');\n  item4.textContent = 'Temaki ...................................... 20 $';\n  const item5 = menuItems.appendChild((0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createElement)('p'));\n  item5.classList.add('item5');\n  item5.textContent = 'Maki .......................................... 15 $';\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about),\n/* harmony export */   createElement: () => (/* binding */ createElement),\n/* harmony export */   description: () => (/* binding */ description),\n/* harmony export */   home: () => (/* binding */ home),\n/* harmony export */   initializePage: () => (/* binding */ initializePage),\n/* harmony export */   menu: () => (/* binding */ menu),\n/* harmony export */   newDiv: () => (/* binding */ newDiv),\n/* harmony export */   selectElement: () => (/* binding */ selectElement)\n/* harmony export */ });\nlet newDiv;\nlet home;\nlet menu;\nlet about;\nlet description;\n\nfunction initializePage() {\n  const body = selectElement('.body');\n  const content = selectElement('#content');\n\n  newDiv = createElement('div');\n  newDiv.classList.add('mainContainer');\n\n  /* const headLine = createElement('h1');\n  headLine.textContent = 'Restaurant'; */\n\n  description = createElement('h1');\n  description.textContent = 'Experience Contemporary Japanese';\n  description.classList.add('description');\n\n  /* const image = createElement('img');\n  image.src =\n    '/home/oscar/repos/restaurant-page/img/victoria-shes-UC0HZdUitWY-unsplash.jpg';\n  image.alt = 'Food Picture';\n  image.classList.add('img1'); */\n\n  const overlay = createElement('div');\n  overlay.classList.add('overlay');\n\n  const navBar = createElement('div');\n  navBar.classList.add('nav');\n\n  const logo = navBar.appendChild(createElement('div'));\n  logo.classList.add('logo');\n\n  const logoText = createElement('h1');\n  logoText.classList.add('logoText');\n  logoText.textContent = 'Yummy飯Sushi';\n\n  const linksContainer = createElement('div');\n  linksContainer.classList.add('linksContainer');\n  navBar.appendChild(linksContainer);\n\n  home = linksContainer.appendChild(createElement('a'));\n  home.classList.add('home');\n  home.textContent = 'Home';\n  home.href = '#';\n  menu = linksContainer.appendChild(createElement('a'));\n  menu.classList.add('menu');\n  menu.textContent = 'Menu';\n  menu.href = '#';\n  about = linksContainer.appendChild(createElement('a'));\n  about.classList.add('about');\n  about.textContent = 'About';\n  about.href = '#';\n\n  content.appendChild(newDiv);\n  /* newDiv.appendChild(headLine); */\n  newDiv.appendChild(description);\n  /* newDiv.appendChild(image); */\n  body.appendChild(overlay);\n  overlay.appendChild(content);\n  content.insertBefore(navBar, newDiv);\n  logo.appendChild(logoText);\n\n  const footer = overlay.appendChild(createElement('div'));\n  footer.classList.add('footer');\n\n  const gitHub = footer.appendChild(createElement('div'));\n  gitHub.classList.add('gitHubContainer');\n\n  const gitHubText = gitHub.appendChild(createElement('p'));\n  gitHubText.classList.add('gitHubText');\n  gitHubText.textContent = 'Made by';\n  const gitHubLogo = gitHub.appendChild(createElement('img'));\n  gitHubLogo.classList.add('gitHubLogo');\n  gitHubLogo.src = 'img/GitHub-Mark-32px.png';\n  const gitHubLink = gitHub.appendChild(createElement('a'));\n  gitHubLink.classList.add('gitHubLink');\n  gitHubLink.textContent = 'osportll';\n  gitHubLink.href = 'https://github.com/osportll';\n\n  const imgCredit = footer.appendChild(createElement('div'));\n  imgCredit.classList.add('imgCredit');\n\n  const imgCreditP = imgCredit.appendChild(createElement('p'));\n  imgCreditP.classList.add('imgCreditP');\n  imgCreditP.textContent = 'Background image courtesy of';\n\n  const imgCreditLink = imgCreditP.appendChild(createElement('a'));\n  imgCreditLink.classList.add('imgCreditLink');\n  imgCreditLink.href = 'https://unsplash.com/photos/EqoCUzG9200';\n  imgCreditLink.textContent = 'Mahmoud Fawzy';\n}\n\nfunction selectElement(element) {\n  return document.querySelector(element);\n}\n\nfunction createElement(element) {\n  return document.createElement(element);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

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