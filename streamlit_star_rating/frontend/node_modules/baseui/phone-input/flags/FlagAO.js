"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagAO;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagAO(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURRkZGRAQECIiIs8XLdMaMNYcMtkeNNsfNd0gN/fSP9k/M+iKOox6LOFpNrGZMWJYKKLDIM8AAAG2SURBVDjLrY6xSgNBEIZn9wmyb7BcLSLsIigIgd0rVIQUuastvNimMpZ2WlsIo4iNFvYi2NoJvoCWdjYWdlY6s3uXuIm5NP7czM78881wcNKuIxiXx8eHhxxN3QCjv8Uwv8N5QKMhHOzvj0YHIaeK3hAG7dpdDBRlWVVlORhwnkRRRK8HZUGqiiaX9VtV0aML9fQPMdyDol096Od5vw424tt0DOSexECfC3/jJ2K3C76f+zz29G3jfZ6z1bgEJNpEvE6MaWAL8XwasFHeeeu3XncQ9+qOMgPOWue8d84aa9fQ3OKdc86wy7kLxhljDYkIQ8A6nlHtgkN5BWgc5kGrr8bgJVeWFykYGCusmZeLX1YKGLNx4dqBNTxfcAHx7uEyBbJEX4h4+tvQU0D2jvjWCiwhXrUAH890AR/nAss0xafkJ1KA7uObfE8vaFImWTrLvp8/ZQbAjq5FnZQQ5lTL0GotQUNwJHt8BXgaSB4BE8Fhv5GeKSS0SC+YL5ag6ISqMyslKAkhgAO4EmIypbL24gAULSjeUvzRcng60aYBKBUn1CnaiJWIsOILHTUlkbzxQov+AfgBvP5G6ZC1s1IAAAAASUVORK5CYII=",
    alt: "AO"
  }, props));
}