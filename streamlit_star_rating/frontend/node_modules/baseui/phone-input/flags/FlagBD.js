"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagBD;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagBD(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURRGAYAxtUfI1TA96Ww5zVo1SUtY9TllhVRtyV0k/u4QAAAF/SURBVDjL7ZO9T8MwEMVP8sJYSzcwR2rKaGGXrrF8fMylA/8AzB0AsYP4u3nnpI7ddmBk4KlJLu/97pyPhuhfv5Or6reX/nnfpEaJUUQX2071ZHKTI2eMlsah0M2/57zr9whMblKCnPcetTfrbtJyBKaNvJ564932AHSPaEEbTBTkR5lNybsVcvQqgQlOaey+Z6D/9EVlgp9XyGucAlXeXZ0BNjWwOgXSugaWcMIBCFn+rgZ6GD6EBA2U0B58umkAxAgxJUwTUrqugQ4T0CTwHSVJqEK7RBKBra0DIcQvtYBoJjoC1yCi5W1zF9nTXMYJWOa+eQ4aShaAUQ/Nkxw9DJgBqd/F7mBKKECs3+ZXAaoJ1UWs5AiIwhLjvMaOObvqA2BmVBzLjS6jqMmZGCjqEWJ7+Fe/8uiBkTgQzthai7PL6buAA4/1YHlBMVeoIf2yPmxWzE0xLiiX6sSp4CI9WRBbtlgkZsY20h5MmEZMzBxz3itwpKhRAc8Arf4E8APJkK7Tf+8T/gAAAABJRU5ErkJggg==",
    alt: "BD"
  }, props));
}