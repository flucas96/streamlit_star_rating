"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagFO;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagFO(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURfz8/PX19RJvx/Pz8+81R/Hx8RZ20fE7TO0yQ+wvQewtP6s5sX4AAAEySURBVDjL7Y5BaoQwFIZfbhDJBWbeaDp2pUj2XQjtshCyFykzFyj0CjM3aHuEnrLvPRNREUuh0C76q/H5/1/+CJB0Or+cOtjQP/BnAG3Pz32n9dxUAGoQNdxIgxaBooFMLTcvWtu87XeciRsZTrXOpKF/am2nYgPFikEVGxjD/B736RME4X2ASXSEtbjUjoDk5i3iKoDbQLutux8AvvyH7wAPq0CWhMcL7rOl9ASghjWgjpNZb6igNqZp6jodYQzP2bhNAxksIw2HhifawpgM1NBECWDEpQ3RpAZexcXjlRpYY0pPBc3YUF4iEGPO58DrDBhUgQvBe+e8x/KKBb1T5CSpwNPkGMHyHQ+e7UFekkcIwQUfyMfbNyz8RJIwMPCBG4owlaNrBMLQEJaaAR+/BHwCWwnYQHCPFSkAAAAASUVORK5CYII=",
    alt: "FO"
  }, props));
}