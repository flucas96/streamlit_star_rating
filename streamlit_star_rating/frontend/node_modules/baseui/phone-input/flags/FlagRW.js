"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagRW;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagRW(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURSOv6frSNR+q5PrVQSRjQB2n4ChqRitySxuk3unDMUCux06wu9fBQa29aqu6Z9BPOpYAAAF0SURBVDjL1Yw/asMwFIeFx2aJ8AWMQEu7ROQCHYLmIjCYdskQrDWTs3YxCHIC0Qyl0C0tWTL0CMkRCrlAh5yh7+mP66RJ2iFD+z3z9NN7n0zI/6Wz6CxCTJAs4hJLss56vshwTghcEwblgZ37LmarxwzvGYElvmGAd9F42Vi7eYdRAoInCZLncmXt7AlesEbY483aBxe8wBlTra1iV/4PTuCcKwB7zqFyvL1urd1+KMXUDckjPAcjWrez1bObgoALeAQGV26G3t16vkQ3b/1hh+lyuox/aCiw1SGbwgTBGFObAjCBusbsuzH3xDQUtflOWzjIL4T+aXp/QkipSAEqhEtwUkrTZtolAoERdQGVfircFiXaIxSBlNI2Ih5dQvcRO7cDAj27MDnN+AxCBbiotZ5UFTRM2k1gMyalhkJ0WUHTLlRVGWZDUh4HrZNC6QUppYujUo4czVJCDckARgNEYpJ4RkZQ1yTGr7mXB/5ZEI7zs/AJYKBiL/l1q20AAAAASUVORK5CYII=",
    alt: "RW"
  }, props));
}