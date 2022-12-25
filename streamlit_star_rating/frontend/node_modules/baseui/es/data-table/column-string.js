function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { useStyletron } from '../styles/index.js';
import Column from './column.js';
import { COLUMNS } from './constants.js';
import { HighlightCellText } from './text-search.js';

function StringFilter(props) {
  return /*#__PURE__*/React.createElement("div", null, "not implemented for string column");
}

function StringCell(props) {
  const [css] = useStyletron();
  return /*#__PURE__*/React.createElement("div", {
    className: css({
      display: '-webkit-box',
      WebkitLineClamp: props.lineClamp || 1,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    })
  }, props.textQuery ? /*#__PURE__*/React.createElement(HighlightCellText, {
    text: props.value,
    query: props.textQuery
  }) : props.value);
}

function StringColumn(options) {
  return Column({
    kind: COLUMNS.STRING,
    cellBlockAlign: options.cellBlockAlign,
    buildFilter: function (params) {
      return function (data) {
        return true;
      };
    },
    fillWidth: options.fillWidth,
    filterable: false,
    mapDataToValue: options.mapDataToValue,
    maxWidth: options.maxWidth,
    minWidth: options.minWidth,
    renderCell: function RenderStringCell(props) {
      return /*#__PURE__*/React.createElement(StringCell, _extends({}, props, {
        lineClamp: options.lineClamp
      }));
    },
    renderFilter: StringFilter,
    sortable: options.sortable === undefined ? true : options.sortable,
    sortFn: function (a, b) {
      return a.localeCompare(b);
    },
    textQueryFilter: function (textQuery, data) {
      return data.toLowerCase().includes(textQuery.toLowerCase());
    },
    title: options.title
  });
}

export default StringColumn;