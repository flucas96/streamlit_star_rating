"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.flexGridItemStyle = exports.getResponsiveValue = exports.flexGridItemMediaQueryStyle = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../block/index.js");

var _overrides = require("../helpers/overrides.js");

var _responsiveHelpers = require("../helpers/responsive-helpers.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var flexGridItemMediaQueryStyle = function flexGridItemMediaQueryStyle(_ref) {
  var _objectSpread2;

  var $theme = _ref.$theme,
      colCount = _ref.flexGridColumnCount,
      flexGridColumnGap = _ref.flexGridColumnGap,
      flexGridRowGap = _ref.flexGridRowGap,
      itemIndex = _ref.flexGridItemIndex,
      itemCount = _ref.flexGridItemCount;
  // 0px needed for calc() to behave properly
  var colGap = $theme.sizing[flexGridColumnGap] || flexGridColumnGap || '0px';
  var colGapQuantity = parseFloat(colGap);
  var colGapUnit = colGap.match(/[a-zA-Z]+/)[0];
  var rowGap = $theme.sizing[flexGridRowGap] || flexGridRowGap || '0px';
  var rowGapQuantity = parseFloat(rowGap);
  var widthCalc = "(100% - ".concat((colCount - 1) * colGapQuantity).concat(colGapUnit, ") / ").concat(colCount);
  var marginDirection = $theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';
  return Object.freeze(_objectSpread((_objectSpread2 = {
    // Subtract .5px to avoid rounding issues on IE/Edge
    // See https://github.com/uber/baseweb/pull/1748
    width: "calc(".concat(widthCalc, " - .5px)")
  }, _defineProperty(_objectSpread2, marginDirection, colGapQuantity && ((itemIndex + 1) % colCount !== 0 ? colGap : 0)), _defineProperty(_objectSpread2, "marginBottom", rowGapQuantity && (~~(itemIndex / colCount) !== ~~((itemCount - 1) / colCount) ? rowGap : 0)), _objectSpread2), itemIndex === itemCount - 1 && (itemIndex + 1) % colCount !== 0 ? _defineProperty({}, marginDirection, "calc(".concat(colCount - itemIndex % colCount - 1, " * (").concat(colGap, " + ").concat(widthCalc, "))")) : {}));
};

exports.flexGridItemMediaQueryStyle = flexGridItemMediaQueryStyle;

var getResponsiveValue = function getResponsiveValue(responsive, i) {
  if (!responsive) {
    return null;
  }

  if (!Array.isArray(responsive)) {
    return responsive;
  }

  return responsive[i] || responsive[responsive.length - 1];
};

exports.getResponsiveValue = getResponsiveValue;

var flexGridItemStyle = function flexGridItemStyle(_ref3) {
  var $flexGridColumnCount = _ref3.$flexGridColumnCount,
      $flexGridColumnGap = _ref3.$flexGridColumnGap,
      $flexGridRowGap = _ref3.$flexGridRowGap,
      $flexGridItemIndex = _ref3.$flexGridItemIndex,
      $flexGridItemCount = _ref3.$flexGridItemCount,
      $theme = _ref3.$theme;
  var baseFlexGridItemStyle = {
    flexGrow: 1
  };
  var mediaQueries = (0, _responsiveHelpers.getMediaQueries)($theme.breakpoints); // Get the length of the longest responsive array

  var maxResponsiveLength = Math.max.apply(Math, _toConsumableArray([$flexGridColumnCount, $flexGridColumnGap, $flexGridRowGap].map(function (r) {
    return Array.isArray(r) ? r.length : 0;
  }))); // No media queries for non-responsive FlexGrids

  if (maxResponsiveLength < 2) {
    return _objectSpread(_objectSpread({}, baseFlexGridItemStyle), flexGridItemMediaQueryStyle({
      $theme: $theme,
      flexGridColumnCount: getResponsiveValue($flexGridColumnCount, 0) || 1,
      flexGridColumnGap: getResponsiveValue($flexGridColumnGap, 0) || 0,
      flexGridRowGap: getResponsiveValue($flexGridRowGap, 0) || 0,
      flexGridItemIndex: $flexGridItemIndex || 0,
      flexGridItemCount: $flexGridItemCount || 1
    }));
  } // Generate style by iterating up to maxResponsiveLength for each responsive
  // breakpoint. Will end up with styles for one of the following media queries
  // depending on maxResponsiveLength:
  // - {mobile, small}
  // - {mobile, small, medium}
  // - {mobile, small, medium, large}


  return _toConsumableArray(Array(maxResponsiveLength).keys()).reduce(function (acc, i) {
    var _map = [$flexGridColumnCount, $flexGridColumnGap, $flexGridRowGap].map(function (r) {
      return getResponsiveValue(r, i);
    }),
        _map2 = _slicedToArray(_map, 3),
        flexGridColumnCountValue = _map2[0],
        flexGridColumnGapValue = _map2[1],
        flexGridRowGapValue = _map2[2];

    var mediaQuery = i === 0 ? // Custom media query needed so :nth-child styles don't conflict
    (0, _responsiveHelpers.getMediaQuery)(0) : mediaQueries[i - 1];

    if (mediaQuery) {
      acc[mediaQuery] = flexGridItemMediaQueryStyle({
        $theme: $theme,
        flexGridColumnCount: flexGridColumnCountValue || 1,
        flexGridColumnGap: flexGridColumnGapValue || 0,
        flexGridRowGap: flexGridRowGapValue || 0,
        flexGridItemIndex: $flexGridItemIndex || 0,
        flexGridItemCount: $flexGridItemCount || 1
      });
    }

    return acc;
  }, baseFlexGridItemStyle);
};

exports.flexGridItemStyle = flexGridItemStyle;

var FlexGridItem = function FlexGridItem(_ref4) {
  var forwardedRef = _ref4.forwardedRef,
      children = _ref4.children,
      as = _ref4.as,
      overrides = _ref4.overrides,
      flexGridColumnCount = _ref4.flexGridColumnCount,
      flexGridColumnGap = _ref4.flexGridColumnGap,
      flexGridRowGap = _ref4.flexGridRowGap,
      flexGridItemIndex = _ref4.flexGridItemIndex,
      flexGridItemCount = _ref4.flexGridItemCount,
      restProps = _objectWithoutProperties(_ref4, ["forwardedRef", "children", "as", "overrides", "flexGridColumnCount", "flexGridColumnGap", "flexGridRowGap", "flexGridItemIndex", "flexGridItemCount"]);

  var flexGridItemOverrides = {
    Block: {
      style: flexGridItemStyle
    }
  };
  var blockOverrides = overrides ? (0, _overrides.mergeOverrides)(flexGridItemOverrides, overrides) : flexGridItemOverrides;
  return /*#__PURE__*/React.createElement(_index.Block // coerced to any because because of how react components are typed.
  // cannot guarantee an html element
  // eslint-disable-next-line flowtype/no-weak-types
  , _extends({
    ref: forwardedRef,
    as: as,
    overrides: blockOverrides,
    $flexGridColumnCount: flexGridColumnCount,
    $flexGridColumnGap: flexGridColumnGap,
    $flexGridRowGap: flexGridRowGap,
    $flexGridItemIndex: flexGridItemIndex,
    $flexGridItemCount: flexGridItemCount,
    "data-baseweb": "flex-grid-item"
  }, restProps), children);
};

var FlexGridItemComponent = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(FlexGridItem, _extends({}, props, {
    forwardedRef: ref
  }));
});
FlexGridItemComponent.displayName = 'FlexGridItem';
var _default = FlexGridItemComponent;
exports.default = _default;