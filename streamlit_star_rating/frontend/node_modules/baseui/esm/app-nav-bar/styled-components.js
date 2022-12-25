function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled, withStyle } from '../styles/index.js';
import { StyledListItem } from '../menu/index.js';
import { KIND } from './constants.js';
var StyledButton = styled('button', function (_ref) {
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
export var StyledRoot = styled('div', function (props) {
  var $theme = props.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.font300), {}, {
    boxSizing: 'border-box',
    backgroundColor: $theme.colors.backgroundPrimary,
    boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.08)',
    width: '100%'
  });
});
StyledRoot.displayName = "StyledRoot";
export var StyledSubnavContainer = styled('div', function (_ref2) {
  var $theme = _ref2.$theme;
  return {
    boxSizing: 'border-box',
    boxShadow: '0px -1px 0px rgba(0, 0, 0, 0.08)'
  };
});
StyledSubnavContainer.displayName = "StyledSubnavContainer";
export var StyledSpacing = styled('div', function (props) {
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
StyledSpacing.displayName = "StyledSpacing";
export var StyledAppName = styled('div', function (_ref4) {
  var $theme = _ref4.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.font550), {}, _defineProperty({
    color: $theme.colors.primary,
    textDecoration: 'none'
  }, $theme.mediaQuery.medium, _objectSpread({}, $theme.typography.font650)));
});
StyledAppName.displayName = "StyledAppName";
export var StyledSideMenuButton = withStyle(StyledButton, function (_ref5) {
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
StyledSideMenuButton.displayName = "StyledSideMenuButton";
export var StyledPrimaryMenuContainer = styled('div', function (_ref6) {
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
StyledPrimaryMenuContainer.displayName = "StyledPrimaryMenuContainer";
export var StyledMainMenuItem = styled('div', function (props) {
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
    paddingTop: $kind === KIND.secondary ? sizing.scale750 : '0',
    paddingBottom: $kind === KIND.secondary ? sizing.scale750 : '0',
    outline: $isFocusVisible ? "3px solid ".concat(colors.accent) : 'none',
    outlineOffset: '-3px',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: $active && !$isFocusVisible ? colors.primary : 'transparent',
    cursor: $active ? 'default' : 'pointer',
    whiteSpace: $kind === KIND.secondary ? 'nowrap' : 'initial',
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
StyledMainMenuItem.displayName = "StyledMainMenuItem";
export var StyledSecondaryMenuContainer = styled('div', function (_ref7) {
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
StyledSecondaryMenuContainer.displayName = "StyledSecondaryMenuContainer";
export var StyledUserMenuButton = StyledButton;
export var StyledUserMenuProfileListItem = withStyle(StyledListItem, function (_ref8) {
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
StyledUserMenuProfileListItem.displayName = "StyledUserMenuProfileListItem";
export var StyledUserProfileTileContainer = styled('div', function (_ref9) {
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
StyledUserProfileTileContainer.displayName = "StyledUserProfileTileContainer";
export var StyledUserProfilePictureContainer = styled('div', function (_ref10) {
  var $theme = _ref10.$theme;
  return _objectSpread({}, $theme.direction === 'rtl' ? {
    marginLeft: $theme.sizing.scale600
  } : {
    marginRight: $theme.sizing.scale600
  });
});
StyledUserProfilePictureContainer.displayName = "StyledUserProfilePictureContainer";
export var StyledUserProfileInfoContainer = styled('div', function (_ref11) {
  var $theme = _ref11.$theme;
  return {
    boxSizing: 'border-box',
    alignSelf: 'center'
  };
});
StyledUserProfileInfoContainer.displayName = "StyledUserProfileInfoContainer";