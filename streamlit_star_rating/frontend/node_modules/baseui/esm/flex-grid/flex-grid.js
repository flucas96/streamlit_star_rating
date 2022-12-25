function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Block } from '../block/index.js';
import { flattenFragments } from '../helpers/react-helpers.js';
import { getOverrides } from '../helpers/overrides.js';
export var BaseFlexGrid = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var display = _ref.display,
      flexWrap = _ref.flexWrap,
      restProps = _objectWithoutProperties(_ref, ["display", "flexWrap"]);

  return /*#__PURE__*/React.createElement(Block, _extends({
    display: display || 'flex',
    flexWrap: flexWrap || flexWrap === false ? flexWrap : true,
    "data-baseweb": "flex-grid"
  }, restProps, {
    ref: ref
  }));
});

var FlexGrid = function FlexGrid(_ref2) {
  var forwardedRef = _ref2.forwardedRef,
      children = _ref2.children,
      as = _ref2.as,
      overrides = _ref2.overrides,
      flexGridColumnCount = _ref2.flexGridColumnCount,
      flexGridColumnGap = _ref2.flexGridColumnGap,
      flexGridRowGap = _ref2.flexGridRowGap,
      restProps = _objectWithoutProperties(_ref2, ["forwardedRef", "children", "as", "overrides", "flexGridColumnCount", "flexGridColumnGap", "flexGridRowGap"]);

  var _getOverrides = getOverrides(overrides && overrides.Block, BaseFlexGrid),
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
  flattenFragments(children).map(function (child, flexGridItemIndex, _ref3) {
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
export default FlexGridComponent;