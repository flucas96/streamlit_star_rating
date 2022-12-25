"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSpinnerNext = exports.StyledActivePath = exports.StyledTrackPath = exports.Svg = void 0;

var _index = require("../styles/index.js");

var _styledComponents = require("../icon/styled-components.js");

var _constants = require("./constants.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var spin = {
  from: {
    transform: 'rotate(0deg)'
  },
  to: {
    transform: 'rotate(360deg)'
  }
};
/**
 * Spinner icon overrides
 */

var Svg = (0, _index.styled)('svg', function (props) {
  var $theme = props.$theme,
      $color = props.$color;
  return _objectSpread(_objectSpread({}, (0, _styledComponents.getSvgStyles)(props)), {}, {
    fill: $color || $theme.colors.accent,
    cursor: 'wait',
    animationName: spin,
    animationDuration: $theme.animation.timing1000,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  });
});
exports.Svg = Svg;
Svg.displayName = "Svg";
var StyledTrackPath = (0, _index.styled)('path', function (props) {
  return {
    fill: props.$theme.colors.spinnerTrackFill,
    opacity: 0.16
  };
});
exports.StyledTrackPath = StyledTrackPath;
StyledTrackPath.displayName = "StyledTrackPath";
var StyledActivePath = (0, _index.styled)('path', function (props) {
  return {
    fill: props.$color || props.$theme.colors.accent
  };
}); // TODO(v11): Replace Spinner with SpinnerNext

exports.StyledActivePath = StyledActivePath;
StyledActivePath.displayName = "StyledActivePath";
var StyledSpinnerNext = (0, _index.styled)('div', function (_ref) {
  var $theme = _ref.$theme,
      _ref$$size = _ref.$size,
      $size = _ref$$size === void 0 ? _constants.SIZE.medium : _ref$$size;
  var borderWidth = {
    large: $theme.sizing.scale300,
    medium: $theme.sizing.scale100,
    small: $theme.sizing.scale0
  }[$size];
  return {
    display: 'block',
    animationName: spin,
    animationDuration: $theme.animation.timing1000,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    borderRadius: '50%',
    borderTopColor: $theme.colors.contentAccent,
    borderRightColor: $theme.colors.backgroundTertiary,
    borderBottomColor: $theme.colors.backgroundTertiary,
    borderLeftColor: $theme.colors.backgroundTertiary,
    borderLeftWidth: borderWidth,
    borderRightWidth: borderWidth,
    borderTopWidth: borderWidth,
    borderBottomWidth: borderWidth,
    width: {
      large: $theme.sizing.scale1000,
      medium: $theme.sizing.scale900,
      small: $theme.sizing.scale800
    }[$size],
    height: {
      large: $theme.sizing.scale1000,
      medium: $theme.sizing.scale900,
      small: $theme.sizing.scale800
    }[$size],
    cursor: 'wait'
  };
});
exports.StyledSpinnerNext = StyledSpinnerNext;
StyledSpinnerNext.displayName = "StyledSpinnerNext";