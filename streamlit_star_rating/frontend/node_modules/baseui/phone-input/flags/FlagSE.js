"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagSE;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagSE(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURQ9vqf/QQBJ3tBN5t//NNRR7uRV8uhV8uxZ9u31PY24AAAFWSURBVDjL5Y9NboMwEIVHPkFo3Z/lyFwgwmIPEgeIhEy33UB6giTL7nLtzhsbExIly2z6Avabmc8Ph86Hw36PtxB9nI9H+Hk9nX5pmiYA0w+A97nK+qZhHINoGAB8TuM4DFNeQ9hRSPoC8BYuNcjhBQh6h3CthwkZ6Hvv61qBvq6XYS/VjnxUBF5lBx47cNsZ8F4T/LUWICXcB/waqKqyxLslNc65UoHoswCoqUQAXuYCcqWrHJODgWYgR2ibKcflhJWeAhSPtXkK0FrZdYl7fOZ9QyisLRZOh7EUmxJaQVoR1kxYmIZgok+xCsYDsukl5RSGnY1fx3k00iWzOjlyUWYxszPGMEtQ1/BazghhDBliSehs20glhXaMdmWORzxLgJUE7bD+0OWUgDuIGi3znFICbiKAbdvGLC2A+SvAU0Kcs7n9OwnghFwQvALoZnCVcF//G/gDH6Gx9vs7Oz0AAAAASUVORK5CYII=",
    alt: "SE"
  }, props));
}