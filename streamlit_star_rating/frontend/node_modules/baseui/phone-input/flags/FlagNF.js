"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagNF;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagNF(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURSCSRB6KQBuCPBl7OPLz8v39/fn5+cvi0pbJpjqbWHe6jMol7oAAAAHqSURBVDjL1ZCxbxMxGMU/SwxNp7OFhGDK2QOCqTrzD5BaLmLqkhNi4irbkE4dqrBSFDHDVEYWkPgved/nC2mTKDM863yf3vv5OReiteZ3dU67+o+A3z8PA2/o+2HgLR1vA02j8GAr8PsFTXI/z/mcvYaUIkJc99z3OV9NaDnH9A4mHyQsrRqtsZce+kT0pQAcYMJTupGqRkGc9x/oqOAGAFW1QZYurEQPsPdlGM+jYcyVxrmcXtFRQN4PHMLEr+BBHi64xGcd8zDoUQBG4UeWsgAwqVeobYAb8hX/M8v9DXLF+6/U3JYDQP6h6dcO0GptsPgjP35T6vZaALgw24ba1hjOGThr+MMeMYDM8IMGvHQLpRIvpfUJpoFjs2nApksqCwEeYxrkDBIGZGptKindMLDCdGHZtsZOyVYZk6CXfG3EcGEMm7ad1gbAFvb1DY+rZYzSgGfTACAGI7Z9CIALMJrNFTbGM05hP01ptj52pyHE1wJa+zzGfUAMi3F6FvY3hNmeEYCztsOC+xlTh8mu/ja4KTmYTHQhBsi94D3MXFUHgInOAUiceAZimHUsxw38ds47JycrEMLpuuGEvPNC+/uAWOg9IbycB7Xd4GF23qOh4xi6D0iKbEq+yo3AqFMvsTSstQv4fwX4A1vnAdWeMB2lAAAAAElFTkSuQmCC",
    alt: "NF"
  }, props));
}