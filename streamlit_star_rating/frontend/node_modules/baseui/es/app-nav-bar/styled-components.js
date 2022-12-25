/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled, withStyle } from '../styles/index.js';
import { StyledListItem } from '../menu/index.js';
import { KIND } from './constants.js';
const StyledButton = styled('button', ({
  $theme,
  $isFocusVisible
}) => ({
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
  outline: $isFocusVisible ? `3px solid ${$theme.colors.accent}` : 'none',
  outlineOffset: '-3px',
  WebkitAppearance: 'none',
  cursor: 'pointer'
}));
StyledButton.displayName = "StyledButton";
export const StyledRoot = styled('div', props => {
  const {
    $theme
  } = props;
  return { ...$theme.typography.font300,
    boxSizing: 'border-box',
    backgroundColor: $theme.colors.backgroundPrimary,
    boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.08)',
    width: '100%'
  };
});
StyledRoot.displayName = "StyledRoot";
export const StyledSubnavContainer = styled('div', ({
  $theme
}) => {
  return {
    boxSizing: 'border-box',
    boxShadow: '0px -1px 0px rgba(0, 0, 0, 0.08)'
  };
});
StyledSubnavContainer.displayName = "StyledSubnavContainer";
export const StyledSpacing = styled('div', props => {
  const {
    $theme
  } = props;
  return {
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: $theme.sizing.scale400,
    paddingBottom: $theme.sizing.scale400,
    [$theme.mediaQuery.medium]: {
      paddingTop: $theme.sizing.scale700,
      paddingBottom: $theme.sizing.scale700
    }
  };
});
StyledSpacing.displayName = "StyledSpacing";
export const StyledAppName = styled('div', ({
  $theme
}) => ({ ...$theme.typography.font550,
  color: $theme.colors.primary,
  textDecoration: 'none',
  [$theme.mediaQuery.medium]: { ...$theme.typography.font650
  }
}));
StyledAppName.displayName = "StyledAppName";
export const StyledSideMenuButton = withStyle(StyledButton, ({
  $theme
}) => ({ ...($theme.direction === 'rtl' ? {
    marginLeft: $theme.sizing.scale600
  } : {
    marginRight: $theme.sizing.scale600
  }),
  paddingTop: $theme.sizing.scale100,
  paddingBottom: $theme.sizing.scale100,
  paddingLeft: $theme.sizing.scale100,
  paddingRight: $theme.sizing.scale100
}));
StyledSideMenuButton.displayName = "StyledSideMenuButton";
export const StyledPrimaryMenuContainer = styled('div', ({
  $theme
}) => {
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
export const StyledMainMenuItem = styled('div', props => {
  const {
    $active,
    $isFocusVisible,
    $kind,
    $theme: {
      colors,
      sizing,
      direction
    }
  } = props;
  return {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    color: $active ? colors.contentPrimary : colors.contentTertiary,
    marginLeft: sizing.scale700,
    marginRight: sizing.scale700,
    paddingTop: $kind === KIND.secondary ? sizing.scale750 : '0',
    paddingBottom: $kind === KIND.secondary ? sizing.scale750 : '0',
    outline: $isFocusVisible ? `3px solid ${colors.accent}` : 'none',
    outlineOffset: '-3px',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: $active && !$isFocusVisible ? colors.primary : 'transparent',
    cursor: $active ? 'default' : 'pointer',
    whiteSpace: $kind === KIND.secondary ? 'nowrap' : 'initial',
    ':first-child': { ...(direction === 'rtl' ? {
        marginRight: '0'
      } : {
        marginLeft: '0'
      })
    },
    ':last-child': { ...(direction === 'rtl' ? {
        marginLeft: '0'
      } : {
        marginRight: '0'
      })
    },
    ':hover': {
      color: colors.primary
    }
  };
});
StyledMainMenuItem.displayName = "StyledMainMenuItem";
export const StyledSecondaryMenuContainer = styled('div', ({
  $theme
}) => {
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
export const StyledUserMenuButton = StyledButton;
export const StyledUserMenuProfileListItem = withStyle(StyledListItem, ({
  $theme
}) => ({
  paddingTop: '0',
  paddingBottom: '0',
  ...($theme.direction === 'rtl' ? {
    paddingLeft: '0'
  } : {
    paddingRight: '0'
  })
}));
StyledUserMenuProfileListItem.displayName = "StyledUserMenuProfileListItem";
export const StyledUserProfileTileContainer = styled('div', ({
  $theme
}) => {
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
export const StyledUserProfilePictureContainer = styled('div', ({
  $theme
}) => {
  return { ...($theme.direction === 'rtl' ? {
      marginLeft: $theme.sizing.scale600
    } : {
      marginRight: $theme.sizing.scale600
    })
  };
});
StyledUserProfilePictureContainer.displayName = "StyledUserProfilePictureContainer";
export const StyledUserProfileInfoContainer = styled('div', ({
  $theme
}) => {
  return {
    boxSizing: 'border-box',
    alignSelf: 'center'
  };
});
StyledUserProfileInfoContainer.displayName = "StyledUserProfileInfoContainer";