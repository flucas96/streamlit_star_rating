"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLabelInteractable = exports.StyledNoIconContainer = exports.StyledIconContainer = exports.StyledItemContent = exports.StyledTreeItem = exports.StyledTreeItemList = void 0;

var _index = require("../styles/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledTreeItemList = (0, _index.styled)('ul', function (_ref) {
  var _ref2;

  var $theme = _ref.$theme,
      $indentGuides = _ref.$indentGuides,
      $isChildNode = _ref.$isChildNode,
      _ref$$expanded = _ref.$expanded,
      $expanded = _ref$$expanded === void 0 ? true : _ref$$expanded;
  var direction = $theme.direction === 'rtl' ? 'Right' : 'Left';
  return _ref2 = {
    marginTop: 0,
    marginBottom: 0
  }, _defineProperty(_ref2, "margin".concat(direction), $isChildNode ? $theme.sizing.scale550 : 0), _defineProperty(_ref2, "overflow", 'auto'), _defineProperty(_ref2, "paddingTop", 0), _defineProperty(_ref2, "paddingBottom", 0), _defineProperty(_ref2, "padding".concat(direction), $isChildNode ? $theme.sizing.scale200 : 0), _defineProperty(_ref2, "position", 'relative'), _defineProperty(_ref2, "outline", 'none'), _defineProperty(_ref2, "display", $expanded ? 'block' : 'none'), _defineProperty(_ref2, "border".concat(direction), $indentGuides && $isChildNode ? "1px solid ".concat($theme.colors.borderOpaque) : 'none'), _ref2;
});
exports.StyledTreeItemList = StyledTreeItemList;
StyledTreeItemList.displayName = "StyledTreeItemList";
var StyledTreeItem = (0, _index.styled)('li', function (_ref3) {
  var $theme = _ref3.$theme,
      $isLeafNode = _ref3.$isLeafNode;
  return {
    cursor: $isLeafNode ? 'auto' : 'pointer',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    overflow: 'auto',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    position: 'relative',
    outline: 'none'
  };
});
exports.StyledTreeItem = StyledTreeItem;
StyledTreeItem.displayName = "StyledTreeItem";
var StyledItemContent = (0, _index.styled)('div', function (_ref4) {
  var $theme = _ref4.$theme,
      $isSelected = _ref4.$isSelected,
      $isFocusVisible = _ref4.$isFocusVisible;
  return _objectSpread(_objectSpread({}, $theme.typography.font300), {}, {
    alignItems: 'center',
    boxSizing: 'border-box',
    color: $theme.colors.primary,
    display: 'flex',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: $theme.sizing.scale200,
    paddingRight: $theme.sizing.scale200,
    paddingTop: $theme.sizing.scale100,
    paddingBottom: $theme.sizing.scale100,
    outline: $isSelected && $isFocusVisible ? "3px solid ".concat($theme.colors.accent) : 'none',
    outlineOffset: '-3px',
    ':hover': {
      backgroundColor: $theme.colors.mono300
    }
  });
});
exports.StyledItemContent = StyledItemContent;
StyledItemContent.displayName = "StyledItemContent";
var StyledIconContainer = (0, _index.styled)('div', function (_ref5) {
  var $theme = _ref5.$theme;
  var marginDirection = $theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';
  return _defineProperty({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 0
  }, marginDirection, $theme.sizing.scale200);
});
exports.StyledIconContainer = StyledIconContainer;
StyledIconContainer.displayName = "StyledIconContainer";
var StyledNoIconContainer = (0, _index.styled)('div', function (_ref7) {
  var _ref8;

  var $theme = _ref7.$theme;
  var marginDirection = $theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';
  return _ref8 = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 0
  }, _defineProperty(_ref8, marginDirection, $theme.sizing.scale200), _defineProperty(_ref8, "width", 0), _defineProperty(_ref8, "height", '1em'), _ref8;
});
exports.StyledNoIconContainer = StyledNoIconContainer;
StyledNoIconContainer.displayName = "StyledNoIconContainer";
var StyledLabelInteractable = (0, _index.styled)('div', function () {
  return {
    width: '100%'
  };
});
exports.StyledLabelInteractable = StyledLabelInteractable;
StyledLabelInteractable.displayName = "StyledLabelInteractable";