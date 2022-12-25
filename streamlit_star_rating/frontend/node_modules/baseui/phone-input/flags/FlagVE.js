"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagVE;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagVE(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURf/QQN8fOQMpgP/OOdccNQUvjv/MMtEaMgQsh+nr8XyQvUdkpyZJmIebx4aZxeXcNm0AAAFhSURBVDjL1YyxasMwEIYP/AIJ6AGKJzWTQeA5BoHXLAGNBYPnDgKvQSAw3QtN3qcQsnfIG/Qx+p8kO6F1DIVQ6Cfff//d/ZjoP6CyrACsQw0zsVKhVKaY7KoKNWzxB5UW0xSk5imoaVSpIKzBlUEbHrFEoCwxlW3bJNe0fGbflm3zRLi0XJxJjA4ZDvykudjpQPurwHaezf0D54/vAeO9AZ45Hc3+dXt6NxG+bMj3pvd4+Mz+rT9/9lAfnsFlR7jzMTScgvo+4XsErjgdL5pAwKG5OEkW567uckdSujx3Usr85SDZOLc6yOBYHygeEZKP+3w0vIV3EoGIzPPVIfnRgDFwi3sElvMs/iIgltVSMOjxxRY2QiwIUvEUlEtroatxuybNC500VKWFGLcLCq3CmwDLNel51mS1rrW12qIFG+ewg0WgqzHWXd0NrrPc6try7pm6SB1ewF6a7cbALe4Q+AKvD3ZJxlrXnQAAAABJRU5ErkJggg==",
    alt: "VE"
  }, props));
}