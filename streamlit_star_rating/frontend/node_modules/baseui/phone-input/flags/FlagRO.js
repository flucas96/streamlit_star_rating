"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagRO;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagRO(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURf/YT9EYL9oeNf7VRP3SO+IjOgQvgQYziQc2kAg5lQk7mj9haAMAAAGtSURBVDjL3Y8xjqMwGIUt+QLgE8SW6C3ZN4ADREi5QQQHSGRSRkoR6KaMqaZlT7nvmYQhq2Xq0Tz8O8X3+dkRf5Z8iiWHJXvxE4QRaMQ3TRvCxIxjHLeEkTDGaYof/xdinI04bQop3zW8shLquj4UB0y9IRRkafbiEQck4ue94Zm9GB5gD2S4Cjtja+uiMKAFr+iHoX+wpL9aKa2TUgpJXCCm2ImhB+8pXa21UnCzpjCmNph6J8B7cIQCC6RFw3yHMbhiyS3V03LpeMpuLeAFgNIJ+8L1u8ALnEwN5qvh3l8u95SbczzvULMWQKH02G58o+Nf/bcBpzvsqSFFvjVcLt09zWkRnFFfQkeW1lrQiFFIJu5dCoyVoFmhudCQTtNZC4hSXBReOZXelR5TloocWL8LM/doICPWOlsJZ+/n81WZ61zpXKucDaFrQ4c9nMpXPAjvgJKJtqUBpT3zfMWpwHMEFZkICI0Qzh7IeyxPSIcNXZtoCO0xcT6hQjkchcEVQE1okSPIM/mSTDRNIG5CkxoqFsyCmoW2abCQcKyqjQYqAQ0bQmie2Wz4BcJfLHiS3dqtFIsAAAAASUVORK5CYII=",
    alt: "RO"
  }, props));
}