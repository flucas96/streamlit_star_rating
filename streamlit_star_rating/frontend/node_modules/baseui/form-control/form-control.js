"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _overrides = require("../helpers/overrides.js");

var _getBuiId = _interopRequireDefault(require("../utils/get-bui-id.js"));

var _styledComponents = require("./styled-components.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function chooseRenderedHint(caption, error, positive, sharedProps) {
  if (error && typeof error !== 'boolean') {
    return typeof error === 'function' ? error(sharedProps) : error;
  }

  if (positive && typeof positive !== 'boolean') {
    return typeof positive === 'function' ? positive(sharedProps) : positive;
  }

  if (caption) {
    return typeof caption === 'function' ? caption(sharedProps) : caption;
  }

  return null;
}

var FormControl = /*#__PURE__*/function (_React$Component) {
  _inherits(FormControl, _React$Component);

  var _super = _createSuper(FormControl);

  function FormControl() {
    var _this;

    _classCallCheck(this, FormControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      captionId: (0, _getBuiId.default)()
    });

    return _this;
  }

  _createClass(FormControl, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$overrides = _this$props.overrides,
          LabelOverride = _this$props$overrides.Label,
          CaptionOverride = _this$props$overrides.Caption,
          ControlContainerOverride = _this$props$overrides.ControlContainer,
          label = _this$props.label,
          caption = _this$props.caption,
          disabled = _this$props.disabled,
          error = _this$props.error,
          positive = _this$props.positive,
          htmlFor = _this$props.htmlFor,
          children = _this$props.children;
      var onlyChildProps = React.Children.only(children).props;
      var sharedProps = {
        $disabled: !!disabled,
        $error: !!error,
        $positive: !!positive
      };

      var Label = (0, _overrides.getOverride)(LabelOverride) || _styledComponents.Label;

      var Caption = (0, _overrides.getOverride)(CaptionOverride) || _styledComponents.Caption;

      var ControlContainer = (0, _overrides.getOverride)(ControlContainerOverride) || _styledComponents.ControlContainer;

      var hint = chooseRenderedHint(caption, error, positive, sharedProps);

      if (process.env.NODE_ENV !== "production") {
        if (error && positive) {
          // eslint-disable-next-line no-console
          console.warn("[FormControl] `error` and `positive` are both set to `true`. `error` will take precedence but this may not be what you want.");
        }
      }

      return /*#__PURE__*/React.createElement(React.Fragment, null, label && /*#__PURE__*/React.createElement(Label, _extends({
        "data-baseweb": "form-control-label",
        htmlFor: htmlFor || onlyChildProps.id
      }, sharedProps, (0, _overrides.getOverrideProps)(LabelOverride)), typeof label === 'function' ? label(sharedProps) : label), /*#__PURE__*/React.createElement(ControlContainer, _extends({
        "data-baseweb": "form-control-container"
      }, sharedProps, (0, _overrides.getOverrideProps)(ControlContainerOverride)), React.Children.map(children, function (child, index) {
        if (!child) return;
        var key = child.key || String(index);
        return /*#__PURE__*/React.cloneElement(child, {
          key: key,
          'aria-errormessage': error ? _this2.state.captionId : null,
          'aria-describedby': caption || positive ? _this2.state.captionId : null,
          disabled: onlyChildProps.disabled || disabled,
          error: typeof onlyChildProps.error !== 'undefined' ? onlyChildProps.error : error,
          positive: typeof onlyChildProps.positive !== 'undefined' ? onlyChildProps.positive : positive
        });
      }), (caption || error || positive) && /*#__PURE__*/React.createElement(Caption, _extends({
        "data-baseweb": "form-control-caption",
        id: this.state.captionId
      }, sharedProps, (0, _overrides.getOverrideProps)(CaptionOverride)), hint)));
    }
  }]);

  return FormControl;
}(React.Component);

exports.default = FormControl;

_defineProperty(FormControl, "defaultProps", {
  overrides: {},
  label: null,
  caption: null,
  disabled: false
});