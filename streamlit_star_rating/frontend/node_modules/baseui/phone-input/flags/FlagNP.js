"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagNP;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagNP(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABmUExURUdwTHaSxFd6ugA5lRdOqCxcqwtCm63A3uLo9FR8veYYQOIXPwI9nOoZQt8WPQRBpgM/ofTz8/38/Ok/YBk6lq8iWOdObOUuUe+isu2Qol0xffFyi/jR2GYrco8jX/evvUwueiszh+0lWJQAAAAKdFJOUwCDpP/r0fFNGKvd2LdkAAABtUlEQVRIx6WUi5qCIBBGa9k2A0QUL5ia9f4vuTNAajdB+vMzI87M0elrl2EO+2QXmczm9/gdn2WnJJZP06qMVjB8ys6xCpaPV7jzsQoTH6mQyYmPUpBz/yiFRx4UpJRbFGB7+pCqhKVwhZlX5nAKMlRh5seuG7crGJ5CazUWxaiU+bBBAXkKr64w6ZCnlAYrWH9o2yLe4iXFGiJQwfbvem37676jGFgLU4A9uL0vXHpzN7gUpsCBB6BxBfqGuv7UPgXuUeCc2/1dn+dOfo44c48Cl3wJsKHkr1lRcP3vGV5YaU4/Xp6Z87vumL/jGs8MzSy/3/T/ATzQeJgi6H/azlN7QJErLBySTbxlGzSA07CtAPY3qTVlugaHy/rAnkLuvMrbNld4dSErz/t9/6ZWdQ6Bt4bBz5YHj4ET01/nLhofQ3ULLuB41lq8NR+ouMF60BwJIU+8YAJyhS9CxkA4efHHGmwgQXM0vFg+P+yODhcw8M8RNtn9dn722t4EFvDOEfqbhqLWQuhaLFOVUGEf1F+IZjotCty8BSb+fbDA6QveO0cfL4b1AiQon8dAAgskX/IfBP4BTCg8gSgOj4oAAAAASUVORK5CYII=",
    alt: "NP"
  }, props));
}