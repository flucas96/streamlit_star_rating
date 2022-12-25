"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Arrow = exports.Inner = exports.Body = void 0;

var _index = require("../styles/index.js");

var _styledComponents = require("../popover/styled-components.js");

var _utils = require("../popover/utils.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * We want to reuse the default Popover styles and add our overrides
 * for Tooltip. Normally you could do something like
 * withStyleDeep(StyledPopoverBody, {...}), however this break the
 * ability to use $style properly–the style overrides passed in by
 * the customer will override the base styles but not the styles
 * specified here.
 *
 * We could create our own withStyleDeep that also takes the $style
 * prop into account
 */
var Body = (0, _index.styled)('div', function (props) {
  return _objectSpread(_objectSpread({}, (0, _styledComponents.getBodyStyles)(props)), {}, {
    backgroundColor: props.$theme.colors.tooltipBackground,
    boxShadow: props.$theme.lighting.shadow400,
    color: props.$theme.colors.tooltipText,
    // Reset transition property to opacity only, and static transform
    transitionProperty: 'opacity',
    transform: (0, _utils.getEndPosition)(props.$popoverOffset)
  });
});
exports.Body = Body;
Body.displayName = "Body";
var Inner = (0, _index.styled)('div', function (props) {
  return _objectSpread(_objectSpread(_objectSpread({}, (0, _styledComponents.getInnerStyles)(props)), {}, {
    backgroundColor: props.$theme.colors.tooltipBackground,
    paddingTop: props.$theme.sizing.scale300,
    paddingBottom: props.$theme.sizing.scale300,
    paddingLeft: props.$theme.sizing.scale600,
    paddingRight: props.$theme.sizing.scale600
  }, props.$theme.typography.font150), {}, {
    color: props.$theme.colors.tooltipText
  });
});
exports.Inner = Inner;
Inner.displayName = "Inner";
var Arrow = (0, _index.styled)('div', function (props) {
  return _objectSpread(_objectSpread({}, (0, _styledComponents.getArrowStyles)(props)), {}, {
    backgroundColor: props.$theme.colors.tooltipBackground
  });
});
exports.Arrow = Arrow;
Arrow.displayName = "Arrow";