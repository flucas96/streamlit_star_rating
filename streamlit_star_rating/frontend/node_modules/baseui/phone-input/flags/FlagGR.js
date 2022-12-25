"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagGR;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagGR(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURRdjshpqvfv7+/X19fHx8V8x6goAAAEnSURBVDjL3VDbkcNACIMO2A5uTAMe2AIys+6/ppNY2+c8Jj/3lcheWCMhSKQVlmVpL2HyiYLlAT+fIXgoPP/MVwJrWqc1vRc4BAqQ4cFNIAhfosBsaCVjAF3gEFT8jQCnpEi26VDmvov0XGImEytggNVq7hGHW3rmOgUt3MU4GZugHMmI6fgfuLUKHEirYFRwoAfD6WAeSQfViIRBZJTLAoHiMUEZPmZCbzTieGlXIW+atYOI5R2cDkoPiMFii9lQUYAKTBAjktAzcjeRcoCzJ2u8i+zExUHgkEdtJ/QcU6USHH1n/5PDS+R7rDKy53gsH4UOQU4FzvmOgbR/rdLHRimwDZQ76WTqFTGi57aBY2VMZV1HXftNJrtdcP0YN/kObO9x+7/gF9hmlT8gdsd4AAAAAElFTkSuQmCC",
    alt: "GR"
  }, props));
}