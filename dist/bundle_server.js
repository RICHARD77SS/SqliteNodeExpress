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

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/routes.js */ \"./src/routes.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! https */ \"https\");\n/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/App */ \"./src/App.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.get('/', function (req, res) {\n  const html = `\n    <!DOCTYPE html>\n      <html lang=\"en\">\n      <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>React no Servidor - Programador a Bordo</title>\n      </head>\n      <body>\n        <div id=\"app\">\n         ${react_dom_server__WEBPACK_IMPORTED_MODULE_7___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null))}\n        </div>\n      </body>\n      </html>\n  `;\n  res.send(html);\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(_src_routes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.listen(3000, () => console.log('Api rodando em http://localhost:3000'));\nhttps__WEBPACK_IMPORTED_MODULE_3___default().createServer({\n  cert: fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync('src/ssl/code.crt'),\n  key: fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync('src/ssl/code.key')\n}, app).listen(443, () => console.log(\"Rodando em HTTPS https://localhost:443\"));\n\n//# sourceURL=webpack://sqlitenode/./server.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AppComponent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction AppComponent() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Lista de coment\\xE1rios no app components\"));\n}\n\n//# sourceURL=webpack://sqlitenode/./src/App.js?");

/***/ }),

/***/ "./src/configDB.js":
/*!*************************!*\
  !*** ./src/configDB.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openDb\": () => (/* binding */ openDb)\n/* harmony export */ });\n/* harmony import */ var sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sqlite3 */ \"sqlite3\");\n/* harmony import */ var sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sqlite3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sqlite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sqlite */ \"sqlite\");\n/* harmony import */ var sqlite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sqlite__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function openDb() {\n  return (0,sqlite__WEBPACK_IMPORTED_MODULE_1__.open)({\n    filename: './database.db',\n    driver: (sqlite3__WEBPACK_IMPORTED_MODULE_0___default().Database)\n  });\n}\n\n//# sourceURL=webpack://sqlitenode/./src/configDB.js?");

/***/ }),

/***/ "./src/controler/aduser.js":
/*!*********************************!*\
  !*** ./src/controler/aduser.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteUser\": () => (/* binding */ deleteUser),\n/* harmony export */   \"insertUser\": () => (/* binding */ insertUser),\n/* harmony export */   \"selectUser\": () => (/* binding */ selectUser),\n/* harmony export */   \"selectUsers\": () => (/* binding */ selectUsers),\n/* harmony export */   \"updateUser\": () => (/* binding */ updateUser)\n/* harmony export */ });\n/* harmony import */ var _configDB_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configDB.js */ \"./src/configDB.js\");\n\nasync function insertUser(req, res) {\n  let usuarios = req.body;\n  (0,_configDB_js__WEBPACK_IMPORTED_MODULE_0__.openDb)().then(db => {\n    db.run('INSERT INTO usuarios (email, password, name, username) VALUES (?,?,?,?)', [usuarios.email, usuarios.password, usuarios.name, usuarios.username]);\n  });\n  res.json({\n    \"statusCode\": 200\n  });\n}\nasync function selectUsers(req, res) {\n  (0,_configDB_js__WEBPACK_IMPORTED_MODULE_0__.openDb)().then(db => {\n    db.all('SELECT * FROM usuarios').then(users => res.json(users));\n  });\n}\nasync function selectUser(req, res) {\n  let id = req.body.id;\n  (0,_configDB_js__WEBPACK_IMPORTED_MODULE_0__.openDb)().then(db => {\n    db.get('SELECT * FROM usuarios WHERE id=?', [id]).then(user => res.json(user));\n  });\n}\nasync function updateUser(req, res) {\n  let usuarios = req.body;\n  (0,_configDB_js__WEBPACK_IMPORTED_MODULE_0__.openDb)().then(db => {\n    db.run('UPDATE usuarios SET email=?, password=?, name=?, username=? WHERE id=?', [usuarios.email, usuarios.password, usuarios.name, usuarios.username, usuarios.id]);\n  });\n  res.json({\n    \"statusCode\": 200\n  });\n}\nasync function deleteUser(req, res) {\n  let id = req.body.id;\n  (0,_configDB_js__WEBPACK_IMPORTED_MODULE_0__.openDb)().then(db => {\n    db.get('DELETE FROM usuarios WHERE id=?', [id]).then(res => res);\n  });\n  res.json({\n    \"statusCode\": 200\n  });\n}\n\n//# sourceURL=webpack://sqlitenode/./src/controler/aduser.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controler_aduser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controler/aduser.js */ \"./src/controler/aduser.js\");\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.get('/', (req, res) => {\n  res.json({\n    \"statusCode\": 200,\n    \"msg\": \"Api Rodando\"\n  });\n});\nrouter.get('/users', _controler_aduser_js__WEBPACK_IMPORTED_MODULE_1__.selectUsers);\nrouter.get('/user', _controler_aduser_js__WEBPACK_IMPORTED_MODULE_1__.selectUser);\nrouter.post('/user', _controler_aduser_js__WEBPACK_IMPORTED_MODULE_1__.insertUser);\nrouter.put('/user', _controler_aduser_js__WEBPACK_IMPORTED_MODULE_1__.updateUser);\nrouter.delete('/user', _controler_aduser_js__WEBPACK_IMPORTED_MODULE_1__.deleteUser);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://sqlitenode/./src/routes.js?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "sqlite":
/*!*************************!*\
  !*** external "sqlite" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("sqlite");

/***/ }),

/***/ "sqlite3":
/*!**************************!*\
  !*** external "sqlite3" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("sqlite3");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./server.js");
/******/ 	
/******/ })()
;