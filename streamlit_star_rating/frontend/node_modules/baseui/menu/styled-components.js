"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledProfileBody = exports.StyledProfileSubtitle = exports.StyledProfileTitle = exports.StyledProfileLabelsContainer = exports.StyledProfileImg = exports.StyledProfileImgContainer = exports.StyledListItemProfile = exports.StyledListItem = exports.StyledListItemElement = exports.StyledListItemAnchor = exports.StyledOptgroupHeader = exports.StyledEmptyState = exports.StyledList = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../styles/index.js");

var _constants = require("./constants.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledList = (0, _index.styled)('ul', function (_ref) {
  var $theme = _ref.$theme,
      $isFocusVisible = _ref.$isFocusVisible;
  return {
    backgroundColor: $theme.colors.menuFill,
    position: 'relative',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: $theme.sizing.scale300,
    paddingBottom: $theme.sizing.scale300,
    paddingLeft: 0,
    paddingRight: 0,
    borderTopLeftRadius: $theme.borders.popoverBorderRadius,
    borderTopRightRadius: $theme.borders.popoverBorderRadius,
    borderBottomRightRadius: $theme.borders.popoverBorderRadius,
    borderBottomLeftRadius: $theme.borders.popoverBorderRadius,
    boxShadow: $theme.lighting.shadow600,
    overflow: 'auto',
    ':focus': {
      outline: $isFocusVisible ? "3px solid ".concat($theme.colors.accent) : 'none'
    }
  };
});
exports.StyledList = StyledList;
StyledList.displayName = "StyledList";

function getFontColor(props) {
  if (props.$disabled) {
    return props.$theme.colors.menuFontDisabled;
  }

  if (props.$isHighlighted && props.$isFocused) {
    return props.$theme.colors.menuFontHighlighted;
  }

  if (props.$isHighlighted && !props.$isFocused) {
    return props.$theme.colors.menuFontSelected;
  }

  return props.$theme.colors.menuFontDefault;
}

function getBackgroundColor(props) {
  if (props.$disabled) {
    return 'transparent';
  }

  if (props.$isHighlighted) {
    return props.$theme.colors.menuFillHover;
  }

  return 'transparent';
}

var StyledEmptyState = (0, _index.styled)('li', function (props) {
  var $theme = props.$theme,
      $size = props.$size;
  return _objectSpread(_objectSpread({}, $size === _constants.OPTION_LIST_SIZE.compact ? $theme.typography.font100 : $theme.typography.font200), {}, {
    position: 'relative',
    display: 'block',
    color: $theme.colors.menuFontDisabled,
    textAlign: 'center',
    cursor: 'not-allowed',
    backgroundColor: 'transparent',
    marginBottom: 0,
    paddingTop: $theme.sizing.scale800,
    paddingBottom: $theme.sizing.scale800,
    paddingRight: $theme.sizing.scale800,
    paddingLeft: $theme.sizing.scale800
  });
});
exports.StyledEmptyState = StyledEmptyState;
StyledEmptyState.displayName = "StyledEmptyState";
var StyledOptgroupHeader = (0, _index.styled)('li', function (props) {
  var paddingX = props.$theme.sizing.scale300;
  var paddingY = props.$theme.sizing.scale200;
  return _objectSpread(_objectSpread({}, props.$theme.typography.font250), {}, {
    color: props.$theme.colors.colorPrimary,
    paddingTop: paddingY,
    paddingBottom: paddingY,
    paddingRight: paddingX,
    paddingLeft: paddingX
  });
});
exports.StyledOptgroupHeader = StyledOptgroupHeader;
StyledOptgroupHeader.displayName = "StyledOptgroupHeader";
var StyledListItemAnchor = (0, _index.styled)('a', function (props) {
  return {
    display: 'block',
    color: getFontColor(props)
  };
});
exports.StyledListItemAnchor = StyledListItemAnchor;
StyledListItemAnchor.displayName = "StyledListItemAnchor";
var StyledListItemElement = (0, _index.styled)('li', function (props) {
  var $disabled = props.$disabled,
      $theme = props.$theme,
      $size = props.$size;
  return _objectSpread(_objectSpread({}, $size === _constants.OPTION_LIST_SIZE.compact ? $theme.typography.font100 : $theme.typography.font200), {}, {
    position: 'relative',
    display: 'block',
    color: getFontColor(props),
    cursor: $disabled ? 'not-allowed' : 'pointer',
    backgroundColor: getBackgroundColor(props),
    transitionProperty: 'color, background-color',
    transitionDuration: $theme.animation.timing200,
    transitionTimingFunction: $theme.animation.easeOutCurve,
    marginBottom: 0,
    paddingTop: $size === _constants.OPTION_LIST_SIZE.compact ? $theme.sizing.scale100 : $theme.sizing.scale300,
    paddingBottom: $size === _constants.OPTION_LIST_SIZE.compact ? $theme.sizing.scale100 : $theme.sizing.scale300,
    paddingRight: $size === _constants.OPTION_LIST_SIZE.compact ? $theme.sizing.scale900 : $theme.sizing.scale600,
    paddingLeft: $size === _constants.OPTION_LIST_SIZE.compact ? $theme.sizing.scale900 : $theme.sizing.scale600,
    ':focus': {
      outline: 'none'
    }
  });
});
exports.StyledListItemElement = StyledListItemElement;
StyledListItemElement.displayName = "StyledListItemElement";
var StyledListItem = (0, _index.withWrapper)(StyledListItemElement, function (Styled) {
  return function StyledListItem(_ref2) {
    var item = _ref2.item,
        restProps = _objectWithoutProperties(_ref2, ["item"]);

    return /*#__PURE__*/React.createElement(Styled, restProps);
  };
});
exports.StyledListItem = StyledListItem;
var StyledListItemProfile = (0, _index.styled)('li', function (_ref3) {
  var $theme = _ref3.$theme;
  return {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    paddingTop: $theme.sizing.scale300,
    paddingBottom: $theme.sizing.scale300,
    paddingRight: $theme.sizing.scale800,
    paddingLeft: $theme.sizing.scale800,
    transitionProperty: 'color, background-color',
    transitionDuration: $theme.animation.timing200,
    transitionTimingFunction: $theme.animation.easeOutCurve,
    ':hover': {
      backgroundColor: $theme.colors.menuFillHover
    }
  };
});
exports.StyledListItemProfile = StyledListItemProfile;
StyledListItemProfile.displayName = "StyledListItemProfile";
var StyledProfileImgContainer = (0, _index.styled)('div', {
  width: '60px',
  height: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});
exports.StyledProfileImgContainer = StyledProfileImgContainer;
StyledProfileImgContainer.displayName = "StyledProfileImgContainer";
var StyledProfileImg = (0, _index.styled)('img', {
  width: '100%',
  height: '100%',
  borderTopLeftRadius: '50%',
  borderTopRightRadius: '50%',
  borderBottomRightRadius: '50%',
  borderBottomLeftRadius: '50%'
});
exports.StyledProfileImg = StyledProfileImg;
StyledProfileImg.displayName = "StyledProfileImg";
var StyledProfileLabelsContainer = (0, _index.styled)('div', function (_ref4) {
  var _ref4$$theme = _ref4.$theme,
      direction = _ref4$$theme.direction,
      sizing = _ref4$$theme.sizing;
  return _objectSpread({
    alignSelf: direction === 'rtl' ? 'flex-end' : 'flex-start',
    display: 'flex',
    flexDirection: 'column'
  }, direction === 'rtl' ? {
    marginRight: sizing.scale600
  } : {
    marginLeft: sizing.scale600
  });
});
exports.StyledProfileLabelsContainer = StyledProfileLabelsContainer;
StyledProfileLabelsContainer.displayName = "StyledProfileLabelsContainer";
var StyledProfileTitle = (0, _index.styled)('h6', function (_ref5) {
  var $theme = _ref5.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.font350), {}, {
    color: $theme.colors.contentPrimary,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0
  });
});
exports.StyledProfileTitle = StyledProfileTitle;
StyledProfileTitle.displayName = "StyledProfileTitle";
var StyledProfileSubtitle = (0, _index.styled)('p', function (_ref6) {
  var $theme = _ref6.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.font200), {}, {
    color: $theme.colors.contentPrimary,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0
  });
});
exports.StyledProfileSubtitle = StyledProfileSubtitle;
StyledProfileSubtitle.displayName = "StyledProfileSubtitle";
var StyledProfileBody = (0, _index.styled)('p', function (_ref7) {
  var $theme = _ref7.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.font100), {}, {
    color: $theme.colors.contentPrimary,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0
  });
});
exports.StyledProfileBody = StyledProfileBody;
StyledProfileBody.displayName = "StyledProfileBody";