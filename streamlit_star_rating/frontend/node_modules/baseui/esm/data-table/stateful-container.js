function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { SORT_DIRECTIONS } from './constants.js';

function useDuplicateColumnTitleWarning(columns) {
  React.useEffect(function () {
    if (process.env.NODE_ENV !== "production") {
      var titles = columns.reduce(function (set, column) {
        return set.add(column.title);
      }, new Set());

      if (titles.size < columns.length) {
        console.warn('BaseWeb DataTable: Column titles must be unique else will result in non-deterministic filtering.');
      }
    }
  }, [columns]);
}

function useSortParameters() {
  var initialSortIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
  var initialSortDirection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var _React$useState = React.useState(initialSortIndex),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      sortIndex = _React$useState2[0],
      setSortIndex = _React$useState2[1];

  var _React$useState3 = React.useState(initialSortDirection),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      sortDirection = _React$useState4[0],
      setSortDirection = _React$useState4[1];

  function handleSort(columnIndex) {
    if (columnIndex === sortIndex) {
      if (sortDirection === SORT_DIRECTIONS.DESC) {
        setSortIndex(-1);
        setSortDirection(SORT_DIRECTIONS.ASC);
      } else {
        setSortDirection(SORT_DIRECTIONS.DESC);
      }
    } else {
      setSortIndex(columnIndex);
      setSortDirection(SORT_DIRECTIONS.ASC);
    }
  }

  return [sortIndex, sortDirection, handleSort];
}

export function StatefulContainer(props) {
  useDuplicateColumnTitleWarning(props.columns);

  var _useSortParameters = useSortParameters(props.initialSortIndex, props.initialSortDirection),
      _useSortParameters2 = _slicedToArray(_useSortParameters, 3),
      sortIndex = _useSortParameters2[0],
      sortDirection = _useSortParameters2[1],
      handleSort = _useSortParameters2[2];

  var _React$useState5 = React.useState(props.initialFilters || new Map()),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      filters = _React$useState6[0],
      setFilters = _React$useState6[1];

  var _React$useState7 = React.useState(''),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      textQuery = _React$useState8[0],
      setTextQuery = _React$useState8[1];

  function handleFilterAdd(title, filterParams) {
    filters.set(title, filterParams);

    if (props.onFilterAdd) {
      props.onFilterAdd(title, filterParams);
    }

    setFilters(new Map(filters));
  }

  function handleFilterRemove(title) {
    filters.delete(title);

    if (props.onFilterRemove) {
      props.onFilterRemove(title);
    }

    setFilters(new Map(filters));
  }

  var _React$useState9 = React.useState(props.initialSelectedRowIds || new Set()),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      selectedRowIds = _React$useState10[0],
      setSelectedRowIds = _React$useState10[1];

  function handleSelectChange(next) {
    setSelectedRowIds(next);
    var selectionCallback = props.onSelectionChange;

    if (selectionCallback) {
      selectionCallback(props.rows.filter(function (r) {
        return next.has(r.id);
      }));
    }
  }

  function handleSelectMany(incomingRows) {
    // only adds rows that are visible in the table
    handleSelectChange(new Set([].concat(_toConsumableArray(selectedRowIds), _toConsumableArray(incomingRows.map(function (r) {
      return r.id;
    })))));
  }

  function handleSelectNone() {
    handleSelectChange(new Set());
  }

  function handleSelectOne(row) {
    if (selectedRowIds.has(row.id)) {
      selectedRowIds.delete(row.id);
    } else {
      selectedRowIds.add(row.id);
    }

    handleSelectChange(new Set(selectedRowIds));
  }

  var handleIncludedRowsChange = React.useCallback(function (rows) {
    if (props.onIncludedRowsChange) {
      props.onIncludedRowsChange(rows);
    }
  }, [props.onIncludedRowsChange]);
  var handleRowHighlightChange = React.useCallback(function (rowIndex, row) {
    if (props.onRowHighlightChange) {
      props.onRowHighlightChange(rowIndex, row);
    }
  }, [props.rowHighlightIndex]);
  return props.children({
    filters: filters,
    onFilterAdd: handleFilterAdd,
    onFilterRemove: handleFilterRemove,
    onIncludedRowsChange: handleIncludedRowsChange,
    onRowHighlightChange: handleRowHighlightChange,
    onSelectMany: handleSelectMany,
    onSelectNone: handleSelectNone,
    onSelectOne: handleSelectOne,
    onSort: handleSort,
    onTextQueryChange: setTextQuery,
    resizableColumnWidths: Boolean(props.resizableColumnWidths),
    rowHighlightIndex: props.rowHighlightIndex,
    selectedRowIds: selectedRowIds,
    sortIndex: sortIndex,
    sortDirection: sortDirection,
    textQuery: textQuery
  });
}