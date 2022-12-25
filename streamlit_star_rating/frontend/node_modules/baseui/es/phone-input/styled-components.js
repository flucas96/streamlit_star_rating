/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { SIZE } from './constants.js';
import { styled, withStyle, withWrapper } from '../styles/index.js';
import { StyledList } from '../menu/index.js';
import { StyledDropdownListItem, StyledRoot as SelectStyledRoot } from '../select/index.js';
import defaultProps from '../select/default-props.js';
// The root element of the PhoneInputNext
export const StyledPhoneInputRoot = styled('div', {
  display: 'flex'
});
StyledPhoneInputRoot.displayName = "StyledPhoneInputRoot";
export const StyledFlagContainer = styled('span', ({
  $size = SIZE.default,
  $theme: {
    sizing
  }
}) => {
  const sizeToFont = {
    [SIZE.mini]: sizing.scale700,
    [SIZE.compact]: sizing.scale800,
    [SIZE.default]: sizing.scale900,
    [SIZE.large]: sizing.scale1000
  };
  return {
    fontSize: sizeToFont[$size]
  };
}); // An override component for the Select's Root styled element

StyledFlagContainer.displayName = "StyledFlagContainer";
export const StyledRoot = withStyle(SelectStyledRoot, props => {
  // hard coded widths for the flag dropdown anchor
  const sizeToWidth = {
    [SIZE.mini]: '50px',
    [SIZE.compact]: '60px',
    [SIZE.default]: '70px',
    [SIZE.large]: '80px'
  };
  return {
    width: sizeToWidth[props.$size || SIZE.default],
    display: 'inline-block'
  };
});
StyledRoot.displayName = "StyledRoot";
export const StyledDialCode = styled('div', ({
  $theme: {
    direction,
    sizing
  }
}) => {
  const marginDir = direction === 'rtl' ? 'marginRight' : 'marginLeft';
  return {
    [marginDir]: sizing.scale100,
    display: 'flex',
    alignItems: 'center'
  };
});
StyledDialCode.displayName = "StyledDialCode";
export const StyledCountrySelectContainer = styled('div', {
  display: 'flex',
  alignItems: 'center'
});
StyledCountrySelectContainer.displayName = "StyledCountrySelectContainer";
export const StyledCountrySelectDropdownContainer = withStyle(StyledList, props => {
  const {
    $height = defaultProps.maxDropdownHeight
  } = props;
  return {
    height: $height,
    paddingTop: 0,
    paddingBottom: 0
  };
});
StyledCountrySelectDropdownContainer.displayName = "StyledCountrySelectDropdownContainer";
export const StyledCountrySelectDropdownListItemElement = withStyle(StyledDropdownListItem, {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  display: 'flex',
  alignItems: 'center',
  height: '42px'
});
StyledCountrySelectDropdownListItemElement.displayName = "StyledCountrySelectDropdownListItemElement";
export const StyledCountrySelectDropdownListItem = withWrapper(StyledCountrySelectDropdownListItemElement, Styled => function StyledCountrySelectDropdownListItem({
  item,
  ...restProps
}) {
  return /*#__PURE__*/React.createElement(Styled, restProps);
});
export const StyledCountrySelectDropdownFlagColumn = styled('div', ({
  $theme: {
    direction,
    sizing
  }
}) => {
  const paddingDir = direction === 'rtl' ? 'paddingRight' : 'paddingLeft';
  return {
    [paddingDir]: sizing.scale600,
    display: 'flex',
    alignItems: 'center'
  };
});
StyledCountrySelectDropdownFlagColumn.displayName = "StyledCountrySelectDropdownFlagColumn";
export const StyledCountrySelectDropdownNameColumn = styled('div', ({
  $theme: {
    direction,
    sizing
  }
}) => {
  const paddingDir = direction === 'rtl' ? 'paddingRight' : 'paddingLeft';
  return {
    [paddingDir]: sizing.scale600
  };
});
StyledCountrySelectDropdownNameColumn.displayName = "StyledCountrySelectDropdownNameColumn";
export const StyledCountrySelectDropdownDialcodeColumn = styled('div', ({
  $theme: {
    direction,
    sizing
  }
}) => {
  const paddingDir = direction === 'rtl' ? 'paddingLeft' : 'paddingRight';
  const marginDir = direction === 'rtl' ? 'marginRight' : 'marginLeft';
  return {
    [paddingDir]: sizing.scale600,
    [marginDir]: 'auto'
  };
});
StyledCountrySelectDropdownDialcodeColumn.displayName = "StyledCountrySelectDropdownDialcodeColumn";