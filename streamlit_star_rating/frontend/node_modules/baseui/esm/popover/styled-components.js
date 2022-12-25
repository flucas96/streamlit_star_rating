function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { ARROW_SIZE, ARROW_WIDTH } from './constants.js';
import { getPopoverMarginStyles, getArrowPositionStyles, getStartPosition, getEndPosition } from './utils.js';

/**
 * Main popover container element that gets positioned next to the anchor
 */
export function getBodyStyles(props) {
  var $isOpen = props.$isOpen,
      $isAnimating = props.$isAnimating,
      $placement = props.$placement,
      $popoverOffset = props.$popoverOffset,
      $showArrow = props.$showArrow,
      $theme = props.$theme,
      $popoverMargin = props.$popoverMargin,
      $isHoverTrigger = props.$isHoverTrigger;
  return _objectSpread(_objectSpread({
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: $theme.colors.backgroundTertiary,
    borderTopLeftRadius: $theme.borders.popoverBorderRadius,
    borderTopRightRadius: $theme.borders.popoverBorderRadius,
    borderBottomRightRadius: $theme.borders.popoverBorderRadius,
    borderBottomLeftRadius: $theme.borders.popoverBorderRadius,
    boxShadow: $theme.lighting.shadow600,
    transitionProperty: 'opacity,transform',
    transitionDuration: $isAnimating ? '0.1s' : '0s',
    transitionTimingFunction: $isOpen ? $theme.animation.easeOutCurve : $theme.animation.easeInCurve,
    opacity: $isAnimating && $isOpen ? 1 : 0,
    transform: $isAnimating && $isOpen ? getEndPosition($popoverOffset) : getStartPosition($popoverOffset, $placement, $showArrow ? ARROW_SIZE : 0, $popoverMargin)
  }, getPopoverMarginStyles($showArrow ? ARROW_SIZE : 0, $placement, $popoverMargin)), $isHoverTrigger ? {
    animationDuration: '.1s',
    animationName: {
      '0%': {
        pointerEvents: 'none'
      },
      '99%': {
        pointerEvents: 'none'
      },
      '100%': {
        pointerEvents: 'auto'
      }
    }
  } : {});
}
export var Body = styled('div', getBodyStyles);
/**
 * Arrow shown between the popover and the anchor element
 */

Body.displayName = "Body";
export function getArrowStyles(props) {
  var $arrowOffset = props.$arrowOffset,
      $placement = props.$placement,
      $theme = props.$theme;
  return _objectSpread({
    backgroundColor: $theme.colors.backgroundTertiary,
    boxShadow: $theme.lighting.shadow600,
    width: "".concat(ARROW_WIDTH, "px"),
    height: "".concat(ARROW_WIDTH, "px"),
    transform: 'rotate(45deg)',
    position: 'absolute'
  }, getArrowPositionStyles($arrowOffset, $placement));
}
export var Arrow = styled('div', getArrowStyles);
/**
 * Extra div that holds the popover content. This extra element
 * is needed for the arrow–the arrow is just a 45deg rotated div,
 * and rendering this extra element on top with a solid background
 * clips the part of the arrow that extends into the popover.
 */

Arrow.displayName = "Arrow";
export function getInnerStyles(_ref) {
  var $theme = _ref.$theme;
  return {
    backgroundColor: $theme.colors.backgroundTertiary,
    borderTopLeftRadius: $theme.borders.popoverBorderRadius,
    borderTopRightRadius: $theme.borders.popoverBorderRadius,
    borderBottomRightRadius: $theme.borders.popoverBorderRadius,
    borderBottomLeftRadius: $theme.borders.popoverBorderRadius,
    color: $theme.colors.contentPrimary,
    position: 'relative'
  };
}
export var Inner = styled('div', getInnerStyles);
/**
 * A drop-in component that provides the recommended padding
 * for popovers. Mostly a convenience for users so they don't
 * have to define this themselves.
 */

Inner.displayName = "Inner";
export var Padding = styled('div', {
  paddingLeft: '12px',
  paddingTop: '12px',
  paddingRight: '12px',
  paddingBottom: '12px'
});
Padding.displayName = "Padding";
export var Hidden = styled('div', {
  display: 'none'
});
Hidden.displayName = "Hidden";