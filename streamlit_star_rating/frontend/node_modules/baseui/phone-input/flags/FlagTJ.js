"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagTJ;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagTJ(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURdYNGs4JFvT09Pz8/ApoDAxvDg1zDw51EPrSUg94EQ53EPrknz5912gAAAFJSURBVDjL3Y2xbsIwEIbPb2C/AbIXJJbILJVYGJKdwd27FNZOicTIZClvwNQtgrFTH6//bycEqJqhQh36x+f77+7zReRfSInOh8WQ2eantWYohUsbZZJjNopdSgu8UQxtxGCkdaZVGmCDMoZ9HgxTyo3eyJU3N+K/EjCtPwGW0yoeDaxangngKfLcAX7p/JI3rrQBFT3H3hfinfPeW9yrFu7zwzmY1LPoFuIcUtI8OuvjwXsaWG61M4EDS3zRIsWDdTCOLYzcTCw3WVKAFjHG1vYtymfgojmAeNO5A8YNPwDf9QjgeD6eTkfEGeqSP5/omo75XZqm2e+7rrnotnqTZloXoK63292urhmDy8B2Wi8D8HqXR+B5WptHACEEmJCVXT+k20hZVWVS1bu+pEJZroV1qKp+mDJeVhgGPlnLyF89HXUNlL8DvgCJZho4eZddhwAAAABJRU5ErkJggg==",
    alt: "TJ"
  }, props));
}