function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
import { Checkbox } from '../checkbox/index.js';
import { useStyletron } from '../styles/index.js';
import ChevronDown from '../icon/chevron-down.js';
import ChevronUp from '../icon/chevron-up.js';
import { SORT_DIRECTIONS } from './constants.js';
import { isFocusVisible } from '../utils/focusVisible.js';
var HeaderCell = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useStyletron = useStyletron(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      css = _useStyletron2[0],
      theme = _useStyletron2[1];

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      focusVisible = _React$useState2[0],
      setFocusVisible = _React$useState2[1];

  var checkboxRef = React.useRef(null);

  var handleFocus = function handleFocus(event) {
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (focusVisible !== false) {
      setFocusVisible(false);
    }
  };

  var backgroundColor = props.isHovered ? theme.colors.backgroundSecondary : theme.colors.backgroundPrimary;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    role: "button",
    tabIndex: "0",
    className: css(_objectSpread(_objectSpread({}, theme.typography.font150), {}, {
      alignItems: 'center',
      backgroundColor: backgroundColor,
      boxSizing: 'border-box',
      color: theme.colors.contentPrimary,
      cursor: props.sortable ? 'pointer' : null,
      display: props.isMeasured ? 'inline-flex' : 'flex',
      flexGrow: 1,
      height: '100%',
      paddingLeft: theme.sizing.scale500,
      paddingRight: theme.sizing.scale500,
      flexWrap: 'nowrap',
      whiteSpace: 'nowrap',
      outline: focusVisible ? "3px solid ".concat(theme.colors.accent) : 'none',
      outlineOffset: '-3px'
    })),
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    onKeyUp: function onKeyUp(event) {
      if (event.key === 'Enter') {
        props.onSort(props.index);
      }
    },
    onClick: function onClick(event) {
      // Avoid column sort if select-all checkbox click.
      if (checkboxRef.current && checkboxRef.current.contains(event.target)) {
        return;
      }

      if (props.sortable) {
        props.onSort(props.index);
      }
    },
    onFocus: handleFocus,
    onBlur: handleBlur
  }, props.isSelectable && /*#__PURE__*/React.createElement("span", {
    ref: checkboxRef
  }, /*#__PURE__*/React.createElement(Checkbox, {
    onChange: function onChange(e) {
      if (props.isSelectedAll || props.isSelectedIndeterminate) {
        props.onSelectNone();
      } else {
        props.onSelectAll();
      }
    },
    checked: props.isSelectedAll || props.isSelectedIndeterminate,
    isIndeterminate: props.isSelectedIndeterminate
  })), props.title, /*#__PURE__*/React.createElement("div", {
    className: css({
      position: 'relative',
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    })
  }, (props.isHovered || props.sortDirection) && props.sortable && /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: backgroundColor,
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      right: -4
    }
  }, props.sortDirection === SORT_DIRECTIONS.DESC && /*#__PURE__*/React.createElement(ChevronDown, {
    color: props.sortDirection ? theme.colors.contentPrimary : theme.colors.contentSecondary
  }), (props.sortDirection === SORT_DIRECTIONS.ASC || !props.sortDirection) && /*#__PURE__*/React.createElement(ChevronUp, {
    color: props.sortDirection ? theme.colors.contentPrimary : theme.colors.contentSecondary
  }))));
});
HeaderCell.displayName = 'HeaderCell';
export default HeaderCell;