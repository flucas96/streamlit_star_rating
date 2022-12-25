"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagUA;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagUA(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURRJpyw5iv//ZRP/XPf/WN//VMq0AgeIAAAEBSURBVDjL7YzBbQQhDEXtDnAHI2hgZVPASjD3HKD/VmIbyBIpmeSQw2qVrxn78/8DgH/9kfCqDCHoT0gYbIU5CRHNENp1dIWAA8K1PVEEZkw03xiMRw4DEXk73vQDhRGZUcBQ9VN2z3qrrfcXxp1g58WFARMt4Fu9ChCvdTwFwClFjlEHR3fb1OQA7SWJMHNiFv9T8mGbDxCx1Dt1XgnbFXF7A62WlvN2QOkGcq1fAKWULDpESlYzvE8tcnagVHXVjcp8zjOpd6i5ViuylYaW6T014KG87eU/AUvn5u9wnrW1dprm2rwDrbeuZ13NjH+9jbT3N+hLrT90frgN+Fo/A+9sV6ro+VBpOQAAAABJRU5ErkJggg==",
    alt: "UA"
  }, props));
}