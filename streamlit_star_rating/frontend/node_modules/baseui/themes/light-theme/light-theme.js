"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LightTheme = void 0;

var _colorTokens = _interopRequireDefault(require("./color-tokens.js"));

var _colorSemanticTokens = _interopRequireDefault(require("./color-semantic-tokens.js"));

var _colorComponentTokens = _interopRequireDefault(require("./color-component-tokens.js"));

var _colorDeprecatedSemanticTokens = _interopRequireDefault(require("./color-deprecated-semantic-tokens.js"));

var _borders = _interopRequireDefault(require("../shared/borders.js"));

var _lighting = _interopRequireDefault(require("../shared/lighting.js"));

var _typography = _interopRequireDefault(require("../shared/typography.js"));

var _animation = _interopRequireDefault(require("../shared/animation.js"));

var _breakpoints = _interopRequireDefault(require("../shared/breakpoints.js"));

var _grid = _interopRequireDefault(require("../shared/grid.js"));

var _mediaQuery = _interopRequireDefault(require("../shared/media-query.js"));

var _sizing = _interopRequireDefault(require("../shared/sizing.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LightTheme = {
  name: 'light-theme',
  colors: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _colorTokens.default), (0, _colorComponentTokens.default)()), (0, _colorDeprecatedSemanticTokens.default)()), (0, _colorSemanticTokens.default)()),
  animation: _animation.default,
  breakpoints: _breakpoints.default,
  borders: _borders.default,
  direction: 'auto',
  grid: _grid.default,
  lighting: _lighting.default,
  mediaQuery: _mediaQuery.default,
  sizing: _sizing.default,
  typography: (0, _typography.default)(),
  // TODO(#2318) Remove it in the next v11 major version.
  // Do not use.
  zIndex: {
    modal: 2000
  }
};
exports.LightTheme = LightTheme;