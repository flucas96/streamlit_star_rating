"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagMD;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagMD(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURf/YTOUZQNkWO//TNgpMsM4SNgxRuQ5Vwf/VQRBZyK9/Wd6wSsSVUwt4qjAAAAG/SURBVDjL1Y89btwwFIRVqox4giUBn4ANi3QiBJUGAfUuBCplKgnqBLAhnPTEXsH2AQw7Bwh8Ks971P7EWcUwkMYDrpr5+A232B/zvThGVod8KY59eg/4D4ab9wwfAdRHDInL/TxPG4Y5pWma533amkAJJk1py5DSPPEZtwycmQzLkuvyzzfQ/RkMDCWyUJTkCCEOBgao+klQ6YSoZCWqSv4F3OIXAVRSKiGk3J0B30pUT49skIcNAOM0ZKCNIF5+x7hETHAU3jAQQfFtudzeIXioUxigDTIMAwg67RIZiDE6lAqQwhv8OPL90bfxBCi+jofuitxSGKDDhjUAcHf0fvD+DOhQCTo8kfvhHHDqZKByxH3fvzGcAM6wAs9PG4CnNxj+FyFcBvrWhB/o72M0ANwFIETz9e4hkOEKxBVlV/S+6XPqaIz59WiMDp1y6EkDAwg22Dqg0zroELpcOzI0DQyNJYMGwdFkcN06gbrhlTrQbZZ0VCpCrgu7vqC39dqHoNG4jih3XTS2sdbSRq05Ab+u4wF8MUGdt72FQZvMaLoNCBQmjlkNKwADfWmi54U3ALeYyIb+kiHnHxOfCXgFWIOXPjDVxEgAAAAASUVORK5CYII=",
    alt: "MD"
  }, props));
}