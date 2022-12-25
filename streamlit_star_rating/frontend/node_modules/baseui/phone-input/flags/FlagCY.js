"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagCY;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagCY(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURfj4+Pz8/PT09P7+/vHx8d58JXF7XPPj1MLGuuaYVOy5jISNcvHQs5adh0pXMLTazZkAAAIDSURBVDjLvY8xaxVBEMdnl4Ca6pYtbJdhIa+wyPG+gCwLUcRyEcV6DYgQRQmvfYSHYCNiCq3ShCBYyiNgZcBCy3yAFH4AP4Mzs7v3DJ6vEv93Ozs785v/7cF0vbbhnwP2D6A31q46Vg69RMuHbbDTvu+ntpeztT2LdmM4t6YDyvilMIjz/b6XnIExzd7U5C/ALH1ZC8zSAzMOPOdw/UNKr1u/A2WM6uq7md593P9+mMhAdZ2RB4xSjHLoXqSi+095qqMOO3BCCwDUcQWOFDsq7lKVJKHrbjQD4HmWIYB3EH1LA8DiQdmhQptp0JEUS6MGUFuHK+AeVxWUm0GFZ+k3oDXKJ+QKwx/IJ8rMZX0drrhzAmO61oC3oEeBK81gr1Vc3TU4eW9L//0eGzjHfa5D8dOgNdI1H6LWpeScLpPgkOS4vHGczhw3HHKkvQDyAcI0+hPqO9QrOQRAcaDHf37GPT7e+cS1IpDI85Ncy7ix3KUBRjW64kCZ3slPgpYb3c2PpMJ2DOjC4CKfyj5Z5jn3Lzmw460sxNVl3sVBDWD5V5lGyejxPIwCGBd5fnG+yAc44uC9Rx9f4s8fkwNPBsUjBAe+SE4R8eIcY0AvBEVPQIwheB8Cz8Syc4Fy7jigvCFlxaqS3wRKvVSH1SS5gxiYjuITy6oOceUwFFdZOwuwTv8D+AUfPfLGZjzHqQAAAABJRU5ErkJggg==",
    alt: "CY"
  }, props));
}