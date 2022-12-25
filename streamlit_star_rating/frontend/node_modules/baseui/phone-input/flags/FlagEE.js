"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagEE;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagEE(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURfz8/PT09BEREVKd5Vmk7RkZGUuV3iAgICQkJCYmJq3rrjoAAAEVSURBVDjL1YyxasQwDIblN7DfoASyHyR4Pmgf4DCYrIWA51tCbuzWZOuYvG1/yfElBxdfh6OlH7b0S/olestzpL83HKjKc6S6rqvXeo/q4YUfGGyeA7VtCMGGNlgrKtbWLt13khJdrpIJU15AaMWQ4xmGeZoGMI7jNM/DhIQ/Sxd5+qIhzwf1ec7UXy7959rYVqxh6Jvd9YYvdFsa4CUK6JzJ+8YnRHVrDU7k79E9MmwvOIal27KMnTtRWRZ4gEXhOJSxIc0XQpChE5FSuVCwIcszDP8CreTR+hE0iSaFSmmtAEf+BolLZGUMaWxIpbUx6BnkqHRUMBiZs9Q8jheuLgNDhA9KTjXvcEqGW9RV7RjMrxq+AYEyNRq9P9ddAAAAAElFTkSuQmCC",
    alt: "EE"
  }, props));
}