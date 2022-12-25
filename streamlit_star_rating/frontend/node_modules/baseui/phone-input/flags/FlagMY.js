"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagMY;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagMY(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURfb29skWOvPz894hSAg2fcQUN84ZPQQtbvz8/As8idUcQsASNf/PP78RNDdSb/DGQ2tzYpSMWdm3SL8RNbKgU8SrTvHx8WZF2SoAAAFpSURBVEjHzZTpVoQwDIUjVsIAXWF8/0c1adIBUeooP+ptDm1CvnRhgdsTej0X/CPexeR9iu4LP5xr4919Jvk1xvAX3nmmw7frr/Imt4wnRyMJOBqabNRq+zeSxov3bkNCMLdHq/KZcLx3RliO6qyr9FmUN2pT037M85MiT6/ZN3NPwfuQ7howtf1LRiJ+LekmH0bezrM8A/HBm3X+VO+XfMjT89PUwHguQMNN158dFwIfxxxDcBKq8XSbTM4PxaHLnNIs1dj7YX6eMz8/FIdc78hQC+AAMMAgBrpvHcv6EeX9UccEYl0o1ZBTodQAKONcB0X6/vLQPC4igwpIl0dahVRy9ftB3INaprr/ot33iwdRXj/2ZDWeKuj/44hjn3mq8FWATwgqas3319Scb63u6HbdMXaOUu7LNTXnu2tqzr9dU3P+/Zqa89M1wWLtZCcyaxe7kEnPmpYtztrfKwK7ac9zv48X/pj7Ac6lT+Fizn+jAAAAAElFTkSuQmCC",
    alt: "MY"
  }, props));
}