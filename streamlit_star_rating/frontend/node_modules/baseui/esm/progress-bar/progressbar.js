function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { SIZE } from './constants.js';
import { StyledRoot, StyledBarContainer, StyledBar, StyledLabel, StyledBarProgress, StyledInfiniteBar } from './styled-components.js';

var ProgressBar = /*#__PURE__*/function (_React$Component) {
  _inherits(ProgressBar, _React$Component);

  var _super = _createSuper(ProgressBar);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    return _super.apply(this, arguments);
  }

  _createClass(ProgressBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // TODO(v11): remove warning when switching default Spinner
      if (process.env.NODE_ENV !== "production") {
        if (this.props.errorMessage) {
          console.warn('baseui:ProgressBar The `errorMessage` prop is deprecated in WAI-ARIA v1.2.');
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ariaLabel = _this$props.ariaLabel,
          _this$props$overrides = _this$props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides,
          getProgressLabel = _this$props.getProgressLabel,
          value = _this$props.value,
          size = _this$props.size,
          steps = _this$props.steps,
          successValue = _this$props.successValue,
          showLabel = _this$props.showLabel,
          infinite = _this$props.infinite,
          errorMessage = _this$props.errorMessage;

      var _getOverrides = getOverrides(overrides.Root, StyledRoot),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Root = _getOverrides2[0],
          rootProps = _getOverrides2[1];

      var _getOverrides3 = getOverrides(overrides.BarContainer, StyledBarContainer),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          BarContainer = _getOverrides4[0],
          barContainerProps = _getOverrides4[1];

      var _getOverrides5 = getOverrides(overrides.Bar, StyledBar),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          Bar = _getOverrides6[0],
          barProps = _getOverrides6[1];

      var _getOverrides7 = getOverrides(overrides.BarProgress, StyledBarProgress),
          _getOverrides8 = _slicedToArray(_getOverrides7, 2),
          BarProgress = _getOverrides8[0],
          barProgressProps = _getOverrides8[1];

      var _getOverrides9 = getOverrides(overrides.Label, StyledLabel),
          _getOverrides10 = _slicedToArray(_getOverrides9, 2),
          Label = _getOverrides10[0],
          labelProps = _getOverrides10[1];

      var _getOverrides11 = getOverrides(overrides.InfiniteBar, StyledInfiniteBar),
          _getOverrides12 = _slicedToArray(_getOverrides11, 2),
          InfiniteBar = _getOverrides12[0],
          infiniteBarProps = _getOverrides12[1];

      var sharedProps = {
        $infinite: infinite,
        $size: size,
        $steps: steps,
        $successValue: successValue,
        $value: value
      };

      function renderProgressBar() {
        var children = [];

        for (var i = 0; i < steps; i++) {
          children.push( /*#__PURE__*/React.createElement(Bar, _extends({
            key: i
          }, sharedProps, barProps), /*#__PURE__*/React.createElement(BarProgress, _extends({
            $index: i
          }, sharedProps, barProgressProps))));
        }

        return children;
      }

      return (
        /*#__PURE__*/
        // eslint-disable-next-line jsx-a11y/role-supports-aria-props
        React.createElement(Root, _extends({
          "data-baseweb": "progress-bar",
          role: "progressbar",
          "aria-label": ariaLabel || getProgressLabel(value, successValue),
          "aria-valuenow": infinite ? null : value,
          "aria-valuemin": infinite ? null : 0,
          "aria-valuemax": infinite ? null : successValue,
          "aria-invalid": errorMessage ? true : null,
          "aria-errormessage": errorMessage
        }, sharedProps, rootProps), /*#__PURE__*/React.createElement(BarContainer, _extends({}, sharedProps, barContainerProps), infinite ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InfiniteBar, _extends({
          $isLeft: true,
          $size: sharedProps.$size
        }, infiniteBarProps)), /*#__PURE__*/React.createElement(InfiniteBar, _extends({
          $size: sharedProps.$size
        }, infiniteBarProps))) : renderProgressBar()), showLabel && /*#__PURE__*/React.createElement(Label, _extends({}, sharedProps, labelProps), getProgressLabel(value, successValue)))
      );
    }
  }]);

  return ProgressBar;
}(React.Component);

_defineProperty(ProgressBar, "defaultProps", {
  getProgressLabel: function getProgressLabel(value, successValue) {
    return "".concat(Math.round(value / successValue * 100), "% Loaded");
  },
  infinite: false,
  overrides: {},
  showLabel: false,
  size: SIZE.medium,
  steps: 1,
  successValue: 100,
  value: 0
});

export default ProgressBar;