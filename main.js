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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modal-style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modal-style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.task-cards {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    gap: 30px;\n    margin-left: 10px;\n}\n\n.card {\n    background: var(--card-back);\n    color: var(--text-color);\n    border-radius: 10px;\n    width: calc(33.33% - 20px); /* Utiliza un tercio del ancho total de la fila, restando el espacio entre tarjetas */\n    max-width: 600px; /* Establece un ancho máximo para cada tarjeta */\n    margin-bottom: 20px;\n    position: relative;\n    z-index: 0;\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n    padding-left: 20px;\n}\n\ndiv > input {\n    cursor: pointer;\n}\n\n.card > button {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n    border: none;\n    background-color: white;\n    padding: 0.2rem 0.4rem 0.2rem 0.4rem;\n    border-radius: 0.3rem;\n    cursor: pointer;\n    font-weight: 900;\n}\n\n.card > button:hover{\n    background: red;\n    color: white;\n}\n\n.edit-icon {\n    width: 25px;\n    height: 25px;\n    position: absolute;\n    right: 45px;\n    top: 15px;\n    cursor: pointer;\n    background: var(--edit-icon-back);\n    border-radius: 50%;\n    \n}\n\n.task-title {\n    font-size: 2.5rem;\n    font-weight: 400;\n    padding-top: 8px;\n    margin-bottom: 0.5rem;\n    font-style: oblique;\n    text-decoration: underline;\n    text-decoration-thickness:0.15rem;\n}\n\n.task-desc {\n    font-size: 1.5rem;\n    font-weight: 500;\n    margin-bottom: 0.5rem;\n}\n\n.task-dueDate {\n    font-size: 1.3rem;\n    font-weight: 500;\n    margin-bottom: 0.5rem;\n}\n\n/* Modal style */\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    padding-top: 20vh;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content {\n    background-color: var(--modal-back);\n    display: flex;\n    flex-direction: row-reverse;\n    margin: auto;\n    padding: 5px 5px 5px 20px;\n    border: 1px solid #888;\n    width: 550px;\n    border-radius: 10px;\n    color: var(--text-color);\n}\n\n.close {\n    color: #aaaaaa;\n    font-size: 28px;\n    font-weight: bold;\n    margin-bottom: auto;\n    padding-right: 20px;\n}\n\n.close:hover,\n.close:focus {\n    color: var(--text-color);\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.modal-form {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.form-title {\n    font-size: xx-large;\n    text-align: center;\n    margin-right: auto;\n    margin-left: auto;\n    width: 100%;\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n\n.modal-form {\n    margin-right: auto;\n    padding-top: 5px;\n}\n\n.modal-form-input {\n    border: 0;\n    margin-left: auto;\n    margin-right: 1.5vw;\n    background-color: rgba(44,66,164,0.198);\n    padding: 0.5rem 1.5rem;\n    outline-color: blue;\n    border-radius: 5px;\n    color: var(--text-color);\n}\n\n.modal-input-field {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding-bottom: 20px;\n    \n}\n\n.modal-input-field>input:hover {\n    border: var(--input-hover-clr);\n}\n\n\n\n.modal-read {\n    padding-top: 10px;\n}\n\n.submit-modal-form {\n    display: flex;\n    justify-content: center;\n    padding-bottom: 20px;\n}\n\n.add-new-task {\n    width: 120px;\n    height: 45px;\n    border-radius: 10px;\n    border: none;\n    background: royalblue;\n    color: azure;\n    font-size: 17px;\n    font-weight: 600;\n    cursor: pointer;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_list-top/./src/modal-style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;500;700;900&family=Roboto:ital,wght@0,300;0,400;0,700;0,900;1,300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --body-back:rgb(234, 234, 228);\n    --hover-color: blue;\n    --sect-back: #bfdbfe;\n    --text-color: black;\n    --svg-color: black;\n    --nav-back: white;\n    --nav-shadow: rgba(0, 0, 0, 0.55) 0px 5px 15px;\n    --hover-border: 2px solid blue;\n    --card-back: white;\n    --modal-back: #fefefe;\n    --close-color: #aaaaaa;\n    --input-hover-clr: 2px solid blue;\n}\n\n.darkmode {\n    --body-back: black;\n    --sect-back: #0e53a6;\n    --text-color: azure;\n    --hover-color: rgb(178, 211, 249);\n    --svg-color: white;\n    --nav-back: rgb(67, 64, 64);\n    --nav-shadow: rgba(255, 255, 255, 0.55) 0px 5px 15px;\n    --hover-border: 2px solid rgb(211, 211, 240);\n    --main-back: rgb(48, 48, 48);\n    --card-back: rgb(67, 64, 64);\n    --edit-icon-back: white;\n    --modal-back: rgb(67, 64, 64);\n    --close-color: #efe6e6;\n    --input-hover-clr: 2px solid rgb(221, 221, 247);\n\n}\n\nbody{\n    background: var(--body-back);\n    color: var(--text-color);\n    padding: 0;\n    margin: 0;\n}\n\n#container {\n    height: 100vh;\n    padding: 0;\n    margin: 0;\n    display: grid;\n    grid-template-columns: 1fr 4fr 1fr;\n    grid-template-rows: repeat(2, 1fr);\n    gap: 4px;\n    font-family: 'Roboto';\n    margin: 10px;\n    \n}\n\n/* Section */\n\n.empty {\n    grid-row: 1/2;\n    background: var(--sect-back);\n    margin-bottom: 0px;\n    gap: 0;\n}\n\n.home-etc{\n    grid-row: 2/3;\n    padding-top: 80px;\n    background: var(--sect-back);\n    margin-top: 0;\n}\n\n.today-item,\n.week-item,\n.month-item{\n    display: flex;\n    align-items: center;\n    margin: 0 15px;\n    cursor: pointer;\n    color: var(--text-color);\n\n}\n\n.today-item > h2:hover,\n.week-item > h2:hover,\n.month-item > h2:hover{\n    padding-left: 10px;\n    \n}\n\n.today-item:hover,\n.week-item:hover,\n.month-item:hover{\n    color: var(--hover-color);\n}\n\n.today-item > img,\n.week-item > img,\n.month-item > img,\n#dark-mode-icon {\n    width: 35px;\n    height: 35px;\n    padding-right: 10px;\n    fill: var(--svg-color);\n}\n\n\n/* Nav */\n.logo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-left: 30px;\n}\n\n.logo h1 {\n    font-size: 35px;\n    color: var(--text-color);\n}\n\n.logo > img {\n    width: 50px;\n    height: 50px;\n    fill: var(--svg-color);\n}\n\n.nav-menu{\n    grid-column: 2/4;\n    grid-row: 1/2;\n    box-shadow: var(--nav-shadow);\n    background: var(--nav-back);\n    color: var(--text-color);\n}\n\nnav {\n    display: flex;\n    justify-content: space-between;\n    \n}\n\n/* Nav - Search bar - Profile */\n\nnav svg {\n    width: 40px;\n    height: 45px;\n    padding: 0 20px;\n    fill: var(--svg-color);\n    cursor: pointer;\n}\n\n.search {\n    display: flex;\n    justify-content: center;\n    padding-left: 20px;\n    margin-top: 20px;\n}\n\n.profile {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    padding-right: 0 20px;\n}\n\n.profile-img {\n    display: flex;\n    width: 45px;\n    height: 45px;\n    background: brown;\n    color: white;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    font-size: 25px;\n    font-weight: 600;\n}\n\n.profile h2 {\n    padding: 0 20px;\n}\n\n#search-input {\n    width: 700px;\n    height: 35px;\n    border-radius: 22px;\n    border: none;\n    background: rgb(242, 239, 215);\n    color: var(--text-color);\n}\n\n/* Nav - General profile - Buttons */\n\nmenu {\n    display: flex;\n    justify-content: space-between;\n}\n\n.general-profile {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.profile-img.main {\n    width: 70px;\n    height: 70px;\n    font-size: 35px;\n}\n\n.name {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.name>h1{\n    padding: 0;\n    margin: 0;\n    padding-left: 20px;\n}\n\n.name>p{\n    margin: 0;\n    padding: 0;\n    padding-left: 20px;\n}\n\n.buttons {\n    margin-right: 20px;\n}\n\n.buttons button {\n    background: var(--sect-back);\n    color: var(--text-color);\n    border-radius: 20px;\n    height: 40px;\n    width: 110px;\n    border: transparent;\n    font-weight: 700;\n    font-size: 16px;\n    cursor: pointer;\n}\n\nbutton:active{\n    background: blue;\n    color: azure;\n}\n\nbutton:hover {\n    border: var(--hover-border);\n}\n\n/* Main and projects */\n\nmain {\n    grid-column: 2 / 4;\n    grid-row: 2 / 4;\n    height: 100vh;\n    overflow: visible;\n    width: 86vw;\n    background: var(--main-back);\n}\n\nmain>h1 {\n    padding-left: 20px;\n    font-size: 28px;\n    color: var(--text-color);\n}\n\n.modal{\n    grid-row: 2/3;\n    grid-column: 3/4;\n}\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_list-top/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo_list-top/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo_list-top/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/modal-style.css":
/*!*****************************!*\
  !*** ./src/modal-style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./modal-style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/modal-style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_modal_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_modal_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo_list-top/./src/modal-style.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo_list-top/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo_list-top/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo_list-top/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo_list-top/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo_list-top/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo_list-top/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo_list-top/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modal_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-style.css */ \"./src/modal-style.css\");\n/* harmony import */ var _modules_app_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/app-page */ \"./src/modules/app-page.js\");\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_taskManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/taskManager */ \"./src/modules/taskManager.js\");\n/* harmony import */ var _modules_taskModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/taskModal */ \"./src/modules/taskModal.js\");\n/* harmony import */ var _modules_createTaskElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/createTaskElement */ \"./src/modules/createTaskElement.js\");\n/* harmony import */ var _modules_createEditIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/createEditIcon */ \"./src/modules/createEditIcon.js\");\n/* harmony import */ var _modules_createProjectItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/createProjectItem */ \"./src/modules/createProjectItem.js\");\n/* harmony import */ var _modules_renderProjects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/renderProjects */ \"./src/modules/renderProjects.js\");\n/* harmony import */ var _modules_saveAndRenderTasks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/saveAndRenderTasks */ \"./src/modules/saveAndRenderTasks.js\");\n/* harmony import */ var _modules_taskEdition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/taskEdition */ \"./src/modules/taskEdition.js\");\n/* harmony import */ var _modules_darkMode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/darkMode */ \"./src/modules/darkMode.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_app_page__WEBPACK_IMPORTED_MODULE_2__.appPage)()\n_modules_darkMode__WEBPACK_IMPORTED_MODULE_12__[\"default\"].init();\n(0,_modules_taskManager__WEBPACK_IMPORTED_MODULE_4__.addLocalStorage)();\n\nlet chore = (0,_modules_task__WEBPACK_IMPORTED_MODULE_3__.Task)('Pokemon', 'Debo atrapar a gible, en la cueva debajo de la ruta de bicicleta, a cualquier hora','12/03/2024', 'high');\nconsole.log(chore);\n\n// taskModal.js events\n\n_modules_taskModal__WEBPACK_IMPORTED_MODULE_5__.closeModalButton.addEventListener('click', () => {\n    _modules_taskModal__WEBPACK_IMPORTED_MODULE_5__.modal.style.display = 'none';\n});\n\nwindow.addEventListener('click', (e) => {\n    if (e.target == _modules_taskModal__WEBPACK_IMPORTED_MODULE_5__.modal) {\n        _modules_taskModal__WEBPACK_IMPORTED_MODULE_5__.modal.style.display = 'none'\n    }\n});\n\n_modules_taskModal__WEBPACK_IMPORTED_MODULE_5__.addTaskButton.addEventListener('click', () => {\n    _modules_taskModal__WEBPACK_IMPORTED_MODULE_5__.modal.style.display = 'block';\n    document.querySelector('.form-title').textContent = 'Add New Task';\n    document.querySelector('.btn, .form-add-button').textContent = 'Add';\n});\n\n_modules_taskModal__WEBPACK_IMPORTED_MODULE_5__.addTaskForm.addEventListener('submit', (e) =>{\n    e.preventDefault();\n\n    const data = new FormData(e.target);\n    let newTask = {};\n\n    data.forEach((value, key) => {\n        newTask[key] = value;\n    });\n    \n    if (document.querySelector('.form-title').textContent === 'Edit Task') {\n        let id = parseInt(e.target.id);\n        let editTaskIndex = _modules_taskManager__WEBPACK_IMPORTED_MODULE_4__.taskList.findIndex((task) => task.id === id);\n\n        if (editTaskIndex !== -1) {\n            (0,_modules_taskEdition__WEBPACK_IMPORTED_MODULE_11__.fillOutEditForm)(_modules_taskManager__WEBPACK_IMPORTED_MODULE_4__.taskList[editTaskIndex]);\n        } else {\n            console.error('Tarea no encontrada para editar.');\n        }\n    } else {\n        (0,_modules_taskManager__WEBPACK_IMPORTED_MODULE_4__.addTaskToList)(\n            newTask['task-title'],\n            newTask['task-desc'],\n            newTask['task-date'],\n            newTask['Priority']\n        );\n        (0,_modules_saveAndRenderTasks__WEBPACK_IMPORTED_MODULE_10__.saveAndRenderProjects)();\n    }\n    _modules_taskModal__WEBPACK_IMPORTED_MODULE_5__.addTaskForm.reset();\n    _modules_taskModal__WEBPACK_IMPORTED_MODULE_5__.modal.style.display = 'none'\n});\n\n\neditIcon.addEventListener('click', (e) => {\n    if (task) {\n        (0,_modules_createEditIcon__WEBPACK_IMPORTED_MODULE_7__.createEditIcon)(task);\n    } else {\n        console.error('Task is undefined or null');\n    }\n});\n/*\ncreateTaskElement();\ncreateProjectItem();\nrenderProjects();*/\n\n\n//# sourceURL=webpack://todo_list-top/./src/index.js?");

/***/ }),

/***/ "./src/modules/app-page.js":
/*!*********************************!*\
  !*** ./src/modules/app-page.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appPage: () => (/* binding */ appPage),\n/* harmony export */   projectContainer: () => (/* binding */ projectContainer)\n/* harmony export */ });\n/* harmony import */ var _assests_calendar_today_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assests/calendar-today.svg */ \"./src/assests/calendar-today.svg\");\n/* harmony import */ var _assests_calendar_week_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assests/calendar-week.svg */ \"./src/assests/calendar-week.svg\");\n/* harmony import */ var _assests_calendar_month_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assests/calendar-month.svg */ \"./src/assests/calendar-month.svg\");\n/* harmony import */ var _assests_comment_check_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assests/comment-check.svg */ \"./src/assests/comment-check.svg\");\n/* harmony import */ var _assests_brightness_6_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assests/brightness-6.svg */ \"./src/assests/brightness-6.svg\");\n\n\n\n\n\n\n// Project containers.\n\nconst projectContainer = document.querySelector('.task-cards');\n\nfunction appPage(){\n\n//Today icon and header\nconst todayItem = document.querySelector('.today-item');\nconst todayImg = document.createElement('img');\ntodayImg.src = _assests_calendar_today_svg__WEBPACK_IMPORTED_MODULE_0__;\ntodayItem.appendChild(todayImg);\n\nconst todaySpan = document.createElement('h2')\ntodaySpan.textContent = 'Today';\ntodayItem.appendChild(todaySpan);\n\n//Week icon and header\nconst weekItem = document.querySelector('.week-item');\nconst weekImg = document.createElement('img');\nweekImg.src = _assests_calendar_week_svg__WEBPACK_IMPORTED_MODULE_1__;\nweekItem.appendChild(weekImg);\n\nconst weekSpan = document.createElement('h2')\nweekSpan.textContent = 'Week';\nweekItem.appendChild(weekSpan);\n\n//Month icon and header\nconst monthItem = document.querySelector('.month-item');\nconst monthImg = document.createElement('img');\nmonthImg.src = _assests_calendar_month_svg__WEBPACK_IMPORTED_MODULE_2__;\nmonthItem.appendChild(monthImg);\n\nconst monthSpan = document.createElement('h2');\nmonthSpan.textContent = 'Month';\nmonthItem.appendChild(monthSpan);\n\n// Logo and Name\n\nconst logoItem = document.querySelector('.logo');\nconst logoImg = document.createElement('img');\nlogoImg.src = _assests_comment_check_svg__WEBPACK_IMPORTED_MODULE_3__;\nlogoItem.appendChild(logoImg);\n\nconst logoSpan = document.createElement('h1');\nlogoSpan.textContent = 'TareasPro';\nlogoItem.appendChild(logoSpan);\n\n// Dark Mode Icon\nconst profileDiv = document.querySelector('.profile')\nconst darkModeIcon = document.querySelector('#dark-mode-icon');\ndarkModeIcon.src = _assests_brightness_6_svg__WEBPACK_IMPORTED_MODULE_4__;\nprofileDiv.appendChild(darkModeIcon);\n\n}\n\n\n\n\n//# sourceURL=webpack://todo_list-top/./src/modules/app-page.js?");

/***/ }),

/***/ "./src/modules/createEditIcon.js":
/*!***************************************!*\
  !*** ./src/modules/createEditIcon.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEditIcon: () => (/* binding */ createEditIcon)\n/* harmony export */ });\n/* harmony import */ var _assests_pencil_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assests/pencil.svg */ \"./src/assests/pencil.svg\");\n/* harmony import */ var _taskEdition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskEdition */ \"./src/modules/taskEdition.js\");\n\n\n\nfunction createEditIcon(task) {\n    const editIcon = document.createElement('img');\n    editIcon.src = _assests_pencil_svg__WEBPACK_IMPORTED_MODULE_0__;\n    editIcon.setAttribute('class', 'edit-icon');\n\n    editIcon.addEventListener('click', (e) => {\n        if (task) {\n            (0,_taskEdition__WEBPACK_IMPORTED_MODULE_1__.fillOutEditForm)(task);\n        } else {\n            console.error('Book is undefined or null')\n        }\n    });\n    return editIcon;\n}\n\n//# sourceURL=webpack://todo_list-top/./src/modules/createEditIcon.js?");

/***/ }),

/***/ "./src/modules/createProjectItem.js":
/*!******************************************!*\
  !*** ./src/modules/createProjectItem.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProjectItem: () => (/* binding */ createProjectItem)\n/* harmony export */ });\n/* harmony import */ var _createTaskElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskElement */ \"./src/modules/createTaskElement.js\");\n/* harmony import */ var _createEditIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createEditIcon */ \"./src/modules/createEditIcon.js\");\n/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-page */ \"./src/modules/app-page.js\");\n/* harmony import */ var _deleteProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteProject */ \"./src/modules/deleteProject.js\");\n\n\n\n\n\nfunction createProjectItem(task, index) {\n    if (!task) {\n        console.error('Task is undefined or null');\n        return;\n    }\n    console.log('Project:', task);\n    console.log('Descrip:', task.description);\n    console.log('Project title:', task.title);\n\n    // Agregar más declaraciones console.log aquí para depurar\n    console.log('Task object:', task);\n    const projectItem = document.createElement('div');\n    projectItem.setAttribute('id', index);\n    projectItem.setAttribute('key', index);\n    projectItem.setAttribute('class', 'card task');\n\n    projectItem.appendChild((0,_createTaskElement__WEBPACK_IMPORTED_MODULE_0__.createTaskElement)('h1', `Title: ${task.title}`, 'task-title'));\n    projectItem.appendChild((0,_createTaskElement__WEBPACK_IMPORTED_MODULE_0__.createTaskElement)('h1', `Description: ${task.description}`, 'task-desc'));\n    projectItem.appendChild((0,_createTaskElement__WEBPACK_IMPORTED_MODULE_0__.createTaskElement)('h1', `Due Date: ${task.dueDate}`, 'task-date'));\n    projectItem.appendChild((0,_createTaskElement__WEBPACK_IMPORTED_MODULE_0__.createTaskElement)('h1', `Priority: ${task.priority}`, 'Priority'));\n\n    projectItem.appendChild((0,_createTaskElement__WEBPACK_IMPORTED_MODULE_0__.createTaskElement)('button', 'X', 'delete'));\n    projectItem.appendChild((0,_createEditIcon__WEBPACK_IMPORTED_MODULE_1__.createEditIcon)(task));\n\n    projectItem.querySelector('.delete').addEventListener('click', () => {\n        (0,_deleteProject__WEBPACK_IMPORTED_MODULE_3__.deleteProject)(index);\n    });\n    console.log('Created projectItem:', projectItem);\n    _app_page__WEBPACK_IMPORTED_MODULE_2__.projectContainer.appendChild(projectItem);\n}\n\n//# sourceURL=webpack://todo_list-top/./src/modules/createProjectItem.js?");

/***/ }),

/***/ "./src/modules/createTaskElement.js":
/*!******************************************!*\
  !*** ./src/modules/createTaskElement.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTaskElement: () => (/* binding */ createTaskElement)\n/* harmony export */ });\nfunction createTaskElement(elem, content, className) {\n    const element = document.createElement(elem);\n    element.textContent = content;\n    element.setAttribute('class', className);\n    return element;\n}\n\n//# sourceURL=webpack://todo_list-top/./src/modules/createTaskElement.js?");

/***/ }),

/***/ "./src/modules/darkMode.js":
/*!*********************************!*\
  !*** ./src/modules/darkMode.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// darkMode.js\n\n// Dark Mode Module\nconst darkModeModule = (() => {\n    let darkMode = localStorage.getItem('darkMode');\n    const darkModeToggle = document.querySelector('#dark-mode-icon');\n\n    const enableDarkMode = () => {\n        document.body.classList.add('darkmode');\n        localStorage.setItem('darkMode', 'enabled');\n    }\n\n    const disableDarkMode = () => {\n        document.body.classList.remove('darkmode');\n        localStorage.setItem('darkMode', null);\n    }\n\n    const toggleDarkMode = () => {\n        darkMode = localStorage.getItem('darkMode');\n        if (darkMode !== 'enabled') {\n            enableDarkMode();\n        } else {\n            disableDarkMode();\n        }\n    }\n\n    const initDarkMode = () => {\n        if (darkMode === 'enabled') {\n            enableDarkMode();\n        }\n\n        darkModeToggle.addEventListener('click', toggleDarkMode);\n    }\n\n    // Public API\n    return {\n        init: initDarkMode,\n    };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (darkModeModule);\n\n\n//# sourceURL=webpack://todo_list-top/./src/modules/darkMode.js?");

/***/ }),

/***/ "./src/modules/deleteProject.js":
/*!**************************************!*\
  !*** ./src/modules/deleteProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject)\n/* harmony export */ });\n/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskManager */ \"./src/modules/taskManager.js\");\n/* harmony import */ var _saveAndRenderTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveAndRenderTasks */ \"./src/modules/saveAndRenderTasks.js\");\n\n\n\nfunction deleteProject(index) {\n    _taskManager__WEBPACK_IMPORTED_MODULE_0__.taskList.splice(index, 1);\n    (0,_saveAndRenderTasks__WEBPACK_IMPORTED_MODULE_1__.saveAndRenderProjects)();\n}\n\n//# sourceURL=webpack://todo_list-top/./src/modules/deleteProject.js?");

/***/ }),

/***/ "./src/modules/renderProjects.js":
/*!***************************************!*\
  !*** ./src/modules/renderProjects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects)\n/* harmony export */ });\n/* harmony import */ var _createProjectItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProjectItem */ \"./src/modules/createProjectItem.js\");\n/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-page */ \"./src/modules/app-page.js\");\n/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskManager */ \"./src/modules/taskManager.js\");\n\n\n\n\nfunction renderProjects() {\n    _app_page__WEBPACK_IMPORTED_MODULE_1__.projectContainer.textContent = '';\n    _taskManager__WEBPACK_IMPORTED_MODULE_2__.taskList.map((task, index) => {\n        (0,_createProjectItem__WEBPACK_IMPORTED_MODULE_0__.createProjectItem)(task, index);\n    });\n};\n\n//# sourceURL=webpack://todo_list-top/./src/modules/renderProjects.js?");

/***/ }),

/***/ "./src/modules/saveAndRenderTasks.js":
/*!*******************************************!*\
  !*** ./src/modules/saveAndRenderTasks.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   saveAndRenderProjects: () => (/* binding */ saveAndRenderProjects)\n/* harmony export */ });\n/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderProjects */ \"./src/modules/renderProjects.js\");\n/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskManager */ \"./src/modules/taskManager.js\");\n\n\n\nfunction saveAndRenderProjects(){\n    console.log('Saving tasks to localStorage:', _taskManager__WEBPACK_IMPORTED_MODULE_1__.taskList);\n    localStorage.setItem('tasks', JSON.stringify(_taskManager__WEBPACK_IMPORTED_MODULE_1__.taskList));\n    console.log('Rendering projects...');\n    (0,_renderProjects__WEBPACK_IMPORTED_MODULE_0__.renderProjects)();\n}\n\n//# sourceURL=webpack://todo_list-top/./src/modules/saveAndRenderTasks.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nfunction Task(title, description, dueDate, priority, checklist) {\n    return {\n        title,\n        description,\n        dueDate,\n        priority,\n        checklist,\n        id:  Math.floor(Math.random() * 100000000)\n    };\n}\n\n//# sourceURL=webpack://todo_list-top/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/taskEdition.js":
/*!************************************!*\
  !*** ./src/modules/taskEdition.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fillOutEditForm: () => (/* binding */ fillOutEditForm)\n/* harmony export */ });\n/* harmony import */ var _taskModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskModal */ \"./src/modules/taskModal.js\");\n/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskManager */ \"./src/modules/taskManager.js\");\n\n\n\n\nfunction fillOutEditForm(task){\n    if (task) {\n        _taskModal__WEBPACK_IMPORTED_MODULE_0__.modal.style.display = 'block';\n        document.querySelector('.form-title').textContent = 'Edit Project';\n        document.querySelector('.btn').textContent = 'Edit';\n\n        if (task.id) {\n            console.log('ID de la tarea encontrada:', task.id);\n            \n            // Encuentra el índice de la tarea en tu lista (supongo que tienes una lista llamada taskList)\n            const editTaskIndex = _taskManager__WEBPACK_IMPORTED_MODULE_1__.taskList.findIndex(t => t.id === task.id);\n\n            console.log('Index de la tarea encontrada:', editTaskIndex);\n\n            document.querySelector('.add-task-form').setAttribute('id', task.id);\n        } else {\n            console.error('Project id es undefined or null');\n        }\n\n        document.querySelector('#task-title').value = task.title || '';\n        document.querySelector('#task-desc').value = task.desc || '';\n        document.querySelector('#task-date').value = task.date || '';\n        document.querySelector('#Priority').value = task.priority || '';\n\n    } else {\n        console.error('Task/Project es undefined or null');\n    }\n\n}\n\n//# sourceURL=webpack://todo_list-top/./src/modules/taskEdition.js?");

/***/ }),

/***/ "./src/modules/taskManager.js":
/*!************************************!*\
  !*** ./src/modules/taskManager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLocalStorage: () => (/* binding */ addLocalStorage),\n/* harmony export */   addTaskToList: () => (/* binding */ addTaskToList),\n/* harmony export */   taskList: () => (/* binding */ taskList)\n/* harmony export */ });\n/* harmony import */ var _saveAndRenderTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveAndRenderTasks */ \"./src/modules/saveAndRenderTasks.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\n\n\nlet taskList = [];\n\nfunction addTaskToList(title, description, dueDate, priority, checklist){\n    taskList.push(new _task__WEBPACK_IMPORTED_MODULE_1__.Task(title, description, dueDate, priority, checklist));\n    (0,_saveAndRenderTasks__WEBPACK_IMPORTED_MODULE_0__.saveAndRenderProjects)();\n}\n\nfunction addLocalStorage(){\n    console.log('Loading tasks from localStorage...');\n    taskList = JSON.parse(localStorage.getItem('tasks')) || [];\n    console.log('Tasks loaded:', taskList);\n    (0,_saveAndRenderTasks__WEBPACK_IMPORTED_MODULE_0__.saveAndRenderProjects)();\n}\n\n//# sourceURL=webpack://todo_list-top/./src/modules/taskManager.js?");

/***/ }),

/***/ "./src/modules/taskModal.js":
/*!**********************************!*\
  !*** ./src/modules/taskModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTaskButton: () => (/* binding */ addTaskButton),\n/* harmony export */   addTaskForm: () => (/* binding */ addTaskForm),\n/* harmony export */   closeModalButton: () => (/* binding */ closeModalButton),\n/* harmony export */   modal: () => (/* binding */ modal)\n/* harmony export */ });\nconst modal = document.querySelector('#task-modal');\nconst addTaskForm = document.querySelector('.add-task-form');\nconst addTaskButton = document.querySelector('.add-new-task');\nconst closeModalButton = document.querySelector('.close');\n\n//# sourceURL=webpack://todo_list-top/./src/modules/taskModal.js?");

/***/ }),

/***/ "./src/assests/brightness-6.svg":
/*!**************************************!*\
  !*** ./src/assests/brightness-6.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/brightness-6.svg\";\n\n//# sourceURL=webpack://todo_list-top/./src/assests/brightness-6.svg?");

/***/ }),

/***/ "./src/assests/calendar-month.svg":
/*!****************************************!*\
  !*** ./src/assests/calendar-month.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/calendar-month.svg\";\n\n//# sourceURL=webpack://todo_list-top/./src/assests/calendar-month.svg?");

/***/ }),

/***/ "./src/assests/calendar-today.svg":
/*!****************************************!*\
  !*** ./src/assests/calendar-today.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/calendar-today.svg\";\n\n//# sourceURL=webpack://todo_list-top/./src/assests/calendar-today.svg?");

/***/ }),

/***/ "./src/assests/calendar-week.svg":
/*!***************************************!*\
  !*** ./src/assests/calendar-week.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/calendar-week.svg\";\n\n//# sourceURL=webpack://todo_list-top/./src/assests/calendar-week.svg?");

/***/ }),

/***/ "./src/assests/comment-check.svg":
/*!***************************************!*\
  !*** ./src/assests/comment-check.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/comment-check.svg\";\n\n//# sourceURL=webpack://todo_list-top/./src/assests/comment-check.svg?");

/***/ }),

/***/ "./src/assests/pencil.svg":
/*!********************************!*\
  !*** ./src/assests/pencil.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/pencil.svg\";\n\n//# sourceURL=webpack://todo_list-top/./src/assests/pencil.svg?");

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
/******/ 			id: moduleId,
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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