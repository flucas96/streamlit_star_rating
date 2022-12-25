"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagLU;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagLU(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURfz8/O0zRfA/UPT09Bym4CGs5SSv6Say7Ci07im07lZu4IUAAAEOSURBVDjL1YwxcsIwFET/jC4Q5QSYE2hGF6CQewrhmga7pcK+AaRLyXGz+4VsQTxOk2HgyVqt9q8l62VW8haFCqw/AY90yY6shDNLyyNdsiMfYjmGYHFgVapR8IIFOrfJgWoUixeWeY3Ce+CMEScU/bico3AGl7Z3HKNrXHLAew8r3niPHArHGIrNBCu9wG5KWL51bs6J16l2Jpy+ok6K2Hj/UHwozPGUwrWf+LqWN02+BToMl8v5nLNhmHzfH0WPruv6eY7Sdt3p1M7CyV5+x21b/LCXRs/mrtOUhd0y27HQjNmhTLZ/vxAiqOus3CFkF+NG6hr3EGuEIVLwx44ePdw3EngWxHurhSX+ofADlZIMIONTENUAAAAASUVORK5CYII=",
    alt: "LU"
  }, props));
}