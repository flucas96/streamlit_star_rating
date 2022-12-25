"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ThemeProvider", {
  enumerable: true,
  get: function get() {
    return _themeProvider.default;
  }
});
Object.defineProperty(exports, "createThemedStyled", {
  enumerable: true,
  get: function get() {
    return _styled.createThemedStyled;
  }
});
Object.defineProperty(exports, "createThemedWithStyle", {
  enumerable: true,
  get: function get() {
    return _styled.createThemedWithStyle;
  }
});
Object.defineProperty(exports, "createThemedUseStyletron", {
  enumerable: true,
  get: function get() {
    return _styled.createThemedUseStyletron;
  }
});
Object.defineProperty(exports, "styled", {
  enumerable: true,
  get: function get() {
    return _styled.styled;
  }
});
Object.defineProperty(exports, "withStyle", {
  enumerable: true,
  get: function get() {
    return _styled.withStyle;
  }
});
Object.defineProperty(exports, "useStyletron", {
  enumerable: true,
  get: function get() {
    return _styled.useStyletron;
  }
});
Object.defineProperty(exports, "withWrapper", {
  enumerable: true,
  get: function get() {
    return _styled.withWrapper;
  }
});
Object.defineProperty(exports, "hexToRgb", {
  enumerable: true,
  get: function get() {
    return _util.hexToRgb;
  }
});
Object.defineProperty(exports, "expandBorderStyles", {
  enumerable: true,
  get: function get() {
    return _util.expandBorderStyles;
  }
});
exports.ThemeConsumer = void 0;

var _themeProvider = _interopRequireWildcard(require("./theme-provider.js"));

var _styled = require("./styled.js");

var _util = require("./util.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var ThemeConsumer = _themeProvider.ThemeContext.Consumer;
exports.ThemeConsumer = ThemeConsumer;