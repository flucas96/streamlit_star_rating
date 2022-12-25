"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BaseFlexGrid = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../block/index.js");

var _reactHelpers = require("../helpers/react-helpers.js");

var _overrides = require("../helpers/overrides.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BaseFlexGrid = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var display = _ref.display,
      flexWrap = _ref.flexWrap,
      restProps = _objectWithoutProperties(_ref, ["display", "flexWrap"]);

  return /*#__PURE__*/React.createElement(_index.Block, _extends({
    display: display || 'flex',
    flexWrap: flexWrap || flexWrap === false ? flexWrap : true,
    "data-baseweb": "flex-grid"
  }, restProps, {
    ref: ref
  }));
});
exports.BaseFlexGrid = BaseFlexGrid;

var FlexGrid = function FlexGrid(_ref2) {
  var forwardedRef = _ref2.forwardedRef,
      children = _ref2.children,
      as = _ref2.as,
      overrides = _ref2.overrides,
      flexGridColumnCount = _ref2.flexGridColumnCount,
      flexGridColumnGap = _ref2.flexGridColumnGap,
      flexGridRowGap = _ref2.flexGridRowGap,
      restProps = _objectWithoutProperties(_ref2, ["forwardedRef", "children", "as", "overrides", "flexGridColumnCount", "flexGridColumnGap", "flexGridRowGap"]);

  var _getOverrides = (0, _overrides.getOverrides)(overrides && overrides.Block, BaseFlexGrid),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      FlexGrid = _getOverrides2[0],
      flexGridProps = _getOverrides2[1];

  return /*#__PURE__*/React.createElement(FlexGrid // coerced to any because because of how react components are typed.
  // cannot guarantee an html element
  // eslint-disable-next-line flowtype/no-weak-types
  , _extends({
    ref: forwardedRef,
    as: as
  }, restProps, flexGridProps), // flatten fragments so FlexGrid correctly iterates over fragments’ children
  (0, _reactHelpers.flattenFragments)(children).map(function (child, flexGridItemIndex, _ref3) {
    var flexGridItemCount = _ref3.length;
    // $FlowFixMe https://github.com/facebook/flow/issues/4864
    return /*#__PURE__*/React.cloneElement(child, {
      flexGridColumnCount: flexGridColumnCount,
      flexGridColumnGap: flexGridColumnGap,
      flexGridRowGap: flexGridRowGap,
      flexGridItemIndex: flexGridItemIndex,
      flexGridItemCount: flexGridItemCount
    });
  }));
};

var FlexGridComponent = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(FlexGrid, _extends({}, props, {
    forwardedRef: ref
  }));
});
FlexGridComponent.displayName = 'FlexGrid';
var _default = FlexGridComponent;
exports.default = _default;