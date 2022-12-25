"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PhoneInput;

var _react = _interopRequireDefault(require("react"));

var _constants = require("./constants.js");

var _phoneInputLite = _interopRequireDefault(require("./phone-input-lite.js"));

var _defaultProps = _interopRequireDefault(require("./default-props.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

PhoneInput.defaultProps = _defaultProps.default;

function PhoneInput(props) {
  return /*#__PURE__*/_react.default.createElement(_phoneInputLite.default, _extends({}, props, {
    countries: _constants.COUNTRIES
  }));
}