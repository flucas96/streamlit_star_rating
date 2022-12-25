"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagRU;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagRU(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURQlCrdcwKv39/d01L/n5+eM5M/T09PHx8UZ8zfYAAAD8SURBVDjL7YxNisMwDIV1hJpcYAg+QIzxPhihdSF0PwvjbLtyrj+SHDdtB0yh3c186Of56WEY+3zB+4E4jnaM3DJlWD20OQMiRrS3iWjr2pkh4nG0uIeixiwv/aHHDKmBRISYEmFz2CAOEBJmlpmtTCnLQd5Eor4hC4kr5QO6qT3QSHenqp8C96y5aGATSllX6apL2dbmXjVQtoPyqGqgwxX++VNc+pw/EFgugesX6vE4Q/ALK6ZN2YFdefhlAr94Jmgx+tIdvKQ40OfFwOC0vHc6GTG0JxiMM25gZDptY8yunDuB3I14bpCDEeUkVGsCU3HmWVROYPp8IPADMwTqW75SRXgAAAAASUVORK5CYII=",
    alt: "RU"
  }, props));
}