function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { Cell, Grid } from '../layout-grid/index.js';
import { useStyletron } from '../styles/index.js';
import { isFocusVisible } from '../utils/focusVisible.js';
import { KIND, POSITION } from './constants.js';
import MobileNav from './mobile-menu.js';
import UserMenu from './user-menu.js';
import { StyledRoot, StyledSpacing, StyledPrimaryMenuContainer, StyledSubnavContainer, StyledSecondaryMenuContainer, StyledAppName, StyledMainMenuItem } from './styled-components.js';
import { defaultMapItemToNode, mapItemsActive } from './utils.js';

function MainMenuItem(props) {
  const {
    item,
    kind = KIND.primary,
    mapItemToNode,
    onSelect,
    overrides = {}
  } = props;
  const [focusVisible, setFocusVisible] = React.useState(false);

  function handleFocus(event) {
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }
  }

  function handleBlur(event) {
    if (focusVisible) {
      setFocusVisible(false);
    }
  }

  function handleClick(event) {
    if (onSelect) {
      onSelect(item);
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' && onSelect) {
      onSelect(item);
    }
  }

  const [MainMenuItemElement, mainMenuItemElementProps] = getOverrides(overrides.MainMenuItem, StyledMainMenuItem);
  return /*#__PURE__*/React.createElement(MainMenuItemElement, _extends({
    $active: item.active,
    $isFocusVisible: focusVisible,
    $kind: kind,
    "aria-selected": item.active,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    tabIndex: 0
  }, mainMenuItemElementProps), mapItemToNode(item));
}

function SecondaryMenu(props) {
  const {
    items = [],
    mapItemToNode,
    onSelect,
    overrides = {}
  } = props;
  const [SubnavContainer, subnavContainerProps] = getOverrides(overrides.SubnavContainer, StyledSubnavContainer);
  const [SecondaryMenuContainer, secondaryMenuContainerProps] = getOverrides(overrides.SecondaryMenuContainer, StyledSecondaryMenuContainer);
  return /*#__PURE__*/React.createElement(SubnavContainer, subnavContainerProps, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(Cell, {
    span: [0, 8, 12]
  }, /*#__PURE__*/React.createElement(SecondaryMenuContainer, _extends({
    role: "navigation",
    "aria-label": "Secondary navigation"
  }, secondaryMenuContainerProps), items.map((item, index) =>
  /*#__PURE__*/
  // Replace with a menu item renderer
  React.createElement(MainMenuItem, {
    mapItemToNode: mapItemToNode,
    item: item,
    kind: KIND.secondary,
    key: index,
    onSelect: onSelect,
    overrides: overrides
  }))))));
}

export default function AppNavBar(props) {
  const [css, theme] = useStyletron();
  const {
    title,
    mapItemToNode = defaultMapItemToNode,
    onMainItemSelect = item => {},
    onUserItemSelect = item => {},
    overrides = {},
    userItems = [],
    username,
    usernameSubtitle,
    userImgUrl
  } = props;
  const mainItems = React.useMemo(() => {
    if (props.isMainItemActive) {
      return mapItemsActive(props.mainItems || [], props.isMainItemActive);
    }

    return props.mainItems || [];
  }, [props.mainItems, props.isMainItemActive]);
  const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
  const [Spacing, spacingProps] = getOverrides(overrides.Spacing, StyledSpacing);
  const [AppName, appNameProps] = getOverrides(overrides.AppName, StyledAppName);
  const [PrimaryMenuContainer, primaryMenuContainerProps] = getOverrides(overrides.PrimaryMenuContainer, StyledPrimaryMenuContainer);
  let secondaryMenu;
  let desktopSubNavPosition = POSITION.horizontal;
  let mobileSubNavPosition = POSITION.vertical;
  return /*#__PURE__*/React.createElement(Root, _extends({}, rootProps, {
    "data-baseweb": "app-nav-bar"
  }), /*#__PURE__*/React.createElement("div", {
    className: css({
      [`@media screen and (min-width: ${theme.breakpoints.large}px)`]: {
        display: 'none'
      }
    })
  }, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(Cell, {
    span: [4, 8, 0]
  }, /*#__PURE__*/React.createElement(Spacing, spacingProps, mainItems.length || userItems.length ? /*#__PURE__*/React.createElement(MobileNav, props) : null, /*#__PURE__*/React.createElement(AppName, appNameProps, title)))), secondaryMenu && mobileSubNavPosition === POSITION.horizontal && /*#__PURE__*/React.createElement(SecondaryMenu, {
    items: secondaryMenu,
    mapItemToNode: mapItemToNode,
    onSelect: onMainItemSelect,
    overrides: overrides
  })), /*#__PURE__*/React.createElement("div", {
    className: css({
      [`@media screen and (max-width: ${theme.breakpoints.large - 1}px)`]: {
        display: 'none'
      }
    })
  }, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(Cell, {
    span: [0, 3, 3]
  }, /*#__PURE__*/React.createElement(Spacing, spacingProps, /*#__PURE__*/React.createElement(AppName, appNameProps, title))), /*#__PURE__*/React.createElement(Cell, {
    span: userItems.length ? [0, 4, 8] : [0, 5, 9]
  }, /*#__PURE__*/React.createElement(PrimaryMenuContainer, _extends({
    role: "navigation",
    "aria-label": "Main navigation"
  }, primaryMenuContainerProps), mainItems.map((item, index) => {
    // For an active top level menu get the secondary navigation and its positioning
    if (item.active && item.children && item.children.length) {
      secondaryMenu = item.children;

      if (item.navPosition) {
        desktopSubNavPosition = item.navPosition.desktop || desktopSubNavPosition;
        mobileSubNavPosition = item.navPosition.mobile || mobileSubNavPosition;
      }
    }

    return /*#__PURE__*/React.createElement(MainMenuItem, {
      item: item,
      key: index,
      mapItemToNode: mapItemToNode,
      onSelect: onMainItemSelect,
      overrides: overrides
    });
  }))), userItems.length ? /*#__PURE__*/React.createElement(Cell, {
    span: [0, 1, 1]
  }, /*#__PURE__*/React.createElement(Spacing, spacingProps, /*#__PURE__*/React.createElement(UserMenu, {
    mapItemToNode: mapItemToNode,
    onItemSelect: onUserItemSelect,
    overrides: overrides,
    username: username,
    usernameSubtitle: usernameSubtitle,
    userImgUrl: userImgUrl,
    userItems: userItems
  }))) : null), secondaryMenu && desktopSubNavPosition === POSITION.horizontal && /*#__PURE__*/React.createElement(SecondaryMenu, {
    items: secondaryMenu,
    mapItemToNode: mapItemToNode,
    onSelect: onMainItemSelect,
    overrides: overrides
  })));
}