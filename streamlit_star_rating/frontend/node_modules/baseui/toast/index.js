"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "toaster", {
  enumerable: true,
  get: function get() {
    return _toaster.default;
  }
});
Object.defineProperty(exports, "ToasterContainer", {
  enumerable: true,
  get: function get() {
    return _toaster.ToasterContainer;
  }
});
Object.defineProperty(exports, "Toast", {
  enumerable: true,
  get: function get() {
    return _toast.default;
  }
});
Object.defineProperty(exports, "KIND", {
  enumerable: true,
  get: function get() {
    return _constants.KIND;
  }
});
Object.defineProperty(exports, "PLACEMENT", {
  enumerable: true,
  get: function get() {
    return _constants.PLACEMENT;
  }
});
Object.defineProperty(exports, "TYPE", {
  enumerable: true,
  get: function get() {
    return _constants.TYPE;
  }
});
Object.defineProperty(exports, "StyledRoot", {
  enumerable: true,
  get: function get() {
    return _styledComponents.Root;
  }
});
Object.defineProperty(exports, "StyledBody", {
  enumerable: true,
  get: function get() {
    return _styledComponents.Body;
  }
});
Object.defineProperty(exports, "StyledCloseIcon", {
  enumerable: true,
  get: function get() {
    return _styledComponents.CloseIconSvg;
  }
});

var _toaster = _interopRequireWildcard(require("./toaster.js"));

var _toast = _interopRequireDefault(require("./toast.js"));

var _constants = require("./constants.js");

var _styledComponents = require("./styled-components.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }