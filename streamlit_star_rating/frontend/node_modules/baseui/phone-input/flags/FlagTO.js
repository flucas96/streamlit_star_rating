"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagTO;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagTO(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURcUIEs4KFdsOGf39/fLy8vf396lDmDwAAAFJSURBVDjL5ZJBTwMhFISHRO+Aei9r+gfa7L0mcNcW/v9fcebB2qa7Bw/qxdkCjzcf0y0pjitNt9rhx4DDNL3+FjB3Cbh0bQPnKe67P98B1mztHON+bhc+7Q5gaz7EGGJIZLhZJbTWPmiGEFJ4avM6QUCimfh50W4LCEPfBGKio8HKgHKW6Tj2AhL7iROVJo9SSmX3HZ7HqzSZKcwS2Ckl15PHY7W6JtmLdig5s1tOwEMufHKWa4y+ZIdcK5tZAIOUFmREzfzpHlkJHchdPKpb1RSiAdIb8DxKs3lzRnwBN6IXzBexCejWjaC2Adnd50uGtdJY9SKbwK3+BHBr+cDByUsjwev/4JfaSnJcoAR4Z3Q/4v2SoDAPcwZiKwc0q+bKCPRj423QKTcY81WiW8AI6lmQ1JQNN3aLATs1tLDDctfyKoeVPP6NPgHLxpfog9SC9AAAAABJRU5ErkJggg==",
    alt: "TO"
  }, props));
}