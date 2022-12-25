"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagGM;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagGM(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUaMMT5+Kw4elN0fNNcaLxMjodMVKv7+/vPz888SJ/Hx8ZZmh8UAAAEHSURBVDjL5YwxasQwEEXHN5BuEATuA9YBFiRUL4H0LoTBXbpcYXHlyuAu5ZJTZv6MbLxFRIrFTZ6lmf9nvkVdnVc6IeB9CN6jBt9BdeiqeXahEH2MHpW7KFTRgacXgo2KLvegdAnUKIG0+RQzfzEnHNieBpBzykOCGKSz5wFsT7p4IGdt2JQXHhkPuqdxWccjbIcyWZiZlnVZDxztyHemtc5Mn3U+nhB4r3M9I+Cca517c07Fjk7cldpW9m2rYqfIF3J1nhH4Bvf7NOGqvt02NU1fGvidPwT+BYaMNbYxBkXP1konI9imMdsMqAZkG8sYK73Be7DiMeGA/AUvK6vJTeGFOmcEfgDHKFomk7STfwAAAABJRU5ErkJggg==",
    alt: "GM"
  }, props));
}