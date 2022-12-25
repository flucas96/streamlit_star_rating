function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import Pagination from './pagination.js';
import StatefulContainer from './stateful-container.js';
export default function StatefulPagination({
  numPages,
  initialState,
  stateReducer,
  onPageChange,
  ...props
}) {
  return /*#__PURE__*/React.createElement(StatefulContainer, {
    numPages: numPages,
    initialState: initialState,
    stateReducer: stateReducer,
    onPageChange: onPageChange
  }, renderProps => /*#__PURE__*/React.createElement(Pagination, _extends({
    numPages: numPages
  }, renderProps, props)));
}
StatefulPagination.defaultProps = {
  initialState: {
    currentPage: 1
  },
  stateReducer: (changeType, changes) => changes,
  overrides: {}
};