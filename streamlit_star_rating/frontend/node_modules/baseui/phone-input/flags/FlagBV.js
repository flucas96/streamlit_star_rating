"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagBV;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagBV(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURfA+Q/j4+O81OwYydu4wNu4yOO0vNdWmoZEAAAEnSURBVDjL7Y+xbsMwDEQFfUHSNpkJAe5cID+QQfIcGCbnDpb+/xPKI2WjTYGkQ1B06BmW7qingx3Cqv3zab8LN/QP/H0g6kOBogPx6pQIBMW4NcSvQkO0BqLeQIh2LdhcnQ16A5EjKr+p800KfNfuAcDptt4eAPzCX6SuAcBTuhZtQLoH/KzhcLdhgEtT8l0dhWGVN0wqDbZPkzW47cCgLoHAjpWCJsbD3qCJgeMSppeADOLVAKSJu0ABMO8NR/cDb9AKMEtvuJIDM5feMJfy6VTTJeQswrXWAuAllzLPIqIvq8v5HEouXIVltoZRZ5lxQydqZzTk1rShWYPUmgVZpIkeaYMuI9JiDU2c1k3qYsC4LKO9/g3wrTVdq1WcQ4NW4LildX//AIP0spXA0iTsAAAAAElFTkSuQmCC",
    alt: "BV"
  }, props));
}