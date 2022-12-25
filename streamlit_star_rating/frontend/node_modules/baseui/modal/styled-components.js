"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalFooter = exports.ModalBody = exports.ModalHeader = exports.Close = exports.Dialog = exports.DialogContainer = exports.Backdrop = exports.Root = void 0;

var _index = require("../styles/index.js");

var _constants = require("./constants.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getSizeStyles($size) {
  var styles = {
    maxWidth: '100%',
    width: null
  };

  if (typeof $size === 'number') {
    styles.width = "".concat($size, "px");
  } else if (_constants.SIZE[$size]) {
    styles.width = _constants.SIZE_WIDTHS[$size];
  } else if (typeof $size === 'string') {
    styles.width = $size;
  }

  if ($size === _constants.SIZE.full) {
    styles.alignSelf = 'stretch';
  }

  return styles;
}

var Root = (0, _index.styled)('div', function (props) {
  var $isOpen = props.$isOpen;
  return {
    position: 'fixed',
    overflow: 'auto',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    pointerEvents: $isOpen ? 'auto' : 'none'
  };
});
exports.Root = Root;
Root.displayName = "Root";
var Backdrop = (0, _index.styled)('div', function (props) {
  var $animate = props.$animate,
      $isOpen = props.$isOpen,
      $isVisible = props.$isVisible,
      $theme = props.$theme,
      $unstable_ModalBackdropScroll = props.$unstable_ModalBackdropScroll;

  if ($unstable_ModalBackdropScroll) {
    return {};
  }

  return _objectSpread({
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    // Disable scroll capabilities.
    touchAction: 'none',
    opacity: $isVisible && $isOpen ? 1 : 0
  }, $animate ? {
    transitionProperty: 'opacity',
    transitionDuration: $theme.animation.timing400,
    transitionTimingFunction: $theme.animation.easeOutCurve
  } : null);
});
exports.Backdrop = Backdrop;
Backdrop.displayName = "Backdrop";
var DialogContainer = (0, _index.styled)('div', function (props) {
  var $animate = props.$animate,
      $isOpen = props.$isOpen,
      $isVisible = props.$isVisible,
      $theme = props.$theme,
      $unstable_ModalBackdropScroll = props.$unstable_ModalBackdropScroll;
  return _objectSpread({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100%',
    pointerEvents: 'none',
    userSelect: 'none'
  }, $unstable_ModalBackdropScroll ? _objectSpread({
    pointerEvents: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    opacity: $isVisible && $isOpen ? 1 : 0
  }, $animate ? {
    transitionProperty: 'opacity',
    transitionDuration: $theme.animation.timing400,
    transitionTimingFunction: $theme.animation.easeOutCurve
  } : null) : {});
});
exports.DialogContainer = DialogContainer;
DialogContainer.displayName = "DialogContainer";
var Dialog = (0, _index.styled)('div', function (props) {
  var $animate = props.$animate,
      $isOpen = props.$isOpen,
      $isVisible = props.$isVisible,
      $size = props.$size,
      $theme = props.$theme;
  return _objectSpread(_objectSpread(_objectSpread({
    position: 'relative',
    backgroundColor: $theme.colors.backgroundPrimary,
    borderTopLeftRadius: $theme.borders.surfaceBorderRadius,
    borderTopRightRadius: $theme.borders.surfaceBorderRadius,
    borderBottomRightRadius: $theme.borders.surfaceBorderRadius,
    borderBottomLeftRadius: $theme.borders.surfaceBorderRadius,
    marginLeft: $theme.sizing.scale600,
    marginTop: $theme.sizing.scale600,
    marginRight: $theme.sizing.scale600,
    marginBottom: $theme.sizing.scale600
  }, getSizeStyles($size)), {}, {
    // Animation
    opacity: $isVisible && $isOpen ? 1 : 0,
    transform: $isVisible ? 'translateY(0)' : 'translateY(20px)'
  }, $animate ? {
    transitionProperty: 'opacity, transform',
    transitionDuration: $theme.animation.timing400,
    transitionTimingFunction: $theme.animation.easeOutCurve
  } : null), {}, {
    // Reset interactivity properties set by container
    userSelect: 'text',
    pointerEvents: $isOpen ? 'all' : 'none',
    // We move focus to the modal, but we don't want the blue outline style
    ':focus': {
      outline: 'none'
    }
  });
});
exports.Dialog = Dialog;
Dialog.displayName = "Dialog";
var Close = (0, _index.styled)('button', function (props) {
  var _ref;

  var $theme = props.$theme,
      $isFocusVisible = props.$isFocusVisible;
  var dir = $theme.direction === 'rtl' ? 'left' : 'right';
  return _ref = {
    // Reset button styles
    background: 'transparent',
    outline: 0,
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    // colors
    color: $theme.colors.modalCloseColor,
    transitionProperty: 'color, border-color',
    transitionDuration: $theme.animation.timing200,
    borderLeftWidth: '1px',
    borderRightWidth: '1px',
    borderTopWidth: '1px',
    borderBottomWidth: '1px',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    ':hover': {
      color: $theme.colors.modalCloseColorHover
    },
    ':focus': {
      outline: $isFocusVisible ? "3px solid ".concat($theme.colors.accent) : 'none'
    },
    // Positioning
    position: 'absolute',
    top: $theme.sizing.scale500
  }, _defineProperty(_ref, dir, $theme.sizing.scale500), _defineProperty(_ref, "width", $theme.sizing.scale800), _defineProperty(_ref, "height", $theme.sizing.scale800), _defineProperty(_ref, "display", 'flex'), _defineProperty(_ref, "justifyContent", 'center'), _defineProperty(_ref, "alignItems", 'center'), _defineProperty(_ref, "cursor", 'pointer'), _ref;
});
exports.Close = Close;
Close.displayName = "Close";
var ModalHeader = (0, _index.styled)('div', function (_ref2) {
  var _objectSpread2;

  var $theme = _ref2.$theme;
  var marginStartDir = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  var marginEndDir = $theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';
  return _objectSpread(_objectSpread({}, $theme.typography.font550), {}, (_objectSpread2 = {
    color: $theme.colors.contentPrimary,
    marginTop: $theme.sizing.scale900,
    marginBottom: $theme.sizing.scale600
  }, _defineProperty(_objectSpread2, marginStartDir, $theme.sizing.scale800), _defineProperty(_objectSpread2, marginEndDir, $theme.sizing.scale900), _objectSpread2));
});
exports.ModalHeader = ModalHeader;
ModalHeader.displayName = "ModalHeader";
var ModalBody = (0, _index.styled)('div', function (_ref3) {
  var $theme = _ref3.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.font200), {}, {
    color: $theme.colors.contentSecondary,
    marginTop: $theme.sizing.scale600,
    marginLeft: $theme.sizing.scale800,
    marginRight: $theme.sizing.scale800,
    marginBottom: $theme.sizing.scale700
  });
});
exports.ModalBody = ModalBody;
ModalBody.displayName = "ModalBody";
var ModalFooter = (0, _index.styled)('div', function (_ref4) {
  var $theme = _ref4.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.font200), {}, {
    marginTop: $theme.sizing.scale700,
    marginLeft: $theme.sizing.scale800,
    marginRight: $theme.sizing.scale800,
    paddingTop: $theme.sizing.scale500,
    paddingBottom: $theme.sizing.scale500,
    textAlign: $theme.direction === 'rtl' ? 'left' : 'right'
  });
});
exports.ModalFooter = ModalFooter;
ModalFooter.displayName = "ModalFooter";