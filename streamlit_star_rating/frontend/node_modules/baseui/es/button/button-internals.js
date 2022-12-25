function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import * as ReactIs from 'react-is';
import { StartEnhancer as StyledStartEnhancer, EndEnhancer as StyledEndEnhancer } from './styled-components.js';
import { getSharedProps } from './utils.js';
import { getOverrides } from '../helpers/overrides.js';

function RenderEnhancer(props) {
  const {
    Enhancer,
    ...restProps
  } = props;

  if (typeof Enhancer === 'string') {
    return Enhancer;
  }

  if (ReactIs.isValidElementType(Enhancer)) {
    // $FlowFixMe
    return /*#__PURE__*/React.createElement(Enhancer, restProps);
  } // $FlowFixMe


  return Enhancer;
}

export default function ButtonInternals(props) {
  const {
    children,
    overrides = {},
    startEnhancer,
    endEnhancer
  } = props;
  const [StartEnhancer, startEnhancerProps] = getOverrides(overrides.StartEnhancer, StyledStartEnhancer);
  const [EndEnhancer, endEnhancerProps] = getOverrides(overrides.EndEnhancer, StyledEndEnhancer);
  const sharedProps = getSharedProps(props);
  return /*#__PURE__*/React.createElement(React.Fragment, null, startEnhancer !== null && startEnhancer !== undefined && /*#__PURE__*/React.createElement(StartEnhancer, _extends({}, sharedProps, startEnhancerProps), /*#__PURE__*/React.createElement(RenderEnhancer, {
    Enhancer: startEnhancer
  })), children, endEnhancer !== null && endEnhancer !== undefined && /*#__PURE__*/React.createElement(EndEnhancer, _extends({}, sharedProps, endEnhancerProps), /*#__PURE__*/React.createElement(RenderEnhancer, {
    Enhancer: endEnhancer
  })));
}