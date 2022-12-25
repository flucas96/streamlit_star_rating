/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import extend from 'just-extend';
import en_US from './en_US.js';
export var LocaleContext = /*#__PURE__*/React.createContext(en_US);

var LocaleProvider = function LocaleProvider(props) {
  var locale = props.locale,
      children = props.children;

  if (process.env.NODE_ENV !== "production") {
    if (locale.datepicker && locale.datepicker.timePickerAriaLabel) {
      console.warn('`timePickerAriaLabel` will be removed in v11 - please use timePickerAriaLabel12Hour and timePickerAriaLabel24Hour instead');
    }
  }

  return /*#__PURE__*/React.createElement(LocaleContext.Provider, {
    value: extend({}, en_US, locale)
  }, children);
};

export default LocaleProvider;