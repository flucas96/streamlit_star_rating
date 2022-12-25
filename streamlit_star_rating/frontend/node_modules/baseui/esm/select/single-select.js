function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import SelectComponent from './select-component.js';
import Value from './value.js';

function MultiSelect(props) {
  return /*#__PURE__*/React.createElement(SelectComponent, _extends({}, props, {
    multi: false,
    valueComponent: Value
  }));
}

export default MultiSelect;