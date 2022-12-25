"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagLV;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagLV(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURbQ9R6o4QqE0Pf39/fj4+PPz86S20pkAAAD/SURBVDjL3ZNBjsMwCEXxDTAniH2CkaYHqJRk30W4/1XmAw5SpdbtoppFf2z8gd/uHtFXiJkL2Yk3RGMGR6WWisO1FD5f9pnVwmTVQy5LeIOZhStRzdVDMdW5EGhVcFGGxK3PWhMmkQ7TRQQFX5dmbW1ipi3U0WLYm5VYWhxRtwthbb9ztSz54h/m+kTgd66f14F1XbeLnVCa4a+0zfVGQPf9OLYNVeOiaPr9Rqq6q+tQTZP+SjrX7XXga9CbioIxNtyCNT/jYZBl3nhLvkpS5ptnZJX30bvnznizLuljakMnfKOJa2QFjk6XJwLRABCjhSQYkwAwIDxRBKL/gd4f2oyUpGeyCJ4AAAAASUVORK5CYII=",
    alt: "LV"
  }, props));
}