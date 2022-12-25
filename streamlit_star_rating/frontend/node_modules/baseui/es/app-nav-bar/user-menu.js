function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Avatar } from '../avatar/index.js';
import { Button } from '../button/index.js';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
import ChevronDownSmallFilled from '../icon/chevron-down.js';
import ChevronUpSmallFilled from '../icon/chevron-up.js';
import { MenuAdapter, ListItemLabel, ARTWORK_SIZES } from '../list/index.js';
import { StatefulMenu, StyledList } from '../menu/index.js';
import { StatefulPopover, PLACEMENT, TRIGGER_TYPE } from '../popover/index.js';
import { StyledUserMenuButton, StyledUserMenuProfileListItem } from './styled-components.js';
import UserProfileTile from './user-profile-tile.js';
import { defaultMapItemToNode } from './utils.js';
const MENU_ITEM_WIDTH = '275px';
const UserMenuListItem = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    item,
    mapItemToNode = defaultMapItemToNode
  } = props; // Replace with a user menu item renderer

  return /*#__PURE__*/React.createElement(MenuAdapter, _extends({}, props, {
    ref: ref,
    artwork: item.icon || null,
    artworkSize: ARTWORK_SIZES.LARGE
  }), /*#__PURE__*/React.createElement(ListItemLabel, null, mapItemToNode(item)));
});

const svgStyleOverride = ({
  $theme
}) => ({
  paddingLeft: $theme.sizing.scale200
});

export default function UserMenuComponent(props) {
  // isOpen is used for displaying different arrow icons in open or closed state
  const [isOpen, setIsOpen] = React.useState(false);
  const {
    userItems = [],
    username,
    userImgUrl,
    overrides = {}
  } = props;
  const [UserMenuProfileListItem, userMenuProfileListItemProps] = getOverrides(overrides.UserMenuProfileListItem, StyledUserMenuProfileListItem);
  const [UserMenuButton, userMenuButtonProps] = getOverrides(overrides.UserMenuButton, Button); // $FlowFixMe

  userMenuButtonProps.overrides = mergeOverrides({
    BaseButton: {
      component: StyledUserMenuButton
    }
  }, // $FlowFixMe
  userMenuButtonProps.overrides);
  const [UserMenu, userMenuProps] = getOverrides(overrides.UserMenu, StatefulMenu); // $FlowFixMe

  userMenuProps.overrides = mergeOverrides({
    List: {
      component: /*#__PURE__*/React.forwardRef(({
        children,
        ...restProps
      }, ref) => /*#__PURE__*/React.createElement(StyledList, _extends({}, restProps, {
        ref: ref
      }), /*#__PURE__*/React.createElement(UserMenuProfileListItem, userMenuProfileListItemProps, /*#__PURE__*/React.createElement(UserProfileTile, {
        username: props.username,
        usernameSubtitle: props.usernameSubtitle,
        userImgUrl: props.userImgUrl,
        overrides: overrides
      })), children)),
      style: {
        width: MENU_ITEM_WIDTH
      }
    },

    ListItem(listItemProps) {
      return /*#__PURE__*/React.createElement(UserMenuListItem, _extends({}, listItemProps, {
        mapItemToNode: props.mapItemToNode
      }));
    }

  }, // $FlowFixMe
  userMenuProps.overrides);
  return /*#__PURE__*/React.createElement(StatefulPopover, {
    content: ({
      close
    }) => /*#__PURE__*/React.createElement(UserMenu, _extends({
      items: userItems,
      onItemSelect: ({
        item
      }) => {
        props.onItemSelect(item);
        close();
      }
    }, userMenuProps)),
    dismissOnEsc: true,
    dismissOnClickOutside: true,
    onOpen: () => setIsOpen(true),
    onClose: () => setIsOpen(false),
    placement: PLACEMENT.bottomRight,
    popperOptions: {
      modifiers: {
        flip: {
          enabled: false
        }
      }
    },
    triggerType: TRIGGER_TYPE.click
  }, /*#__PURE__*/React.createElement(UserMenuButton, userMenuButtonProps, /*#__PURE__*/React.createElement(Avatar, {
    name: username || '',
    src: userImgUrl,
    size: '32px'
  }), isOpen ? /*#__PURE__*/React.createElement(ChevronUpSmallFilled, {
    size: 28,
    overrides: {
      Svg: {
        style: svgStyleOverride
      }
    }
  }) : /*#__PURE__*/React.createElement(ChevronDownSmallFilled, {
    size: 28,
    overrides: {
      Svg: {
        style: svgStyleOverride
      }
    }
  })));
}