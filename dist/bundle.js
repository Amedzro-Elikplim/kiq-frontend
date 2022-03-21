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

/***/ "./modules/Display.js":
/*!****************************!*\
  !*** ./modules/Display.js ***!
  \****************************/
/***/ ((module) => {

eval("const DisplayChat = (value) => {\n  const li = document.createElement('li');\n  const chatList = document.querySelector('.chat');\n\n  li.className = 'list';\n  li.classList.toggle('aliceblue');\n\n  li.innerHTML = value;\n  chatList.appendChild(li);\n};\n\nmodule.exports = DisplayChat;\n\n//# sourceURL=webpack://kiq-frontend/./modules/Display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// const config = require('config');\nconst DisplayChat = __webpack_require__(/*! ../modules/Display.js */ \"./modules/Display.js\");\n\nconst form = document.getElementById('btn');\n\n// eslint-disable-next-line no-undef\nconst socket = io(config.get('URL'), {\n  withCredentials: true,\n});\n\nform.addEventListener('click', (e) => {\n  e.preventDefault();\n\n  const message = document.getElementById('message');\n  const { value } = message;\n\n  if (value) {\n    socket.emit('message', value);\n  }\n\n  DisplayChat(value);\n\n  message.value = '';\n});\n\nsocket.on('chat message', (msg) => {\n  DisplayChat(msg);\n  window.scrollTo(0, document.body.scrollHeight);\n});\n\n\n//# sourceURL=webpack://kiq-frontend/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;