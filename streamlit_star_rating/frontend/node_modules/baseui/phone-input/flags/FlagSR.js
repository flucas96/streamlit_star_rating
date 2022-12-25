"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagSR;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagSR(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURcgUOLoRMzuBQ/7+/j6IR/Pz80CLSUKRTPHx8UGOSkKPS/HMQNZpOuakPtm5xcAAAAE0SURBVDjL7ZSxasMwEIZPc1M47SkEowco9AWKyQNkMXjMFPDWLZCpi0Bjp4D8AiHZOsuBdE6Hdu7L9E6SG9cpcgtdCv3Ap//++yV5EixXq81m2SH0rXsH1tq63u22Wxupa9ahWvsA1Xq9ICpaq8pa7rp6Dos0c5imuQU1zaeKVM6t6oxUDGSZyvKMK8GiJegJ9B31kfKqG/iSCdykuf4bgZ8yGgpcDAWOh4GAe+k7AlCEhT4YuYYacrhHIQT4KqQkiXjpmD3LCAdaKCOOHDiwjB4iSEJIPkNKHNO8wdjxQNBFfuI9lJKOePI7uOOrwwkn3px7/WT0A65xj6nAeC+vmmSAfuA5ecUZCEVZal34elJtLYoZ+IExpmRLk9AxzK7WMzCB0pzDkXswaX4j8P9Gfe+Negdx9mwND/w5AgAAAABJRU5ErkJggg==",
    alt: "SR"
  }, props));
}