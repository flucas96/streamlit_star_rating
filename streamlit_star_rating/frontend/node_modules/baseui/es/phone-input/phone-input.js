function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { COUNTRIES } from './constants.js';
import PhoneInputLite from './phone-input-lite.js';
import defaultProps from './default-props.js';
PhoneInput.defaultProps = defaultProps;
export default function PhoneInput(props) {
  return /*#__PURE__*/React.createElement(PhoneInputLite, _extends({}, props, {
    countries: COUNTRIES
  }));
}