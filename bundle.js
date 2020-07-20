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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Lato:400,900);\"]);\n// Module\nexports.push([module.i, \"@font-face {\\n  font-family: \\\"ImcreSoojin\\\";\\n  src: url(\\\"https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.3/ImcreSoojin.woff\\\")\\n    format(\\\"woff\\\");\\n  font-weight: normal;\\n  font-style: normal;\\n}\\n\\n*,\\n*:before,\\n*:after {\\n  -webkit-box-sizing: inherit;\\n  -moz-box-sizing: inherit;\\n  box-sizing: inherit;\\n}\\n\\nhtml {\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: \\\"Lato\\\", sans-serif;\\n  background: #fff;\\n  color: #222;\\n}\\n\\nul,\\nli {\\n  list-style: none;\\n}\\n\\n.wrapper {\\n  max-width: 1000px;\\n  margin: 0 auto;\\n}\\n\\nheader {\\n  text-align: center;\\n}\\n\\nheader a,\\nnav a {\\n  width: 100%;\\n  color: #ff9697;\\n  padding: 20px 5px;\\n  font-weight: 400px;\\n  text-decoration: none;\\n  display: inline-block;\\n}\\n\\na:hover {\\n  text-decoration: underline;\\n}\\n\\nnav {\\n  width: 100%;\\n}\\n\\nnav ul {\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\nnav li a {\\n  color: #8b8b8b;\\n  padding: 20px;\\n}\\n\\n.gallery ul {\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n.gallery li {\\n  flex: 1 1 50%;\\n  padding: 12px;\\n}\\n\\nsection,\\nfooter {\\n  text-align: center;\\n  background: #fff;\\n  padding: 20px;\\n  margin: 20px 0;\\n  font-weight: 100;\\n}\\n\\nfooter {\\n  border-top: 1px solid #e2e2e2;\\n  width: 100%;\\n  display: inline-block;\\n}\\n\\nfooter p {\\n  color: #8b8b8b;\\n  float: left;\\n}\\n\\nfooter i {\\n  color: #8b8b8b;\\n  padding: 20px;\\n  float: right;\\n}\\n\\nimg {\\n  width: 456px;\\n  height: 304px;\\n  cursor: pointer;\\n  transition: opacity 0.5s ease-out;\\n\\n  /* box-shadow: 2px 2px 4px 0 #ccc; */\\n  /* box-shadow: 0 0 15px rgba(0, 0, 0, 0.6); */\\n  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.2);\\n  border-radius: 6px;\\n}\\n\\n.imageContainer:hover .imageDescription {\\n  opacity: 1;\\n}\\n\\n.imageContainer:hover .image {\\n  opacity: 0.3;\\n}\\n\\n.imageContainer {\\n  position: relative;\\n}\\n\\n.imageDescription {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  opacity: 0;\\n}\\n\\n.imageContainer img {\\n  display: block;\\n}\\n\\n.content {\\n  display: flex;\\n  font-weight: bold;\\n  width: 100%;\\n  height: 100%;\\n  justify-content: center;\\n  align-items: center;\\n  color: #fff;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\n\\n.info {\\n  opacity: 0;\\n  transition: opacity 0.5s ease-out;\\n  position: absolute;\\n}\\n\\n.title {\\n  font-size: xx-large;\\n}\\n\\n.desciption {\\n  margin-top: 20px;\\n  font-size: large;\\n}\\n\\n.imageContainer:hover .info {\\n  opacity: 1;\\n}\\n\\n.v-border,\\n.h-border {\\n  position: absolute;\\n  top: 0%;\\n  left: 0%;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.v-border:before,\\n.v-border:after {\\n  width: 0%;\\n  height: 3px;\\n  left: 50%;\\n  transition: all 500ms ease-out;\\n  background: #fff;\\n}\\n\\n.h-border:before,\\n.h-border:after {\\n  height: 0%;\\n  top: 50%;\\n  width: 3px;\\n  transition: all 500ms ease-out;\\n  background: #fff;\\n}\\n\\n.v-border:before {\\n  content: \\\"\\\";\\n  top: 10%;\\n  position: absolute;\\n}\\n\\n.v-border:after {\\n  content: \\\"\\\";\\n  bottom: 10%;\\n  position: absolute;\\n}\\n\\n.h-border:before {\\n  content: \\\"\\\";\\n  left: 10%;\\n  height: 0%;\\n  position: absolute;\\n}\\n\\n.h-border:after {\\n  content: \\\"\\\";\\n  right: 10%;\\n  position: absolute;\\n}\\n\\n.imageContainer:hover .v-border:before,\\n.imageContainer:hover .v-border:after {\\n  width: 90%;\\n  left: 5%;\\n}\\n\\n.imageContainer:hover .h-border:before,\\n.imageContainer:hover .h-border:after {\\n  height: 90%;\\n  top: 5%;\\n}\\n\\n.imageContainer:hover .bg-overlay {\\n  background: rgba(0, 0, 0, 0.45);\\n}\\n\\n.bg-overlay {\\n  background: rgba(0, 0, 0, 0.25);\\n  position: absolute;\\n  top: 0px;\\n  left: 0px;\\n  width: 100%;\\n  height: 100%;\\n  transition: all 500ms linear;\\n}\\n\\n.modal {\\n  display: none;\\n  position: fixed;\\n  z-index: 1;\\n  padding-top: 100px;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: auto;\\n  background-color: rgb(0, 0, 0);\\n  background-color: rgba(0, 0, 0, 0.4);\\n}\\n\\n.modal-content {\\n  background-color: #fff;\\n  border-radius: 0.5em;\\n  margin: auto;\\n  overflow: scroll;\\n  width: 80%;\\n  height: 90%;\\n}\\n\\n.modal-header {\\n  width: 100%;\\n  padding: 10px 20px 0 20px;\\n  display: inline-block;\\n  border-bottom: 1px solid #e2e2e2;\\n  text-align: center;\\n}\\n\\n.modal-body {\\n  width: 100%;\\n  padding: 10px 40px;\\n}\\n\\n.modal-body > * {\\n  margin: 20px 0;\\n}\\n\\n.imageContent {\\n  padding: 10px 10px 30px 10px;\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.imageContent img {\\n  width: 80%;\\n}\\n\\n.close {\\n  color: #aaaaaa;\\n  float: right;\\n  font-size: 28px;\\n  font-weight: bold;\\n  padding-top: 12px;\\n}\\n\\n.close:hover,\\n.close:focus {\\n  color: #000;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\n.prevbtn {\\n  width: 10%;\\n  color: #aaaaaa;\\n  font-size: 30px;\\n}\\n\\n.nextbtn {\\n  text-align: end;\\n  width: 10%;\\n  color: #aaaaaa;\\n  font-size: 30px;\\n}\\n\\n.projecttitle h2,\\n.projecttitle h4 {\\n  text-align: center;\\n}\\n\\n.projecttitle h4 {\\n  color: #9da7a6;\\n}\\n\\n.projectDesciption {\\n  width: 100%;\\n}\\n\\n.projectDesciption li {\\n  font-family: \\\"ImcreSoojin\\\";\\n\\n  width: 45%;\\n  margin: 10px;\\n  text-align: center;\\n  display: inline-block;\\n  list-style: initial;\\n}\\n\\n.projectContent {\\n  display: flex;\\n}\\n\\n.useLibrary {\\n  width: 33%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.useLibrary-body {\\n  display: inline-block;\\n}\\n\\n.people {\\n  display: flex;\\n  flex-direction: column;\\n  width: 33%;\\n}\\n\\n.people p {\\n  text-align: center;\\n  padding: 20px;\\n  margin: 20px;\\n}\\n\\n.video {\\n  width: 33%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.videoContent {\\n  margin: 20px;\\n  align-items: center;\\n}\\n\\n.videoContent i {\\n  margin-right: 10px;\\n}\\n\\n.modal-footer {\\n  width: 100%;\\n  height: 100px;\\n  margin-bottom: 70px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.modal-footer span {\\n  padding: 20px;\\n  border: solid 1px black;\\n}\\n\\n.modal-footer::before {\\n  content: \\\"\\\";\\n  margin: 40px;\\n  width: 90%;\\n  display: inline-block;\\n  border-bottom: 1px solid #e2e2e2;\\n}\\n\\n.button {\\n  border: solid 2px #444;\\n  background: #16a085;\\n  font-weight: bold;\\n  letter-spacing: 0.2rem;\\n  color: #fff;\\n  box-shadow: inset 2px 2px 0 #fff, 0 8px 10px -4px rgba(0, 0, 0, 0.4);\\n  cursor: pointer;\\n}\\n\\n.action-button {\\n  position: relative;\\n  padding: 10px 40px;\\n  margin: 0px 10px 10px 0px;\\n  float: left;\\n  border-radius: 3px;\\n  font-family: \\\"Lato\\\", sans-serif;\\n  font-size: 18px;\\n  color: #fff;\\n  text-decoration: none;\\n}\\n.action-button:active {\\n  transform: translate(0px, 5px);\\n  -webkit-transform: translate(0px, 5px);\\n  border-bottom: 1px solid;\\n}\\n\\n.animate {\\n  transition: all 0.1s;\\n  -webkit-transition: all 0.1s;\\n}\\n\\n.blue {\\n  background-color: #3498db;\\n  border-bottom: 5px solid #2980b9;\\n  text-shadow: 0px -2px #2980b9;\\n}\\n\\n.red {\\n  background-color: #e74c3c;\\n  border-bottom: 5px solid #c0392b;\\n  text-shadow: 0px -2px #c0392b;\\n}\\n\\n.green {\\n  background-color: #2ecc71;\\n  border-bottom: 5px solid #27ae60;\\n  text-shadow: 0px -2px #27ae60;\\n}\\n\\n.yellow {\\n  background-color: #f1c40f;\\n  border-bottom: 5px solid #f39c12;\\n  text-shadow: 0px -2px #f39c12;\\n}\\n\\n.videobutton {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/images/ItForYou.png":
/*!*********************************!*\
  !*** ./src/images/ItForYou.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"images/images/ItForYou.png\");\n\n//# sourceURL=webpack:///./src/images/ItForYou.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_ItForYou_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/ItForYou.png */ \"./src/images/ItForYou.png\");\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });