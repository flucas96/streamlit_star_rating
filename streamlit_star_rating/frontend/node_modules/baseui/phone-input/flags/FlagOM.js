"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagOM;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagOM(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExUReQjLd4eKP39/espM/f39w+BEvPy8hCEExGKFRKNFRGIFBGJFOxOV+9+hPXGyN2ZF2UAAAGeSURBVDjLrY4/awJBEMVnWbCy2CtC/jUh+AEWT6wkiFksJU2wtTiuCiGNCFeljNikNF06ITYpxSttRQKXMqTJF8nM3J2euIuE+Fxndvf95u2Bv1b10qILOBCw2AckVGotU6lUWsaYvGJvAs//UEbVVOjakLuuDKwW1ysEaqbotQzvGSjfd+58BnbVBI3Wp0l8qR2A1P63MZ1E+7XAtE2ACwvLmHYbn5CNZT1sLH1ZN0EQtnGFCPE/DEJ8Qkq9ulpoLUshelvCYw80Wl/lBF8qhRb1QEoJH/pDS3ABmAGIgSsBCQrBBIfQB9ApVhB9PPc0AZzzxaQsjbeaMoqWe8h9PJwUgNhDKBAClOCSLxZ3HM8sSuK7DUq/9agn0jFYz9IlfoGgEaU87sB7mkmroITsPSFyIz3yiBIKo2kvPE95XlYypReAjVx85PTFomcgXxCsHAAHCcrbAcbj4ZAScp08WfToBkaj2WwbOJ/Pp9M4LtY4fi8AZ28WvdqBySSKLEAUkUHKoSh6KADHA4v+BBx1u4NBv7+pO8CtRTf/B34BGO4y0YNj2joAAAAASUVORK5CYII=",
    alt: "OM"
  }, props));
}