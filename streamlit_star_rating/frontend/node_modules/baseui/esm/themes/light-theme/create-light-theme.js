function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import animation from '../shared/animation.js';
import borders from '../shared/borders.js';
import breakpoints from '../shared/breakpoints.js';
import deepMerge from '../../utils/deep-merge.js';
import defaultColorTokens from './color-tokens.js';
import getComponentColorTokens from './color-component-tokens.js';
import getDeprecatedSemanticColorTokens from './color-deprecated-semantic-tokens.js';
import getSemanticColorTokens from './color-semantic-tokens.js';
import getTypography from '../shared/typography.js';
import grid from '../shared/grid.js';
import lighting from '../shared/lighting.js';
import mediaQuery from '../shared/media-query.js';
import sizing from '../shared/sizing.js';
export default function createLightTheme() {
  var primitives = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var // Used to override default theme property values derived from primitives
  overrides = arguments.length > 1 ? arguments[1] : undefined;

  // Extract font tokens and color tokens from primitives
  var primaryFontFamily = primitives.primaryFontFamily,
      customColorTokens = _objectWithoutProperties(primitives, ["primaryFontFamily"]); // Assemble color tokens by overriding defaults with custom color tokens


  var colorTokens = _objectSpread(_objectSpread({}, defaultColorTokens), customColorTokens);

  var theme = {
    animation: animation,
    borders: borders,
    breakpoints: breakpoints,
    colors: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, colorTokens), getComponentColorTokens(colorTokens)), getDeprecatedSemanticColorTokens(colorTokens)), getSemanticColorTokens(colorTokens)),
    direction: 'auto',
    grid: grid,
    lighting: lighting,
    mediaQuery: mediaQuery,
    sizing: sizing,
    // If primaryFontFamily is not provided, we use our default font tokens
    typography: primaryFontFamily ? getTypography({
      primaryFontFamily: primaryFontFamily
    }) : getTypography(),
    // TODO(#2318) Remove in v11, the next major version.
    // Do not use.
    zIndex: {
      modal: 2000
    }
  };
  return deepMerge(theme, overrides);
}