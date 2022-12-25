"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBodyCell = exports.StyledHeadCell = exports.StyledTable = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../styles/index.js");

var _index2 = require("../table/index.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StyledTableElement = (0, _index.withStyle)(_index2.StyledTable, function (props) {
  return {
    display: 'grid',
    gridTemplateColumns: props.$gridTemplateColumns,
    flexDirection: 'unset',
    // Creates a stacking context so we can use z-index on the StyledHeadCell
    // without affecting anything outside of this component.
    transform: 'scale(1)'
  };
});
StyledTableElement.displayName = "StyledTableElement";
var StyledTable = (0, _index.withWrapper)(StyledTableElement, function (StyledComponent) {
  return function StyledTable(props) {
    return /*#__PURE__*/React.createElement(StyledComponent, _extends({
      "data-baseweb": "table-grid"
    }, props));
  };
});
exports.StyledTable = StyledTable;
var StyledHeadCell = (0, _index.withStyle)(_index2.StyledHeadCell, function (_ref) {
  var _ref$$sticky = _ref.$sticky,
      $sticky = _ref$$sticky === void 0 ? true : _ref$$sticky,
      $isFocusVisible = _ref.$isFocusVisible,
      $theme = _ref.$theme;
  return {
    backgroundColor: $theme.colors.tableHeadBackgroundColor,
    boxShadow: $theme.lighting.shadow400,
    position: $sticky ? 'sticky' : null,
    top: $sticky ? 0 : null,
    width: 'unset',
    ':focus': {
      outline: $isFocusVisible ? "3px solid ".concat($theme.colors.accent) : 'none',
      outlineOffset: '-3px'
    },
    zIndex: $sticky ? 1 : 'auto'
  };
});
exports.StyledHeadCell = StyledHeadCell;
StyledHeadCell.displayName = "StyledHeadCell";
var StyledBodyCell = (0, _index.withStyle)(_index2.StyledCell, function (props) {
  return {
    display: 'block',
    flex: 'unset',
    gridColumn: props.$gridColumn || null,
    gridRow: props.$gridRow || null,
    ':focus': {
      outline: props.$isFocusVisible ? "3px solid ".concat(props.$theme.colors.accent) : 'none',
      outlineOffset: '-3px'
    }
  };
});
exports.StyledBodyCell = StyledBodyCell;
StyledBodyCell.displayName = "StyledBodyCell";