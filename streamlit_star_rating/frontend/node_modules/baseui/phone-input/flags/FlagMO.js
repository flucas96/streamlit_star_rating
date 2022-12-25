"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagMO;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagMO(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURQSPcMjh3JrNwjSfhwebegKBZPf39waVdQF8YAOHaSebZ9nJI1ewnHqySPzRF/HPG4m8f2PzrUsAAAG+SURBVEjH5VPZcsMgDBSXsRyc/P/fFpAQwgG30zx1umI4pN0VTmzwnwH+vT6ugpa+n7JA18qo8JHU8XydzUl4muGhi1Qb8X89X9qOaXLDGEFnonIilP6q4PWh7iHGONEdj8eh8pejYo56wfl8nuujwkL/bf+u70FmIKYQndmMUz3euQBR8aHgOA+u+K3As67noXFJ0BauPJ4P3tuqt1ysebKSldxkEh6dNwLxm14sVF/oF6j3p0NifYL2XFfqPSzrLfwOn+oN680tC98CfErJ6f7R1QyXBy4NmnjPfY30b4kIjdnmJkIaNdy2QrsBypS1qLQ02YXcVibqZ8CrYynzg9uUX30sz97eQ+EJQB+Q74LobP7RddJs1g2k/sxV8WaTvwPnfO3vncufhba/trtg9QO6CXemRzOVG/yhPqSpPs31QYJGjoBvUcYkjdA0pCIfRDkP+9Au2HNQfCtQzeI1AvVKrUCupS6aB4wvoYXuj8opQFgh9X/BpCVrrQ/B2fzlGWPdDedOv+97XcKdfi+EMfomhHmhB+QuXNlrQ9pQMHo9qCydQRKDWgj9pO16HrgUBso+9JnUpQD7Z/jr+i+M3D32mf86IAAAAABJRU5ErkJggg==",
    alt: "MO"
  }, props));
}