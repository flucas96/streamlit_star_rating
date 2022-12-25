function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import TriangleUp from '../icon/triangle-up.js';
import TriangleDown from '../icon/triangle-down.js';
import { SORT_DIRECTION } from './constants.js';
import { StyledHeadCell, StyledSortableLabel } from './styled-components.js';

function SortDirectionIcon({
  direction
}) {
  switch (direction) {
    case SORT_DIRECTION.ASC:
      return /*#__PURE__*/React.createElement(TriangleUp, {
        title: "Sort ascending"
      });

    case SORT_DIRECTION.DESC:
      return /*#__PURE__*/React.createElement(TriangleDown, {
        title: "Sort descending"
      });

    default:
      return null;
  }
}

export const SortableHeadCellFactory = (CustomHeadCell = StyledHeadCell) => {
  return function SortableHeadCell(props) {
    const {
      overrides = {},
      fillClickTarget,
      disabled
    } = props;
    const [HeadCell, headCellProps] = getOverrides(overrides.HeadCell, CustomHeadCell);
    const [SortableLabel, sortableLabelProps] = getOverrides(overrides.SortableLabel, StyledSortableLabel);

    const onClick = () => {
      props.onSort && props.onSort();
    };

    const enableHeadClick = fillClickTarget && !disabled;
    let ariaLabel = props.ariaLabel;

    if (!ariaLabel) {
      if (typeof props.title === 'string') {
        ariaLabel = `sorts table by ${props.title} column`;
      } else {
        ariaLabel = 'sort table by column';
      }
    }

    return /*#__PURE__*/React.createElement(HeadCell, _extends({
      role: "columnheader"
    }, headCellProps, {
      $cursor: enableHeadClick ? 'pointer' : undefined,
      onClick: enableHeadClick ? onClick : undefined
    }), /*#__PURE__*/React.createElement(SortableLabel, _extends({
      "aria-label": ariaLabel,
      disabled: disabled,
      onClick: !fillClickTarget ? onClick : undefined
    }, sortableLabelProps), /*#__PURE__*/React.createElement(SortDirectionIcon, {
      direction: props.direction
    }), props.title), props.children);
  };
};
export default SortableHeadCellFactory();