function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { StyledGrid as DefaultStyledGrid } from './styled-components.js';
export const GridContext = /*#__PURE__*/React.createContext({});
export default function Grid({
  align,
  behavior,
  children,
  gridColumns,
  gridGaps,
  gridGutters,
  gridMargins,
  gridMaxWidth,
  gridUnit,
  overrides = {}
}) {
  const [StyledGrid, overrideProps] = getOverrides(overrides.Grid, DefaultStyledGrid);
  return /*#__PURE__*/React.createElement(StyledGrid, _extends({
    $align: align,
    $behavior: behavior,
    $gridGutters: gridGutters,
    $gridMargins: gridMargins,
    $gridMaxWidth: gridMaxWidth,
    $gridUnit: gridUnit
  }, overrideProps), /*#__PURE__*/React.createElement(GridContext.Provider, {
    value: {
      gridColumns,
      gridGaps,
      gridGutters,
      gridUnit
    }
  }, children));
}