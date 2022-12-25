"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagHU;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagHU(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURf39/Uh2Ut06T1CCW/f399czSFeMYvPz89IuQ88rQP4llicAAAEbSURBVDjLzYy9asMwFEbvkAeI0AuUgnYbgWYNAq3GYPBYKHTOINDaJSBvHZu3zXcl2SUNVTKEtufK90/Houc2T/QfhEmpaRpHzqpUdFs/DTROWUEe1yulNk3hhTbDDWEe6HhJmvNJc2WgxMzpWOu8GnXzTmv3Ayyc0lKnZUmfOCkvliqc2nzcFv4A+33hLGK3c2u2O1B6FGfJlgaz48x7uKWHZfGCXSd0/C8v+C6/B6HNHUL0wAXvoo84IWAsOQTn/YFCjDiRc6lfM3OguO3z0scLAgtNHiG8tXn5DUFrgwDG6Fd9RUeG7w3QuDdXdKTb3CH0WvYZVF1rzfx1JEUvM7zmKrbM356QRZ9D5iijrI3oSLSQYt8WxCOEMwW3fCckU6ngAAAAAElFTkSuQmCC",
    alt: "HU"
  }, props));
}