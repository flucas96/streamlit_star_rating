"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledAction = exports.StyledFilterFooter = exports.StyledFilterHeading = exports.StyledFilterContent = exports.StyledFilterButton = exports.StyledCell = exports.StyledRow = exports.StyledBody = exports.StyledSortableLabel = exports.StyledHeadCell = exports.StyledHead = exports.StyledTable = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../styles/index.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledTableElement = (0, _index.styled)('div', function (_ref) {
  var $theme = _ref.$theme;
  return _objectSpread(_objectSpread({}, (0, _index.expandBorderStyles)($theme.borders.border300)), {}, {
    backgroundColor: $theme.colors.tableBackground,
    borderTopLeftRadius: $theme.borders.radius200,
    borderTopRightRadius: $theme.borders.radius200,
    borderBottomRightRadius: $theme.borders.radius200,
    borderBottomLeftRadius: $theme.borders.radius200,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflowX: 'auto'
  });
});
StyledTableElement.displayName = "StyledTableElement";
var StyledTable = (0, _index.withWrapper)(StyledTableElement, function (StyledComponent) {
  return function StyledTable(props) {
    return /*#__PURE__*/React.createElement(StyledComponent, _extends({
      "data-baseweb": "table-custom",
      role: "grid"
    }, props));
  };
});
exports.StyledTable = StyledTable;
var StyledHeadElement = (0, _index.styled)('div', function (_ref2) {
  var $theme = _ref2.$theme,
      $width = _ref2.$width;
  return {
    backgroundColor: $theme.colors.tableHeadBackgroundColor,
    boxShadow: $theme.lighting.shadow400,
    display: 'flex',
    flexGrow: 0,
    width: $width ? $width : '100%'
  };
});
StyledHeadElement.displayName = "StyledHeadElement";
var StyledHead = (0, _index.withWrapper)(StyledHeadElement, function (StyledComponent) {
  return function StyledHead(props) {
    return /*#__PURE__*/React.createElement(StyledComponent, _extends({
      role: "row"
    }, props));
  };
});
exports.StyledHead = StyledHead;
var StyledHeadCellElement = (0, _index.styled)('div', function (_ref3) {
  var $theme = _ref3.$theme,
      $cursor = _ref3.$cursor;
  var borderDir = $theme.direction === 'rtl' ? 'borderLeft' : 'borderRight';
  return _objectSpread(_objectSpread(_objectSpread({}, $theme.typography.font350), (0, _index.expandBorderStyles)($theme.borders.border300)), {}, {
    borderTopStyle: 'none',
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    color: $theme.colors.contentPrimary,
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: $theme.sizing.scale500,
    paddingRight: $theme.sizing.scale600,
    paddingBottom: $theme.sizing.scale500,
    paddingLeft: $theme.sizing.scale600,
    cursor: $cursor ? $cursor : 'inherit',
    width: '100%',
    ':last-of-type': _defineProperty({}, borderDir, 'none')
  });
});
StyledHeadCellElement.displayName = "StyledHeadCellElement";
var StyledHeadCell = (0, _index.withWrapper)(StyledHeadCellElement, function (StyledComponent) {
  return function StyledHeadCell(props) {
    return /*#__PURE__*/React.createElement(StyledComponent, _extends({
      role: "columnheader"
    }, props));
  };
});
exports.StyledHeadCell = StyledHeadCell;
var StyledSortableLabel = (0, _index.styled)('button', function (_ref4) {
  var $theme = _ref4.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.font250), {}, {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    color: $theme.colors.contentPrimary,
    display: 'flex',
    padding: 0,
    ':hover:enabled': {
      cursor: 'pointer'
    },
    ':disabled': {
      color: $theme.colors.mono500
    }
  });
});
exports.StyledSortableLabel = StyledSortableLabel;
StyledSortableLabel.displayName = "StyledSortableLabel";
var StyledBodyElement = (0, _index.styled)('div', function (_ref5) {
  var $width = _ref5.$width;
  return {
    width: $width ? $width : '100%',
    overflowX: 'hidden',
    overflowY: 'overlay',
    flex: 1
  };
});
StyledBodyElement.displayName = "StyledBodyElement";
var StyledBody = (0, _index.withWrapper)(StyledBodyElement, function (StyledComponent) {
  return function StyledBody(props) {
    return /*#__PURE__*/React.createElement(StyledComponent, _extends({
      role: "rowgroup"
    }, props));
  };
});
exports.StyledBody = StyledBody;
var StyledRowElement = (0, _index.styled)('div', {
  display: 'flex',
  alignItems: 'center'
});
StyledRowElement.displayName = "StyledRowElement";
var StyledRow = (0, _index.withWrapper)(StyledRowElement, function (StyledComponent) {
  return function StyledRow(props) {
    return /*#__PURE__*/React.createElement(StyledComponent, _extends({
      role: "row"
    }, props));
  };
});
exports.StyledRow = StyledRow;
var StyledCellElement = (0, _index.styled)('div', function (_ref6) {
  var $theme = _ref6.$theme,
      $striped = _ref6.$striped;
  return _objectSpread(_objectSpread({}, $theme.typography.font200), {}, {
    backgroundColor: $striped ? $theme.colors.tableStripedBackground : null,
    color: $theme.colors.contentPrimary,
    display: 'flex',
    flex: 1,
    paddingTop: $theme.sizing.scale300,
    paddingRight: $theme.sizing.scale600,
    paddingBottom: $theme.sizing.scale300,
    paddingLeft: $theme.sizing.scale600
  });
});
StyledCellElement.displayName = "StyledCellElement";
var StyledCell = (0, _index.withWrapper)(StyledCellElement, function (StyledComponent) {
  return function StyledCell(props) {
    return /*#__PURE__*/React.createElement(StyledComponent, _extends({
      role: "gridcell"
    }, props));
  };
});
exports.StyledCell = StyledCell;
var StyledFilterButton = (0, _index.styled)('button', function (props) {
  function getIconColor() {
    if (props.$disabled) {
      return props.$theme.colors.mono500;
    }

    if (props.$active) {
      return props.$theme.colors.contentPrimary;
    }

    return props.$theme.colors.tableFilter;
  }

  function getIconHoverColor() {
    if (props.$disabled || props.$active) {
      return null;
    }

    return props.$theme.colors.contentPrimary;
  }

  return {
    backgroundColor: 'transparent',
    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    color: getIconColor(),
    cursor: props.$disabled ? null : 'pointer',
    paddingTop: 'none',
    paddingRight: 'none',
    paddingBottom: 'none',
    paddingLeft: 'none',
    ':hover': {
      color: getIconHoverColor()
    }
  };
});
exports.StyledFilterButton = StyledFilterButton;
StyledFilterButton.displayName = "StyledFilterButton";
var StyledFilterContent = (0, _index.styled)('div', function (_ref7) {
  var $theme = _ref7.$theme;
  return _objectSpread(_objectSpread({}, (0, _index.expandBorderStyles)($theme.borders.border300)), {}, {
    backgroundColor: $theme.colors.tableFilterBackground,
    borderRightStyle: 'none',
    borderLeftStyle: 'none',
    maxHeight: '196px',
    paddingRight: $theme.sizing.scale600,
    paddingLeft: $theme.sizing.scale600,
    overflow: 'auto'
  });
});
exports.StyledFilterContent = StyledFilterContent;
StyledFilterContent.displayName = "StyledFilterContent";
var StyledFilterHeading = (0, _index.styled)('div', function (_ref8) {
  var $theme = _ref8.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.font250), {}, {
    color: $theme.colors.tableFilterHeading,
    paddingTop: $theme.sizing.scale500,
    paddingRight: $theme.sizing.scale600,
    paddingBottom: $theme.sizing.scale500,
    paddingLeft: $theme.sizing.scale600
  });
});
exports.StyledFilterHeading = StyledFilterHeading;
StyledFilterHeading.displayName = "StyledFilterHeading";
var StyledFilterFooter = (0, _index.styled)('div', function (_ref9) {
  var $theme = _ref9.$theme;
  return {
    backgroundColor: $theme.colors.tableFilterFooterBackground,
    paddingTop: $theme.sizing.scale300,
    paddingRight: $theme.sizing.scale100,
    paddingBottom: $theme.sizing.scale300,
    paddingLeft: $theme.sizing.scale100,
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '216px'
  };
});
exports.StyledFilterFooter = StyledFilterFooter;
StyledFilterFooter.displayName = "StyledFilterFooter";
var StyledAction = (0, _index.styled)('button', function (_ref10) {
  var $theme = _ref10.$theme;
  return {
    backgroundColor: 'transparent',
    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    color: $theme.colors.primary,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    marginRight: $theme.sizing.scale100,
    marginLeft: $theme.sizing.scale100,
    ':hover:enabled': {
      cursor: 'pointer'
    }
  };
});
exports.StyledAction = StyledAction;
StyledAction.displayName = "StyledAction";