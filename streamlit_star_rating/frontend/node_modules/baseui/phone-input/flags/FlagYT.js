"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagYT;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagYT(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURf7+/t46JxYmndHQ0Pj4+PHx8cvLy/X19fz8/PPz8+fn5tzc3PDSP+mNNMHBwcxtYnR9wU9asqCm09imoKGhocfK5UcNBaEAAAI3SURBVEjH5VTtcuMgDKRFQpZI4yRt3/9VTx+AsePp9Hp/bu6W2AZpV4tInJT+aSzfoCgm3rJTT5llyy1TZpmI/bONbdpsupvN0rKMRL/H7Bm9yBCO+J/hL9MDCn/BZsEDP/QQF9ZcKtgMnqQRyTlXHAFwf+hpyQaJ9O11xi04nQHQHZKX8TXmksu1ZHC87mEhtS9XI2FoDAlca0M0kz+uGb3kQR/95etHVpKEIPbf5ACimawnkIf/3Zq43bs/aE7zph9IfSOLpYuai5d3/Q0+H5/gJ2Ehy3iTBK1l0P6HP9SiqBjV3B9Aqd1fORiU5re0/gNYpTjcPs7vwcyPcX7QCeHRz69VakkFbud/j+5Dj4Mhs76BRjaffH/kx9fBJ/po32Hklz12BhXO/Nnq59waeNb79p3DOz3Zh3wHuYhVkTM9iSn1R1abwB8pHtBuFs5d/3Z5G3c/4Ex9r2GoV6IN+vKK80QXqrlcLuOuEbG6JMLO9RJEiWAMzlJVil0/+5PtH7VIlcwm9It2/pI9iMajQ/+2O48Tmcfkv6HWKFPoTE/k+xq0QOIxZdsgq3212LqTry4sTL09FxCz6e3p0G9O9JSxdfMeNdb3LM7GyBfe9OpvoBj6el31/6NFtKqsL6vE1KD/H1d9QYcfu/+8ZMStnC1XW05r5Nmw+0+KDRTSr5H4t7Fz+oH+4I8O1saQ4znO4rCe412TsEV4X2N+HsGTJkUgojgKTauzsWkS/gjcK/xQP/C/638BBHQ9d5euIGsAAAAASUVORK5CYII=",
    alt: "YT"
  }, props));
}