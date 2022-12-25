"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagQA;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagQA(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURZAfQJYhQ/z8/PT09JwjRqEkSaUmS9iwvKM0VLlpgO7k5wNLdDUAAAG7SURBVDjLlVCxboMwFDR/YEv5AhgiZbQHJKYgmb0DZu5CvqADYyulnVsp7Q/kR3v3MIlJHFW98Ix5d757jioXTIccntVFUP38ISi3H38LxnEYDnHNRpCK3BDGEIYhEUwD6RFtEovXUyIIM0axmYUhpBHfYY2BKU/pkO/hHv8RVN9jRrBPh+y6LvRcE6S36EPoe++hwrvrWKuI3cmT7Sjyvo+1V1VVWjyo7bEnQEQwgjOQL1Hbo78HHKigze7UsdPNRH8RWJK4ZDl5n3eoSlc5Z+0jAcer6NCcYq+9dbAOZV1ZH1vCb9oEe+WsYwDW+rjBkU17G+EwAm12J57YAEbW+Y0IS0AytcYYtKkyssXOaEXSwcBNhg5CyW7WayUJUNjmy0TWzGi503EG/hX1m1kwq1g63oKqRHAFI0jjiRE5wYzJPBJUi6Aw2hSFrEsV6uqACHaNxsoCq1cRGLJgt9CoQmnyKwdXvyoChE7WJOJTaQH74iH75BYgxELaEXolED4u+vIBb3fGr0EEievp+AFOJrgMeQs5Lap6nxWAIXuWiByahgbnxr3keRlShngkgAMMgEcRpGnSNPkhfwGLaxIJbXZLKAAAAABJRU5ErkJggg==",
    alt: "QA"
  }, props));
}