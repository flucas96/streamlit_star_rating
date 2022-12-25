"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagPL;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagPL(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURecmS94eQ/39/fj4+PT09PLy8ueovn8AAAEGSURBVDjL7UxBbsQgEBt+QH6wWj6wAh4QieHeQ/j/V2ob0lUPjXpYVa1UJ2B7bMbu17jZbyjknNM9p4SLg8R/KVC6WWIj5ZLwAbnIwnOUMzasMRtpNmU0SuVhiDV6IuX1hKzCFb5TaK3WeYAiLrU0L6KHuUauuLnPuwJevXndTeTypOqMnU0FOza4UM/T6NoaYQNE7370fjgI4E3ZfUDtNsY4BBD06Lg79QHq/Y2FK/xI4R+vQozB+OMLRmU0pmEItJRCBCaFjd42vMbDuCmK8aNFOQ8XzglaG65TR2n1jREA4uKNLsoFcbRp0FU2W3E+Yc4NJ+bzM1qbsOFTtvInVuFr/I3COzfarYKF1+0GAAAAAElFTkSuQmCC",
    alt: "PL"
  }, props));
}