function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { createStyled, withStyle as styletronWithStyle, useStyletron as styletronUseStyletron, withWrapper as styletronWithWrapper } from 'styletron-react';
import { driver, getInitialStyle } from 'styletron-standard';
import { ThemeContext } from './theme-provider.js';

const wrapper = StyledComponent => {
  return /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(ThemeContext.Consumer, null, theme => /*#__PURE__*/React.createElement(StyledComponent, _extends({
    ref: ref
  }, props, {
    $theme: theme
  }))));
};
/* eslint-disable flowtype/generic-spacing */

/* eslint-disable flowtype/no-weak-types */


/* eslint-enable flowtype/generic-spacing */

/* eslint-enable flowtype/no-weak-types */
export function createThemedStyled() {
  return createStyled({
    wrapper,
    getInitialStyle,
    driver // eslint-disable-next-line flowtype/no-weak-types

  });
}
export const styled = createThemedStyled();
export function createThemedWithStyle() {
  // eslint-disable-next-line flowtype/no-weak-types
  return styletronWithStyle;
}
export const withStyle = createThemedWithStyle();
export function createThemedUseStyletron() {
  return function () {
    // eslint-disable-next-line flowtype/no-weak-types
    const theme = React.useContext(ThemeContext);
    const [css] = styletronUseStyletron();
    return [css, theme];
  };
}
export const useStyletron = createThemedUseStyletron();
export function withWrapper( // eslint-disable-next-line flowtype/no-weak-types
StyledElement, wrapperFn) {
  // eslint-disable-next-line flowtype/no-weak-types
  return styletronWithWrapper(StyledElement, Styled => {
    return /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(ThemeContext.Consumer, null, theme => wrapperFn(Styled)({
      ref: ref,
      ...props,
      $theme: theme
    })));
  });
}