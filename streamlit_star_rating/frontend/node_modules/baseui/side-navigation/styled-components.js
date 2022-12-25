"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSubNavContainer = exports.StyledNavItem = exports.StyledNavItemElement = exports.StyledNavLink = exports.StyledNavItemContainer = exports.StyledRoot = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../styles/index.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledRoot = (0, _index.styled)('nav', function (props) {
  var _props$$theme = props.$theme,
      colors = _props$$theme.colors,
      typography = _props$$theme.typography;
  return _objectSpread(_objectSpread({}, typography.font300), {}, {
    color: colors.contentPrimary,
    listStyleType: 'none',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0
  });
});
exports.StyledRoot = StyledRoot;
StyledRoot.displayName = "StyledRoot";
var StyledNavItemContainer = (0, _index.styled)('li', {});
exports.StyledNavItemContainer = StyledNavItemContainer;
StyledNavItemContainer.displayName = "StyledNavItemContainer";
var StyledNavLink = (0, _index.styled)('a', function (_ref) {
  var $theme = _ref.$theme,
      $isFocusVisible = _ref.$isFocusVisible;
  return {
    color: 'inherit',
    outline: 'none',
    textDecoration: 'none',
    ':focus > div': $isFocusVisible ? {
      outline: "3px solid ".concat($theme.colors.accent),
      outlineOffset: '-3px',
      borderLeftColor: 'transparent',
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent'
    } : {
      outline: 'none'
    }
  };
});
exports.StyledNavLink = StyledNavLink;
StyledNavLink.displayName = "StyledNavLink";
var StyledNavItemElement = (0, _index.styled)('div', function (props) {
  var _ref2;

  var $active = props.$active,
      $selectable = props.$selectable,
      $level = props.$level,
      $disabled = props.$disabled,
      $theme = props.$theme,
      _props$$theme2 = props.$theme,
      colors = _props$$theme2.colors,
      sizing = _props$$theme2.sizing;
  var bgImgGradient = (0, _index.hexToRgb)(colors.backgroundPrimary, '0.92') || '';
  var borderWidthDir = $theme.direction === 'rtl' ? 'borderRightWidth' : 'borderLeftWidth';
  var borderStyleDir = $theme.direction === 'rtl' ? 'borderRightStyle' : 'borderLeftStyle';
  var borderColorDir = $theme.direction === 'rtl' ? 'borderRightColor' : 'borderLeftColor';
  var paddingPrefixDir = $theme.direction === 'rtl' ? 'paddingRight' : 'paddingLeft';
  var paddingSuffixDir = $theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight';
  var cursor = $selectable ? 'pointer' : 'default';
  var color = $active ? colors.primary : null;
  var hoverColor = $selectable ? colors.primary : null;

  if ($disabled) {
    cursor = 'not-allowed';
    color = colors.contentSecondary;
    hoverColor = null;
  }

  return _ref2 = {
    backgroundColor: $active ? colors.backgroundInversePrimary : 'transparent',
    backgroundImage: $active ? "linear-gradient(0deg, ".concat(bgImgGradient, ", ").concat(bgImgGradient, ")") : null,
    boxSizing: 'border-box'
  }, _defineProperty(_ref2, borderWidthDir, '4px'), _defineProperty(_ref2, borderStyleDir, 'solid'), _defineProperty(_ref2, borderColorDir, $active ? colors.primary : 'transparent'), _defineProperty(_ref2, "color", color), _defineProperty(_ref2, "cursor", cursor), _defineProperty(_ref2, "paddingTop", sizing.scale500), _defineProperty(_ref2, "paddingBottom", sizing.scale500), _defineProperty(_ref2, paddingPrefixDir, "calc(".concat(sizing.scale800, " * ").concat($level, ")")), _defineProperty(_ref2, paddingSuffixDir, sizing.scale500), _defineProperty(_ref2, ':hover', {
    color: hoverColor
  }), _defineProperty(_ref2, ':focus', {
    color: $selectable ? colors.primary : null
  }), _ref2;
});
exports.StyledNavItemElement = StyledNavItemElement;
StyledNavItemElement.displayName = "StyledNavItemElement";
var StyledNavItem = (0, _index.withWrapper)(StyledNavItemElement, function (Styled) {
  return function StyledNav(_ref3) {
    var item = _ref3.item,
        restProps = _objectWithoutProperties(_ref3, ["item"]);

    return /*#__PURE__*/React.createElement(Styled, restProps);
  };
});
exports.StyledNavItem = StyledNavItem;
var StyledSubNavContainer = (0, _index.styled)('ul', {
  listStyleType: 'none',
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
});
exports.StyledSubNavContainer = StyledSubNavContainer;
StyledSubNavContainer.displayName = "StyledSubNavContainer";