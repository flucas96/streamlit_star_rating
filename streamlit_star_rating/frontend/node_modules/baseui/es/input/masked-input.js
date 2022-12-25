function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import InputMask from 'react-input-mask';
import Input from './input.js';
import { Input as StyledInput } from './styled-components.js';
const MaskOverride = /*#__PURE__*/React.forwardRef(({
  // do nothing with these - we just don't want to pass it to the InputMask, as
  // it does not have these properties
  startEnhancer,
  endEnhancer,
  error,
  positive,
  // below are props that are used by the masked-input
  onChange,
  onFocus,
  onBlur,
  value,
  disabled,
  ...restProps
}, ref) => {
  return /*#__PURE__*/React.createElement(InputMask, _extends({
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur,
    value: value,
    disabled: disabled
  }, restProps), props => /*#__PURE__*/React.createElement(StyledInput, _extends({
    ref: ref,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur,
    value: value,
    disabled: disabled
  }, props)));
});
export default function MaskedInput({
  mask,
  maskChar,
  overrides: {
    Input: inputOverride = {},
    ...restOverrides
  } = {},
  ...restProps
}) {
  let componentOverride = MaskOverride;
  let propsOverride = {};
  let styleOverride = {};

  if (typeof inputOverride === 'function') {
    componentOverride = inputOverride;
  } else if (typeof inputOverride === 'object') {
    componentOverride = inputOverride.component || componentOverride;
    propsOverride = inputOverride.props || {};
    styleOverride = inputOverride.style || {};
  }

  if (typeof propsOverride === 'object') {
    propsOverride = { ...propsOverride,
      mask: propsOverride.mask || mask,
      maskChar: propsOverride.maskChar || maskChar
    };
  }

  const nextOverrides = {
    Input: {
      component: componentOverride,
      props: propsOverride,
      style: styleOverride
    },
    ...restOverrides
  };
  return /*#__PURE__*/React.createElement(Input, _extends({}, restProps, {
    overrides: nextOverrides
  }));
}
MaskedInput.defaultProps = {
  maskChar: ' '
};