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
import { KIND, PLACEMENT, TYPE } from './constants.js';

function getBackgroundColor(kind, type, theme) {
  var _KIND$info$KIND$posit;

  var isInline = type === TYPE.inline;
  return (_KIND$info$KIND$posit = {}, _defineProperty(_KIND$info$KIND$posit, KIND.info, isInline ? theme.colors.notificationInfoBackground : theme.colors.toastInfoBackground), _defineProperty(_KIND$info$KIND$posit, KIND.positive, isInline ? theme.colors.notificationPositiveBackground : theme.colors.toastPositiveBackground), _defineProperty(_KIND$info$KIND$posit, KIND.warning, isInline ? theme.colors.notificationWarningBackground : theme.colors.toastWarningBackground), _defineProperty(_KIND$info$KIND$posit, KIND.negative, isInline ? theme.colors.notificationNegativeBackground : theme.colors.toastNegativeBackground), _KIND$info$KIND$posit)[kind];
}

function getFontColor(kind, theme) {
  var _KIND$info$KIND$posit2;

  return (_KIND$info$KIND$posit2 = {}, _defineProperty(_KIND$info$KIND$posit2, KIND.info, theme.colors.notificationInfoText), _defineProperty(_KIND$info$KIND$posit2, KIND.positive, theme.colors.notificationPositiveText), _defineProperty(_KIND$info$KIND$posit2, KIND.warning, theme.colors.notificationWarningText), _defineProperty(_KIND$info$KIND$posit2, KIND.negative, theme.colors.notificationNegativeText), _KIND$info$KIND$posit2)[kind];
}

export function getPlacement(placement) {
  var _PLACEMENT$topLeft$PL;

  return (_PLACEMENT$topLeft$PL = {}, _defineProperty(_PLACEMENT$topLeft$PL, PLACEMENT.topLeft, {
    top: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  }), _defineProperty(_PLACEMENT$topLeft$PL, PLACEMENT.top, {
    top: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  }), _defineProperty(_PLACEMENT$topLeft$PL, PLACEMENT.topRight, {
    top: 0,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  }), _defineProperty(_PLACEMENT$topLeft$PL, PLACEMENT.bottomRight, {
    bottom: 0,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'column-reverse'
  }), _defineProperty(_PLACEMENT$topLeft$PL, PLACEMENT.bottom, {
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column-reverse'
  }), _defineProperty(_PLACEMENT$topLeft$PL, PLACEMENT.bottomLeft, {
    bottom: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flexDirection: 'column-reverse'
  }), _PLACEMENT$topLeft$PL)[placement];
} // $FlowFixMe https://github.com/facebook/flow/issues/7745

export var Root = styled('div', function (props) {
  var $placement = props.$placement,
      $theme = props.$theme;
  return _objectSpread({
    pointerEvents: 'none',
    position: 'fixed',
    right: 0,
    left: 0,
    display: 'flex',
    marginTop: $theme.sizing.scale300,
    marginBottom: $theme.sizing.scale300,
    marginLeft: $theme.sizing.scale600,
    marginRight: $theme.sizing.scale600
  }, getPlacement($placement));
}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

Root.displayName = "Root";
export var InnerContainer = styled('div', {}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

InnerContainer.displayName = "InnerContainer";
export var Body = styled('div', function (props) {
  var $isVisible = props.$isVisible,
      $kind = props.$kind,
      $type = props.$type,
      $theme = props.$theme;
  var isInline = $type === TYPE.inline;
  return _objectSpread(_objectSpread({}, $theme.typography.font250), {}, {
    pointerEvents: 'auto',
    color: isInline ? getFontColor($kind, $theme) : $theme.colors.toastText,
    height: 'auto',
    width: '288px',
    paddingTop: $theme.sizing.scale600,
    paddingRight: $theme.sizing.scale600,
    paddingBottom: $theme.sizing.scale600,
    paddingLeft: $theme.sizing.scale600,
    marginTop: $theme.sizing.scale300,
    marginBottom: $theme.sizing.scale300,
    backgroundColor: getBackgroundColor($kind, $type, $theme) || $theme.colors.accent,
    borderTopLeftRadius: $theme.borders.surfaceBorderRadius,
    borderTopRightRadius: $theme.borders.surfaceBorderRadius,
    borderBottomRightRadius: $theme.borders.surfaceBorderRadius,
    borderBottomLeftRadius: $theme.borders.surfaceBorderRadius,
    boxShadow: isInline ? 'none' : $theme.lighting.shadow600,
    opacity: $isVisible ? 1 : 0,
    transitionProperty: 'all',
    transitionDuration: $theme.animation.timing200,
    transitionTimingFunction: $theme.animation.easeInOutCurve,
    display: 'flex',
    justifyContent: 'space-between'
  });
}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

Body.displayName = "Body";
export var CloseIconSvg = styled('svg', function (props) {
  return _objectSpread(_objectSpread({}, getSvgStyles(props)), {}, {
    cursor: 'pointer',
    width: props.$size || '16px',
    flexShrink: 0,
    outline: props.$isFocusVisible ? "3px solid ".concat(props.$theme.colors.accent) : 'none'
  });
});
CloseIconSvg.displayName = "CloseIconSvg";