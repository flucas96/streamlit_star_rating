"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledUserProfileInfoContainer = exports.StyledUserProfilePictureContainer = exports.StyledUserProfileTileContainer = exports.StyledUserMenuProfileListItem = exports.StyledUserMenuButton = exports.StyledSecondaryMenuContainer = exports.StyledMainMenuItem = exports.StyledPrimaryMenuContainer = exports.StyledSideMenuButton = exports.StyledAppName = exports.StyledSpacing = exports.StyledSubnavContainer = exports.StyledRoot = void 0;

var _index = require("../styles/index.js");

var _index2 = require("../menu/index.js");

var _constants = require("./constants.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledButton = (0, _index.styled)('button', function (_ref) {
  var $theme = _ref.$theme,
      $isFocusVisible = _ref.$isFocusVisible;
  return {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: $theme.colors.contentPrimary,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    paddingRight: '0',
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    outline: $isFocusVisible ? "3px solid ".concat($theme.colors.accent) : 'none',
    outlineOffset: '-3px',
    WebkitAppearance: 'none',
    cursor: 'pointer'
  };
});
StyledButton.displayName = "StyledButton";
var StyledRoot = (0, _index.styled)('div', function (props) {
  var $theme = props.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.font300), {}, {
    boxSizing: 'border-box',
    backgroundColor: $theme.colors.backgroundPrimary,
    boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.08)',
    width: '100%'
  });
});
exports.StyledRoot = StyledRoot;
StyledRoot.displayName = "StyledRoot";
var StyledSubnavContainer = (0, _index.styled)('div', function (_ref2) {
  var $theme = _ref2.$theme;
  return {
    boxSizing: 'border-box',
    boxShadow: '0px -1px 0px rgba(0, 0, 0, 0.08)'
  };
});
exports.StyledSubnavContainer = StyledSubnavContainer;
StyledSubnavContainer.displayName = "StyledSubnavContainer";
var StyledSpacing = (0, _index.styled)('div', function (props) {
  var $theme = props.$theme;
  return _defineProperty({
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: $theme.sizing.scale400,
    paddingBottom: $theme.sizing.scale400
  }, $theme.mediaQuery.medium, {
    paddingTop: $theme.sizing.scale700,
    paddingBottom: $theme.sizing.scale700
  });
});
exports.StyledSpacing = StyledSpacing;
StyledSpacing.displayName = "StyledSpacing";
var StyledAppName = (0, _index.styled)('div', function (_ref4) {
  var $theme = _ref4.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.font550), {}, _defineProperty({
    color: $theme.colors.primary,
    textDecoration: 'none'
  }, $theme.mediaQuery.medium, _objectSpread({}, $theme.typography.font650)));
});
exports.StyledAppName = StyledAppName;
StyledAppName.displayName = "StyledAppName";
var StyledSideMenuButton = (0, _index.withStyle)(StyledButton, function (_ref5) {
  var $theme = _ref5.$theme;
  return _objectSpread(_objectSpread({}, $theme.direction === 'rtl' ? {
    marginLeft: $theme.sizing.scale600
  } : {
    marginRight: $theme.sizing.scale600
  }), {}, {
    paddingTop: $theme.sizing.scale100,
    paddingBottom: $theme.sizing.scale100,
    paddingLeft: $theme.sizing.scale100,
    paddingRight: $theme.sizing.scale100
  });
});
exports.StyledSideMenuButton = StyledSideMenuButton;
StyledSideMenuButton.displayName = "StyledSideMenuButton";
var StyledPrimaryMenuContainer = (0, _index.styled)('div', function (_ref6) {
  var $theme = _ref6.$theme;
  return {
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
    alignItems: 'stretch'
  };
});
exports.StyledPrimaryMenuContainer = StyledPrimaryMenuContainer;
StyledPrimaryMenuContainer.displayName = "StyledPrimaryMenuContainer";
var StyledMainMenuItem = (0, _index.styled)('div', function (props) {
  var $active = props.$active,
      $isFocusVisible = props.$isFocusVisible,
      $kind = props.$kind,
      _props$$theme = props.$theme,
      colors = _props$$theme.colors,
      sizing = _props$$theme.sizing,
      direction = _props$$theme.direction;
  return {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    color: $active ? colors.contentPrimary : colors.contentTertiary,
    marginLeft: sizing.scale700,
    marginRight: sizing.scale700,
    paddingTop: $kind === _constants.KIND.secondary ? sizing.scale750 : '0',
    paddingBottom: $kind === _constants.KIND.secondary ? sizing.scale750 : '0',
    outline: $isFocusVisible ? "3px solid ".concat(colors.accent) : 'none',
    outlineOffset: '-3px',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: $active && !$isFocusVisible ? colors.primary : 'transparent',
    cursor: $active ? 'default' : 'pointer',
    whiteSpace: $kind === _constants.KIND.secondary ? 'nowrap' : 'initial',
    ':first-child': _objectSpread({}, direction === 'rtl' ? {
      marginRight: '0'
    } : {
      marginLeft: '0'
    }),
    ':last-child': _objectSpread({}, direction === 'rtl' ? {
      marginLeft: '0'
    } : {
      marginRight: '0'
    }),
    ':hover': {
      color: colors.primary
    }
  };
});
exports.StyledMainMenuItem = StyledMainMenuItem;
StyledMainMenuItem.displayName = "StyledMainMenuItem";
var StyledSecondaryMenuContainer = (0, _index.styled)('div', function (_ref7) {
  var $theme = _ref7.$theme;
  return {
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    overflow: 'auto'
  };
});
exports.StyledSecondaryMenuContainer = StyledSecondaryMenuContainer;
StyledSecondaryMenuContainer.displayName = "StyledSecondaryMenuContainer";
var StyledUserMenuButton = StyledButton;
exports.StyledUserMenuButton = StyledUserMenuButton;
var StyledUserMenuProfileListItem = (0, _index.withStyle)(_index2.StyledListItem, function (_ref8) {
  var $theme = _ref8.$theme;
  return _objectSpread({
    paddingTop: '0',
    paddingBottom: '0'
  }, $theme.direction === 'rtl' ? {
    paddingLeft: '0'
  } : {
    paddingRight: '0'
  });
});
exports.StyledUserMenuProfileListItem = StyledUserMenuProfileListItem;
StyledUserMenuProfileListItem.displayName = "StyledUserMenuProfileListItem";
var StyledUserProfileTileContainer = (0, _index.styled)('div', function (_ref9) {
  var $theme = _ref9.$theme;
  return {
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    paddingTop: $theme.sizing.scale650,
    paddingBottom: $theme.sizing.scale650
  };
});
exports.StyledUserProfileTileContainer = StyledUserProfileTileContainer;
StyledUserProfileTileContainer.displayName = "StyledUserProfileTileContainer";
var StyledUserProfilePictureContainer = (0, _index.styled)('div', function (_ref10) {
  var $theme = _ref10.$theme;
  return _objectSpread({}, $theme.direction === 'rtl' ? {
    marginLeft: $theme.sizing.scale600
  } : {
    marginRight: $theme.sizing.scale600
  });
});
exports.StyledUserProfilePictureContainer = StyledUserProfilePictureContainer;
StyledUserProfilePictureContainer.displayName = "StyledUserProfilePictureContainer";
var StyledUserProfileInfoContainer = (0, _index.styled)('div', function (_ref11) {
  var $theme = _ref11.$theme;
  return {
    boxSizing: 'border-box',
    alignSelf: 'center'
  };
});
exports.StyledUserProfileInfoContainer = StyledUserProfileInfoContainer;
StyledUserProfileInfoContainer.displayName = "StyledUserProfileInfoContainer";