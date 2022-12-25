"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagLI;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagLI(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURQUxhAg4keIkO9ofNtQbMc8XLU3qe+oAAAD6SURBVDjL7Y1RbgMhDETNDbw3iLIXiPAeIBLw3w+4/1U6Y7NRqkg0n1HVAZux/WRkW0vlHwggJd10S/SbG53Ze0mEZVJNohtu0kQphCTK8LFHjE4fjl/gRnDPk3cnwhVIKoLaGefQigmb4pw6ITP4+ZzIpKLQk2FHHuOfRl8nf1/XtS4fAeTlfL/Ins12s2z77pGNDVienLHBMhyncRzKMUW+icUGKsdzlt4AsNYbQCnloKxQFi/zYWzfpNZaKiFzstQDANPhcecGEKfgjidfy13qWu8ArfWpBtXOmk/0vmSM0Ubro7WBhIq2RxcHAItX9eH08A0r/Q58AwRkrCrJyYJYAAAAAElFTkSuQmCC",
    alt: "LI"
  }, props));
}