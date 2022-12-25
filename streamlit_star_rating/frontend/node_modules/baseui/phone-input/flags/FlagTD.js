"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagTD;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagTD(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURQQrav/PQf/MNQYzedobQNIYO8wVOMcTNouzHC8AAAE7SURBVDjL7Y8xdsMgEEQxnEDcAE4gRxdwYfUqtNRugNaVuH5mF6GnvIS4ibuMBCr+Zxap6ch1OHI/clP/wluFdb7zi60jVD5jLR3hyO21MDY+frnDvNK8Ihgx7jk3EDArhAZjJrM3OOcsqB0cM+G0NxjOVZhzgxuImrGgARUyozZYC4uOLKqdN+OHMMc7yEpSsyglAmt6cF4Ub88NU6XYLzy+OmdBGTUaGaS9Bf12h3oB1i7O80/IiEAUgQM9mKh6Ec2IH+cDhT18Se7nj7bes4MXhKJsDwAjDWrUjJl7D5hCjK1BpqABiCm0mKQhpvTg0/vSwrnFJ0lMMbIgwX9oOe45KVReG1q0r3HSEGrLT8Ix4r3C1tIRClBOW865IzDaSobVayglS7ZnR8i51Dy7DQUj8PwivGz4M+ETOtAIRUdjFREAAAAASUVORK5CYII=",
    alt: "TD"
  }, props));
}