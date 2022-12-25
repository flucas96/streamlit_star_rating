"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Flag;
exports.StyledFlag = void 0;

var _react = _interopRequireDefault(require("react"));

var flags = _interopRequireWildcard(require("./flags/index.js"));

var _index2 = require("../styles/index.js");

var _constants = require("./constants.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Flag(props) {
  var $iso = props.$iso,
      oldIsoProp = props.iso,
      _props$width = props.width,
      width = _props$width === void 0 ? '16px' : _props$width,
      restProps = _objectWithoutProperties(props, ["$iso", "iso", "width"]);

  var iso = oldIsoProp || $iso;
  var FlagComponent = flags["Flag".concat(iso.toUpperCase())];
  return /*#__PURE__*/_react.default.createElement(FlagComponent, _extends({
    width: width,
    "data-iso": iso
  }, restProps));
}

var StyledFlag = (0, _index2.styled)(Flag, function (_ref) {
  var _sizeToWidth;

  var _ref$$size = _ref.$size,
      $size = _ref$$size === void 0 ? _constants.SIZE.default : _ref$$size,
      sizing = _ref.$theme.sizing;
  var sizeToWidth = (_sizeToWidth = {}, _defineProperty(_sizeToWidth, _constants.SIZE.mini, sizing.scale700), _defineProperty(_sizeToWidth, _constants.SIZE.compact, sizing.scale800), _defineProperty(_sizeToWidth, _constants.SIZE.default, sizing.scale900), _defineProperty(_sizeToWidth, _constants.SIZE.large, sizing.scale1000), _sizeToWidth);
  return {
    width: sizeToWidth[$size]
  };
});
exports.StyledFlag = StyledFlag;
StyledFlag.displayName = "StyledFlag";