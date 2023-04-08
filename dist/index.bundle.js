/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.site-wrapper {\r\n  padding: 0.5rem;\r\n}\r\n\r\n.todo-box {\r\n  border: solid 1px rgba(0, 0, 0, 0.2);\r\n  box-shadow: 0 0 1px 1px #ddd;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.todo-box > * {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: solid 1px rgba(0, 0, 0, 0.2);\r\n  padding: 1rem;\r\n  flex-wrap: wrap;\r\n  gap: 0.3rem;\r\n}\r\n\r\n.list-check-and-name {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  flex-wrap: wrap;\r\n  flex: 2;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n#new-item {\r\n  height: 100%;\r\n  border: none;\r\n  outline: none;\r\n  font-style: italic;\r\n  color: rgba(0, 0, 0, 0.8);\r\n  width: 90%;\r\n}\r\n\r\n.list-item-value {\r\n  width: 90%;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.list-item-value:hover {\r\n  cursor: default;\r\n}\r\n\r\n.list-item-value:focus {\r\n  cursor: auto;\r\n}\r\n\r\n.submit-btn {\r\n  border: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n}\r\n\r\ni {\r\n  color: rgba(0, 0, 0, 0.4);\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.clear-li {\r\n  text-align: center;\r\n  margin: 0 auto;\r\n  border-bottom: none;\r\n}\r\n\r\n.clear-li:hover {\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\n.none {\r\n  display: none;\r\n}\r\n\r\n.show {\r\n  display: block;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .todo-box {\r\n    width: 65%;\r\n    margin: 4rem auto 0;\r\n  }\r\n}\r\n\r\n\r\n/* * {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.site-wrapper {\r\n  padding: 0.5rem;\r\n}\r\n\r\n.todo-box {\r\n  border: solid 1px rgba(0, 0, 0, 0.2);\r\n  box-shadow: 0 0 1px 1px #ddd;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.todo-box > * {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: solid 1px rgba(0, 0, 0, 0.2);\r\n  padding: 1rem;\r\n  flex-wrap: wrap;\r\n  gap: 0.3rem;\r\n}\r\n\r\n.list-check-and-name {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  flex-wrap: wrap;\r\n  flex: 2;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n#new-item {\r\n  height: 100%;\r\n  border: none;\r\n  outline: none;\r\n  font-style: italic;\r\n  color: rgba(0, 0, 0, 0.8);\r\n  width: 90%;\r\n}\r\n\r\n.list-item-value {\r\n  width: 90%;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.list-item-value:hover {\r\n  cursor: default;\r\n}\r\n\r\n.list-item-value:focus {\r\n  cursor: auto;\r\n}\r\n\r\n.submit-btn {\r\n  border: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n}\r\n\r\ni {\r\n  color: rgba(0, 0, 0, 0.4);\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.clear-li {\r\n  text-align: center;\r\n  margin: 0 auto;\r\n  border-bottom: none;\r\n}\r\n\r\n.clear-li:hover {\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\n.none {\r\n  display: none;\r\n}\r\n\r\n.show {\r\n  display: block;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .todo-box {\r\n    width: 70%;\r\n    margin: 4rem auto 0;\r\n  }\r\n} */\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oCAAoC;EACpC,4BAA4B;EAC5B,WAAW;EACX,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,2CAA2C;EAC3C,aAAa;EACb,eAAe;EACf,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,OAAO;AACT;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,yBAAyB;EACzB,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;IACE,UAAU;IACV,mBAAmB;EACrB;AACF;;;AAGA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAsGG","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.site-wrapper {\r\n  padding: 0.5rem;\r\n}\r\n\r\n.todo-box {\r\n  border: solid 1px rgba(0, 0, 0, 0.2);\r\n  box-shadow: 0 0 1px 1px #ddd;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.todo-box > * {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: solid 1px rgba(0, 0, 0, 0.2);\r\n  padding: 1rem;\r\n  flex-wrap: wrap;\r\n  gap: 0.3rem;\r\n}\r\n\r\n.list-check-and-name {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  flex-wrap: wrap;\r\n  flex: 2;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n#new-item {\r\n  height: 100%;\r\n  border: none;\r\n  outline: none;\r\n  font-style: italic;\r\n  color: rgba(0, 0, 0, 0.8);\r\n  width: 90%;\r\n}\r\n\r\n.list-item-value {\r\n  width: 90%;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.list-item-value:hover {\r\n  cursor: default;\r\n}\r\n\r\n.list-item-value:focus {\r\n  cursor: auto;\r\n}\r\n\r\n.submit-btn {\r\n  border: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n}\r\n\r\ni {\r\n  color: rgba(0, 0, 0, 0.4);\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.clear-li {\r\n  text-align: center;\r\n  margin: 0 auto;\r\n  border-bottom: none;\r\n}\r\n\r\n.clear-li:hover {\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\n.none {\r\n  display: none;\r\n}\r\n\r\n.show {\r\n  display: block;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .todo-box {\r\n    width: 65%;\r\n    margin: 4rem auto 0;\r\n  }\r\n}\r\n\r\n\r\n/* * {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.site-wrapper {\r\n  padding: 0.5rem;\r\n}\r\n\r\n.todo-box {\r\n  border: solid 1px rgba(0, 0, 0, 0.2);\r\n  box-shadow: 0 0 1px 1px #ddd;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.todo-box > * {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: solid 1px rgba(0, 0, 0, 0.2);\r\n  padding: 1rem;\r\n  flex-wrap: wrap;\r\n  gap: 0.3rem;\r\n}\r\n\r\n.list-check-and-name {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  flex-wrap: wrap;\r\n  flex: 2;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n#new-item {\r\n  height: 100%;\r\n  border: none;\r\n  outline: none;\r\n  font-style: italic;\r\n  color: rgba(0, 0, 0, 0.8);\r\n  width: 90%;\r\n}\r\n\r\n.list-item-value {\r\n  width: 90%;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.list-item-value:hover {\r\n  cursor: default;\r\n}\r\n\r\n.list-item-value:focus {\r\n  cursor: auto;\r\n}\r\n\r\n.submit-btn {\r\n  border: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n}\r\n\r\ni {\r\n  color: rgba(0, 0, 0, 0.4);\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.clear-li {\r\n  text-align: center;\r\n  margin: 0 auto;\r\n  border-bottom: none;\r\n}\r\n\r\n.clear-li:hover {\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\n.none {\r\n  display: none;\r\n}\r\n\r\n.show {\r\n  display: block;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .todo-box {\r\n    width: 70%;\r\n    margin: 4rem auto 0;\r\n  }\r\n} */\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addRemove.js":
/*!**************************!*\
  !*** ./src/addRemove.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "update": () => (/* binding */ update),
/* harmony export */   "updateIndexes": () => (/* binding */ updateIndexes)
/* harmony export */ });
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList.js */ "./src/todoList.js");


const add = (task) => {
  _todoList_js__WEBPACK_IMPORTED_MODULE_0__["default"].push({
    description: task.value,
    completed: false,
    index: _todoList_js__WEBPACK_IMPORTED_MODULE_0__["default"].length + 1,
  });

  localStorage.setItem('todolist', JSON.stringify(_todoList_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
};

const update = (pos, key, value) => {
  _todoList_js__WEBPACK_IMPORTED_MODULE_0__["default"][pos][key] = value;
  localStorage.setItem('todolist', JSON.stringify(_todoList_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
};

const updateIndexes = () => {
  for (let i = 0; i < _todoList_js__WEBPACK_IMPORTED_MODULE_0__["default"].length; i += 1) {
    _todoList_js__WEBPACK_IMPORTED_MODULE_0__["default"][i].index = i + 1;
  }
};

const remove = (position) => {
  _todoList_js__WEBPACK_IMPORTED_MODULE_0__["default"].splice(position, 1);
  updateIndexes();
  localStorage.setItem('todolist', JSON.stringify(_todoList_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
};
// import todolist from './todoList.js';

// export const add = (task) => {
//   todolist.push({
//     description: task.value,
//     completed: false,
//     index: todolist.length + 1,
//   });

//   localStorage.setItem('todolist', JSON.stringify(todolist));
// };

// export const update = (pos, key, value) => {
//   todolist[pos][key] = value;
//   localStorage.setItem('todolist', JSON.stringify(todolist));
// };

// export const remove = (position) => {
//   todolist.splice(position, 1);

//   // update indices
//   for (let i = 0; i < todolist.length; i += 1) {
//     todolist[i].index = i + 1;
//   }
//   localStorage.setItem('todolist', JSON.stringify(todolist));
// };


/***/ }),

/***/ "./src/interactive-list.js":
/*!*********************************!*\
  !*** ./src/interactive-list.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hey": () => (/* binding */ hey),
/* harmony export */   "setCompleted": () => (/* binding */ setCompleted)
/* harmony export */ });
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList.js */ "./src/todoList.js");


const setCompleted = (pos) => {
  _todoList_js__WEBPACK_IMPORTED_MODULE_0__["default"][pos].completed = !_todoList_js__WEBPACK_IMPORTED_MODULE_0__["default"][pos].completed;
  localStorage.setItem('todolist', JSON.stringify(_todoList_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
};

const hey = (pos) => {
  _todoList_js__WEBPACK_IMPORTED_MODULE_0__["default"][pos].completed = !_todoList_js__WEBPACK_IMPORTED_MODULE_0__["default"][pos].completed;
};

/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStorage.getItem('todolist')
  ? JSON.parse(localStorage.getItem('todolist'))
  : []);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ "./src/todoList.js");
/* harmony import */ var _addRemove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addRemove.js */ "./src/addRemove.js");
/* harmony import */ var _interactive_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive-list.js */ "./src/interactive-list.js");





const toDoBox = document.querySelector('.todo-box');
let tasks = _todoList_js__WEBPACK_IMPORTED_MODULE_1__["default"];

const renderTasks = () => {
  toDoBox.innerHTML = '';

  const headerLi = document.createElement('li');
  headerLi.classList.add('header-li');
  headerLi.innerHTML = 'Today\'s To Do <i class="fa-solid fa-rotate"></i>';

  const addToList = document.createElement('li');
  addToList.classList.add('add-to-list');

  const form = document.createElement('form');
  form.classList.add('add-list-form');

  const newItem = document.createElement('input');
  newItem.id = 'new-item';
  newItem.type = 'text';
  newItem.placeholder = 'Add to your list';
  newItem.setAttribute('required', '');

  const submitBtn = document.createElement('button');
  submitBtn.classList.add('submit-btn');
  submitBtn.type = 'submit';
  submitBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';

  toDoBox.appendChild(headerLi);
  toDoBox.appendChild(addToList);
  addToList.appendChild(form);
  form.appendChild(newItem);
  form.appendChild(submitBtn);

  // Add list item
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_2__.add)(newItem);
    newItem.value = '';
    renderTasks();
  });

  _todoList_js__WEBPACK_IMPORTED_MODULE_1__["default"].sort((a, b) => a.index - b.index);
  for (let i = 0; i < _todoList_js__WEBPACK_IMPORTED_MODULE_1__["default"].length; i += 1) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    const listCheckAndName = document.createElement('div');
    listCheckAndName.classList.add('list-check-and-name');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // checkbox 'completed' functionalities
    if (_todoList_js__WEBPACK_IMPORTED_MODULE_1__["default"][i].completed === true) {
      checkbox.checked = true;
    }

    checkbox.addEventListener('change', () => {
      (0,_interactive_list_js__WEBPACK_IMPORTED_MODULE_3__.setCompleted)(i);
    });

    const itemValInput = document.createElement('input');
    itemValInput.classList.add('list-item-value');
    itemValInput.value = _todoList_js__WEBPACK_IMPORTED_MODULE_1__["default"][i].description;

    const listElipsesBox = document.createElement('div');
    listElipsesBox.classList.add('list-ellipses-box');
    listElipsesBox.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';

    const listDelBox = document.createElement('div');
    listDelBox.classList.add('list-del-box', 'none');
    listDelBox.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

    // Change ellipses to deleteBtn when the input field is in focus
    itemValInput.addEventListener('click', () => {
      const els = document.querySelectorAll('.list-ellipses-box');
      const dels = document.querySelectorAll('.list-del-box');

      for (let j = 0; j < _todoList_js__WEBPACK_IMPORTED_MODULE_1__["default"].length; j += 1) {
        if (j === i) {
          dels[j].classList.remove('none');
          dels[j].classList.add('show');

          els[j].classList.add('none');
        } else {
          els[j].classList.remove('none');
          dels[j].classList.remove('show');
          dels[j].classList.add('none');
        }
      }
    });

    // Update list item
    itemValInput.addEventListener('keyup', (e) => {
      (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_2__.update)(i, 'description', e.target.value);
    });

    // delete list item
    listDelBox.addEventListener('click', () => {
      (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_2__.remove)(i);
      renderTasks();
    });

    listCheckAndName.appendChild(checkbox);
    listCheckAndName.appendChild(itemValInput);

    listItem.appendChild(listCheckAndName);
    listItem.appendChild(listElipsesBox);
    listItem.appendChild(listDelBox);

    toDoBox.appendChild(listItem);
  }
  // try
  const clearLi = document.createElement('li');
  clearLi.classList.add('clear-li');
  clearLi.innerHTML = 'Clear all completed';
  toDoBox.appendChild(clearLi);

  clearLi.addEventListener('click', () => {
    tasks = _todoList_js__WEBPACK_IMPORTED_MODULE_1__["default"].filter((item) => item.completed === false);
    _todoList_js__WEBPACK_IMPORTED_MODULE_1__["default"].splice(0, _todoList_js__WEBPACK_IMPORTED_MODULE_1__["default"].length, ...tasks);
    (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_2__.updateIndexes)();
    localStorage.setItem('todolist', JSON.stringify(_todoList_js__WEBPACK_IMPORTED_MODULE_1__["default"]));
    renderTasks();
  });
};
renderTasks();

// import './style.css';
// import todoList from './todoList.js';
// import { add, update, remove } from './addRemove.js';

// const toDoBox = document.querySelector('.todo-box');

// const renderTasks = () => {
//   toDoBox.innerHTML = '';

//   const headerLi = document.createElement('li');
//   headerLi.classList.add('header-li');
//   headerLi.innerHTML = 'Today\'s To Do <i class="fa-solid fa-rotate"></i>';

//   const addToList = document.createElement('li');
//   addToList.classList.add('add-to-list');

//   const form = document.createElement('form');
//   form.classList.add('add-list-form');

//   const newItem = document.createElement('input');
//   newItem.id = 'new-item';
//   newItem.type = 'text';
//   newItem.placeholder = 'Add to your list';
//   newItem.setAttribute('required', '');

//   const submitBtn = document.createElement('button');
//   submitBtn.classList.add('submit-btn');
//   submitBtn.type = 'submit';
//   submitBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';

//   toDoBox.appendChild(headerLi);
//   toDoBox.appendChild(addToList);
//   addToList.appendChild(form);
//   form.appendChild(newItem);
//   form.appendChild(submitBtn);

//   // Add list item
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     add(newItem);
//     newItem.value = '';
//     renderTasks();
//   });

//   todoList.sort((a, b) => a.index - b.index);
//   for (let i = 0; i < todoList.length; i += 1) {
//     const listItem = document.createElement('li');
//     listItem.classList.add('list-item');

//     const listCheckAndName = document.createElement('div');
//     listCheckAndName.classList.add('list-check-and-name');

//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';

//     const itemValInput = document.createElement('input');
//     itemValInput.classList.add('list-item-value');
//     itemValInput.value = todoList[i].description;

//     const listElipsesBox = document.createElement('div');
//     listElipsesBox.classList.add('list-ellipses-box');
//     listElipsesBox.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';

//     const listDelBox = document.createElement('div');
//     listDelBox.classList.add('list-del-box', 'none');
//     listDelBox.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

//     // Change ellipses to deleteBtn when the input field is in focus
//     itemValInput.addEventListener('click', () => {
//       const els = document.querySelectorAll('.list-ellipses-box');
//       const dels = document.querySelectorAll('.list-del-box');

//       for (let j = 0; j < todoList.length; j += 1) {
//         if (j === i) {
//           dels[j].classList.remove('none');
//           dels[j].classList.add('show');

//           els[j].classList.add('none');
//         } else {
//           els[j].classList.remove('none');
//           dels[j].classList.remove('show');
//           dels[j].classList.add('none');
//         }
//       }
//     });

//     // Update list item
//     itemValInput.addEventListener('keyup', (e) => {
//       update(i, 'description', e.target.value);
//     });

//     // delete list item
//     listDelBox.addEventListener('click', () => {
//       remove(i);
//       renderTasks();
//     });

//     listCheckAndName.appendChild(checkbox);
//     listCheckAndName.appendChild(itemValInput);

//     listItem.appendChild(listCheckAndName);
//     listItem.appendChild(listElipsesBox);
//     listItem.appendChild(listDelBox);

//     toDoBox.appendChild(listItem);
//   }
// };
// renderTasks();

// const clearLi = document.createElement('li');
// clearLi.classList.add('clear-li');
// clearLi.innerHTML = 'Clear all completed';
// toDoBox.appendChild(clearLi);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFCQUFxQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFJlbW92ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ludGVyYWN0aXZlLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zaXRlLXdyYXBwZXIge1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1ib3gge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggI2RkZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi50b2RvLWJveCA+ICoge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jaGVjay1hbmQtbmFtZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZmxleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNuZXctaXRlbSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0tdmFsdWUge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0tdmFsdWU6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtLXZhbHVlOmZvY3VzIHtcXHJcXG4gIGN1cnNvcjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG4ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5pIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItbGkge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItbGk6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5ub25lIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zaG93IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLnRvZG8tYm94IHtcXHJcXG4gICAgd2lkdGg6IDY1JTtcXHJcXG4gICAgbWFyZ2luOiA0cmVtIGF1dG8gMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zaXRlLXdyYXBwZXIge1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1ib3gge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggI2RkZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi50b2RvLWJveCA+ICoge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jaGVjay1hbmQtbmFtZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZmxleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNuZXctaXRlbSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0tdmFsdWUge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0tdmFsdWU6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtLXZhbHVlOmZvY3VzIHtcXHJcXG4gIGN1cnNvcjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG4ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5pIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItbGkge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItbGk6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5ub25lIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zaG93IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLnRvZG8tYm94IHtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgbWFyZ2luOiA0cmVtIGF1dG8gMDtcXHJcXG4gIH1cXHJcXG59ICovXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtBQUNGOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0dHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2l0ZS13cmFwcGVyIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tYm94IHtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4ICNkZGQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1ib3ggPiAqIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY2hlY2stYW5kLW5hbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGZsZXg6IDI7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LWl0ZW0ge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtLXZhbHVlIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtLXZhbHVlOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbS12YWx1ZTpmb2N1cyB7XFxyXFxuICBjdXJzb3I6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuaSB7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWxpIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWxpOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9uZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC50b2RvLWJveCB7XFxyXFxuICAgIHdpZHRoOiA2NSU7XFxyXFxuICAgIG1hcmdpbjogNHJlbSBhdXRvIDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qICoge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2l0ZS13cmFwcGVyIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tYm94IHtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4ICNkZGQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1ib3ggPiAqIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY2hlY2stYW5kLW5hbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGZsZXg6IDI7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LWl0ZW0ge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtLXZhbHVlIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtLXZhbHVlOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbS12YWx1ZTpmb2N1cyB7XFxyXFxuICBjdXJzb3I6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuaSB7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWxpIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWxpOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9uZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC50b2RvLWJveCB7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIG1hcmdpbjogNHJlbSBhdXRvIDA7XFxyXFxuICB9XFxyXFxufSAqL1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgdG9kb2xpc3QgZnJvbSAnLi90b2RvTGlzdC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkID0gKHRhc2spID0+IHtcclxuICB0b2RvbGlzdC5wdXNoKHtcclxuICAgIGRlc2NyaXB0aW9uOiB0YXNrLnZhbHVlLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgIGluZGV4OiB0b2RvbGlzdC5sZW5ndGggKyAxLFxyXG4gIH0pO1xyXG5cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb2xpc3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvbGlzdCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZSA9IChwb3MsIGtleSwgdmFsdWUpID0+IHtcclxuICB0b2RvbGlzdFtwb3NdW2tleV0gPSB2YWx1ZTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb2xpc3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvbGlzdCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUluZGV4ZXMgPSAoKSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgdG9kb2xpc3RbaV0uaW5kZXggPSBpICsgMTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlID0gKHBvc2l0aW9uKSA9PiB7XHJcbiAgdG9kb2xpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcclxuICB1cGRhdGVJbmRleGVzKCk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTi5zdHJpbmdpZnkodG9kb2xpc3QpKTtcclxufTtcclxuLy8gaW1wb3J0IHRvZG9saXN0IGZyb20gJy4vdG9kb0xpc3QuanMnO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGFkZCA9ICh0YXNrKSA9PiB7XHJcbi8vICAgdG9kb2xpc3QucHVzaCh7XHJcbi8vICAgICBkZXNjcmlwdGlvbjogdGFzay52YWx1ZSxcclxuLy8gICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbi8vICAgICBpbmRleDogdG9kb2xpc3QubGVuZ3RoICsgMSxcclxuLy8gICB9KTtcclxuXHJcbi8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTi5zdHJpbmdpZnkodG9kb2xpc3QpKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCB1cGRhdGUgPSAocG9zLCBrZXksIHZhbHVlKSA9PiB7XHJcbi8vICAgdG9kb2xpc3RbcG9zXVtrZXldID0gdmFsdWU7XHJcbi8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTi5zdHJpbmdpZnkodG9kb2xpc3QpKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCByZW1vdmUgPSAocG9zaXRpb24pID0+IHtcclxuLy8gICB0b2RvbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xyXG5cclxuLy8gICAvLyB1cGRhdGUgaW5kaWNlc1xyXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb2xpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuLy8gICAgIHRvZG9saXN0W2ldLmluZGV4ID0gaSArIDE7XHJcbi8vICAgfVxyXG4vLyAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvZG9saXN0KSk7XHJcbi8vIH07XHJcbiIsImltcG9ydCB0b2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDb21wbGV0ZWQgPSAocG9zKSA9PiB7XHJcbiAgdG9kb0xpc3RbcG9zXS5jb21wbGV0ZWQgPSAhdG9kb0xpc3RbcG9zXS5jb21wbGV0ZWQ7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoZXkgPSAocG9zKSA9PiB7XHJcbiAgdG9kb0xpc3RbcG9zXS5jb21wbGV0ZWQgPSAhdG9kb0xpc3RbcG9zXS5jb21wbGV0ZWQ7XHJcbn07IiwiZXhwb3J0IGRlZmF1bHQgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9saXN0JylcclxuICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9saXN0JykpXHJcbiAgOiBbXTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB0b2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJztcclxuaW1wb3J0IHtcclxuICBhZGQsIHVwZGF0ZSwgdXBkYXRlSW5kZXhlcywgcmVtb3ZlLFxyXG59IGZyb20gJy4vYWRkUmVtb3ZlLmpzJztcclxuaW1wb3J0IHsgc2V0Q29tcGxldGVkIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS1saXN0LmpzJztcclxuXHJcbmNvbnN0IHRvRG9Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1ib3gnKTtcclxubGV0IHRhc2tzID0gdG9kb0xpc3Q7XHJcblxyXG5jb25zdCByZW5kZXJUYXNrcyA9ICgpID0+IHtcclxuICB0b0RvQm94LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICBjb25zdCBoZWFkZXJMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgaGVhZGVyTGkuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWxpJyk7XHJcbiAgaGVhZGVyTGkuaW5uZXJIVE1MID0gJ1RvZGF5XFwncyBUbyBEbyA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXJvdGF0ZVwiPjwvaT4nO1xyXG5cclxuICBjb25zdCBhZGRUb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGFkZFRvTGlzdC5jbGFzc0xpc3QuYWRkKCdhZGQtdG8tbGlzdCcpO1xyXG5cclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgnYWRkLWxpc3QtZm9ybScpO1xyXG5cclxuICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBuZXdJdGVtLmlkID0gJ25ldy1pdGVtJztcclxuICBuZXdJdGVtLnR5cGUgPSAndGV4dCc7XHJcbiAgbmV3SXRlbS5wbGFjZWhvbGRlciA9ICdBZGQgdG8geW91ciBsaXN0JztcclxuICBuZXdJdGVtLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtYnRuJyk7XHJcbiAgc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0JztcclxuICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1c1wiPjwvaT4nO1xyXG5cclxuICB0b0RvQm94LmFwcGVuZENoaWxkKGhlYWRlckxpKTtcclxuICB0b0RvQm94LmFwcGVuZENoaWxkKGFkZFRvTGlzdCk7XHJcbiAgYWRkVG9MaXN0LmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQobmV3SXRlbSk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xyXG5cclxuICAvLyBBZGQgbGlzdCBpdGVtXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYWRkKG5ld0l0ZW0pO1xyXG4gICAgbmV3SXRlbS52YWx1ZSA9ICcnO1xyXG4gICAgcmVuZGVyVGFza3MoKTtcclxuICB9KTtcclxuXHJcbiAgdG9kb0xpc3Quc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbScpO1xyXG5cclxuICAgIGNvbnN0IGxpc3RDaGVja0FuZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxpc3RDaGVja0FuZE5hbWUuY2xhc3NMaXN0LmFkZCgnbGlzdC1jaGVjay1hbmQtbmFtZScpO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG5cclxuICAgIC8vIGNoZWNrYm94ICdjb21wbGV0ZWQnIGZ1bmN0aW9uYWxpdGllc1xyXG4gICAgaWYgKHRvZG9MaXN0W2ldLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIHNldENvbXBsZXRlZChpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1WYWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpdGVtVmFsSW5wdXQuY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtLXZhbHVlJyk7XHJcbiAgICBpdGVtVmFsSW5wdXQudmFsdWUgPSB0b2RvTGlzdFtpXS5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdCBsaXN0RWxpcHNlc0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGlzdEVsaXBzZXNCb3guY2xhc3NMaXN0LmFkZCgnbGlzdC1lbGxpcHNlcy1ib3gnKTtcclxuICAgIGxpc3RFbGlwc2VzQm94LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCI+PC9pPic7XHJcblxyXG4gICAgY29uc3QgbGlzdERlbEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGlzdERlbEJveC5jbGFzc0xpc3QuYWRkKCdsaXN0LWRlbC1ib3gnLCAnbm9uZScpO1xyXG4gICAgbGlzdERlbEJveC5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXRyYXNoLWNhblwiPjwvaT4nO1xyXG5cclxuICAgIC8vIENoYW5nZSBlbGxpcHNlcyB0byBkZWxldGVCdG4gd2hlbiB0aGUgaW5wdXQgZmllbGQgaXMgaW4gZm9jdXNcclxuICAgIGl0ZW1WYWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtZWxsaXBzZXMtYm94Jyk7XHJcbiAgICAgIGNvbnN0IGRlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1kZWwtYm94Jyk7XHJcblxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRvZG9MaXN0Lmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgICAgaWYgKGogPT09IGkpIHtcclxuICAgICAgICAgIGRlbHNbal0uY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xyXG4gICAgICAgICAgZGVsc1tqXS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcblxyXG4gICAgICAgICAgZWxzW2pdLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZWxzW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcclxuICAgICAgICAgIGRlbHNbal0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgICAgZGVsc1tqXS5jbGFzc0xpc3QuYWRkKCdub25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBVcGRhdGUgbGlzdCBpdGVtXHJcbiAgICBpdGVtVmFsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xyXG4gICAgICB1cGRhdGUoaSwgJ2Rlc2NyaXB0aW9uJywgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZGVsZXRlIGxpc3QgaXRlbVxyXG4gICAgbGlzdERlbEJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgcmVtb3ZlKGkpO1xyXG4gICAgICByZW5kZXJUYXNrcygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGlzdENoZWNrQW5kTmFtZS5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICBsaXN0Q2hlY2tBbmROYW1lLmFwcGVuZENoaWxkKGl0ZW1WYWxJbnB1dCk7XHJcblxyXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdENoZWNrQW5kTmFtZSk7XHJcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0RWxpcHNlc0JveCk7XHJcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0RGVsQm94KTtcclxuXHJcbiAgICB0b0RvQm94LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuICB9XHJcbiAgLy8gdHJ5XHJcbiAgY29uc3QgY2xlYXJMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgY2xlYXJMaS5jbGFzc0xpc3QuYWRkKCdjbGVhci1saScpO1xyXG4gIGNsZWFyTGkuaW5uZXJIVE1MID0gJ0NsZWFyIGFsbCBjb21wbGV0ZWQnO1xyXG4gIHRvRG9Cb3guYXBwZW5kQ2hpbGQoY2xlYXJMaSk7XHJcblxyXG4gIGNsZWFyTGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB0YXNrcyA9IHRvZG9MaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb21wbGV0ZWQgPT09IGZhbHNlKTtcclxuICAgIHRvZG9MaXN0LnNwbGljZSgwLCB0b2RvTGlzdC5sZW5ndGgsIC4uLnRhc2tzKTtcclxuICAgIHVwZGF0ZUluZGV4ZXMoKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XHJcbiAgICByZW5kZXJUYXNrcygpO1xyXG4gIH0pO1xyXG59O1xyXG5yZW5kZXJUYXNrcygpO1xyXG5cclxuLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbi8vIGltcG9ydCB0b2RvTGlzdCBmcm9tICcuL3RvZG9MaXN0LmpzJztcclxuLy8gaW1wb3J0IHsgYWRkLCB1cGRhdGUsIHJlbW92ZSB9IGZyb20gJy4vYWRkUmVtb3ZlLmpzJztcclxuXHJcbi8vIGNvbnN0IHRvRG9Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1ib3gnKTtcclxuXHJcbi8vIGNvbnN0IHJlbmRlclRhc2tzID0gKCkgPT4ge1xyXG4vLyAgIHRvRG9Cb3guaW5uZXJIVE1MID0gJyc7XHJcblxyXG4vLyAgIGNvbnN0IGhlYWRlckxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuLy8gICBoZWFkZXJMaS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbGknKTtcclxuLy8gICBoZWFkZXJMaS5pbm5lckhUTUwgPSAnVG9kYXlcXCdzIFRvIERvIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcm90YXRlXCI+PC9pPic7XHJcblxyXG4vLyAgIGNvbnN0IGFkZFRvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbi8vICAgYWRkVG9MaXN0LmNsYXNzTGlzdC5hZGQoJ2FkZC10by1saXN0Jyk7XHJcblxyXG4vLyAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbi8vICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdhZGQtbGlzdC1mb3JtJyk7XHJcblxyXG4vLyAgIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4vLyAgIG5ld0l0ZW0uaWQgPSAnbmV3LWl0ZW0nO1xyXG4vLyAgIG5ld0l0ZW0udHlwZSA9ICd0ZXh0JztcclxuLy8gICBuZXdJdGVtLnBsYWNlaG9sZGVyID0gJ0FkZCB0byB5b3VyIGxpc3QnO1xyXG4vLyAgIG5ld0l0ZW0uc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuXHJcbi8vICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbi8vICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idG4nKTtcclxuLy8gICBzdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnO1xyXG4vLyAgIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbHVzXCI+PC9pPic7XHJcblxyXG4vLyAgIHRvRG9Cb3guYXBwZW5kQ2hpbGQoaGVhZGVyTGkpO1xyXG4vLyAgIHRvRG9Cb3guYXBwZW5kQ2hpbGQoYWRkVG9MaXN0KTtcclxuLy8gICBhZGRUb0xpc3QuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbi8vICAgZm9ybS5hcHBlbmRDaGlsZChuZXdJdGVtKTtcclxuLy8gICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XHJcblxyXG4vLyAgIC8vIEFkZCBsaXN0IGl0ZW1cclxuLy8gICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICBhZGQobmV3SXRlbSk7XHJcbi8vICAgICBuZXdJdGVtLnZhbHVlID0gJyc7XHJcbi8vICAgICByZW5kZXJUYXNrcygpO1xyXG4vLyAgIH0pO1xyXG5cclxuLy8gICB0b2RvTGlzdC5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XHJcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC5sZW5ndGg7IGkgKz0gMSkge1xyXG4vLyAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4vLyAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtJyk7XHJcblxyXG4vLyAgICAgY29uc3QgbGlzdENoZWNrQW5kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgbGlzdENoZWNrQW5kTmFtZS5jbGFzc0xpc3QuYWRkKCdsaXN0LWNoZWNrLWFuZC1uYW1lJyk7XHJcblxyXG4vLyAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4vLyAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XHJcblxyXG4vLyAgICAgY29uc3QgaXRlbVZhbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuLy8gICAgIGl0ZW1WYWxJbnB1dC5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0tdmFsdWUnKTtcclxuLy8gICAgIGl0ZW1WYWxJbnB1dC52YWx1ZSA9IHRvZG9MaXN0W2ldLmRlc2NyaXB0aW9uO1xyXG5cclxuLy8gICAgIGNvbnN0IGxpc3RFbGlwc2VzQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBsaXN0RWxpcHNlc0JveC5jbGFzc0xpc3QuYWRkKCdsaXN0LWVsbGlwc2VzLWJveCcpO1xyXG4vLyAgICAgbGlzdEVsaXBzZXNCb3guaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtZWxsaXBzaXMtdmVydGljYWxcIj48L2k+JztcclxuXHJcbi8vICAgICBjb25zdCBsaXN0RGVsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBsaXN0RGVsQm94LmNsYXNzTGlzdC5hZGQoJ2xpc3QtZGVsLWJveCcsICdub25lJyk7XHJcbi8vICAgICBsaXN0RGVsQm94LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtdHJhc2gtY2FuXCI+PC9pPic7XHJcblxyXG4vLyAgICAgLy8gQ2hhbmdlIGVsbGlwc2VzIHRvIGRlbGV0ZUJ0biB3aGVuIHRoZSBpbnB1dCBmaWVsZCBpcyBpbiBmb2N1c1xyXG4vLyAgICAgaXRlbVZhbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgICAgICBjb25zdCBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1lbGxpcHNlcy1ib3gnKTtcclxuLy8gICAgICAgY29uc3QgZGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWRlbC1ib3gnKTtcclxuXHJcbi8vICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdG9kb0xpc3QubGVuZ3RoOyBqICs9IDEpIHtcclxuLy8gICAgICAgICBpZiAoaiA9PT0gaSkge1xyXG4vLyAgICAgICAgICAgZGVsc1tqXS5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XHJcbi8vICAgICAgICAgICBkZWxzW2pdLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuXHJcbi8vICAgICAgICAgICBlbHNbal0uY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICBlbHNbal0uY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xyXG4vLyAgICAgICAgICAgZGVsc1tqXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbi8vICAgICAgICAgICBkZWxzW2pdLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIC8vIFVwZGF0ZSBsaXN0IGl0ZW1cclxuLy8gICAgIGl0ZW1WYWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XHJcbi8vICAgICAgIHVwZGF0ZShpLCAnZGVzY3JpcHRpb24nLCBlLnRhcmdldC52YWx1ZSk7XHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICAvLyBkZWxldGUgbGlzdCBpdGVtXHJcbi8vICAgICBsaXN0RGVsQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgICAgICByZW1vdmUoaSk7XHJcbi8vICAgICAgIHJlbmRlclRhc2tzKCk7XHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICBsaXN0Q2hlY2tBbmROYW1lLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuLy8gICAgIGxpc3RDaGVja0FuZE5hbWUuYXBwZW5kQ2hpbGQoaXRlbVZhbElucHV0KTtcclxuXHJcbi8vICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0Q2hlY2tBbmROYW1lKTtcclxuLy8gICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RFbGlwc2VzQm94KTtcclxuLy8gICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3REZWxCb3gpO1xyXG5cclxuLy8gICAgIHRvRG9Cb3guYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xyXG4vLyAgIH1cclxuLy8gfTtcclxuLy8gcmVuZGVyVGFza3MoKTtcclxuXHJcbi8vIGNvbnN0IGNsZWFyTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4vLyBjbGVhckxpLmNsYXNzTGlzdC5hZGQoJ2NsZWFyLWxpJyk7XHJcbi8vIGNsZWFyTGkuaW5uZXJIVE1MID0gJ0NsZWFyIGFsbCBjb21wbGV0ZWQnO1xyXG4vLyB0b0RvQm94LmFwcGVuZENoaWxkKGNsZWFyTGkpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=