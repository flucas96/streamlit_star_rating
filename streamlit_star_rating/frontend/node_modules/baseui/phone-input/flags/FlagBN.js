"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagBN;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagBN(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURfffOREREfj4+PPz8/z8/CEhIBgYGPfgPfjiTfjiSfjiT/jhQ0RAJnBpNvTw1Pvxq8WzNPrrgs3Ks5iSbJqMKvjlZbOujOTOOuk+8v0AAAIdSURBVEjHpZMBYoMgDEUjikCpdt267f43XSAJBLBdt0aKmPI/4Ylwei3gOub8yWOr94f6ZblccZ5Er/Onx3nUL4u5fEr6rwFmybGjharh3vThL9Szw7Jf/7486lOwA6LAVPDUhTuSJg+zaRwSiuBDEBe+AhlKnp/wGebZiEVFUeZ7HlQn1ISSzvoUpq0CUYSybuBGmprON9arKgqKoMNXk2YM54+9czAVBc3hrrXjJFhrt6+5RLePyyk8CE96a8/bu9TQs8go7gfpk8VHtWjfB6OIgXsa4C1dsK62WuxSw9w6zBlFJLXHexQX1K/KQlCY8ZUiCjaIsjo20iuLguLoVHhxiFx+gGnqDBSK8k4ViiKlClA/VYu1Q6GKUKcixkglpPrP03RsMZwK/aEXB4hvm20s7IDCjGdzv4aYA1L3tq1tEQco+u9joX1kvXPuxvtYpwcoxg+E9Dm+i0XvoFHIC5F9VH10A4rDU9GiAJS5pGWPHsV6dCrUB0L7T8253FUUo8XWo1gMre+iFJHHPYrjU5EdgOSOmzy5308FWYDIWKk28hQKaNYupeQfwO3+6WYU4CSiGsQyGlG0p0KtH5VH9YMBRa0CUYD7PQCGD6SU8Yw+OQwoeCfP6dM2ehQ2O0D6iy5uMh+gJoBqgIKi1AB1vjIRbfXg8YACKJx0ooPyR+sHHYo0RapWOqfnj+OKAv4bjAJeiIQCXovbi3r4AeI7QrLNSxU4AAAAAElFTkSuQmCC",
    alt: "BN"
  }, props));
}