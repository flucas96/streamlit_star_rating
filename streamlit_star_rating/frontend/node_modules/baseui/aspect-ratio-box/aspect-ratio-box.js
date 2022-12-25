"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../block/index.js");

var _overrides = require("../helpers/overrides.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var aspectRatioBoxStyle = function aspectRatioBoxStyle(_ref) {
  var $aspectRatio = _ref.$aspectRatio;
  return {
    position: 'relative',
    '::before': {
      content: '""',
      width: '1px',
      marginLeft: '-1px',
      float: 'left',
      height: 0,
      paddingTop: "".concat(100 / $aspectRatio, "%"),
      pointerEvents: 'none'
    },
    '::after': {
      content: '""',
      display: 'table',
      clear: 'both'
    }
  };
};

var AspectRatioBox = function AspectRatioBox(_ref2) {
  var forwardedRef = _ref2.forwardedRef,
      _ref2$aspectRatio = _ref2.aspectRatio,
      aspectRatio = _ref2$aspectRatio === void 0 ? 1 : _ref2$aspectRatio,
      _ref2$overrides = _ref2.overrides,
      overrides = _ref2$overrides === void 0 ? {} : _ref2$overrides,
      restProps = _objectWithoutProperties(_ref2, ["forwardedRef", "aspectRatio", "overrides"]);

  var aspectRatioBoxOverrides = {
    Block: {
      style: aspectRatioBoxStyle
    }
  };
  var blockOverrides = (0, _overrides.mergeOverrides)(aspectRatioBoxOverrides, overrides);
  return /*#__PURE__*/React.createElement(_index.Block // coerced to any because because of how react components are typed.
  // cannot guarantee an html element
  // eslint-disable-next-line flowtype/no-weak-types
  , _extends({
    ref: forwardedRef,
    overrides: blockOverrides,
    $aspectRatio: aspectRatio,
    "data-baseweb": "aspect-ratio-box"
  }, restProps));
};

var AspectRatioBoxComponent = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(AspectRatioBox, _extends({}, props, {
    forwardedRef: ref
  }));
});
AspectRatioBoxComponent.displayName = 'AspectRatioBox';
var _default = AspectRatioBoxComponent;
exports.default = _default;