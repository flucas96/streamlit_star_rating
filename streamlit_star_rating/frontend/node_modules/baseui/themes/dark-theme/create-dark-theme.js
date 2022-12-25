"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDarkTheme;

var _animation = _interopRequireDefault(require("../shared/animation.js"));

var _borders = _interopRequireDefault(require("./borders.js"));

var _breakpoints = _interopRequireDefault(require("../shared/breakpoints.js"));

var _deepMerge = _interopRequireDefault(require("../../utils/deep-merge.js"));

var _colorTokens = _interopRequireDefault(require("./color-tokens.js"));

var _colorComponentTokens = _interopRequireDefault(require("./color-component-tokens.js"));

var _colorDeprecatedSemanticTokens = _interopRequireDefault(require("./color-deprecated-semantic-tokens.js"));

var _colorSemanticTokens = _interopRequireDefault(require("./color-semantic-tokens.js"));

var _typography = _interopRequireDefault(require("../shared/typography.js"));

var _grid = _interopRequireDefault(require("../shared/grid.js"));

var _lighting = _interopRequireDefault(require("../shared/lighting.js"));

var _mediaQuery = _interopRequireDefault(require("../shared/media-query.js"));

var _sizing = _interopRequireDefault(require("../shared/sizing.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function createDarkTheme() {
  var primitives = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var // Used to override default theme property values derived from primitives
  overrides = arguments.length > 1 ? arguments[1] : undefined;

  // Extract font tokens and color tokens from primitives
  var primaryFontFamily = primitives.primaryFontFamily,
      customColorTokens = _objectWithoutProperties(primitives, ["primaryFontFamily"]); // Assemble color tokens by overriding defaults with custom color tokens


  var colorTokens = _objectSpread(_objectSpread({}, _colorTokens.default), customColorTokens);

  var theme = {
    animation: _animation.default,
    borders: _borders.default,
    breakpoints: _breakpoints.default,
    colors: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, colorTokens), (0, _colorComponentTokens.default)(colorTokens)), (0, _colorDeprecatedSemanticTokens.default)(colorTokens)), (0, _colorSemanticTokens.default)(colorTokens)),
    direction: 'auto',
    grid: _grid.default,
    lighting: _lighting.default,
    mediaQuery: _mediaQuery.default,
    sizing: _sizing.default,
    // If primaryFontFamily is not provided, we use our default font tokens
    typography: primaryFontFamily ? (0, _typography.default)({
      primaryFontFamily: primaryFontFamily
    }) : (0, _typography.default)(),
    // TODO(#2318) Remove in v11, the next major version.
    // Do not use.
    zIndex: {
      modal: 2000
    }
  };
  return (0, _deepMerge.default)(theme, overrides);
}