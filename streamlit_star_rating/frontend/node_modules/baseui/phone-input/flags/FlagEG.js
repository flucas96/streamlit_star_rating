"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagEG;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagEG(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURRERERsbG+AbMdITKNkXLP39/fLy8iMjI/j4+MepR97Hh82xWfHiwYu7bqgAAAFHSURBVDjLzY07boQwEIaHG0BFG0V7gEjsARBwgDRIVpRiK8tKlVRpaWyhHGDFo95I3uQCedQUkENlPAYtURLTECkfeMb+/THAuZsz+A9C5iaGJEmyzZd3WtkGe7w8YVFI3cSwjewTTZuU9qmJ0ii6gGiEJFp0Ye+3M+EX1hByN5frCMzuWa7fc324fjnMhALKspSSMart60PbXL1VzCaGAqSU5JjaaP2s9bGiK0bQhBFWNkP7MbQ9CnIK5wJO6NvjU9NXs6gAQV2VQin8RY3gL4QQGJVYUOCIEGTUDa+rm3rPzUFgylHgWJUylfO243g77O03mCixwwlmhqLVcaEfOe/ItukOuJs1hHs3tysI4aIQOPEhCO5OhHQIZxhhccKC4BOBZysyddxhB/AmfN8jG7fjV9QBq0mMCf74kmPPJ3z4xg/Rn/AJ3r2AW5bWVNkAAAAASUVORK5CYII=",
    alt: "EG"
  }, props));
}