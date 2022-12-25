"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagIN;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagIN(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURf+bNxOLBhmcCv+hRBWRB/39/ReXCfj4+fPz8/+ePv+jSNbW6Bgak3p7v6ys1SEjlz0+pGRugX0AAAFnSURBVEjHzZLZgoMgDEVjpQKy2P//2kkIYBjF2vIwc4JkvdDawjoGjOrndZ3XubLmnDxRer06lG62I7K+Huowj4F6K1J7U2Z3vbWY0dal9MXcXOrQzHGtnZ5PzrO1DHYMGGrjANhqILIc2049+TfYdz1745B/z3OMa72LIbqv9Tp4Iugb+l8zlJqXx9tj8C/TvwI0QwrcZBx8dET0gXtypgDc0PsxJXQ+OCZ412ie2WiB7hHp+rAF+gCxO9XX463ObX7DHV9hV280G7uSobX3m9ZqUPRSqVO/+f77hFDTAsNo00CpeP/tCCs5h6O2sv/+XTSYC/L/72rkUm/S/998r38PPMb4c/3CfnksuNgTJT6ryRiWA3WmU5Pdx4n+I7JeoR1R3Ch2qlcJ6pegxuTrGbXYzoBo7BOqFTS1pclBjQFqwn1Kq5AyNlESz6TqQn3Opc9ZzqeUi0fVQMHUQZ2Gh4mu/iaj+h9YMzpA6O1AEgAAAABJRU5ErkJggg==",
    alt: "IN"
  }, props));
}