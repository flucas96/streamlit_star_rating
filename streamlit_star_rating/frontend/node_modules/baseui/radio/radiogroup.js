"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _overrides = require("../helpers/overrides.js");

var _styledComponents = require("./styled-components.js");

var _focusVisible = require("../utils/focusVisible.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var StatelessRadioGroup = /*#__PURE__*/function (_React$Component) {
  _inherits(StatelessRadioGroup, _React$Component);

  var _super = _createSuper(StatelessRadioGroup);

  function StatelessRadioGroup() {
    var _this;

    _classCallCheck(this, StatelessRadioGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocusVisible: false,
      focusedRadioIndex: -1
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event, index) {
      if ((0, _focusVisible.isFocusVisible)(event)) {
        _this.setState({
          isFocusVisible: true
        });
      }

      _this.setState({
        focusedRadioIndex: index
      });

      _this.props.onFocus && _this.props.onFocus(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event, index) {
      if (_this.state.isFocusVisible !== false) {
        _this.setState({
          isFocusVisible: false
        });
      }

      _this.setState({
        focusedRadioIndex: -1
      });

      _this.props.onBlur && _this.props.onBlur(event);
    });

    return _this;
  }

  _createClass(StatelessRadioGroup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (process.env.NODE_ENV !== "production" && this.props.isError) {
        console.warn('baseui:Radio Property "isError" will be removed in the next major version. Use "error" property instead.');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$overrides = this.props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides;

      var _getOverrides = (0, _overrides.getOverrides)(overrides.RadioGroupRoot, _styledComponents.RadioGroupRoot),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          RadioGroupRoot = _getOverrides2[0],
          radioGroupRootProps = _getOverrides2[1];

      if (process.env.NODE_ENV !== "production") {
        var overrideKeys = Object.keys(overrides); // TODO(v11)

        if (overrideKeys.length && !overrideKeys.includes('RadioGroupRoot')) {
          // eslint-disable-next-line no-console
          console.warn("All overrides beside 'RadioGroupRoot' will be deprecated in the next major version update.\n          Pass other overrides to the 'Radio' children instead.\n        ");
        }
      }

      return /*#__PURE__*/React.createElement(RadioGroupRoot, _extends({
        id: this.props.id,
        role: "radiogroup",
        "aria-describedby": this.props['aria-describedby'],
        "aria-errormessage": this.props['aria-errormessage'],
        "aria-invalid": this.props.error || this.props.isError || null,
        "aria-label": this.props['aria-label'],
        "aria-labelledby": this.props['aria-labelledby'],
        $align: this.props.align,
        $disabled: this.props.disabled,
        $isError: this.props.error || this.props.isError,
        $error: this.props.error || this.props.isError,
        $required: this.props.required
      }, radioGroupRootProps), React.Children.map(this.props.children, function (child, index) {
        if (! /*#__PURE__*/React.isValidElement(child)) {
          return null;
        }

        var checked = _this2.props.value === child.props.value;
        return /*#__PURE__*/React.cloneElement(child, {
          align: _this2.props.align,
          autoFocus: _this2.props.autoFocus,
          checked: checked,
          disabled: _this2.props.disabled || child.props.disabled,
          isError: _this2.props.isError,
          error: _this2.props.error,
          isFocused: _this2.state.focusedRadioIndex === index,
          isFocusVisible: _this2.state.isFocusVisible,
          tabIndex: index === 0 && !_this2.props.value || checked ? '0' : '-1',
          labelPlacement: _this2.props.labelPlacement,
          name: _this2.props.name,
          onBlur: function onBlur(e) {
            return _this2.handleBlur(e, index);
          },
          onFocus: function onFocus(e) {
            return _this2.handleFocus(e, index);
          },
          onChange: _this2.props.onChange,
          onMouseEnter: _this2.props.onMouseEnter,
          onMouseLeave: _this2.props.onMouseLeave,
          // will need to remove overrides pass-through on next major version
          overrides: _objectSpread(_objectSpread({}, _this2.props.overrides), child.props.overrides)
        });
      }));
    }
  }]);

  return StatelessRadioGroup;
}(React.Component);

_defineProperty(StatelessRadioGroup, "defaultProps", {
  name: '',
  value: '',
  disabled: false,
  autoFocus: false,
  labelPlacement: 'right',
  align: 'vertical',
  isError: false,
  error: false,
  required: false,
  onChange: function onChange() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  overrides: {}
});

var _default = StatelessRadioGroup;
exports.default = _default;