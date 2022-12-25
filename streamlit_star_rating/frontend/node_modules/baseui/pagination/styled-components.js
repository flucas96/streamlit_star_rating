"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledDropdownContainer = exports.StyledMaxLabel = exports.StyledRoot = void 0;

var _index = require("../styles/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledRoot = (0, _index.styled)('div', function (_ref) {
  var $theme = _ref.$theme;
  return _objectSpread({
    display: 'flex',
    alignItems: 'center',
    color: $theme.colors.backgroundInversePrimary
  }, $theme.typography.font350);
});
exports.StyledRoot = StyledRoot;
StyledRoot.displayName = "StyledRoot";
var StyledMaxLabel = (0, _index.styled)('span', function (_ref2) {
  var _ref3;

  var $theme = _ref2.$theme;
  var marginStartDir = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  var marginEndDir = $theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';
  return _ref3 = {}, _defineProperty(_ref3, marginStartDir, $theme.sizing.scale300), _defineProperty(_ref3, marginEndDir, $theme.sizing.scale600), _ref3;
});
exports.StyledMaxLabel = StyledMaxLabel;
StyledMaxLabel.displayName = "StyledMaxLabel";
var StyledDropdownContainer = (0, _index.styled)('div', function (_ref4) {
  var _ref5;

  var $theme = _ref4.$theme,
      $isFocusVisible = _ref4.$isFocusVisible;
  var marginStartDir = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  var marginEndDir = $theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';
  return _ref5 = {
    position: 'relative',
    outline: $isFocusVisible ? "3px solid ".concat($theme.colors.accent) : 'none'
  }, _defineProperty(_ref5, marginStartDir, $theme.sizing.scale600), _defineProperty(_ref5, marginEndDir, $theme.sizing.scale300), _ref5;
});
exports.StyledDropdownContainer = StyledDropdownContainer;
StyledDropdownContainer.displayName = "StyledDropdownContainer";