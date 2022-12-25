"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagSL;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagSL(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURfX19fz8/BqE1xZ9zyy5QxJ4yC/BRzLHSjPLTTXOTv26ANoAAAEbSURBVDjL3YwxbsMwDEWpG8g3MKILGCa8ZxAyBxC8ewikNZOcsVs6du1t+0nFjtMk7hIURZ+oz0/q2/S5zge9r/P2c2A8nc7n8SHycqRxnSOlPKYEl/WKK00k54xAzCmCpDfHqYmklAaKBbznGK+hiTnwjIF2Sw43RGy2EvAyqUJ2XkSRYSDv/cHP7LQWbMmv84pAtY79EwFbWVsZFekGS5hKPJbWkjGmNGu/O30jBY5IVnCEVhwWJSWvZKSs0bxVX8w/YbNO/RsBt2lxoK1TRVuUqwnCDuvrZaninWuImZFQvdyWuZRQE9/TTgb55lFgSUOBOw4BtmMOsDrKHKS6hvoLIfRyusWR7Z46Ad/0/V0C+34//+EJLwh8ASlUNKl6yfZiAAAAAElFTkSuQmCC",
    alt: "SL"
  }, props));
}