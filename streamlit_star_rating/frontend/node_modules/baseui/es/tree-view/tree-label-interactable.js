function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { StyledLabelInteractable } from './styled-components.js';
import { getOverride } from '../helpers/overrides.js';

const TreeLabelInteractable = ({
  overrides = {},
  ...props
}) => {
  const LabelInteractable = getOverride(overrides.LabelInteractable) || StyledLabelInteractable;
  return /*#__PURE__*/React.createElement(LabelInteractable, _extends({
    onClick: e => e.stopPropagation(),
    onKeyDown: e => e.stopPropagation()
  }, props));
};

export default TreeLabelInteractable;