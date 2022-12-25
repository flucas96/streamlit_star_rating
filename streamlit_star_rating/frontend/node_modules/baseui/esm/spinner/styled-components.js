function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { getSvgStyles } from '../icon/styled-components.js';
import { SIZE } from './constants.js';
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

export var Svg = styled('svg', function (props) {
  var $theme = props.$theme,
      $color = props.$color;
  return _objectSpread(_objectSpread({}, getSvgStyles(props)), {}, {
    fill: $color || $theme.colors.accent,
    cursor: 'wait',
    animationName: spin,
    animationDuration: $theme.animation.timing1000,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  });
});
Svg.displayName = "Svg";
export var StyledTrackPath = styled('path', function (props) {
  return {
    fill: props.$theme.colors.spinnerTrackFill,
    opacity: 0.16
  };
});
StyledTrackPath.displayName = "StyledTrackPath";
export var StyledActivePath = styled('path', function (props) {
  return {
    fill: props.$color || props.$theme.colors.accent
  };
}); // TODO(v11): Replace Spinner with SpinnerNext

StyledActivePath.displayName = "StyledActivePath";
export var StyledSpinnerNext = styled('div', function (_ref) {
  var $theme = _ref.$theme,
      _ref$$size = _ref.$size,
      $size = _ref$$size === void 0 ? SIZE.medium : _ref$$size;
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
StyledSpinnerNext.displayName = "StyledSpinnerNext";