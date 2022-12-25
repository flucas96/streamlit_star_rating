function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
export var StyledRoot = styled('nav', function (_ref) {
  var $theme = _ref.$theme;
  return _objectSpread({
    color: $theme.colors.breadcrumbsText
  }, $theme.typography.font350);
});
StyledRoot.displayName = "StyledRoot";
export var StyledList = styled('ol', function (_ref2) {
  var $theme = _ref2.$theme;
  return _objectSpread({
    listStyleType: 'none',
    margin: 0,
    padding: 0
  }, $theme.typography.font350);
});
StyledList.displayName = "StyledList";
export var StyledListItem = styled('li', function (_ref3) {
  var $theme = _ref3.$theme;
  return _objectSpread({
    display: 'inline-block'
  }, $theme.typography.font350);
});
StyledListItem.displayName = "StyledListItem";
export var StyledSeparator = styled('div', function (_ref4) {
  var $theme = _ref4.$theme;
  return {
    display: 'inline-block',
    color: $theme.colors.breadcrumbsSeparatorFill,
    marginLeft: $theme.sizing.scale300,
    marginRight: $theme.sizing.scale300,
    verticalAlign: 'middle'
  };
});
StyledSeparator.displayName = "StyledSeparator";