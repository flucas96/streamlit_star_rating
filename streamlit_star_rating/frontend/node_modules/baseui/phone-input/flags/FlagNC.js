"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagNC;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagNC(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURQRDuOtHP+9ORvJUTAZHvwhKxSSfTQE+sCipUyakUPvmQvRYUfrlOiObSyKYSSGWSPZdVCGVRyMjHoZ8LBERENnRRtJ6M/SMRPi+QbG8NlRPI1S2TTRgmSGUR5ajcgMrC3kAAAH3SURBVEjHpZKLlqsgDEVT7Vif+KpLa9v5/8+cJARBCq7e6zHKIWQHdAk/5wSn+etXF0qM4/GC6zmd52FrA7uGENsP3DXABvDx2Jmdria8pKSutmZX7WPBNv+nm42byegEm9tn0bZuczczkgI5O9vlneUNtTaQdPI66674ev1OUzlNv6+DGjigS6ODDlH+pdFpXEccog2gC2sWehgG4ss5UgeVVlfpORqeanxFfJ3Yd7ZOalhAE2fOJVW3MMO71/pFlmrHGQ9VWnlKzfbluMrpnQN4gjQgeXsUHsDYOVSZBvl0MdBo918O+ERuY+qSLgzm2ZelQZLUcZCQUrnpQSNvSBidn5thJKI0cRwkIdVaZT3S9691B0umtk2YXzRRM19ruwQr4ZIkHHbEYZYD1MN9MHbeqtwLLhccKGRk1xlI78/q9lUCEe8L8wsj+P/e8f9lv2jaLwzxtKJ3v5P0CZJwYYS/8Bd4MP/gt4/UQR7Rk6gV8ZXMM1YW5fMn7fsY+RnFD3jqQJ9uOqCP+TwvUPg84gujPOpyO7NLIijOSfOZ3OIzL2XTXqbIIPNVcHwryM4JmowuUeOEjM2+XnKmBHmc/Ls2BhqlGtVg7EcjmX+sKb3WgPLUqO+FtdAq1aoWQ4++3LwK1ELf9+/+jdE7at/tG6Nt3VQf0h9ONVOPUrdvGgAAAABJRU5ErkJggg==",
    alt: "NC"
  }, props));
}