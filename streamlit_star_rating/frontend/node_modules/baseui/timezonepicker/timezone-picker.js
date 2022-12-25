"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("timezone-support/dist/index-1900-2050.js");

var _parseFormat = require("timezone-support/dist/parse-format.js");

var _overrides = require("../helpers/overrides.js");

var _index2 = require("../locale/index.js");

var _index3 = require("../select/index.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var TimezonePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(TimezonePicker, _React$Component);

  var _super = _createSuper(TimezonePicker);

  function TimezonePicker() {
    var _this;

    _classCallCheck(this, TimezonePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      timezones: [],
      value: null
    });

    _defineProperty(_assertThisInitialized(_this), "buildTimezones", function (compareDate) {
      var timezones = (0, _index.listTimeZones)().map(function (zone) {
        var timezone = (0, _index.findTimeZone)(zone);
        var zonedTime = (0, _index.getZonedTime)(compareDate, timezone);
        var formatted = (0, _parseFormat.formatZonedTime)(zonedTime, "z - [".concat(zone, "] ([GMT] Z)")).replace('_', ' ');
        var option = {
          id: zone,
          label: formatted,
          offset: zonedTime.zone.offset
        };

        if (_this.props.mapLabels) {
          option.label = _this.props.mapLabels(option);
        }

        return option;
      }) // Formats 'noisy' timezones without a letter acronym.
      .map(function (option) {
        var rgx = /(^(\+|-)\d+\s- )/;
        var matches = option.label.match(rgx);

        if (matches) {
          var prefix = matches[0];
          option.label = option.label.split(prefix)[1];
        }

        return option;
      }) // Sorts W -> E, prioritizes america. could be more nuanced based on system tz but simple for now
      .sort(function (a, b) {
        var offsetDelta = b.offset - a.offset;
        if (offsetDelta !== 0) return offsetDelta;
        if (a.label < b.label) return -1;
        if (a.label > b.label) return 1;
        return 0;
      });
      return timezones;
    });

    return _this;
  }

  _createClass(TimezonePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var timezones = this.buildTimezones(this.props.date || new Date());

      if (typeof document !== 'undefined') {
        if (!this.props.value) {
          var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
          this.setState({
            timezones: timezones,
            value: tz
          });
          var option = timezones.find(function (o) {
            return o.id === tz;
          });
          option && this.props.onChange && this.props.onChange(option);
        } else {
          this.setState({
            timezones: timezones
          });
        }
      } else {
        this.setState({
          timezones: timezones
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var prevTime = prevProps.date ? prevProps.date.getTime() : 0;
      var nextTime = this.props.date ? this.props.date.getTime() : 0;

      if (prevTime !== nextTime) {
        var timezones = this.buildTimezones(this.props.date || new Date());
        this.setState({
          timezones: timezones
        });
        var option = timezones.find(function (o) {
          return o.id === _this2.state.value;
        });
        option && this.props.onChange && this.props.onChange(option);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props$overrides = this.props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides;

      var _getOverrides = (0, _overrides.getOverrides)(overrides.Select, _index3.Select),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          OverriddenSelect = _getOverrides2[0],
          selectProps = _getOverrides2[1];

      var selectOverrides = (0, _overrides.mergeOverrides)({
        Dropdown: {
          style: {
            maxHeight: '360px'
          }
        }
      }, // $FlowFixMe
      selectProps.overrides); // $FlowFixMe

      selectProps.overrides = selectOverrides;
      return /*#__PURE__*/React.createElement(_index2.LocaleContext.Consumer, null, function (locale) {
        return /*#__PURE__*/React.createElement(OverriddenSelect, _extends({
          "aria-label": locale.datepicker.timezonePickerAriaLabel,
          options: _this3.state.timezones,
          clearable: false,
          disabled: _this3.props.disabled,
          error: _this3.props.error,
          positive: _this3.props.positive,
          size: _this3.props.size,
          onChange: function onChange(params) {
            if (params.type === 'clear') {
              _this3.setState({
                value: ''
              });

              _this3.props.onChange && _this3.props.onChange(null);
            } else {
              _this3.setState({
                value: params.option.id
              });

              _this3.props.onChange && _this3.props.onChange(params.option);
            }
          },
          value: _this3.props.value || _this3.state.value ? [{
            id: _this3.props.value || _this3.state.value
          }] : null
        }, selectProps));
      });
    }
  }]);

  return TimezonePicker;
}(React.Component);

var _default = TimezonePicker;
exports.default = _default;