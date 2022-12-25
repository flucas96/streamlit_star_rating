/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { getSvgStyles } from '../icon/styled-components.js';
import { KIND, PLACEMENT, TYPE } from './constants.js';

function getBackgroundColor(kind, type, theme) {
  const isInline = type === TYPE.inline;
  return {
    [KIND.info]: isInline ? theme.colors.notificationInfoBackground : theme.colors.toastInfoBackground,
    [KIND.positive]: isInline ? theme.colors.notificationPositiveBackground : theme.colors.toastPositiveBackground,
    [KIND.warning]: isInline ? theme.colors.notificationWarningBackground : theme.colors.toastWarningBackground,
    [KIND.negative]: isInline ? theme.colors.notificationNegativeBackground : theme.colors.toastNegativeBackground
  }[kind];
}

function getFontColor(kind, theme) {
  return {
    [KIND.info]: theme.colors.notificationInfoText,
    [KIND.positive]: theme.colors.notificationPositiveText,
    [KIND.warning]: theme.colors.notificationWarningText,
    [KIND.negative]: theme.colors.notificationNegativeText
  }[kind];
}

export function getPlacement(placement) {
  return {
    [PLACEMENT.topLeft]: {
      top: 0,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'column'
    },
    [PLACEMENT.top]: {
      top: 0,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column'
    },
    [PLACEMENT.topRight]: {
      top: 0,
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      flexDirection: 'column'
    },
    [PLACEMENT.bottomRight]: {
      bottom: 0,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      flexDirection: 'column-reverse'
    },
    [PLACEMENT.bottom]: {
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'column-reverse'
    },
    [PLACEMENT.bottomLeft]: {
      bottom: 0,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      flexDirection: 'column-reverse'
    }
  }[placement];
} // $FlowFixMe https://github.com/facebook/flow/issues/7745

export const Root = styled('div', props => {
  const {
    $placement,
    $theme
  } = props;
  return {
    pointerEvents: 'none',
    position: 'fixed',
    right: 0,
    left: 0,
    display: 'flex',
    marginTop: $theme.sizing.scale300,
    marginBottom: $theme.sizing.scale300,
    marginLeft: $theme.sizing.scale600,
    marginRight: $theme.sizing.scale600,
    ...getPlacement($placement)
  };
}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

Root.displayName = "Root";
export const InnerContainer = styled('div', {}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

InnerContainer.displayName = "InnerContainer";
export const Body = styled('div', props => {
  const {
    $isVisible,
    $kind,
    $type,
    $theme
  } = props;
  const isInline = $type === TYPE.inline;
  return { ...$theme.typography.font250,
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
  };
}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

Body.displayName = "Body";
export const CloseIconSvg = styled('svg', props => {
  return { ...getSvgStyles(props),
    cursor: 'pointer',
    width: props.$size || '16px',
    flexShrink: 0,
    outline: props.$isFocusVisible ? `3px solid ${props.$theme.colors.accent}` : 'none'
  };
});
CloseIconSvg.displayName = "CloseIconSvg";