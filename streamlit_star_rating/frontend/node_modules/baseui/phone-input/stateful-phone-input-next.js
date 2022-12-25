"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StatefulPhoneInputNext;

var _react = _interopRequireDefault(require("react"));

var _statefulPhoneInputContainer = _interopRequireDefault(require("./stateful-phone-input-container.js"));

var _phoneInputNext = _interopRequireDefault(require("./phone-input-next.js"));

var _defaultProps = _interopRequireDefault(require("./default-props.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

StatefulPhoneInputNext.defaultProps = _objectSpread(_objectSpread({}, _defaultProps.default), {}, {
  clearable: true
});

function StatefulPhoneInputNext(props) {
  return /*#__PURE__*/_react.default.createElement(_statefulPhoneInputContainer.default, props, function (childrenProps) {
    return /*#__PURE__*/_react.default.createElement(_phoneInputNext.default, childrenProps);
  });
}