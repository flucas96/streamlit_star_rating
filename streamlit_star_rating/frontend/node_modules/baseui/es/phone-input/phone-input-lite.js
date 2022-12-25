function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React, { useRef } from 'react';
import { Input as DefaultInput } from '../input/index.js';
import CountrySelect from './country-select.js';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
import defaultProps from './default-props.js';
const {
  country,
  ...lightDefaultProps
} = defaultProps;
PhoneInputLite.defaultProps = lightDefaultProps;
export default function PhoneInputLite(props) {
  const {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    countries,
    country,
    disabled,
    error,
    id,
    mapIsoToLabel,
    maxDropdownHeight,
    maxDropdownWidth,
    name,
    onTextChange,
    onCountryChange,
    overrides,
    placeholder,
    positive,
    required,
    size,
    text,
    ...restProps
  } = props;
  const inputRef = useRef(null);
  const baseOverrides = {
    Input: {
      style: ({
        $theme: {
          sizing
        }
      }) => ({
        paddingLeft: sizing.scale100
      })
    },
    Before: {
      component: CountrySelect,
      props: {
        countries,
        country,
        disabled,
        error,
        inputRef,
        mapIsoToLabel,
        maxDropdownHeight,
        maxDropdownWidth,
        onCountryChange,
        overrides,
        positive,
        required,
        size
      }
    }
  };
  const [Input, inputProps] = getOverrides(overrides.Input, DefaultInput); // $FlowFixMe

  inputProps.overrides = mergeOverrides(baseOverrides, inputProps.overrides);
  return /*#__PURE__*/React.createElement(Input, _extends({
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    autoComplete: "tel-national",
    "data-baseweb": "phone-input",
    disabled: disabled,
    error: error,
    id: id,
    inputMode: "tel",
    inputRef: inputRef,
    name: name,
    onChange: onTextChange,
    positive: positive,
    placeholder: placeholder,
    size: size,
    type: "text",
    value: text
  }, restProps, inputProps));
}