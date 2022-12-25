"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSeparator = exports.StyledListItem = exports.StyledList = exports.StyledRoot = void 0;

var _index = require("../styles/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledRoot = (0, _index.styled)('nav', function (_ref) {
  var $theme = _ref.$theme;
  return _objectSpread({
    color: $theme.colors.breadcrumbsText
  }, $theme.typography.font350);
});
exports.StyledRoot = StyledRoot;
StyledRoot.displayName = "StyledRoot";
var StyledList = (0, _index.styled)('ol', function (_ref2) {
  var $theme = _ref2.$theme;
  return _objectSpread({
    listStyleType: 'none',
    margin: 0,
    padding: 0
  }, $theme.typography.font350);
});
exports.StyledList = StyledList;
StyledList.displayName = "StyledList";
var StyledListItem = (0, _index.styled)('li', function (_ref3) {
  var $theme = _ref3.$theme;
  return _objectSpread({
    display: 'inline-block'
  }, $theme.typography.font350);
});
exports.StyledListItem = StyledListItem;
StyledListItem.displayName = "StyledListItem";
var StyledSeparator = (0, _index.styled)('div', function (_ref4) {
  var $theme = _ref4.$theme;
  return {
    display: 'inline-block',
    color: $theme.colors.breadcrumbsSeparatorFill,
    marginLeft: $theme.sizing.scale300,
    marginRight: $theme.sizing.scale300,
    verticalAlign: 'middle'
  };
});
exports.StyledSeparator = StyledSeparator;
StyledSeparator.displayName = "StyledSeparator";