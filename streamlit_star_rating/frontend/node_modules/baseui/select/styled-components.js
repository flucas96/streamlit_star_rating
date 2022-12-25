"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSearchIconContainer = exports.getLoadingIconStyles = exports.StyledClearIcon = exports.StyledSelectArrow = exports.StyledIconsContainer = exports.StyledInputSizer = exports.StyledInput = exports.StyledInputContainer = exports.StyledSingleValue = exports.StyledPlaceholder = exports.StyledValueContainer = exports.StyledControlContainer = exports.StyledRoot = exports.StyledOptionContent = exports.StyledDropdownListItem = exports.StyledDropdown = exports.StyledDropdownContainer = void 0;

var _index = require("../styles/index.js");

var _constants = require("./constants.js");

var _index2 = require("../menu/index.js");

var _util = require("../styles/util.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getFont() {
  var _SIZE$mini$SIZE$compa;

  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.SIZE.default;
  var typography = arguments.length > 1 ? arguments[1] : undefined;
  return (_SIZE$mini$SIZE$compa = {}, _defineProperty(_SIZE$mini$SIZE$compa, _constants.SIZE.mini, typography.font100), _defineProperty(_SIZE$mini$SIZE$compa, _constants.SIZE.compact, typography.font200), _defineProperty(_SIZE$mini$SIZE$compa, _constants.SIZE.default, typography.font300), _defineProperty(_SIZE$mini$SIZE$compa, _constants.SIZE.large, typography.font400), _SIZE$mini$SIZE$compa)[size];
}

function getControlPadding(props) {
  var _SIZE$mini, _SIZE$compact, _SIZE$default, _SIZE$large, _SIZE$mini$SIZE$compa2;

  var $theme = props.$theme,
      sizing = props.$theme.sizing,
      _props$$size = props.$size,
      $size = _props$$size === void 0 ? _constants.SIZE.default : _props$$size,
      $type = props.$type,
      $multi = props.$multi,
      $isEmpty = props.$isEmpty;
  var isSearch = $type === _constants.TYPE.search;
  var paddingLeft = isSearch ? "calc(".concat(sizing.scale1000, " - ").concat(sizing.scale0, ")") : sizing.scale400;
  var paddingStartDir = $theme.direction === 'rtl' ? 'paddingRight' : 'paddingLeft';
  var paddingEndDir = $theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight';
  return (_SIZE$mini$SIZE$compa2 = {}, _defineProperty(_SIZE$mini$SIZE$compa2, _constants.SIZE.mini, (_SIZE$mini = {
    // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
    paddingTop: $multi && !$isEmpty ? 0 : sizing.scale100,
    paddingBottom: $multi && !$isEmpty ? 0 : sizing.scale100
  }, _defineProperty(_SIZE$mini, paddingStartDir, $multi && !$isEmpty ? "calc(".concat(paddingLeft, " - ").concat(sizing.scale0, ")") : paddingLeft), _defineProperty(_SIZE$mini, paddingEndDir, '0'), _SIZE$mini)), _defineProperty(_SIZE$mini$SIZE$compa2, _constants.SIZE.compact, (_SIZE$compact = {
    // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
    paddingTop: $multi && !$isEmpty ? "calc(".concat(sizing.scale100, " - ").concat(sizing.scale0, ")") : sizing.scale200,
    paddingBottom: $multi && !$isEmpty ? "calc(".concat(sizing.scale100, " - ").concat(sizing.scale0, ")") : sizing.scale200
  }, _defineProperty(_SIZE$compact, paddingStartDir, $multi && !$isEmpty ? "calc(".concat(paddingLeft, " - ").concat(sizing.scale0, ")") : paddingLeft), _defineProperty(_SIZE$compact, paddingEndDir, '0'), _SIZE$compact)), _defineProperty(_SIZE$mini$SIZE$compa2, _constants.SIZE.default, (_SIZE$default = {
    // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
    paddingTop: $multi && !$isEmpty ? "calc(".concat(sizing.scale400, " - ").concat(sizing.scale0, ")") : sizing.scale400,
    paddingBottom: $multi && !$isEmpty ? "calc(".concat(sizing.scale400, " - ").concat(sizing.scale0, ")") : sizing.scale400
  }, _defineProperty(_SIZE$default, paddingStartDir, $multi && !$isEmpty ? "calc(".concat(paddingLeft, " + ").concat(sizing.scale0, ")") : paddingLeft), _defineProperty(_SIZE$default, paddingEndDir, 0), _SIZE$default)), _defineProperty(_SIZE$mini$SIZE$compa2, _constants.SIZE.large, (_SIZE$large = {
    // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
    paddingTop: $multi && !$isEmpty ? "calc(".concat(sizing.scale600, " - ").concat(sizing.scale0, ")") : sizing.scale550,
    paddingBottom: $multi && !$isEmpty ? "calc(".concat(sizing.scale600, " - ").concat(sizing.scale0, ")") : sizing.scale550
  }, _defineProperty(_SIZE$large, paddingStartDir, $multi && !$isEmpty ? "calc(".concat(paddingLeft, " - ").concat(sizing.scale0, ")") : paddingLeft), _defineProperty(_SIZE$large, paddingEndDir, 0), _SIZE$large)), _SIZE$mini$SIZE$compa2)[$size];
}

var StyledDropdownContainer = (0, _index.styled)('div', function (props) {
  return {
    width: "".concat(String(props.$width), "px")
  };
});
exports.StyledDropdownContainer = StyledDropdownContainer;
StyledDropdownContainer.displayName = "StyledDropdownContainer";
var StyledDropdown = _index2.StyledList;
exports.StyledDropdown = StyledDropdown;
var StyledDropdownListItem = _index2.StyledListItem;
exports.StyledDropdownListItem = StyledDropdownListItem;
var StyledOptionContent = (0, _index.styled)('div', function (props) {
  var $isHighlighted = props.$isHighlighted,
      $selected = props.$selected,
      $disabled = props.$disabled,
      $theme = props.$theme;
  return {
    cursor: $disabled ? 'not-allowed' : 'pointer',
    color: $selected && !$isHighlighted ? $theme.colors.menuFontSelected : null,
    fontWeight: $selected ? 'bold' : 'normal'
  };
});
exports.StyledOptionContent = StyledOptionContent;
StyledOptionContent.displayName = "StyledOptionContent";
var StyledRoot = (0, _index.styled)('div', function (props) {
  var typography = props.$theme.typography,
      $size = props.$size;
  return _objectSpread(_objectSpread({}, getFont($size, typography)), {}, {
    boxSizing: 'border-box',
    position: 'relative',
    width: '100%'
  });
});
exports.StyledRoot = StyledRoot;
StyledRoot.displayName = "StyledRoot";

function getControlContainerColors($disabled, $isFocused, $isPseudoFocused, $positive, $error, colors) {
  if ($disabled) {
    return {
      color: colors.inputTextDisabled,
      borderLeftColor: colors.inputFillDisabled,
      borderRightColor: colors.inputFillDisabled,
      borderTopColor: colors.inputFillDisabled,
      borderBottomColor: colors.inputFillDisabled,
      backgroundColor: colors.inputFillDisabled
    };
  }

  if ($isFocused || $isPseudoFocused) {
    return {
      color: colors.contentPrimary,
      borderLeftColor: colors.borderFocus,
      borderRightColor: colors.borderFocus,
      borderTopColor: colors.borderFocus,
      borderBottomColor: colors.borderFocus,
      backgroundColor: colors.inputFillActive
    };
  }

  if ($error) {
    return {
      color: colors.contentPrimary,
      borderLeftColor: colors.inputBorderError,
      borderRightColor: colors.inputBorderError,
      borderTopColor: colors.inputBorderError,
      borderBottomColor: colors.inputBorderError,
      backgroundColor: colors.inputFillError
    };
  }

  if ($positive) {
    return {
      color: colors.contentPrimary,
      borderLeftColor: colors.inputBorderPositive,
      borderRightColor: colors.inputBorderPositive,
      borderTopColor: colors.inputBorderPositive,
      borderBottomColor: colors.inputBorderPositive,
      backgroundColor: colors.inputFillPositive
    };
  }

  return {
    color: colors.contentPrimary,
    borderLeftColor: colors.inputBorder,
    borderRightColor: colors.inputBorder,
    borderTopColor: colors.inputBorder,
    borderBottomColor: colors.inputBorder,
    backgroundColor: colors.inputFill
  };
}

var StyledControlContainer = (0, _index.styled)('div', function (props) {
  var $disabled = props.$disabled,
      $error = props.$error,
      $positive = props.$positive,
      $isFocused = props.$isFocused,
      $isPseudoFocused = props.$isPseudoFocused,
      $type = props.$type,
      $searchable = props.$searchable,
      _props$$theme = props.$theme,
      borders = _props$$theme.borders,
      colors = _props$$theme.colors,
      animation = _props$$theme.animation;
  return _objectSpread({
    borderTopLeftRadius: borders.inputBorderRadius,
    borderTopRightRadius: borders.inputBorderRadius,
    borderBottomRightRadius: borders.inputBorderRadius,
    borderBottomLeftRadius: borders.inputBorderRadius,
    boxSizing: 'border-box',
    overflow: 'hidden',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    cursor: $disabled ? 'not-allowed' : $searchable || $type === _constants.TYPE.search ? 'text' : 'pointer',
    borderLeftWidth: '2px',
    borderRightWidth: '2px',
    borderTopWidth: '2px',
    borderBottomWidth: '2px',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    transitionProperty: 'border, box-shadow, background-color',
    transitionDuration: animation.timing200,
    transitionTimingFunction: animation.easeOutCurve
  }, getControlContainerColors($disabled, $isFocused, $isPseudoFocused, $positive, $error, colors));
});
exports.StyledControlContainer = StyledControlContainer;
StyledControlContainer.displayName = "StyledControlContainer";
var StyledValueContainer = (0, _index.styled)('div', function (props) {
  var padding = getControlPadding(props);
  return _objectSpread({
    boxSizing: 'border-box',
    position: 'relative',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%',
    display: 'flex',
    alignItems: 'center',
    flexWrap: props.$multi ? 'wrap' : 'nowrap',
    overflow: 'hidden'
  }, padding);
});
exports.StyledValueContainer = StyledValueContainer;
StyledValueContainer.displayName = "StyledValueContainer";
var StyledPlaceholder = (0, _index.styled)('div', function (props) {
  var $disabled = props.$disabled,
      colors = props.$theme.colors;
  return {
    color: $disabled ? colors.inputPlaceholderDisabled : colors.inputPlaceholder,
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  };
});
exports.StyledPlaceholder = StyledPlaceholder;
StyledPlaceholder.displayName = "StyledPlaceholder";
var StyledSingleValue = (0, _index.styled)('div', function (props) {
  var _objectSpread2;

  var $searchable = props.$searchable,
      $size = props.$size,
      $theme = props.$theme,
      typography = props.$theme.typography;
  var font = getFont($size, typography);
  var marginDir = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  return _objectSpread((_objectSpread2 = {
    lineHeight: !$searchable ? font.lineHeight : 'inherit',
    boxSizing: 'border-box'
  }, _defineProperty(_objectSpread2, marginDir, $theme.sizing.scale0), _defineProperty(_objectSpread2, "height", '100%'), _defineProperty(_objectSpread2, "maxWidth", '100%'), _objectSpread2), _util.ellipsisText);
});
exports.StyledSingleValue = StyledSingleValue;
StyledSingleValue.displayName = "StyledSingleValue";
var StyledInputContainer = (0, _index.styled)('div', function (props) {
  var $size = props.$size,
      $searchable = props.$searchable,
      _props$$theme2 = props.$theme,
      typography = _props$$theme2.typography,
      sizing = _props$$theme2.sizing,
      $isEmpty = props.$isEmpty;
  var font = getFont($size, typography);
  return {
    position: 'relative',
    display: 'inline-block',
    maxWidth: '100%',
    backgroundColor: 'transparent',
    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    boxShadow: 'none',
    boxSizing: 'border-box',
    outline: 'none',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: $isEmpty ? 0 : sizing.scale0,
    marginRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    height: String(!$searchable ? font.lineHeight : 'auto'),
    maxHeight: String(font.lineHeight)
  };
});
exports.StyledInputContainer = StyledInputContainer;
StyledInputContainer.displayName = "StyledInputContainer";
var StyledInput = (0, _index.styled)('input', function (props) {
  var _props$$theme3 = props.$theme,
      colors = _props$$theme3.colors,
      typography = _props$$theme3.typography,
      $size = props.$size,
      $searchable = props.$searchable,
      $width = props.$width;
  return _objectSpread(_objectSpread({}, getFont($size, typography)), {}, {
    color: colors.contentPrimary,
    boxSizing: 'content-box',
    width: !$searchable ? '1px' : $width || '100%',
    maxWidth: '100%',
    background: 'transparent',
    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    boxShadow: 'none',
    display: 'inline-block',
    outline: 'none',
    marginTop: '0',
    marginBottom: '0',
    marginLeft: '0',
    marginRight: '0',
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    paddingRight: '0'
  });
});
exports.StyledInput = StyledInput;
StyledInput.displayName = "StyledInput";
var StyledInputSizer = (0, _index.styled)('div', function (_ref) {
  var _objectSpread3;

  var $size = _ref.$size,
      $theme = _ref.$theme,
      typography = _ref.$theme.typography;
  var dir = $theme.direction === 'rtl' ? 'right' : 'left';
  return _objectSpread(_objectSpread({}, getFont($size, typography)), {}, (_objectSpread3 = {
    position: 'absolute',
    top: 0
  }, _defineProperty(_objectSpread3, dir, 0), _defineProperty(_objectSpread3, "visibility", 'hidden'), _defineProperty(_objectSpread3, "height", 0), _defineProperty(_objectSpread3, "overflow", 'scroll'), _defineProperty(_objectSpread3, "whiteSpace", 'pre'), _objectSpread3));
});
exports.StyledInputSizer = StyledInputSizer;
StyledInputSizer.displayName = "StyledInputSizer";
var StyledIconsContainer = (0, _index.styled)('div', function (_ref2) {
  var $theme = _ref2.$theme,
      sizing = _ref2.$theme.sizing;
  var paddingDir = $theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight';
  return _defineProperty({
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    alignSelf: 'stretch'
  }, paddingDir, sizing.scale500);
});
exports.StyledIconsContainer = StyledIconsContainer;
StyledIconsContainer.displayName = "StyledIconsContainer";

function getSvgStyles(_ref4) {
  var $theme = _ref4.$theme;
  return {
    display: 'inline-block',
    fill: 'currentColor',
    color: 'currentColor',
    height: $theme.sizing.scale600,
    width: $theme.sizing.scale600
  };
}

var StyledSelectArrow = (0, _index.styled)('svg', function (props) {
  var $theme = props.$theme,
      $disabled = props.$disabled;
  var colors = $theme.colors;
  return _objectSpread(_objectSpread({}, getSvgStyles({
    $theme: $theme
  })), {}, {
    color: $disabled ? colors.inputTextDisabled : colors.contentPrimary,
    cursor: $disabled ? 'not-allowed' : 'pointer'
  });
});
exports.StyledSelectArrow = StyledSelectArrow;
StyledSelectArrow.displayName = "StyledSelectArrow";
var StyledClearIcon = (0, _index.styled)('svg', function (props) {
  var $theme = props.$theme;
  var colors = $theme.colors;
  return _objectSpread(_objectSpread({}, getSvgStyles({
    $theme: $theme
  })), {}, {
    color: colors.contentPrimary,
    cursor: 'pointer'
  });
});
exports.StyledClearIcon = StyledClearIcon;
StyledClearIcon.displayName = "StyledClearIcon";

var getLoadingIconStyles = function getLoadingIconStyles(props) {
  var $theme = props.$theme;
  var colors = $theme.colors;
  return _objectSpread(_objectSpread({}, getSvgStyles({
    $theme: $theme
  })), {}, {
    color: colors.contentPrimary
  });
};

exports.getLoadingIconStyles = getLoadingIconStyles;
var StyledSearchIconContainer = (0, _index.styled)('div', function (props) {
  var _objectSpread4;

  var $disabled = props.$disabled,
      $theme = props.$theme;
  var colors = $theme.colors,
      sizing = $theme.sizing;
  var dir = $theme.direction === 'rtl' ? 'right' : 'left';
  return _objectSpread(_objectSpread({}, getSvgStyles(props)), {}, (_objectSpread4 = {
    color: $disabled ? colors.inputTextDisabled : colors.contentPrimary,
    cursor: $disabled ? 'not-allowed' : 'pointer',
    position: 'absolute',
    top: 0
  }, _defineProperty(_objectSpread4, dir, sizing.scale500), _defineProperty(_objectSpread4, "display", 'flex'), _defineProperty(_objectSpread4, "alignItems", 'center'), _defineProperty(_objectSpread4, "height", '100%'), _objectSpread4));
});
exports.StyledSearchIconContainer = StyledSearchIconContainer;
StyledSearchIconContainer.displayName = "StyledSearchIconContainer";