function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import colorTokens from './color-tokens.js';
import getSemanticColorTokens from './color-semantic-tokens.js';
import getComponentColorTokens from './color-component-tokens.js';
import getDeprecatedSemanticColorTokens from './color-deprecated-semantic-tokens.js';
import borders from '../shared/borders.js';
import lighting from '../shared/lighting.js';
import getTypography from '../shared/typography.js';
import animation from '../shared/animation.js';
import breakpoints from '../shared/breakpoints.js';
import grid from '../shared/grid.js';
import mediaQuery from '../shared/media-query.js';
import sizing from '../shared/sizing.js';
export var LightTheme = {
  name: 'light-theme',
  colors: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, colorTokens), getComponentColorTokens()), getDeprecatedSemanticColorTokens()), getSemanticColorTokens()),
  animation: animation,
  breakpoints: breakpoints,
  borders: borders,
  direction: 'auto',
  grid: grid,
  lighting: lighting,
  mediaQuery: mediaQuery,
  sizing: sizing,
  typography: getTypography(),
  // TODO(#2318) Remove it in the next v11 major version.
  // Do not use.
  zIndex: {
    modal: 2000
  }
};