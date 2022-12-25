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
import { useStyletron } from '../styles/index.js';
import HeaderCell from './header-cell.js';

// https://github.com/Swizec/useDimensions
function useDimensions() {
  var _React$useState = React.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      dimensions = _React$useState2[0],
      setDimensions = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      node = _React$useState4[0],
      setNode = _React$useState4[1];

  var ref = React.useCallback(function (node) {
    setNode(node);
  }, []);
  React.useEffect(function () {
    if (typeof document !== 'undefined') {
      if (node) {
        window.requestAnimationFrame(function () {
          setDimensions(node.getBoundingClientRect());
        });
      }
    }
  }, [node]);
  return [ref, dimensions];
}

function ElementMeasurer(props) {
  var onDimensionsChange = props.onDimensionsChange;

  var _useDimensions = useDimensions(),
      _useDimensions2 = _slicedToArray(_useDimensions, 2),
      ref = _useDimensions2[0],
      dimensions = _useDimensions2[1];

  React.useEffect(function () {
    onDimensionsChange(dimensions);
  }, [dimensions, onDimensionsChange]);
  return /*#__PURE__*/React.cloneElement(props.item, {
    ref: ref
  });
}

// sample size could likely be generated based on row count, to have higher confidence
var MAX_SAMPLE_SIZE = 50;

function generateSampleIndices(inputMin, inputMax, maxSamples) {
  var indices = [];
  var queue = [[inputMin, inputMax]];

  while (queue.length > 0) {
    var _queue$shift = queue.shift(),
        _queue$shift2 = _slicedToArray(_queue$shift, 2),
        min = _queue$shift2[0],
        max = _queue$shift2[1];

    if (indices.length < maxSamples) {
      var pivot = Math.floor((min + max) / 2);
      indices.push(pivot);
      var left = pivot - 1;
      var right = pivot + 1;

      if (left >= min) {
        queue.push([min, left]);
      }

      if (right <= max) {
        queue.push([right, max]);
      }
    }
  }

  return indices;
}

export default function MeasureColumnWidths(_ref) {
  var columns = _ref.columns,
      rows = _ref.rows,
      widths = _ref.widths,
      isSelectable = _ref.isSelectable,
      onWidthsChange = _ref.onWidthsChange;

  var _useStyletron = useStyletron(),
      _useStyletron2 = _slicedToArray(_useStyletron, 1),
      css = _useStyletron2[0];

  var measurementCount = React.useRef(0);
  var dimensionsCache = React.useRef(widths);
  var sampleSize = rows.length < MAX_SAMPLE_SIZE ? rows.length : MAX_SAMPLE_SIZE;
  var finishedMeasurementCount = (sampleSize + 1) * columns.length;
  var sampleRowIndicesByColumn = React.useMemo(function () {
    measurementCount.current = 0;
    dimensionsCache.current = widths;
    var indices = generateSampleIndices(0, rows.length - 1, sampleSize);
    return columns.map(function () {
      return indices;
    });
  }, [columns, rows, widths, sampleSize]);
  var handleDimensionsChange = React.useCallback(function (columnIndex, rowIndex, dimensions) {
    if (dimensions.width === undefined) return;

    if (columns[columnIndex] === undefined || dimensionsCache.current[columnIndex] === undefined) {
      return;
    }

    measurementCount.current += 1;
    var nextWidth = Math.min(Math.max(columns[columnIndex].minWidth || 0, dimensionsCache.current[columnIndex], dimensions.width + 1), columns[columnIndex].maxWidth || Infinity);

    if (nextWidth !== dimensionsCache.current[columnIndex]) {
      var nextWidths = _toConsumableArray(dimensionsCache.current);

      nextWidths[columnIndex] = nextWidth;
      dimensionsCache.current = nextWidths;
    }

    if (measurementCount.current >= finishedMeasurementCount) {
      onWidthsChange(dimensionsCache.current);
    }
  }, [columns, finishedMeasurementCount, onWidthsChange]);
  var hiddenStyle = css({
    position: 'absolute',
    overflow: 'hidden',
    height: 0
  });

  if (measurementCount.current >= finishedMeasurementCount) {
    return null;
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    React.createElement("div", {
      className: hiddenStyle,
      "aria-hidden": true,
      role: "none"
    }, sampleRowIndicesByColumn.map(function (rowIndices, columnIndex) {
      var Cell = columns[columnIndex].renderCell;
      return rowIndices.map(function (rowIndex) {
        return /*#__PURE__*/React.createElement(ElementMeasurer, {
          key: "measure-".concat(columnIndex, "-").concat(rowIndex),
          onDimensionsChange: function onDimensionsChange(dimensions) {
            return handleDimensionsChange(columnIndex, rowIndex, dimensions);
          },
          item: /*#__PURE__*/React.createElement(Cell, {
            value: columns[columnIndex].mapDataToValue(rows[rowIndex].data),
            isMeasured: true,
            onSelect: isSelectable && columnIndex === 0 ? function () {} : undefined,
            x: columnIndex,
            y: rowIndex
          })
        });
      });
    }), columns.map(function (column, columnIndex) {
      return /*#__PURE__*/React.createElement(ElementMeasurer, {
        key: "measure-column-".concat(columnIndex),
        onDimensionsChange: function onDimensionsChange(dimensions) {
          return handleDimensionsChange(columnIndex, -1, dimensions);
        },
        item: /*#__PURE__*/React.createElement(HeaderCell, {
          index: columnIndex,
          isHovered: true,
          isMeasured: true,
          isSelectable: isSelectable && columnIndex === 0,
          isSelectedAll: false,
          isSelectedIndeterminate: false,
          onMouseEnter: function onMouseEnter() {},
          onMouseLeave: function onMouseLeave() {},
          onSelectAll: function onSelectAll() {},
          onSelectNone: function onSelectNone() {},
          onSort: function onSort(i) {},
          sortable: column.sortable,
          sortDirection: null,
          title: column.title
        })
      });
    }))
  );
}