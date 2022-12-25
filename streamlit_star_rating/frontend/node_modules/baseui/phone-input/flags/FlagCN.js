"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagCN;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagCN(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURegvFu40GuIrEv7VK/u2Ku9RHfWDIkliEvwAAAF1SURBVDjL5Y7BbsIwEEQ3Ful5owJny1I/oHXIGYS5g0R7Lorg/z+hM2uTgKrQHnrrotjrnTezSPO4VP4WOP8EpPfHwCK20wC987iaBi5MOG6mgWQ7TpPAIh5KMwEsI826uHTfALV7HrEebez0XkeC6jGlbWxT2mnTx6a6LSTw2kZWq6r95aDaVOhwwqsi7JcGnICazOLYbrHHEfpKykivnxrAmOoJwGcWmAmXQMHBBGbMAKwpnmulyDH9wMwgzzHFVwHax71IVUKsI1NJ31V9xzCcDOKMyXKt7V7qFmwdOxNzduasNvhmzNKPwTTaUU5+V/X6sT6LbxOKE8/jJa6s48bSODscn168iwlvjzYThDwVzoi4HYY29c4ob8mOFv6ctd4SIIZCB/oDpDCqeFEr3jAYnVUo+0LGij9QykGw+IAuT7AClmCtnc6FcobAEf5kMB+mNgimh4JjnWSJNTRj67jCnEOCv+Fsi4z9fZXJFZis/wJ8AXJ3deR1AI3VAAAAAElFTkSuQmCC",
    alt: "CN"
  }, props));
}