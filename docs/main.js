/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.board-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 160px;
}


.board {
    display: grid;
    /* Hard coded sizes to avoid grow*/

    min-width: calc(var(--tile-sz) * 10 + 2px);
    min-height: calc(var(--tile-sz) * 10 + 2px);

    max-width: calc(var(--tile-sz) * 10 + 2px);
    max-height: calc(var(--tile-sz) * 10 + 2px);

    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(10, 1fr);

    border: 1px solid var(--color-gray-light);
}


.tile {

    --color-invis: var(--color-black);
    --color-vis: var(--color-gray-dark);
    --color-ship: var(--color-blue);
    --color-hit: red;
    --color-sunk: #5f0505;

    border: 1px solid var(--color-gray-light);

    &.ship {
        background-color: var(--color-ship);
    }

    &.invisible {
        background-color: var(--color-invis);
    }

    &.visible {
        background-color: var(--color-vis);
    }

    &.ship-hit {
        background-color: var(--color-hit);
    }

    &.ship-sunk {
        background-color: var(--color-sunk);
    }
}

@media only screen and (max-width: 768px) {
    .board-wrapper {
        flex-direction: column;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,UAAU;AACd;;;AAGA;IACI,aAAa;IACb,kCAAkC;;IAElC,0CAA0C;IAC1C,2CAA2C;;IAE3C,0CAA0C;IAC1C,2CAA2C;;IAE3C,mCAAmC;IACnC,sCAAsC;;IAEtC,yCAAyC;AAC7C;;;AAGA;;IAEI,iCAAiC;IACjC,mCAAmC;IACnC,+BAA+B;IAC/B,gBAAgB;IAChB,qBAAqB;;IAErB,yCAAyC;;IAEzC;QACI,mCAAmC;IACvC;;IAEA;QACI,oCAAoC;IACxC;;IAEA;QACI,kCAAkC;IACtC;;IAEA;QACI,kCAAkC;IACtC;;IAEA;QACI,mCAAmC;IACvC;AACJ;;AAEA;IACI;QACI,sBAAsB;IAC1B;AACJ","sourcesContent":[".board-wrapper {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 160px;\r\n}\r\n\r\n\r\n.board {\r\n    display: grid;\r\n    /* Hard coded sizes to avoid grow*/\r\n\r\n    min-width: calc(var(--tile-sz) * 10 + 2px);\r\n    min-height: calc(var(--tile-sz) * 10 + 2px);\r\n\r\n    max-width: calc(var(--tile-sz) * 10 + 2px);\r\n    max-height: calc(var(--tile-sz) * 10 + 2px);\r\n\r\n    grid-template-rows: repeat(10, 1fr);\r\n    grid-template-columns: repeat(10, 1fr);\r\n\r\n    border: 1px solid var(--color-gray-light);\r\n}\r\n\r\n\r\n.tile {\r\n\r\n    --color-invis: var(--color-black);\r\n    --color-vis: var(--color-gray-dark);\r\n    --color-ship: var(--color-blue);\r\n    --color-hit: red;\r\n    --color-sunk: #5f0505;\r\n\r\n    border: 1px solid var(--color-gray-light);\r\n\r\n    &.ship {\r\n        background-color: var(--color-ship);\r\n    }\r\n\r\n    &.invisible {\r\n        background-color: var(--color-invis);\r\n    }\r\n\r\n    &.visible {\r\n        background-color: var(--color-vis);\r\n    }\r\n\r\n    &.ship-hit {\r\n        background-color: var(--color-hit);\r\n    }\r\n\r\n    &.ship-sunk {\r\n        background-color: var(--color-sunk);\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .board-wrapper {\r\n        flex-direction: column;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/pre.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/pre.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ask-btn-wrapper {
    display: flex;
    gap: 50px;
    margin-right: 10px;
}


.pre-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 10%;
}

.pre-btn-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 60px;
    gap: 60px;
}

.ships-wrapper {
    --color-ship: var(--color-blue);

    display: flex;
    width: 400px;
    flex-wrap: wrap;
    gap: 1rem;

    .sz-1 {
        width: calc(var(--tile-sz) * 1);
        height: var(--tile-sz);
        border: 2px solid var(--color-ship);
    }

    .sz-1.vert {
        width: var(--tile-sz);
        height: calc(var(--tile-sz) * 1);
        border: 2px solid var(--color-ship);
    }

    .sz-2 {
        width: calc(var(--tile-sz) * 2);
        height: var(--tile-sz);
        border: 2px solid var(--color-ship);
    }

    .sz-2.vert {
        width: var(--tile-sz);
        height: calc(var(--tile-sz) * 2);
        border: 2px solid var(--color-ship);
    }

    .sz-3 {
        width: calc(var(--tile-sz) * 3);
        height: var(--tile-sz);
        border: 2px solid var(--color-ship);
    }

    .sz-3.vert {
        width: var(--tile-sz);
        height: calc(var(--tile-sz) * 3);
        border: 2px solid var(--color-ship);
    }

    .sz-4 {
        width: calc(var(--tile-sz) * 4);
        height: var(--tile-sz);
        border: 2px solid var(--color-ship);

    }

    .sz-4.vert {
        width: var(--tile-sz);
        height: calc(var(--tile-sz) * 4);
        border: 2px solid var(--color-ship);

    }

    .sz-5 {
        width: calc(var(--tile-sz) * 5);
        height: var(--tile-sz);
        border: 2px solid var(--color-ship);
    }

    .sz-5.vert {
        width: var(--tile-sz);
        height: calc(var(--tile-sz) * 5);
        border: 2px solid var(--color-ship);
    }
}

@media only screen and (max-width: 768px) {
    .pre-wrapper {
        flex-direction: column;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles/pre.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,SAAS;IACT,kBAAkB;AACtB;;;AAGA;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,+BAA+B;;IAE/B,aAAa;IACb,YAAY;IACZ,eAAe;IACf,SAAS;;IAET;QACI,+BAA+B;QAC/B,sBAAsB;QACtB,mCAAmC;IACvC;;IAEA;QACI,qBAAqB;QACrB,gCAAgC;QAChC,mCAAmC;IACvC;;IAEA;QACI,+BAA+B;QAC/B,sBAAsB;QACtB,mCAAmC;IACvC;;IAEA;QACI,qBAAqB;QACrB,gCAAgC;QAChC,mCAAmC;IACvC;;IAEA;QACI,+BAA+B;QAC/B,sBAAsB;QACtB,mCAAmC;IACvC;;IAEA;QACI,qBAAqB;QACrB,gCAAgC;QAChC,mCAAmC;IACvC;;IAEA;QACI,+BAA+B;QAC/B,sBAAsB;QACtB,mCAAmC;;IAEvC;;IAEA;QACI,qBAAqB;QACrB,gCAAgC;QAChC,mCAAmC;;IAEvC;;IAEA;QACI,+BAA+B;QAC/B,sBAAsB;QACtB,mCAAmC;IACvC;;IAEA;QACI,qBAAqB;QACrB,gCAAgC;QAChC,mCAAmC;IACvC;AACJ;;AAEA;IACI;QACI,sBAAsB;IAC1B;AACJ","sourcesContent":[".ask-btn-wrapper {\r\n    display: flex;\r\n    gap: 50px;\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n.pre-wrapper {\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: center;\r\n    gap: 10%;\r\n}\r\n\r\n.pre-btn-wrapper {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    margin-top: 60px;\r\n    gap: 60px;\r\n}\r\n\r\n.ships-wrapper {\r\n    --color-ship: var(--color-blue);\r\n\r\n    display: flex;\r\n    width: 400px;\r\n    flex-wrap: wrap;\r\n    gap: 1rem;\r\n\r\n    .sz-1 {\r\n        width: calc(var(--tile-sz) * 1);\r\n        height: var(--tile-sz);\r\n        border: 2px solid var(--color-ship);\r\n    }\r\n\r\n    .sz-1.vert {\r\n        width: var(--tile-sz);\r\n        height: calc(var(--tile-sz) * 1);\r\n        border: 2px solid var(--color-ship);\r\n    }\r\n\r\n    .sz-2 {\r\n        width: calc(var(--tile-sz) * 2);\r\n        height: var(--tile-sz);\r\n        border: 2px solid var(--color-ship);\r\n    }\r\n\r\n    .sz-2.vert {\r\n        width: var(--tile-sz);\r\n        height: calc(var(--tile-sz) * 2);\r\n        border: 2px solid var(--color-ship);\r\n    }\r\n\r\n    .sz-3 {\r\n        width: calc(var(--tile-sz) * 3);\r\n        height: var(--tile-sz);\r\n        border: 2px solid var(--color-ship);\r\n    }\r\n\r\n    .sz-3.vert {\r\n        width: var(--tile-sz);\r\n        height: calc(var(--tile-sz) * 3);\r\n        border: 2px solid var(--color-ship);\r\n    }\r\n\r\n    .sz-4 {\r\n        width: calc(var(--tile-sz) * 4);\r\n        height: var(--tile-sz);\r\n        border: 2px solid var(--color-ship);\r\n\r\n    }\r\n\r\n    .sz-4.vert {\r\n        width: var(--tile-sz);\r\n        height: calc(var(--tile-sz) * 4);\r\n        border: 2px solid var(--color-ship);\r\n\r\n    }\r\n\r\n    .sz-5 {\r\n        width: calc(var(--tile-sz) * 5);\r\n        height: var(--tile-sz);\r\n        border: 2px solid var(--color-ship);\r\n    }\r\n\r\n    .sz-5.vert {\r\n        width: var(--tile-sz);\r\n        height: calc(var(--tile-sz) * 5);\r\n        border: 2px solid var(--color-ship);\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .pre-wrapper {\r\n        flex-direction: column;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/shared.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/shared.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Raleway-VariableFont_wght.ttf */ "./src/assets/Raleway-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    border: 0;
    box-sizing: border-box;
}

@font-face {
    font-family: 'Raleway';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

:root {
    --color-black: #191919;
    --color-gray-dark: #333333;
    --color-gray-light: #4d4d4d;
    --color-blue: #2A86FF;
    --tile-sz: 40px;


    background-color: var(--color-black);
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 24px;
    color: white;

}

header {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 65px;
}

main {
    display: flex;
    flex-direction: column;
    margin-inline: 10%;
    align-items: center;
}

button {
    background-color: var(--color-black);
    border: 2px solid var(--color-gray-dark);
    border-radius: 8px;
    font-family: inherit;
    font-size: 1.2rem;
    padding: .6em;
    color: inherit;
}

button:hover {
    background-color: var(--color-gray-dark);
    border-color: var(--color-gray-light);
}
#text-area {
    font-size: 2rem;
}









`, "",{"version":3,"sources":["webpack://./src/styles/shared.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,4CAAmD;AACvD;;AAEA;IACI,sBAAsB;IACtB,0BAA0B;IAC1B,2BAA2B;IAC3B,qBAAqB;IACrB,eAAe;;;IAGf,oCAAoC;IACpC,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;IACf,YAAY;;AAEhB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;IACpC,wCAAwC;IACxC,kBAAkB;IAClB,oBAAoB;IACpB,iBAAiB;IACjB,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,wCAAwC;IACxC,qCAAqC;AACzC;AACA;IACI,eAAe;AACnB","sourcesContent":["* {\r\n    margin: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Raleway';\r\n    src: url('../assets/Raleway-VariableFont_wght.ttf');\r\n}\r\n\r\n:root {\r\n    --color-black: #191919;\r\n    --color-gray-dark: #333333;\r\n    --color-gray-light: #4d4d4d;\r\n    --color-blue: #2A86FF;\r\n    --tile-sz: 40px;\r\n\r\n\r\n    background-color: var(--color-black);\r\n    font-family: 'Raleway';\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    color: white;\r\n\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: center;\r\n    text-align: center;\r\n    align-items: center;\r\n    margin-top: 30px;\r\n    margin-bottom: 65px;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-inline: 10%;\r\n    align-items: center;\r\n}\r\n\r\nbutton {\r\n    background-color: var(--color-black);\r\n    border: 2px solid var(--color-gray-dark);\r\n    border-radius: 8px;\r\n    font-family: inherit;\r\n    font-size: 1.2rem;\r\n    padding: .6em;\r\n    color: inherit;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: var(--color-gray-dark);\r\n    border-color: var(--color-gray-light);\r\n}\r\n#text-area {\r\n    font-size: 2rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/pre.css":
/*!****************************!*\
  !*** ./src/styles/pre.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pre_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./pre.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/pre.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_pre_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_pre_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_pre_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_pre_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/shared.css":
/*!*******************************!*\
  !*** ./src/styles/shared.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_shared_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./shared.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/shared.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_shared_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_shared_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_shared_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_shared_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AVAILABLE_SHIPS: () => (/* binding */ AVAILABLE_SHIPS),
/* harmony export */   ComputerPlayer: () => (/* binding */ ComputerPlayer),
/* harmony export */   GLOBALS: () => (/* binding */ GLOBALS),
/* harmony export */   Game: () => (/* binding */ Game),
/* harmony export */   GameBoard: () => (/* binding */ GameBoard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });

class Ship {
    /**
     * @constructor
     * @param {number} size 
     */
    constructor(size) {
        this.size = size;
        this.hits = new Array(size).fill(false);
    }

    /**
     * Hit ship at it's position 'i'.
     * @param {number} i
     * @returns {string} 
     */
    hit(i) {
        this.hits[i] = true;
    }

    /**
     * Returns whether the ship is hit at it's position 'i'.
     * @param {number} i 
     * @returns {boolean}
     */
    isHit(i) {
        return this.hits[i];
    }

    isSunk() {
        return this.hits.every((i) => { return i; });
    }
}

const GLOBALS = {
    BSIZE: 10,
    UNSEEN_EMPTY: 0, UNSEEN_SHIP: 1, SEEN_EMPTY: 2, SEEN_SHIP: 3, SUNK_SHIP: 4,
    HORIZONTAL: 6, VERTICAL: 9,
};


class GameBoard {

    /**
     * @typedef {{ship: Ship, x: number, y: number, direction: number}} ShipStat
     */

    constructor() {
        this.seen = new Array(GLOBALS.BSIZE).fill(null).map(() => new Array(GLOBALS.BSIZE).fill(false));
        /**
         * @type ShipStat
         */
        this.shipStats = [];
    }

    /**
     * Returns whether x,y are in board's bound or not.
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean}
     */
    coordInBound(x, y) {
        return x >= 0 && x < GLOBALS.BSIZE && y >= 0 && y < GLOBALS.BSIZE;
    }

    /**
     * Returns all the positions (x, y) the ship has occupied.
     * @param {ShipStat} shipStat 
     * @returns {{x: number, y:number}[]}
     */
    shipPositions(shipStat) {
        const positions = [];
        for (let i = 0; i < shipStat.ship.size; ++i) {
            const xIdx = shipStat.direction === GLOBALS.HORIZONTAL ?
                shipStat.x + i :
                shipStat.x;
            const yIdx = shipStat.direction === GLOBALS.VERTICAL ?
                shipStat.y + i :
                shipStat.y;
            positions.push({ x: xIdx, y: yIdx });
        }
        return positions;
    }

    getShipStats() {
        return this.shipStats;
    }

    /**
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean}
     */
    isSeen(x, y) {
        return this.seen[y][x];
    }

    /**
     * Returns whether specified coord is occupied by a ship or not
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean}
     */
    isOccupied(x, y) {
        return this.coordInBound(x, y) &&
            this.shipStats.some((st) => {
                return this.shipPositions(st).some((pos) => {
                    return x == pos.x && y == pos.y;
                });
            });
    }

    /**
     * Returns whether a specified coord or its neighbourhood 
     * is occupied by a ship or not
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean}
     */
    isOccupiedNearby(x, y) {
        return this.shipStats.some((st) => {
            const positions = this.shipPositions(st);
            for (const pos of positions) {
                // This is somehow bloated and clean at the same time
                if (
                    pos.x === x && pos.y === y ||
                    this.coordInBound(pos.x - 1, pos.y) && pos.x - 1 === x && pos.y === y ||
                    this.coordInBound(pos.x + 1, pos.y) && pos.x + 1 === x && pos.y === y ||
                    this.coordInBound(pos.x, pos.y - 1) && pos.x === x && pos.y - 1 === y ||
                    this.coordInBound(pos.x, pos.y + 1) && pos.x === x && pos.y + 1 === y ||
                    this.coordInBound(pos.x - 1, pos.y - 1) && pos.x - 1 === x && pos.y - 1 === y ||
                    this.coordInBound(pos.x - 1, pos.y + 1) && pos.x - 1 === x && pos.y + 1 === y ||
                    this.coordInBound(pos.x + 1, pos.y - 1) && pos.x + 1 === x && pos.y - 1 === y ||
                    this.coordInBound(pos.x + 1, pos.y + 1) && pos.x + 1 === x && pos.y + 1 === y
                ) {
                    return true;
                }
            }
            return false;
        });
    }


    /**
     * Places a ship in the board, horizontally.
     * @param {Ship} ship 
     * @param {number} x 
     * @param {number} y 
     */
    placeShipHorizontal(ship, x, y) {
        const positions = this.shipPositions({ ship, x, y, direction: GLOBALS.HORIZONTAL });

        if (positions.some((p) => !this.coordInBound(p.x, p.y))) {
            throw new RangeError("Ship placement out of bounds");
        }

        if (positions.some((p) => this.isOccupiedNearby(p.x, p.y))) {
            throw new RangeError("Ship cannot be placed");
        }
        this.shipStats.push({
            ship, x, y, direction: GLOBALS.HORIZONTAL
        });
    }

    /**
     * Places a ship in the board, vertically.
     * @param {Ship} ship 
     * @param {number} x 
     * @param {number} y 
     */
    placeShipVertical(ship, x, y) {
        const positions = this.shipPositions({ ship, x, y, direction: GLOBALS.VERTICAL });

        if (positions.some((p) => !this.coordInBound(p.x, p.y))) {
            throw new RangeError("Ship placement out of bounds");
        }

        if (positions.some((p) => this.isOccupiedNearby(p.x, p.y))) {
            throw new RangeError("Ship cannot be placed");
        }

        this.shipStats.push({
            ship, x, y, direction: GLOBALS.VERTICAL
        });
    }


    /**
     * Removes the ship in the specified coords Returns 
     * the size of the ship if it existed, else returns -1.
     * @param {number} x 
     * @param {number} y 
     * @returns {number}
     */
    removeShip(x, y) {

        // Essential because mostly called in UI pre-game
        x = parseInt(x);
        y = parseInt(y);

        for (const shipStat of this.shipStats) {
            const positions = this.shipPositions(shipStat);

            if (positions.some((p) => p.x === x && p.y === y)) {
                const shipIndex = this.shipStats.indexOf(shipStat);

                if (shipIndex < 0) {
                    throw new Error("Ship index should have been existent since its pos is already found");
                }

                // parseInt -> force copy
                const shipSize = parseInt(shipStat.ship.size);
                this.shipStats.splice(shipIndex, 1);
                return shipSize;
            }
        }

        return -1;
    }

    /**
     * Hit ship in the specified coords if there is one there.
     * @param {number} x 
     * @param {number} y 
     */
    receiveAttack(x, y) {
        // Make tile seen
        this.seen[y][x] = true;

        // Find if tile is on a ship, if so send hit if its not already hit
        for (const shipStat of this.shipStats) {
            const positions = this.shipPositions(shipStat);
            for (let i = 0; i < positions.length; ++i) {
                if (positions[i].x === x &&
                    positions[i].y === y &&
                    !shipStat.ship.isHit(i)
                ) {
                    shipStat.ship.hit(i);
                    break;
                }
            }
        }
    }

    /**
     * Returns whether all ships on the board are sunk
     * @returns {boolean}
     */
    allSunk() {
        return this.shipStats.every((st) => {
            return st.ship.isSunk();
        });
    }


    /**
     * Returns a represantation of the board in its current status.
     * @returns {number[][]}
     */
    board() {
        const board = new Array(GLOBALS.BSIZE).fill(null).map(() => new Array(GLOBALS.BSIZE).fill(GLOBALS.UNSEEN_EMPTY));

        for (let i = 0; i < GLOBALS.BSIZE; ++i)
            for (let j = 0; j < GLOBALS.BSIZE; ++j)
                board[i][j] = this.seen[i][j] ? GLOBALS.SEEN_EMPTY : GLOBALS.UNSEEN_EMPTY;

        for (const ship_stat of this.shipStats) {
            for (let i = 0; i < ship_stat.ship.size; ++i) {
                const xIdx = ship_stat.direction === GLOBALS.HORIZONTAL ?
                    ship_stat.x + i :
                    ship_stat.x;
                const yIdx = ship_stat.direction === GLOBALS.VERTICAL ?
                    ship_stat.y + i :
                    ship_stat.y;

                if (ship_stat.ship.isSunk()) {
                    board[yIdx][xIdx] = GLOBALS.SUNK_SHIP;
                } else {
                    board[yIdx][xIdx] = this.seen[yIdx][xIdx] ? GLOBALS.SEEN_SHIP : GLOBALS.UNSEEN_SHIP;
                }
            }
        }

        return board;
    }

    /**
     * @param {number} x 
     * @param {number} y 
     * @returns 
     */
    tileAt(x, y) {
        return this.board()[y][x];
    }
}

const AVAILABLE_SHIPS = {
    carrier: {
        size: 5,
        count: 1,
    },
    battleship: {
        size: 4,
        count: 2,
    },
    submarine: {
        size: 3,
        count: 2,
    },
    destroyer: {
        size: 2,
        count: 3,
    },
    scouter: {
        size: 1,
        count: 2,
    },
};

class Player {
    constructor() {
        this.gameBoard = new GameBoard();
    }

    board() {
        return this.gameBoard.board();
    }

    /**
     * Populates the player's board with random positions.
     */
    populateRandom() {
        this.gameBoard = new GameBoard();

        let pos_x, pos_y;
        let direction = GLOBALS.HORIZONTAL;


        for (const [shipName, ship] of Object.entries(AVAILABLE_SHIPS)) {
            for (let i = 0; i < ship.count; ++i) {
                // Create ship before loop!
                const newShip = new Ship(ship.size);
                let done = false;

                while (!done) {

                    pos_x = Math.floor(Math.random() * 10);
                    pos_y = Math.floor(Math.random() * 10);

                    if (direction === GLOBALS.HORIZONTAL) {
                        try {
                            this.gameBoard.placeShipHorizontal(newShip, pos_x, pos_y);
                            done = true;
                        }
                        catch (err) {
                            direction = GLOBALS.VERTICAL;
                            done = false;
                        }
                    } else {
                        try {
                            this.gameBoard.placeShipVertical(newShip, pos_x, pos_y);
                            done = true;
                        }
                        catch (err) {
                            direction = GLOBALS.HORIZONTAL;
                            done = false;
                        }
                    }
                }

            }
        }

    }
}


class ComputerPlayer extends Player {
    constructor() {
        super();
    }

    /**
     * Returns a random hit position on its argument.
     * @param {GameBoard} enemyBoard 
     * @returns {{x: number, y: number}}
     */
    getRandomHitPos(enemyBoard) {
        let pos_x, pos_y;

        while (true) {

            pos_x = Math.floor(Math.random() * 10);
            pos_y = Math.floor(Math.random() * 10);

            if (!enemyBoard.isSeen(pos_x, pos_y)) break;
        }

        return { x: pos_x, y: pos_y };
    }
}


class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currPlayer = player1;
        this.winner = null;
    }

    isOver() {
        return this.winner !== null;
    }

    /**
     * Attempts to hit a specified position on enemy player's board,
     * Returns whether the hit succeded or not (success in this context 
     * means a registered hit, whether it hit a ship or not.)
     * @param {number} x 
     * @param {number} y 
     * @param {Player} enemyPlayer 
     * @returns {boolean}
     */
    hitTile(x, y, enemyPlayer) {

        // DOM interacts with this function
        x = parseInt(x);
        y = parseInt(y);

        if (this.currPlayer === enemyPlayer || enemyPlayer.gameBoard.isSeen(x, y)) {
            return false;
        }

        // Sketchy but feasible rn
        const humanPlayer = enemyPlayer === this.player1 ? this.player2 : this.player1;

        enemyPlayer.gameBoard.receiveAttack(x, y);

        if (enemyPlayer.gameBoard.allSunk()) {
            this.winner = humanPlayer;
            return true;
        }

        this.currPlayer = enemyPlayer;
        if (enemyPlayer instanceof ComputerPlayer) {
            const attackPos = enemyPlayer.getRandomHitPos(humanPlayer.gameBoard);
            humanPlayer.gameBoard.receiveAttack(attackPos.x, attackPos.y);
            if (humanPlayer.gameBoard.allSunk()) {
                this.winner = enemyPlayer;
            }
            this.currPlayer = humanPlayer;
        }

        return true;
    }


}



/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UI: () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");



// Game materials 

let p1 = new _game_js__WEBPACK_IMPORTED_MODULE_0__.Player();
let p2 = new _game_js__WEBPACK_IMPORTED_MODULE_0__.ComputerPlayer();

const main = document.querySelector("main");
const body = document.querySelector("body");

let board1;
let board2;


const game = new _game_js__WEBPACK_IMPORTED_MODULE_0__.Game(p1, p2);


// Text area for everything
const textArea = document.querySelector("#text-area");

const extractTileClass = function (cList) {
    const tileRegExp = /tile \d+-\d+/;
    const matches = tileRegExp.exec(cList.toString());
    return matches[0];
}

const renderBoard = function (domBoard, player, visible) {
    let domTiles = Array.from(domBoard.childNodes).filter((node) => {
        if (node.classList) {
            return true;
        }
        return false;
    });

    const gameBoard = player.board();

    for (let i = 0; i < _game_js__WEBPACK_IMPORTED_MODULE_0__.GLOBALS.BSIZE; ++i)
        for (let j = 0; j < _game_js__WEBPACK_IMPORTED_MODULE_0__.GLOBALS.BSIZE; ++j) {

            let idx = i * _game_js__WEBPACK_IMPORTED_MODULE_0__.GLOBALS.BSIZE + j;
            domTiles[idx].classList = extractTileClass(domTiles[idx].classList);

            switch (gameBoard[i][j]) {
                case _game_js__WEBPACK_IMPORTED_MODULE_0__.GLOBALS.UNSEEN_EMPTY:
                    domTiles[idx].classList.add("invisible");
                    break;
                case _game_js__WEBPACK_IMPORTED_MODULE_0__.GLOBALS.SEEN_EMPTY:
                    domTiles[idx].classList.add("visible");
                    break;
                case _game_js__WEBPACK_IMPORTED_MODULE_0__.GLOBALS.UNSEEN_SHIP:
                    // Only different case for player and enemy boards
                    if (visible) {
                        domTiles[idx].classList.add("ship");
                    } else {
                        domTiles[idx].classList.add("invisible");
                    }
                    break;
                case _game_js__WEBPACK_IMPORTED_MODULE_0__.GLOBALS.SEEN_SHIP:
                    domTiles[idx].classList.add("ship-hit");
                    break;
                case _game_js__WEBPACK_IMPORTED_MODULE_0__.GLOBALS.SUNK_SHIP:
                    domTiles[idx].classList.add("ship-sunk");
                    break;
                default:
                    throw new Error("Game Board tile unknown!");
            }
        }
}

const Handlers = function () {

    const TILE_SIZE = 40;

    const tileRotate = function (e) {
        this.classList.toggle("vert");
    }

    const shipDragStart = function (ev) {
        ev.dataTransfer.setData("application/bship1", ev.target.classList);

        const shipRect = this.getBoundingClientRect();
        const shipSize = /sz-(\d+)/.exec(ev.target.classList.toString())[1];
        const isVert = /vert/.test(this.classList.toString());
        const grabbedTile = isVert ?
            Math.floor((ev.pageY - shipRect.y) / TILE_SIZE) :
            Math.floor((ev.pageX - shipRect.x) / TILE_SIZE)
            ;

        ev.dataTransfer.setData("application/bship1", ev.target.id);
        ev.dataTransfer.setData("application/bship2", shipSize);
        ev.dataTransfer.setData("application/bship3", grabbedTile);
        ev.dataTransfer.setData("application/bship4", isVert);
    }

    const boardDragOver = function (ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
    }

    const attachTileListeners = function (domBoard) {
        for (const tile of domBoard.childNodes) {
            tile.addEventListener("click", Handlers.tileHandler);
        }
    }

    const boardDrop = function (ev, gameBoard) {

        const firstTile = this.firstChild;
        const shipID = ev.dataTransfer.getData("application/bship1");
        const shipSize = parseInt(ev.dataTransfer.getData("application/bship2"));
        const grabbedTile = ev.dataTransfer.getData("application/bship3");
        const isVert = ev.dataTransfer.getData("application/bship4") === 'true';

        const zeroRect = firstTile.getBoundingClientRect();
        const selectedRect = ev.target.getBoundingClientRect();

        let tileX = (selectedRect.x - zeroRect.x) / TILE_SIZE;
        let tileY = (selectedRect.y - zeroRect.y) / TILE_SIZE;

        if (isVert) {
            tileY -= grabbedTile;
        } else {
            tileX -= grabbedTile;
        }

        // good ol' bound checks
        // if (tileX < 0 || tileX >= GLOBALS.BSIZE || tileY < 0 || tileY >= GLOBALS.BSIZE) {
        //     return;
        // };



        try {
            if (isVert) {
                gameBoard.placeShipVertical(new _game_js__WEBPACK_IMPORTED_MODULE_0__.Ship(shipSize), tileX, tileY);
            } else {
                gameBoard.placeShipHorizontal(new _game_js__WEBPACK_IMPORTED_MODULE_0__.Ship(shipSize), tileX, tileY);
            }
        }
        catch (e) {
            return undefined;
        }

        return shipID;
    }



    // Bloated implementation
    const removeBlock = function (e, gameBoard, x, y) {

        let tileClass, regMatches;

        if (e) {
            tileClass = extractTileClass(e.target.classList);
            regMatches = /tile (\d+)-(\d+)/.exec(tileClass);
        }

        const tileX = x ?? regMatches[1];
        const tileY = y ?? regMatches[2];


        const removedShipSz = gameBoard.removeShip(tileX, tileY);
        if (removedShipSz < 0) {
            return;
        }

        const shipsDiv = document.querySelector(".ships-wrapper");
        let emptyID = null;



        const shipsIDS = Array.from(shipsDiv.childNodes).map((cn) => cn.id)
            .map((i) => parseInt(/ship-(\d+)/.exec(i)[1]))
            .sort();


        for (let i = 0; i < shipsIDS.length; ++i) {
            if (shipsIDS[i] !== i) {
                emptyID = i;
                break;
            }
        }

        if (emptyID === null) {
            emptyID = shipsIDS.length;
        }

        const newShip = document.createElement("div");
        const className = "sz-" + removedShipSz;

        newShip.classList.add(className);
        newShip.id = "ship-" + emptyID;
        newShip.draggable = true;
        newShip.addEventListener("click", Handlers.tileRotate);
        newShip.addEventListener("dragstart", Handlers.shipDragStart);

        shipsDiv.appendChild(newShip);
    }

    const tileHandler = function (e) {

        if (game.isOver()) {
            return;
        }

        let reg = /\d+-\d+/;
        const cList = Array.from(e.currentTarget.classList);
        const parentDomBoard = e.currentTarget.parentElement;

        const pos = cList.find((c) => reg.test(c));

        const x = pos.charAt(0);
        const y = pos.charAt(2);

        const secondPlayerPC = p2 instanceof _game_js__WEBPACK_IMPORTED_MODULE_0__.ComputerPlayer;

        if (parentDomBoard.id === board2.id && game.currPlayer === p1) {
            if (game.hitTile(x, y, p2)) {
                renderBoard(board1, p1, secondPlayerPC);
                renderBoard(board2, p2, !secondPlayerPC);
            }
        }

        if (!secondPlayerPC && parentDomBoard.id === board1.id && game.currPlayer === p2) {
            if (game.hitTile(x, y, p1)) {
                renderBoard(board1, p1, true);
                renderBoard(board2, p2, false);
            }
        }

        if (game.isOver()) {
            textArea.textContent = (game.winner === p1 ? "P1" : "P2") + " won!";
        }

        if (!secondPlayerPC) {
            let b1Clone = board1.cloneNode(true);
            let b2Clone = board2.cloneNode(true);

            main.removeChild(main.firstChild);
            textArea.textContent = "Pass the game over. Waiting 2s.";

            setTimeout(() => {
                UI.resetMain(b1Clone, b2Clone);
                textArea.textContent = (game.currPlayer === p1 ? "P1" : "P2") + "'s turn";
            }, 2000);
        }
    }

    return {
        tileRotate,
        shipDragStart,
        boardDragOver,
        boardDrop,
        removeBlock,
        tileHandler,
        attachTileListeners
    };
}();

const UI = function () {

    const renderPreSelection = function (domBoard, player) {
        const shipsDiv = document.createElement("div");
        let idCounter = 0;
        shipsDiv.classList = "ships-wrapper";

        for (const [shipName, ship] of Object.entries(_game_js__WEBPACK_IMPORTED_MODULE_0__.AVAILABLE_SHIPS)) {
            for (let i = 0; i < ship.count; ++i) {
                const newShip = document.createElement("div");
                const className = "sz-" + ship.size;

                newShip.classList.add(className);
                newShip.id = "ship-" + idCounter;
                idCounter += 1;
                newShip.draggable = true;

                newShip.addEventListener("click", Handlers.tileRotate);
                newShip.addEventListener("dragstart", Handlers.shipDragStart);
                shipsDiv.appendChild(newShip);
            }
        }

        domBoard.addEventListener("dragover", Handlers.boardDragOver);
        domBoard.addEventListener("drop", (e) => {
            const shipID = Handlers.boardDrop.call(e.currentTarget, e, player.gameBoard);
            if (shipID !== undefined) {
                shipsDiv.removeChild(document.getElementById(shipID));
            };
            renderBoard(domBoard, player, true);
        });
        domBoard.addEventListener("click", (e) => {
            Handlers.removeBlock.call(e.currentTarget, e, player.gameBoard);
            renderBoard(domBoard, player, true);
        });

        const preWrapper = document.createElement("div");
        preWrapper.classList = "pre-wrapper";

        preWrapper.appendChild(shipsDiv);
        preWrapper.appendChild(domBoard);

        main.prepend(preWrapper);
    }

    const renderPreBtns = function () {
        const preButtonsWrapper = document.createElement("section");
        preButtonsWrapper.classList = "pre-btn-wrapper";

        const resetBtn = document.createElement("button");
        resetBtn.id = "reset-btn-pre";
        resetBtn.textContent = "Reset";

        const populateBtn = document.createElement("button");
        populateBtn.id = "populate-btn-pre";
        populateBtn.textContent = "Populate";

        const acceptBtn = document.createElement("button");
        acceptBtn.id = "accept-btn-pre";
        acceptBtn.textContent = "Accept";

        preButtonsWrapper.appendChild(resetBtn);
        preButtonsWrapper.appendChild(populateBtn);
        preButtonsWrapper.appendChild(acceptBtn);

        main.appendChild(preButtonsWrapper);
    }


    const initBoard = function (domBoard) {
        for (let i = 0; i < _game_js__WEBPACK_IMPORTED_MODULE_0__.GLOBALS.BSIZE * _game_js__WEBPACK_IMPORTED_MODULE_0__.GLOBALS.BSIZE; ++i) {
            // Create tile and add listeners
            const tile = document.createElement("div");
            // tile.addEventListener("click", Handlers.tileHandler);

            const pos = '' + (i % 10) + '-' + Math.floor(i / 10);
            tile.classList = "tile " + pos;
            domBoard.appendChild(tile);
        }

    }

    const renderMain = function () {

        // Remove previous listeners attached to whole boards
        board1 = board1.cloneNode(true);
        board2 = board2.cloneNode(true);

        Handlers.attachTileListeners(board1);
        Handlers.attachTileListeners(board2);

        renderBoard(board1, p1, true);
        renderBoard(board2, p2, false);

        textArea.textContent = p2 instanceof _game_js__WEBPACK_IMPORTED_MODULE_0__.ComputerPlayer ? "" : "P1's turn" ;


        const boardWrapper = document.createElement("div");
        boardWrapper.classList = "board-wrapper";

        boardWrapper.appendChild(board1);
        boardWrapper.appendChild(board2);


        main.appendChild(boardWrapper);
    }

    const resetMain = function (b1Clone, b2Clone) {

        Handlers.attachTileListeners(board1);
        Handlers.attachTileListeners(board2);

        const boardWrapper = document.createElement("div");
        boardWrapper.classList = "board-wrapper";

        boardWrapper.appendChild(board1);
        boardWrapper.appendChild(board2);

        main.appendChild(boardWrapper);
    }

    const renderPre = function () {
        renderPreSelection(board1, p1);
        renderPreBtns();
        textArea.textContent = "Populate your battle grid.";

        let bothPlayersInit = false;

        const acceptBtn = document.getElementById("accept-btn-pre");
        const resetBtn = document.getElementById("reset-btn-pre");
        const populateBtn = document.getElementById("populate-btn-pre");

        acceptBtn.addEventListener("click", () => {
            const shipsDiv = document.querySelector(".ships-wrapper");

            if (shipsDiv.hasChildNodes()) {
                const oldText = textArea.textContent;
                textArea.textContent += " Must place all ships.";
                setTimeout(() => {
                    textArea.textContent = oldText;
                }, 2000);
                return;
            }

            if (bothPlayersInit || p2 instanceof _game_js__WEBPACK_IMPORTED_MODULE_0__.ComputerPlayer) {
                // Whatever cleaning
                main.innerHTML = "";
                p2.populateRandom();
                renderMain();
            } else {
                // Peaceful cleaning
                main.removeChild(document.querySelector(".pre-wrapper"));
                renderPreSelection(board2, p2);
                bothPlayersInit = true;
            }
        });


        const remAll = function () {
            const selectingPlayer = bothPlayersInit ? p2 : p1;
            const selectingBoard = bothPlayersInit ? board2 : board1;

            const shipCoords = selectingPlayer.gameBoard.getShipStats().map((st) => { return [st.x, st.y] });
            for (const [x, y] of shipCoords) {
                Handlers.removeBlock(undefined, selectingPlayer.gameBoard, x, y);
            }
            renderBoard(selectingBoard, selectingPlayer, true);
        };

        resetBtn.addEventListener("click", () => { remAll(); });

        populateBtn.addEventListener("click", () => {
            remAll();

            const selectingPlayer = bothPlayersInit ? p2 : p1;
            const selectingBoard = bothPlayersInit ? board2 : board1;

            selectingPlayer.populateRandom();

            const shipsDiv = document.querySelector(".ships-wrapper");
            // Peaceful clean results in freeze??
            shipsDiv.innerHTML = "";

            renderBoard(selectingBoard, selectingPlayer, true);
        })
    }


    const render = function () {
        // Initialize boards
        board1 = document.createElement("div");
        board1.classList = "board";
        board1.id = "boardOne";

        board2 = document.createElement("div");
        board2.classList = "board";
        board2.id = "boardTwo";


        initBoard(board1);
        initBoard(board2);

        // Second player human or pc

        textArea.textContent = "Play against:";

        const btnWrapper = document.createElement("div");
        btnWrapper.classList = "ask-btn-wrapper";

        const playerBtn = document.createElement("button");
        playerBtn.textContent = "Player";
        const pcBtn = document.createElement("button");
        pcBtn.textContent = "PC";

        playerBtn.addEventListener("click", () => {
            p2 = new _game_js__WEBPACK_IMPORTED_MODULE_0__.Player();
            main.innerHTML = "";
            renderPre();
        });

        pcBtn.addEventListener("click", () => {
            p2 = new _game_js__WEBPACK_IMPORTED_MODULE_0__.ComputerPlayer();
            main.innerHTML = "";
            renderPre();
        });

        btnWrapper.appendChild(playerBtn);
        btnWrapper.appendChild(pcBtn);

        main.appendChild(btnWrapper);
    }

    return {
        render,
        resetMain
    };
}();



/***/ }),

/***/ "./src/assets/Raleway-VariableFont_wght.ttf":
/*!**************************************************!*\
  !*** ./src/assets/Raleway-VariableFont_wght.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8040b0cc740dda7550a.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _styles_shared_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/shared.css */ "./src/styles/shared.css");
/* harmony import */ var _styles_pre_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/pre.css */ "./src/styles/pre.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");







_ui_js__WEBPACK_IMPORTED_MODULE_3__.UI.render();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxvREFBYztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELHFEQUFlO0FBQ3JFLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksNkNBQU8sU0FBUyw2Q0FBTyxRQUFRO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsb0RBQWM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxvREFBYztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFdBQVc7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNENBQU07QUFDM0I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EscUJBQXFCLG9EQUFjO0FBQ25DO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ0g7QUFDQztBQUMzQjtBQUMyQjtBQUMzQjtBQUNBO0FBQ0Esc0NBQUUsVSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3ByZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc2hhcmVkLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9wcmUuY3NzPzM3YzQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc2hhcmVkLmNzcz9kMjA4Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYm9hcmQtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDE2MHB4O1xyXG59XHJcblxyXG5cclxuLmJvYXJkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAvKiBIYXJkIGNvZGVkIHNpemVzIHRvIGF2b2lkIGdyb3cqL1xyXG5cclxuICAgIG1pbi13aWR0aDogY2FsYyh2YXIoLS10aWxlLXN6KSAqIDEwICsgMnB4KTtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGModmFyKC0tdGlsZS1zeikgKiAxMCArIDJweCk7XHJcblxyXG4gICAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLXRpbGUtc3opICogMTAgKyAycHgpO1xyXG4gICAgbWF4LWhlaWdodDogY2FsYyh2YXIoLS10aWxlLXN6KSAqIDEwICsgMnB4KTtcclxuXHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xyXG5cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xyXG59XHJcblxyXG5cclxuLnRpbGUge1xyXG5cclxuICAgIC0tY29sb3ItaW52aXM6IHZhcigtLWNvbG9yLWJsYWNrKTtcclxuICAgIC0tY29sb3ItdmlzOiB2YXIoLS1jb2xvci1ncmF5LWRhcmspO1xyXG4gICAgLS1jb2xvci1zaGlwOiB2YXIoLS1jb2xvci1ibHVlKTtcclxuICAgIC0tY29sb3ItaGl0OiByZWQ7XHJcbiAgICAtLWNvbG9yLXN1bms6ICM1ZjA1MDU7XHJcblxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XHJcblxyXG4gICAgJi5zaGlwIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zaGlwKTtcclxuICAgIH1cclxuXHJcbiAgICAmLmludmlzaWJsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaW52aXMpO1xyXG4gICAgfVxyXG5cclxuICAgICYudmlzaWJsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdmlzKTtcclxuICAgIH1cclxuXHJcbiAgICAmLnNoaXAtaGl0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1oaXQpO1xyXG4gICAgfVxyXG5cclxuICAgICYuc2hpcC1zdW5rIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zdW5rKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmJvYXJkLXdyYXBwZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQzs7SUFFbEMsMENBQTBDO0lBQzFDLDJDQUEyQzs7SUFFM0MsMENBQTBDO0lBQzFDLDJDQUEyQzs7SUFFM0MsbUNBQW1DO0lBQ25DLHNDQUFzQzs7SUFFdEMseUNBQXlDO0FBQzdDOzs7QUFHQTs7SUFFSSxpQ0FBaUM7SUFDakMsbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIscUJBQXFCOztJQUVyQix5Q0FBeUM7O0lBRXpDO1FBQ0ksbUNBQW1DO0lBQ3ZDOztJQUVBO1FBQ0ksb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0ksa0NBQWtDO0lBQ3RDOztJQUVBO1FBQ0ksa0NBQWtDO0lBQ3RDOztJQUVBO1FBQ0ksbUNBQW1DO0lBQ3ZDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ib2FyZC13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJvYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgLyogSGFyZCBjb2RlZCBzaXplcyB0byBhdm9pZCBncm93Ki9cXHJcXG5cXHJcXG4gICAgbWluLXdpZHRoOiBjYWxjKHZhcigtLXRpbGUtc3opICogMTAgKyAycHgpO1xcclxcbiAgICBtaW4taGVpZ2h0OiBjYWxjKHZhcigtLXRpbGUtc3opICogMTAgKyAycHgpO1xcclxcblxcclxcbiAgICBtYXgtd2lkdGg6IGNhbGModmFyKC0tdGlsZS1zeikgKiAxMCArIDJweCk7XFxyXFxuICAgIG1heC1oZWlnaHQ6IGNhbGModmFyKC0tdGlsZS1zeikgKiAxMCArIDJweCk7XFxyXFxuXFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG5cXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50aWxlIHtcXHJcXG5cXHJcXG4gICAgLS1jb2xvci1pbnZpczogdmFyKC0tY29sb3ItYmxhY2spO1xcclxcbiAgICAtLWNvbG9yLXZpczogdmFyKC0tY29sb3ItZ3JheS1kYXJrKTtcXHJcXG4gICAgLS1jb2xvci1zaGlwOiB2YXIoLS1jb2xvci1ibHVlKTtcXHJcXG4gICAgLS1jb2xvci1oaXQ6IHJlZDtcXHJcXG4gICAgLS1jb2xvci1zdW5rOiAjNWYwNTA1O1xcclxcblxcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcXHJcXG5cXHJcXG4gICAgJi5zaGlwIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNoaXApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYuaW52aXNpYmxlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWludmlzKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLnZpc2libGUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdmlzKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLnNoaXAtaGl0IHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWhpdCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5zaGlwLXN1bmsge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc3Vuayk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAuYm9hcmQtd3JhcHBlciB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmFzay1idG4td3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuLnByZS13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAxMCU7XHJcbn1cclxuXHJcbi5wcmUtYnRuLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgZ2FwOiA2MHB4O1xyXG59XHJcblxyXG4uc2hpcHMtd3JhcHBlciB7XHJcbiAgICAtLWNvbG9yLXNoaXA6IHZhcigtLWNvbG9yLWJsdWUpO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDFyZW07XHJcblxyXG4gICAgLnN6LTEge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLXRpbGUtc3opICogMSk7XHJcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS10aWxlLXN6KTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1zaGlwKTtcclxuICAgIH1cclxuXHJcbiAgICAuc3otMS52ZXJ0IHtcclxuICAgICAgICB3aWR0aDogdmFyKC0tdGlsZS1zeik7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXRpbGUtc3opICogMSk7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3Itc2hpcCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnN6LTIge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLXRpbGUtc3opICogMik7XHJcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS10aWxlLXN6KTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1zaGlwKTtcclxuICAgIH1cclxuXHJcbiAgICAuc3otMi52ZXJ0IHtcclxuICAgICAgICB3aWR0aDogdmFyKC0tdGlsZS1zeik7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXRpbGUtc3opICogMik7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3Itc2hpcCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnN6LTMge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLXRpbGUtc3opICogMyk7XHJcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS10aWxlLXN6KTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1zaGlwKTtcclxuICAgIH1cclxuXHJcbiAgICAuc3otMy52ZXJ0IHtcclxuICAgICAgICB3aWR0aDogdmFyKC0tdGlsZS1zeik7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXRpbGUtc3opICogMyk7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3Itc2hpcCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnN6LTQge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLXRpbGUtc3opICogNCk7XHJcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS10aWxlLXN6KTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1zaGlwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnN6LTQudmVydCB7XHJcbiAgICAgICAgd2lkdGg6IHZhcigtLXRpbGUtc3opO1xyXG4gICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS10aWxlLXN6KSAqIDQpO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXNoaXApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuc3otNSB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGModmFyKC0tdGlsZS1zeikgKiA1KTtcclxuICAgICAgICBoZWlnaHQ6IHZhcigtLXRpbGUtc3opO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXNoaXApO1xyXG4gICAgfVxyXG5cclxuICAgIC5zei01LnZlcnQge1xyXG4gICAgICAgIHdpZHRoOiB2YXIoLS10aWxlLXN6KTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0tdGlsZS1zeikgKiA1KTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1zaGlwKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnByZS13cmFwcGVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ByZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSwrQkFBK0I7O0lBRS9CLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFNBQVM7O0lBRVQ7UUFDSSwrQkFBK0I7UUFDL0Isc0JBQXNCO1FBQ3RCLG1DQUFtQztJQUN2Qzs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixnQ0FBZ0M7UUFDaEMsbUNBQW1DO0lBQ3ZDOztJQUVBO1FBQ0ksK0JBQStCO1FBQy9CLHNCQUFzQjtRQUN0QixtQ0FBbUM7SUFDdkM7O0lBRUE7UUFDSSxxQkFBcUI7UUFDckIsZ0NBQWdDO1FBQ2hDLG1DQUFtQztJQUN2Qzs7SUFFQTtRQUNJLCtCQUErQjtRQUMvQixzQkFBc0I7UUFDdEIsbUNBQW1DO0lBQ3ZDOztJQUVBO1FBQ0kscUJBQXFCO1FBQ3JCLGdDQUFnQztRQUNoQyxtQ0FBbUM7SUFDdkM7O0lBRUE7UUFDSSwrQkFBK0I7UUFDL0Isc0JBQXNCO1FBQ3RCLG1DQUFtQzs7SUFFdkM7O0lBRUE7UUFDSSxxQkFBcUI7UUFDckIsZ0NBQWdDO1FBQ2hDLG1DQUFtQzs7SUFFdkM7O0lBRUE7UUFDSSwrQkFBK0I7UUFDL0Isc0JBQXNCO1FBQ3RCLG1DQUFtQztJQUN2Qzs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixnQ0FBZ0M7UUFDaEMsbUNBQW1DO0lBQ3ZDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5hc2stYnRuLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByZS13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByZS1idG4td3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIG1hcmdpbi10b3A6IDYwcHg7XFxyXFxuICAgIGdhcDogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBzLXdyYXBwZXIge1xcclxcbiAgICAtLWNvbG9yLXNoaXA6IHZhcigtLWNvbG9yLWJsdWUpO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcblxcclxcbiAgICAuc3otMSB7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS10aWxlLXN6KSAqIDEpO1xcclxcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS10aWxlLXN6KTtcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXNoaXApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zei0xLnZlcnQge1xcclxcbiAgICAgICAgd2lkdGg6IHZhcigtLXRpbGUtc3opO1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXRpbGUtc3opICogMSk7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1zaGlwKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc3otMiB7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS10aWxlLXN6KSAqIDIpO1xcclxcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS10aWxlLXN6KTtcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXNoaXApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zei0yLnZlcnQge1xcclxcbiAgICAgICAgd2lkdGg6IHZhcigtLXRpbGUtc3opO1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXRpbGUtc3opICogMik7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1zaGlwKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc3otMyB7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS10aWxlLXN6KSAqIDMpO1xcclxcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS10aWxlLXN6KTtcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXNoaXApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zei0zLnZlcnQge1xcclxcbiAgICAgICAgd2lkdGg6IHZhcigtLXRpbGUtc3opO1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXRpbGUtc3opICogMyk7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1zaGlwKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc3otNCB7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS10aWxlLXN6KSAqIDQpO1xcclxcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS10aWxlLXN6KTtcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXNoaXApO1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zei00LnZlcnQge1xcclxcbiAgICAgICAgd2lkdGg6IHZhcigtLXRpbGUtc3opO1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXRpbGUtc3opICogNCk7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1zaGlwKTtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc3otNSB7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS10aWxlLXN6KSAqIDUpO1xcclxcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS10aWxlLXN6KTtcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXNoaXApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zei01LnZlcnQge1xcclxcbiAgICAgICAgd2lkdGg6IHZhcigtLXRpbGUtc3opO1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXRpbGUtc3opICogNSk7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1zaGlwKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIC5wcmUtd3JhcHBlciB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL1JhbGV3YXktVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgICAtLWNvbG9yLWJsYWNrOiAjMTkxOTE5O1xyXG4gICAgLS1jb2xvci1ncmF5LWRhcms6ICMzMzMzMzM7XHJcbiAgICAtLWNvbG9yLWdyYXktbGlnaHQ6ICM0ZDRkNGQ7XHJcbiAgICAtLWNvbG9yLWJsdWU6ICMyQTg2RkY7XHJcbiAgICAtLXRpbGUtc3o6IDQwcHg7XHJcblxyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjVweDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1pbmxpbmU6IDEwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LWRhcmspO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIHBhZGRpbmc6IC42ZW07XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyYXktZGFyayk7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xyXG59XHJcbiN0ZXh0LWFyZWEge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zaGFyZWQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNENBQW1EO0FBQ3ZEOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLGVBQWU7OztJQUdmLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXHJcXG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9SYWxld2F5LVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tY29sb3ItYmxhY2s6ICMxOTE5MTk7XFxyXFxuICAgIC0tY29sb3ItZ3JheS1kYXJrOiAjMzMzMzMzO1xcclxcbiAgICAtLWNvbG9yLWdyYXktbGlnaHQ6ICM0ZDRkNGQ7XFxyXFxuICAgIC0tY29sb3ItYmx1ZTogIzJBODZGRjtcXHJcXG4gICAgLS10aWxlLXN6OiA0MHB4O1xcclxcblxcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA2NXB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luLWlubGluZTogMTAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWdyYXktZGFyayk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBwYWRkaW5nOiAuNmVtO1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JheS1kYXJrKTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcXHJcXG59XFxyXFxuI3RleHQtYXJlYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ByZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hhcmVkLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoYXJlZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxyXG5jbGFzcyBTaGlwIHtcclxuICAgIC8qKlxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy5oaXRzID0gbmV3IEFycmF5KHNpemUpLmZpbGwoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGl0IHNoaXAgYXQgaXQncyBwb3NpdGlvbiAnaScuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaVxyXG4gICAgICogQHJldHVybnMge3N0cmluZ30gXHJcbiAgICAgKi9cclxuICAgIGhpdChpKSB7XHJcbiAgICAgICAgdGhpcy5oaXRzW2ldID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgc2hpcCBpcyBoaXQgYXQgaXQncyBwb3NpdGlvbiAnaScuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaSBcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBpc0hpdChpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0c1tpXTtcclxuICAgIH1cclxuXHJcbiAgICBpc1N1bmsoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0cy5ldmVyeSgoaSkgPT4geyByZXR1cm4gaTsgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IEdMT0JBTFMgPSB7XHJcbiAgICBCU0laRTogMTAsXHJcbiAgICBVTlNFRU5fRU1QVFk6IDAsIFVOU0VFTl9TSElQOiAxLCBTRUVOX0VNUFRZOiAyLCBTRUVOX1NISVA6IDMsIFNVTktfU0hJUDogNCxcclxuICAgIEhPUklaT05UQUw6IDYsIFZFUlRJQ0FMOiA5LFxyXG59O1xyXG5cclxuXHJcbmNsYXNzIEdhbWVCb2FyZCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZWRlZiB7e3NoaXA6IFNoaXAsIHg6IG51bWJlciwgeTogbnVtYmVyLCBkaXJlY3Rpb246IG51bWJlcn19IFNoaXBTdGF0XHJcbiAgICAgKi9cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNlZW4gPSBuZXcgQXJyYXkoR0xPQkFMUy5CU0laRSkuZmlsbChudWxsKS5tYXAoKCkgPT4gbmV3IEFycmF5KEdMT0JBTFMuQlNJWkUpLmZpbGwoZmFsc2UpKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSBTaGlwU3RhdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuc2hpcFN0YXRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgeCx5IGFyZSBpbiBib2FyZCdzIGJvdW5kIG9yIG5vdC5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgY29vcmRJbkJvdW5kKHgsIHkpIHtcclxuICAgICAgICByZXR1cm4geCA+PSAwICYmIHggPCBHTE9CQUxTLkJTSVpFICYmIHkgPj0gMCAmJiB5IDwgR0xPQkFMUy5CU0laRTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYWxsIHRoZSBwb3NpdGlvbnMgKHgsIHkpIHRoZSBzaGlwIGhhcyBvY2N1cGllZC5cclxuICAgICAqIEBwYXJhbSB7U2hpcFN0YXR9IHNoaXBTdGF0IFxyXG4gICAgICogQHJldHVybnMge3t4OiBudW1iZXIsIHk6bnVtYmVyfVtdfVxyXG4gICAgICovXHJcbiAgICBzaGlwUG9zaXRpb25zKHNoaXBTdGF0KSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU3RhdC5zaGlwLnNpemU7ICsraSkge1xyXG4gICAgICAgICAgICBjb25zdCB4SWR4ID0gc2hpcFN0YXQuZGlyZWN0aW9uID09PSBHTE9CQUxTLkhPUklaT05UQUwgP1xyXG4gICAgICAgICAgICAgICAgc2hpcFN0YXQueCArIGkgOlxyXG4gICAgICAgICAgICAgICAgc2hpcFN0YXQueDtcclxuICAgICAgICAgICAgY29uc3QgeUlkeCA9IHNoaXBTdGF0LmRpcmVjdGlvbiA9PT0gR0xPQkFMUy5WRVJUSUNBTCA/XHJcbiAgICAgICAgICAgICAgICBzaGlwU3RhdC55ICsgaSA6XHJcbiAgICAgICAgICAgICAgICBzaGlwU3RhdC55O1xyXG4gICAgICAgICAgICBwb3NpdGlvbnMucHVzaCh7IHg6IHhJZHgsIHk6IHlJZHggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3NpdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2hpcFN0YXRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBTdGF0cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaXNTZWVuKHgsIHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWVuW3ldW3hdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHNwZWNpZmllZCBjb29yZCBpcyBvY2N1cGllZCBieSBhIHNoaXAgb3Igbm90XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGlzT2NjdXBpZWQoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvb3JkSW5Cb3VuZCh4LCB5KSAmJlxyXG4gICAgICAgICAgICB0aGlzLnNoaXBTdGF0cy5zb21lKChzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hpcFBvc2l0aW9ucyhzdCkuc29tZSgocG9zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHggPT0gcG9zLnggJiYgeSA9PSBwb3MueTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgd2hldGhlciBhIHNwZWNpZmllZCBjb29yZCBvciBpdHMgbmVpZ2hib3VyaG9vZCBcclxuICAgICAqIGlzIG9jY3VwaWVkIGJ5IGEgc2hpcCBvciBub3RcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaXNPY2N1cGllZE5lYXJieSh4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hpcFN0YXRzLnNvbWUoKHN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuc2hpcFBvc2l0aW9ucyhzdCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcG9zIG9mIHBvc2l0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBzb21laG93IGJsb2F0ZWQgYW5kIGNsZWFuIGF0IHRoZSBzYW1lIHRpbWVcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBwb3MueCA9PT0geCAmJiBwb3MueSA9PT0geSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29vcmRJbkJvdW5kKHBvcy54IC0gMSwgcG9zLnkpICYmIHBvcy54IC0gMSA9PT0geCAmJiBwb3MueSA9PT0geSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29vcmRJbkJvdW5kKHBvcy54ICsgMSwgcG9zLnkpICYmIHBvcy54ICsgMSA9PT0geCAmJiBwb3MueSA9PT0geSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29vcmRJbkJvdW5kKHBvcy54LCBwb3MueSAtIDEpICYmIHBvcy54ID09PSB4ICYmIHBvcy55IC0gMSA9PT0geSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29vcmRJbkJvdW5kKHBvcy54LCBwb3MueSArIDEpICYmIHBvcy54ID09PSB4ICYmIHBvcy55ICsgMSA9PT0geSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29vcmRJbkJvdW5kKHBvcy54IC0gMSwgcG9zLnkgLSAxKSAmJiBwb3MueCAtIDEgPT09IHggJiYgcG9zLnkgLSAxID09PSB5IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb29yZEluQm91bmQocG9zLnggLSAxLCBwb3MueSArIDEpICYmIHBvcy54IC0gMSA9PT0geCAmJiBwb3MueSArIDEgPT09IHkgfHxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvb3JkSW5Cb3VuZChwb3MueCArIDEsIHBvcy55IC0gMSkgJiYgcG9zLnggKyAxID09PSB4ICYmIHBvcy55IC0gMSA9PT0geSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29vcmRJbkJvdW5kKHBvcy54ICsgMSwgcG9zLnkgKyAxKSAmJiBwb3MueCArIDEgPT09IHggJiYgcG9zLnkgKyAxID09PSB5XHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGxhY2VzIGEgc2hpcCBpbiB0aGUgYm9hcmQsIGhvcml6b250YWxseS5cclxuICAgICAqIEBwYXJhbSB7U2hpcH0gc2hpcCBcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgXHJcbiAgICAgKi9cclxuICAgIHBsYWNlU2hpcEhvcml6b250YWwoc2hpcCwgeCwgeSkge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuc2hpcFBvc2l0aW9ucyh7IHNoaXAsIHgsIHksIGRpcmVjdGlvbjogR0xPQkFMUy5IT1JJWk9OVEFMIH0pO1xyXG5cclxuICAgICAgICBpZiAocG9zaXRpb25zLnNvbWUoKHApID0+ICF0aGlzLmNvb3JkSW5Cb3VuZChwLngsIHAueSkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiU2hpcCBwbGFjZW1lbnQgb3V0IG9mIGJvdW5kc1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwb3NpdGlvbnMuc29tZSgocCkgPT4gdGhpcy5pc09jY3VwaWVkTmVhcmJ5KHAueCwgcC55KSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJTaGlwIGNhbm5vdCBiZSBwbGFjZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hpcFN0YXRzLnB1c2goe1xyXG4gICAgICAgICAgICBzaGlwLCB4LCB5LCBkaXJlY3Rpb246IEdMT0JBTFMuSE9SSVpPTlRBTFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGxhY2VzIGEgc2hpcCBpbiB0aGUgYm9hcmQsIHZlcnRpY2FsbHkuXHJcbiAgICAgKiBAcGFyYW0ge1NoaXB9IHNoaXAgXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFxyXG4gICAgICovXHJcbiAgICBwbGFjZVNoaXBWZXJ0aWNhbChzaGlwLCB4LCB5KSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5zaGlwUG9zaXRpb25zKHsgc2hpcCwgeCwgeSwgZGlyZWN0aW9uOiBHTE9CQUxTLlZFUlRJQ0FMIH0pO1xyXG5cclxuICAgICAgICBpZiAocG9zaXRpb25zLnNvbWUoKHApID0+ICF0aGlzLmNvb3JkSW5Cb3VuZChwLngsIHAueSkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiU2hpcCBwbGFjZW1lbnQgb3V0IG9mIGJvdW5kc1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwb3NpdGlvbnMuc29tZSgocCkgPT4gdGhpcy5pc09jY3VwaWVkTmVhcmJ5KHAueCwgcC55KSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJTaGlwIGNhbm5vdCBiZSBwbGFjZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNoaXBTdGF0cy5wdXNoKHtcclxuICAgICAgICAgICAgc2hpcCwgeCwgeSwgZGlyZWN0aW9uOiBHTE9CQUxTLlZFUlRJQ0FMXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyB0aGUgc2hpcCBpbiB0aGUgc3BlY2lmaWVkIGNvb3JkcyBSZXR1cm5zIFxyXG4gICAgICogdGhlIHNpemUgb2YgdGhlIHNoaXAgaWYgaXQgZXhpc3RlZCwgZWxzZSByZXR1cm5zIC0xLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHJlbW92ZVNoaXAoeCwgeSkge1xyXG5cclxuICAgICAgICAvLyBFc3NlbnRpYWwgYmVjYXVzZSBtb3N0bHkgY2FsbGVkIGluIFVJIHByZS1nYW1lXHJcbiAgICAgICAgeCA9IHBhcnNlSW50KHgpO1xyXG4gICAgICAgIHkgPSBwYXJzZUludCh5KTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBzaGlwU3RhdCBvZiB0aGlzLnNoaXBTdGF0cykge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSB0aGlzLnNoaXBQb3NpdGlvbnMoc2hpcFN0YXQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9ucy5zb21lKChwKSA9PiBwLnggPT09IHggJiYgcC55ID09PSB5KSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcEluZGV4ID0gdGhpcy5zaGlwU3RhdHMuaW5kZXhPZihzaGlwU3RhdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNoaXBJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTaGlwIGluZGV4IHNob3VsZCBoYXZlIGJlZW4gZXhpc3RlbnQgc2luY2UgaXRzIHBvcyBpcyBhbHJlYWR5IGZvdW5kXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHBhcnNlSW50IC0+IGZvcmNlIGNvcHlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBTaXplID0gcGFyc2VJbnQoc2hpcFN0YXQuc2hpcC5zaXplKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hpcFN0YXRzLnNwbGljZShzaGlwSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNoaXBTaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIaXQgc2hpcCBpbiB0aGUgc3BlY2lmaWVkIGNvb3JkcyBpZiB0aGVyZSBpcyBvbmUgdGhlcmUuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFxyXG4gICAgICovXHJcbiAgICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcclxuICAgICAgICAvLyBNYWtlIHRpbGUgc2VlblxyXG4gICAgICAgIHRoaXMuc2Vlblt5XVt4XSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIEZpbmQgaWYgdGlsZSBpcyBvbiBhIHNoaXAsIGlmIHNvIHNlbmQgaGl0IGlmIGl0cyBub3QgYWxyZWFkeSBoaXRcclxuICAgICAgICBmb3IgKGNvbnN0IHNoaXBTdGF0IG9mIHRoaXMuc2hpcFN0YXRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuc2hpcFBvc2l0aW9ucyhzaGlwU3RhdCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25zW2ldLnggPT09IHggJiZcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaV0ueSA9PT0geSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFzaGlwU3RhdC5zaGlwLmlzSGl0KGkpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGlwU3RhdC5zaGlwLmhpdChpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgd2hldGhlciBhbGwgc2hpcHMgb24gdGhlIGJvYXJkIGFyZSBzdW5rXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgYWxsU3VuaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaGlwU3RhdHMuZXZlcnkoKHN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdC5zaGlwLmlzU3VuaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSByZXByZXNhbnRhdGlvbiBvZiB0aGUgYm9hcmQgaW4gaXRzIGN1cnJlbnQgc3RhdHVzLlxyXG4gICAgICogQHJldHVybnMge251bWJlcltdW119XHJcbiAgICAgKi9cclxuICAgIGJvYXJkKCkge1xyXG4gICAgICAgIGNvbnN0IGJvYXJkID0gbmV3IEFycmF5KEdMT0JBTFMuQlNJWkUpLmZpbGwobnVsbCkubWFwKCgpID0+IG5ldyBBcnJheShHTE9CQUxTLkJTSVpFKS5maWxsKEdMT0JBTFMuVU5TRUVOX0VNUFRZKSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR0xPQkFMUy5CU0laRTsgKytpKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdMT0JBTFMuQlNJWkU7ICsrailcclxuICAgICAgICAgICAgICAgIGJvYXJkW2ldW2pdID0gdGhpcy5zZWVuW2ldW2pdID8gR0xPQkFMUy5TRUVOX0VNUFRZIDogR0xPQkFMUy5VTlNFRU5fRU1QVFk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qgc2hpcF9zdGF0IG9mIHRoaXMuc2hpcFN0YXRzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcF9zdGF0LnNoaXAuc2l6ZTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4SWR4ID0gc2hpcF9zdGF0LmRpcmVjdGlvbiA9PT0gR0xPQkFMUy5IT1JJWk9OVEFMID9cclxuICAgICAgICAgICAgICAgICAgICBzaGlwX3N0YXQueCArIGkgOlxyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBfc3RhdC54O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeUlkeCA9IHNoaXBfc3RhdC5kaXJlY3Rpb24gPT09IEdMT0JBTFMuVkVSVElDQUwgP1xyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBfc3RhdC55ICsgaSA6XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcF9zdGF0Lnk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNoaXBfc3RhdC5zaGlwLmlzU3VuaygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbeUlkeF1beElkeF0gPSBHTE9CQUxTLlNVTktfU0hJUDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbeUlkeF1beElkeF0gPSB0aGlzLnNlZW5beUlkeF1beElkeF0gPyBHTE9CQUxTLlNFRU5fU0hJUCA6IEdMT0JBTFMuVU5TRUVOX1NISVA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgdGlsZUF0KHgsIHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZCgpW3ldW3hdO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBBVkFJTEFCTEVfU0hJUFMgPSB7XHJcbiAgICBjYXJyaWVyOiB7XHJcbiAgICAgICAgc2l6ZTogNSxcclxuICAgICAgICBjb3VudDogMSxcclxuICAgIH0sXHJcbiAgICBiYXR0bGVzaGlwOiB7XHJcbiAgICAgICAgc2l6ZTogNCxcclxuICAgICAgICBjb3VudDogMixcclxuICAgIH0sXHJcbiAgICBzdWJtYXJpbmU6IHtcclxuICAgICAgICBzaXplOiAzLFxyXG4gICAgICAgIGNvdW50OiAyLFxyXG4gICAgfSxcclxuICAgIGRlc3Ryb3llcjoge1xyXG4gICAgICAgIHNpemU6IDIsXHJcbiAgICAgICAgY291bnQ6IDMsXHJcbiAgICB9LFxyXG4gICAgc2NvdXRlcjoge1xyXG4gICAgICAgIHNpemU6IDEsXHJcbiAgICAgICAgY291bnQ6IDIsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuY2xhc3MgUGxheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGJvYXJkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVCb2FyZC5ib2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUG9wdWxhdGVzIHRoZSBwbGF5ZXIncyBib2FyZCB3aXRoIHJhbmRvbSBwb3NpdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIHBvcHVsYXRlUmFuZG9tKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xyXG5cclxuICAgICAgICBsZXQgcG9zX3gsIHBvc195O1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBHTE9CQUxTLkhPUklaT05UQUw7XHJcblxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IFtzaGlwTmFtZSwgc2hpcF0gb2YgT2JqZWN0LmVudHJpZXMoQVZBSUxBQkxFX1NISVBTKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuY291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHNoaXAgYmVmb3JlIGxvb3AhXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTaGlwID0gbmV3IFNoaXAoc2hpcC5zaXplKTtcclxuICAgICAgICAgICAgICAgIGxldCBkb25lID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKCFkb25lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBvc194ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc195ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBHTE9CQUxTLkhPUklaT05UQUwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUJvYXJkLnBsYWNlU2hpcEhvcml6b250YWwobmV3U2hpcCwgcG9zX3gsIHBvc195KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IEdMT0JBTFMuVkVSVElDQUw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lQm9hcmQucGxhY2VTaGlwVmVydGljYWwobmV3U2hpcCwgcG9zX3gsIHBvc195KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IEdMT0JBTFMuSE9SSVpPTlRBTDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgQ29tcHV0ZXJQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSByYW5kb20gaGl0IHBvc2l0aW9uIG9uIGl0cyBhcmd1bWVudC5cclxuICAgICAqIEBwYXJhbSB7R2FtZUJvYXJkfSBlbmVteUJvYXJkIFxyXG4gICAgICogQHJldHVybnMge3t4OiBudW1iZXIsIHk6IG51bWJlcn19XHJcbiAgICAgKi9cclxuICAgIGdldFJhbmRvbUhpdFBvcyhlbmVteUJvYXJkKSB7XHJcbiAgICAgICAgbGV0IHBvc194LCBwb3NfeTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIHBvc194ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgICAgICBwb3NfeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZW5lbXlCb2FyZC5pc1NlZW4ocG9zX3gsIHBvc195KSkgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyB4OiBwb3NfeCwgeTogcG9zX3kgfTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyMSwgcGxheWVyMikge1xyXG4gICAgICAgIHRoaXMucGxheWVyMSA9IHBsYXllcjE7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gcGxheWVyMjtcclxuICAgICAgICB0aGlzLmN1cnJQbGF5ZXIgPSBwbGF5ZXIxO1xyXG4gICAgICAgIHRoaXMud2lubmVyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpc092ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2lubmVyICE9PSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXR0ZW1wdHMgdG8gaGl0IGEgc3BlY2lmaWVkIHBvc2l0aW9uIG9uIGVuZW15IHBsYXllcidzIGJvYXJkLFxyXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBoaXQgc3VjY2VkZWQgb3Igbm90IChzdWNjZXNzIGluIHRoaXMgY29udGV4dCBcclxuICAgICAqIG1lYW5zIGEgcmVnaXN0ZXJlZCBoaXQsIHdoZXRoZXIgaXQgaGl0IGEgc2hpcCBvciBub3QuKVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBcclxuICAgICAqIEBwYXJhbSB7UGxheWVyfSBlbmVteVBsYXllciBcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBoaXRUaWxlKHgsIHksIGVuZW15UGxheWVyKSB7XHJcblxyXG4gICAgICAgIC8vIERPTSBpbnRlcmFjdHMgd2l0aCB0aGlzIGZ1bmN0aW9uXHJcbiAgICAgICAgeCA9IHBhcnNlSW50KHgpO1xyXG4gICAgICAgIHkgPSBwYXJzZUludCh5KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VyclBsYXllciA9PT0gZW5lbXlQbGF5ZXIgfHwgZW5lbXlQbGF5ZXIuZ2FtZUJvYXJkLmlzU2Vlbih4LCB5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTa2V0Y2h5IGJ1dCBmZWFzaWJsZSByblxyXG4gICAgICAgIGNvbnN0IGh1bWFuUGxheWVyID0gZW5lbXlQbGF5ZXIgPT09IHRoaXMucGxheWVyMSA/IHRoaXMucGxheWVyMiA6IHRoaXMucGxheWVyMTtcclxuXHJcbiAgICAgICAgZW5lbXlQbGF5ZXIuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XHJcblxyXG4gICAgICAgIGlmIChlbmVteVBsYXllci5nYW1lQm9hcmQuYWxsU3VuaygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2lubmVyID0gaHVtYW5QbGF5ZXI7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyUGxheWVyID0gZW5lbXlQbGF5ZXI7XHJcbiAgICAgICAgaWYgKGVuZW15UGxheWVyIGluc3RhbmNlb2YgQ29tcHV0ZXJQbGF5ZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgYXR0YWNrUG9zID0gZW5lbXlQbGF5ZXIuZ2V0UmFuZG9tSGl0UG9zKGh1bWFuUGxheWVyLmdhbWVCb2FyZCk7XHJcbiAgICAgICAgICAgIGh1bWFuUGxheWVyLmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFja1Bvcy54LCBhdHRhY2tQb3MueSk7XHJcbiAgICAgICAgICAgIGlmIChodW1hblBsYXllci5nYW1lQm9hcmQuYWxsU3VuaygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpbm5lciA9IGVuZW15UGxheWVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY3VyclBsYXllciA9IGh1bWFuUGxheWVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgU2hpcCwgR2FtZUJvYXJkLCBHYW1lLCBQbGF5ZXIsIENvbXB1dGVyUGxheWVyLCBHTE9CQUxTLCBBVkFJTEFCTEVfU0hJUFMgfTsiLCJpbXBvcnQgeyBHYW1lLCBQbGF5ZXIsIENvbXB1dGVyUGxheWVyLCBHTE9CQUxTLCBBVkFJTEFCTEVfU0hJUFMsIFNoaXAsIEdhbWVCb2FyZCB9IGZyb20gJy4vZ2FtZS5qcyc7XHJcblxyXG5cclxuLy8gR2FtZSBtYXRlcmlhbHMgXHJcblxyXG5sZXQgcDEgPSBuZXcgUGxheWVyKCk7XHJcbmxldCBwMiA9IG5ldyBDb21wdXRlclBsYXllcigpO1xyXG5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG5sZXQgYm9hcmQxO1xyXG5sZXQgYm9hcmQyO1xyXG5cclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShwMSwgcDIpO1xyXG5cclxuXHJcbi8vIFRleHQgYXJlYSBmb3IgZXZlcnl0aGluZ1xyXG5jb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGV4dC1hcmVhXCIpO1xyXG5cclxuY29uc3QgZXh0cmFjdFRpbGVDbGFzcyA9IGZ1bmN0aW9uIChjTGlzdCkge1xyXG4gICAgY29uc3QgdGlsZVJlZ0V4cCA9IC90aWxlIFxcZCstXFxkKy87XHJcbiAgICBjb25zdCBtYXRjaGVzID0gdGlsZVJlZ0V4cC5leGVjKGNMaXN0LnRvU3RyaW5nKCkpO1xyXG4gICAgcmV0dXJuIG1hdGNoZXNbMF07XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlckJvYXJkID0gZnVuY3Rpb24gKGRvbUJvYXJkLCBwbGF5ZXIsIHZpc2libGUpIHtcclxuICAgIGxldCBkb21UaWxlcyA9IEFycmF5LmZyb20oZG9tQm9hcmQuY2hpbGROb2RlcykuZmlsdGVyKChub2RlKSA9PiB7XHJcbiAgICAgICAgaWYgKG5vZGUuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBnYW1lQm9hcmQgPSBwbGF5ZXIuYm9hcmQoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdMT0JBTFMuQlNJWkU7ICsraSlcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdMT0JBTFMuQlNJWkU7ICsraikge1xyXG5cclxuICAgICAgICAgICAgbGV0IGlkeCA9IGkgKiBHTE9CQUxTLkJTSVpFICsgajtcclxuICAgICAgICAgICAgZG9tVGlsZXNbaWR4XS5jbGFzc0xpc3QgPSBleHRyYWN0VGlsZUNsYXNzKGRvbVRpbGVzW2lkeF0uY2xhc3NMaXN0KTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoZ2FtZUJvYXJkW2ldW2pdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdMT0JBTFMuVU5TRUVOX0VNUFRZOlxyXG4gICAgICAgICAgICAgICAgICAgIGRvbVRpbGVzW2lkeF0uY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgR0xPQkFMUy5TRUVOX0VNUFRZOlxyXG4gICAgICAgICAgICAgICAgICAgIGRvbVRpbGVzW2lkeF0uY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdMT0JBTFMuVU5TRUVOX1NISVA6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT25seSBkaWZmZXJlbnQgY2FzZSBmb3IgcGxheWVyIGFuZCBlbmVteSBib2FyZHNcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21UaWxlc1tpZHhdLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVRpbGVzW2lkeF0uY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdMT0JBTFMuU0VFTl9TSElQOlxyXG4gICAgICAgICAgICAgICAgICAgIGRvbVRpbGVzW2lkeF0uY2xhc3NMaXN0LmFkZChcInNoaXAtaGl0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBHTE9CQUxTLlNVTktfU0hJUDpcclxuICAgICAgICAgICAgICAgICAgICBkb21UaWxlc1tpZHhdLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXN1bmtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdhbWUgQm9hcmQgdGlsZSB1bmtub3duIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxufVxyXG5cclxuY29uc3QgSGFuZGxlcnMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc3QgVElMRV9TSVpFID0gNDA7XHJcblxyXG4gICAgY29uc3QgdGlsZVJvdGF0ZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwidmVydFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaGlwRHJhZ1N0YXJ0ID0gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJhcHBsaWNhdGlvbi9ic2hpcDFcIiwgZXYudGFyZ2V0LmNsYXNzTGlzdCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNoaXBSZWN0ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBzaGlwU2l6ZSA9IC9zei0oXFxkKykvLmV4ZWMoZXYudGFyZ2V0LmNsYXNzTGlzdC50b1N0cmluZygpKVsxXTtcclxuICAgICAgICBjb25zdCBpc1ZlcnQgPSAvdmVydC8udGVzdCh0aGlzLmNsYXNzTGlzdC50b1N0cmluZygpKTtcclxuICAgICAgICBjb25zdCBncmFiYmVkVGlsZSA9IGlzVmVydCA/XHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IoKGV2LnBhZ2VZIC0gc2hpcFJlY3QueSkgLyBUSUxFX1NJWkUpIDpcclxuICAgICAgICAgICAgTWF0aC5mbG9vcigoZXYucGFnZVggLSBzaGlwUmVjdC54KSAvIFRJTEVfU0laRSlcclxuICAgICAgICAgICAgO1xyXG5cclxuICAgICAgICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImFwcGxpY2F0aW9uL2JzaGlwMVwiLCBldi50YXJnZXQuaWQpO1xyXG4gICAgICAgIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiYXBwbGljYXRpb24vYnNoaXAyXCIsIHNoaXBTaXplKTtcclxuICAgICAgICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImFwcGxpY2F0aW9uL2JzaGlwM1wiLCBncmFiYmVkVGlsZSk7XHJcbiAgICAgICAgZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJhcHBsaWNhdGlvbi9ic2hpcDRcIiwgaXNWZXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBib2FyZERyYWdPdmVyID0gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldi5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGF0dGFjaFRpbGVMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoZG9tQm9hcmQpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHRpbGUgb2YgZG9tQm9hcmQuY2hpbGROb2Rlcykge1xyXG4gICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBIYW5kbGVycy50aWxlSGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJvYXJkRHJvcCA9IGZ1bmN0aW9uIChldiwgZ2FtZUJvYXJkKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpcnN0VGlsZSA9IHRoaXMuZmlyc3RDaGlsZDtcclxuICAgICAgICBjb25zdCBzaGlwSUQgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImFwcGxpY2F0aW9uL2JzaGlwMVwiKTtcclxuICAgICAgICBjb25zdCBzaGlwU2l6ZSA9IHBhcnNlSW50KGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiYXBwbGljYXRpb24vYnNoaXAyXCIpKTtcclxuICAgICAgICBjb25zdCBncmFiYmVkVGlsZSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiYXBwbGljYXRpb24vYnNoaXAzXCIpO1xyXG4gICAgICAgIGNvbnN0IGlzVmVydCA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiYXBwbGljYXRpb24vYnNoaXA0XCIpID09PSAndHJ1ZSc7XHJcblxyXG4gICAgICAgIGNvbnN0IHplcm9SZWN0ID0gZmlyc3RUaWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUmVjdCA9IGV2LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgbGV0IHRpbGVYID0gKHNlbGVjdGVkUmVjdC54IC0gemVyb1JlY3QueCkgLyBUSUxFX1NJWkU7XHJcbiAgICAgICAgbGV0IHRpbGVZID0gKHNlbGVjdGVkUmVjdC55IC0gemVyb1JlY3QueSkgLyBUSUxFX1NJWkU7XHJcblxyXG4gICAgICAgIGlmIChpc1ZlcnQpIHtcclxuICAgICAgICAgICAgdGlsZVkgLT0gZ3JhYmJlZFRpbGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGlsZVggLT0gZ3JhYmJlZFRpbGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBnb29kIG9sJyBib3VuZCBjaGVja3NcclxuICAgICAgICAvLyBpZiAodGlsZVggPCAwIHx8IHRpbGVYID49IEdMT0JBTFMuQlNJWkUgfHwgdGlsZVkgPCAwIHx8IHRpbGVZID49IEdMT0JBTFMuQlNJWkUpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGlzVmVydCkge1xyXG4gICAgICAgICAgICAgICAgZ2FtZUJvYXJkLnBsYWNlU2hpcFZlcnRpY2FsKG5ldyBTaGlwKHNoaXBTaXplKSwgdGlsZVgsIHRpbGVZKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGdhbWVCb2FyZC5wbGFjZVNoaXBIb3Jpem9udGFsKG5ldyBTaGlwKHNoaXBTaXplKSwgdGlsZVgsIHRpbGVZKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNoaXBJRDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIEJsb2F0ZWQgaW1wbGVtZW50YXRpb25cclxuICAgIGNvbnN0IHJlbW92ZUJsb2NrID0gZnVuY3Rpb24gKGUsIGdhbWVCb2FyZCwgeCwgeSkge1xyXG5cclxuICAgICAgICBsZXQgdGlsZUNsYXNzLCByZWdNYXRjaGVzO1xyXG5cclxuICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICB0aWxlQ2xhc3MgPSBleHRyYWN0VGlsZUNsYXNzKGUudGFyZ2V0LmNsYXNzTGlzdCk7XHJcbiAgICAgICAgICAgIHJlZ01hdGNoZXMgPSAvdGlsZSAoXFxkKyktKFxcZCspLy5leGVjKHRpbGVDbGFzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0aWxlWCA9IHggPz8gcmVnTWF0Y2hlc1sxXTtcclxuICAgICAgICBjb25zdCB0aWxlWSA9IHkgPz8gcmVnTWF0Y2hlc1syXTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHJlbW92ZWRTaGlwU3ogPSBnYW1lQm9hcmQucmVtb3ZlU2hpcCh0aWxlWCwgdGlsZVkpO1xyXG4gICAgICAgIGlmIChyZW1vdmVkU2hpcFN6IDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzaGlwc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHMtd3JhcHBlclwiKTtcclxuICAgICAgICBsZXQgZW1wdHlJRCA9IG51bGw7XHJcblxyXG5cclxuXHJcbiAgICAgICAgY29uc3Qgc2hpcHNJRFMgPSBBcnJheS5mcm9tKHNoaXBzRGl2LmNoaWxkTm9kZXMpLm1hcCgoY24pID0+IGNuLmlkKVxyXG4gICAgICAgICAgICAubWFwKChpKSA9PiBwYXJzZUludCgvc2hpcC0oXFxkKykvLmV4ZWMoaSlbMV0pKVxyXG4gICAgICAgICAgICAuc29ydCgpO1xyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc0lEUy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAoc2hpcHNJRFNbaV0gIT09IGkpIHtcclxuICAgICAgICAgICAgICAgIGVtcHR5SUQgPSBpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbXB0eUlEID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGVtcHR5SUQgPSBzaGlwc0lEUy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXdTaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBcInN6LVwiICsgcmVtb3ZlZFNoaXBTejtcclxuXHJcbiAgICAgICAgbmV3U2hpcC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgbmV3U2hpcC5pZCA9IFwic2hpcC1cIiArIGVtcHR5SUQ7XHJcbiAgICAgICAgbmV3U2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgIG5ld1NoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIEhhbmRsZXJzLnRpbGVSb3RhdGUpO1xyXG4gICAgICAgIG5ld1NoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBIYW5kbGVycy5zaGlwRHJhZ1N0YXJ0KTtcclxuXHJcbiAgICAgICAgc2hpcHNEaXYuYXBwZW5kQ2hpbGQobmV3U2hpcCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGlsZUhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICBpZiAoZ2FtZS5pc092ZXIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVnID0gL1xcZCstXFxkKy87XHJcbiAgICAgICAgY29uc3QgY0xpc3QgPSBBcnJheS5mcm9tKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QpO1xyXG4gICAgICAgIGNvbnN0IHBhcmVudERvbUJvYXJkID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvcyA9IGNMaXN0LmZpbmQoKGMpID0+IHJlZy50ZXN0KGMpKTtcclxuXHJcbiAgICAgICAgY29uc3QgeCA9IHBvcy5jaGFyQXQoMCk7XHJcbiAgICAgICAgY29uc3QgeSA9IHBvcy5jaGFyQXQoMik7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlY29uZFBsYXllclBDID0gcDIgaW5zdGFuY2VvZiBDb21wdXRlclBsYXllcjtcclxuXHJcbiAgICAgICAgaWYgKHBhcmVudERvbUJvYXJkLmlkID09PSBib2FyZDIuaWQgJiYgZ2FtZS5jdXJyUGxheWVyID09PSBwMSkge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZS5oaXRUaWxlKHgsIHksIHAyKSkge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyQm9hcmQoYm9hcmQxLCBwMSwgc2Vjb25kUGxheWVyUEMpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyQm9hcmQoYm9hcmQyLCBwMiwgIXNlY29uZFBsYXllclBDKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzZWNvbmRQbGF5ZXJQQyAmJiBwYXJlbnREb21Cb2FyZC5pZCA9PT0gYm9hcmQxLmlkICYmIGdhbWUuY3VyclBsYXllciA9PT0gcDIpIHtcclxuICAgICAgICAgICAgaWYgKGdhbWUuaGl0VGlsZSh4LCB5LCBwMSkpIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckJvYXJkKGJvYXJkMSwgcDEsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyQm9hcmQoYm9hcmQyLCBwMiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZ2FtZS5pc092ZXIoKSkge1xyXG4gICAgICAgICAgICB0ZXh0QXJlYS50ZXh0Q29udGVudCA9IChnYW1lLndpbm5lciA9PT0gcDEgPyBcIlAxXCIgOiBcIlAyXCIpICsgXCIgd29uIVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzZWNvbmRQbGF5ZXJQQykge1xyXG4gICAgICAgICAgICBsZXQgYjFDbG9uZSA9IGJvYXJkMS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIGxldCBiMkNsb25lID0gYm9hcmQyLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgdGV4dEFyZWEudGV4dENvbnRlbnQgPSBcIlBhc3MgdGhlIGdhbWUgb3Zlci4gV2FpdGluZyAycy5cIjtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVUkucmVzZXRNYWluKGIxQ2xvbmUsIGIyQ2xvbmUpO1xyXG4gICAgICAgICAgICAgICAgdGV4dEFyZWEudGV4dENvbnRlbnQgPSAoZ2FtZS5jdXJyUGxheWVyID09PSBwMSA/IFwiUDFcIiA6IFwiUDJcIikgKyBcIidzIHR1cm5cIjtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGlsZVJvdGF0ZSxcclxuICAgICAgICBzaGlwRHJhZ1N0YXJ0LFxyXG4gICAgICAgIGJvYXJkRHJhZ092ZXIsXHJcbiAgICAgICAgYm9hcmREcm9wLFxyXG4gICAgICAgIHJlbW92ZUJsb2NrLFxyXG4gICAgICAgIHRpbGVIYW5kbGVyLFxyXG4gICAgICAgIGF0dGFjaFRpbGVMaXN0ZW5lcnNcclxuICAgIH07XHJcbn0oKTtcclxuXHJcbmNvbnN0IFVJID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnN0IHJlbmRlclByZVNlbGVjdGlvbiA9IGZ1bmN0aW9uIChkb21Cb2FyZCwgcGxheWVyKSB7XHJcbiAgICAgICAgY29uc3Qgc2hpcHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxldCBpZENvdW50ZXIgPSAwO1xyXG4gICAgICAgIHNoaXBzRGl2LmNsYXNzTGlzdCA9IFwic2hpcHMtd3JhcHBlclwiO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IFtzaGlwTmFtZSwgc2hpcF0gb2YgT2JqZWN0LmVudHJpZXMoQVZBSUxBQkxFX1NISVBTKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuY291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBcInN6LVwiICsgc2hpcC5zaXplO1xyXG5cclxuICAgICAgICAgICAgICAgIG5ld1NoaXAuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgbmV3U2hpcC5pZCA9IFwic2hpcC1cIiArIGlkQ291bnRlcjtcclxuICAgICAgICAgICAgICAgIGlkQ291bnRlciArPSAxO1xyXG4gICAgICAgICAgICAgICAgbmV3U2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIG5ld1NoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIEhhbmRsZXJzLnRpbGVSb3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgbmV3U2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIEhhbmRsZXJzLnNoaXBEcmFnU3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgc2hpcHNEaXYuYXBwZW5kQ2hpbGQobmV3U2hpcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvbUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBIYW5kbGVycy5ib2FyZERyYWdPdmVyKTtcclxuICAgICAgICBkb21Cb2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzaGlwSUQgPSBIYW5kbGVycy5ib2FyZERyb3AuY2FsbChlLmN1cnJlbnRUYXJnZXQsIGUsIHBsYXllci5nYW1lQm9hcmQpO1xyXG4gICAgICAgICAgICBpZiAoc2hpcElEICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHNoaXBzRGl2LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNoaXBJRCkpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZW5kZXJCb2FyZChkb21Cb2FyZCwgcGxheWVyLCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb21Cb2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgSGFuZGxlcnMucmVtb3ZlQmxvY2suY2FsbChlLmN1cnJlbnRUYXJnZXQsIGUsIHBsYXllci5nYW1lQm9hcmQpO1xyXG4gICAgICAgICAgICByZW5kZXJCb2FyZChkb21Cb2FyZCwgcGxheWVyLCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcHJlV3JhcHBlci5jbGFzc0xpc3QgPSBcInByZS13cmFwcGVyXCI7XHJcblxyXG4gICAgICAgIHByZVdyYXBwZXIuYXBwZW5kQ2hpbGQoc2hpcHNEaXYpO1xyXG4gICAgICAgIHByZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZG9tQm9hcmQpO1xyXG5cclxuICAgICAgICBtYWluLnByZXBlbmQocHJlV3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVuZGVyUHJlQnRucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBwcmVCdXR0b25zV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgICAgIHByZUJ1dHRvbnNXcmFwcGVyLmNsYXNzTGlzdCA9IFwicHJlLWJ0bi13cmFwcGVyXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICByZXNldEJ0bi5pZCA9IFwicmVzZXQtYnRuLXByZVwiO1xyXG4gICAgICAgIHJlc2V0QnRuLnRleHRDb250ZW50ID0gXCJSZXNldFwiO1xyXG5cclxuICAgICAgICBjb25zdCBwb3B1bGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgcG9wdWxhdGVCdG4uaWQgPSBcInBvcHVsYXRlLWJ0bi1wcmVcIjtcclxuICAgICAgICBwb3B1bGF0ZUJ0bi50ZXh0Q29udGVudCA9IFwiUG9wdWxhdGVcIjtcclxuXHJcbiAgICAgICAgY29uc3QgYWNjZXB0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBhY2NlcHRCdG4uaWQgPSBcImFjY2VwdC1idG4tcHJlXCI7XHJcbiAgICAgICAgYWNjZXB0QnRuLnRleHRDb250ZW50ID0gXCJBY2NlcHRcIjtcclxuXHJcbiAgICAgICAgcHJlQnV0dG9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQocmVzZXRCdG4pO1xyXG4gICAgICAgIHByZUJ1dHRvbnNXcmFwcGVyLmFwcGVuZENoaWxkKHBvcHVsYXRlQnRuKTtcclxuICAgICAgICBwcmVCdXR0b25zV3JhcHBlci5hcHBlbmRDaGlsZChhY2NlcHRCdG4pO1xyXG5cclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHByZUJ1dHRvbnNXcmFwcGVyKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgaW5pdEJvYXJkID0gZnVuY3Rpb24gKGRvbUJvYXJkKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHTE9CQUxTLkJTSVpFICogR0xPQkFMUy5CU0laRTsgKytpKSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aWxlIGFuZCBhZGQgbGlzdGVuZXJzXHJcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAvLyB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBIYW5kbGVycy50aWxlSGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSAnJyArIChpICUgMTApICsgJy0nICsgTWF0aC5mbG9vcihpIC8gMTApO1xyXG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdCA9IFwidGlsZSBcIiArIHBvcztcclxuICAgICAgICAgICAgZG9tQm9hcmQuYXBwZW5kQ2hpbGQodGlsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXJNYWluID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgcHJldmlvdXMgbGlzdGVuZXJzIGF0dGFjaGVkIHRvIHdob2xlIGJvYXJkc1xyXG4gICAgICAgIGJvYXJkMSA9IGJvYXJkMS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgYm9hcmQyID0gYm9hcmQyLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICAgICAgSGFuZGxlcnMuYXR0YWNoVGlsZUxpc3RlbmVycyhib2FyZDEpO1xyXG4gICAgICAgIEhhbmRsZXJzLmF0dGFjaFRpbGVMaXN0ZW5lcnMoYm9hcmQyKTtcclxuXHJcbiAgICAgICAgcmVuZGVyQm9hcmQoYm9hcmQxLCBwMSwgdHJ1ZSk7XHJcbiAgICAgICAgcmVuZGVyQm9hcmQoYm9hcmQyLCBwMiwgZmFsc2UpO1xyXG5cclxuICAgICAgICB0ZXh0QXJlYS50ZXh0Q29udGVudCA9IHAyIGluc3RhbmNlb2YgQ29tcHV0ZXJQbGF5ZXIgPyBcIlwiIDogXCJQMSdzIHR1cm5cIiA7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBib2FyZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGJvYXJkV3JhcHBlci5jbGFzc0xpc3QgPSBcImJvYXJkLXdyYXBwZXJcIjtcclxuXHJcbiAgICAgICAgYm9hcmRXcmFwcGVyLmFwcGVuZENoaWxkKGJvYXJkMSk7XHJcbiAgICAgICAgYm9hcmRXcmFwcGVyLmFwcGVuZENoaWxkKGJvYXJkMik7XHJcblxyXG5cclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGJvYXJkV3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzZXRNYWluID0gZnVuY3Rpb24gKGIxQ2xvbmUsIGIyQ2xvbmUpIHtcclxuXHJcbiAgICAgICAgSGFuZGxlcnMuYXR0YWNoVGlsZUxpc3RlbmVycyhib2FyZDEpO1xyXG4gICAgICAgIEhhbmRsZXJzLmF0dGFjaFRpbGVMaXN0ZW5lcnMoYm9hcmQyKTtcclxuXHJcbiAgICAgICAgY29uc3QgYm9hcmRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBib2FyZFdyYXBwZXIuY2xhc3NMaXN0ID0gXCJib2FyZC13cmFwcGVyXCI7XHJcblxyXG4gICAgICAgIGJvYXJkV3JhcHBlci5hcHBlbmRDaGlsZChib2FyZDEpO1xyXG4gICAgICAgIGJvYXJkV3JhcHBlci5hcHBlbmRDaGlsZChib2FyZDIpO1xyXG5cclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGJvYXJkV3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVuZGVyUHJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlbmRlclByZVNlbGVjdGlvbihib2FyZDEsIHAxKTtcclxuICAgICAgICByZW5kZXJQcmVCdG5zKCk7XHJcbiAgICAgICAgdGV4dEFyZWEudGV4dENvbnRlbnQgPSBcIlBvcHVsYXRlIHlvdXIgYmF0dGxlIGdyaWQuXCI7XHJcblxyXG4gICAgICAgIGxldCBib3RoUGxheWVyc0luaXQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgYWNjZXB0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NlcHQtYnRuLXByZVwiKTtcclxuICAgICAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXQtYnRuLXByZVwiKTtcclxuICAgICAgICBjb25zdCBwb3B1bGF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wdWxhdGUtYnRuLXByZVwiKTtcclxuXHJcbiAgICAgICAgYWNjZXB0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwcy13cmFwcGVyXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNoaXBzRGl2Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkVGV4dCA9IHRleHRBcmVhLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgdGV4dEFyZWEudGV4dENvbnRlbnQgKz0gXCIgTXVzdCBwbGFjZSBhbGwgc2hpcHMuXCI7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QXJlYS50ZXh0Q29udGVudCA9IG9sZFRleHQ7XHJcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGJvdGhQbGF5ZXJzSW5pdCB8fCBwMiBpbnN0YW5jZW9mIENvbXB1dGVyUGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBXaGF0ZXZlciBjbGVhbmluZ1xyXG4gICAgICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcDIucG9wdWxhdGVSYW5kb20oKTtcclxuICAgICAgICAgICAgICAgIHJlbmRlck1haW4oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFBlYWNlZnVsIGNsZWFuaW5nXHJcbiAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlLXdyYXBwZXJcIikpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyUHJlU2VsZWN0aW9uKGJvYXJkMiwgcDIpO1xyXG4gICAgICAgICAgICAgICAgYm90aFBsYXllcnNJbml0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgcmVtQWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RpbmdQbGF5ZXIgPSBib3RoUGxheWVyc0luaXQgPyBwMiA6IHAxO1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RpbmdCb2FyZCA9IGJvdGhQbGF5ZXJzSW5pdCA/IGJvYXJkMiA6IGJvYXJkMTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBDb29yZHMgPSBzZWxlY3RpbmdQbGF5ZXIuZ2FtZUJvYXJkLmdldFNoaXBTdGF0cygpLm1hcCgoc3QpID0+IHsgcmV0dXJuIFtzdC54LCBzdC55XSB9KTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBbeCwgeV0gb2Ygc2hpcENvb3Jkcykge1xyXG4gICAgICAgICAgICAgICAgSGFuZGxlcnMucmVtb3ZlQmxvY2sodW5kZWZpbmVkLCBzZWxlY3RpbmdQbGF5ZXIuZ2FtZUJvYXJkLCB4LCB5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZW5kZXJCb2FyZChzZWxlY3RpbmdCb2FyZCwgc2VsZWN0aW5nUGxheWVyLCB0cnVlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyByZW1BbGwoKTsgfSk7XHJcblxyXG4gICAgICAgIHBvcHVsYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlbUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW5nUGxheWVyID0gYm90aFBsYXllcnNJbml0ID8gcDIgOiBwMTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW5nQm9hcmQgPSBib3RoUGxheWVyc0luaXQgPyBib2FyZDIgOiBib2FyZDE7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RpbmdQbGF5ZXIucG9wdWxhdGVSYW5kb20oKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwcy13cmFwcGVyXCIpO1xyXG4gICAgICAgICAgICAvLyBQZWFjZWZ1bCBjbGVhbiByZXN1bHRzIGluIGZyZWV6ZT8/XHJcbiAgICAgICAgICAgIHNoaXBzRGl2LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICByZW5kZXJCb2FyZChzZWxlY3RpbmdCb2FyZCwgc2VsZWN0aW5nUGxheWVyLCB0cnVlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBib2FyZHNcclxuICAgICAgICBib2FyZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGJvYXJkMS5jbGFzc0xpc3QgPSBcImJvYXJkXCI7XHJcbiAgICAgICAgYm9hcmQxLmlkID0gXCJib2FyZE9uZVwiO1xyXG5cclxuICAgICAgICBib2FyZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGJvYXJkMi5jbGFzc0xpc3QgPSBcImJvYXJkXCI7XHJcbiAgICAgICAgYm9hcmQyLmlkID0gXCJib2FyZFR3b1wiO1xyXG5cclxuXHJcbiAgICAgICAgaW5pdEJvYXJkKGJvYXJkMSk7XHJcbiAgICAgICAgaW5pdEJvYXJkKGJvYXJkMik7XHJcblxyXG4gICAgICAgIC8vIFNlY29uZCBwbGF5ZXIgaHVtYW4gb3IgcGNcclxuXHJcbiAgICAgICAgdGV4dEFyZWEudGV4dENvbnRlbnQgPSBcIlBsYXkgYWdhaW5zdDpcIjtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgYnRuV3JhcHBlci5jbGFzc0xpc3QgPSBcImFzay1idG4td3JhcHBlclwiO1xyXG5cclxuICAgICAgICBjb25zdCBwbGF5ZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHBsYXllckJ0bi50ZXh0Q29udGVudCA9IFwiUGxheWVyXCI7XHJcbiAgICAgICAgY29uc3QgcGNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHBjQnRuLnRleHRDb250ZW50ID0gXCJQQ1wiO1xyXG5cclxuICAgICAgICBwbGF5ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgcDIgPSBuZXcgUGxheWVyKCk7XHJcbiAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgcmVuZGVyUHJlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBjQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHAyID0gbmV3IENvbXB1dGVyUGxheWVyKCk7XHJcbiAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgcmVuZGVyUHJlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGJ0bldyYXBwZXIuYXBwZW5kQ2hpbGQocGxheWVyQnRuKTtcclxuICAgICAgICBidG5XcmFwcGVyLmFwcGVuZENoaWxkKHBjQnRuKTtcclxuXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChidG5XcmFwcGVyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlbmRlcixcclxuICAgICAgICByZXNldE1haW5cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbmV4cG9ydCB7IFVJIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc2hhcmVkLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvcHJlLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnO1xyXG5cclxuaW1wb3J0IHtVSX0gZnJvbSAnLi91aS5qcyc7XHJcblxyXG5cclxuVUkucmVuZGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9