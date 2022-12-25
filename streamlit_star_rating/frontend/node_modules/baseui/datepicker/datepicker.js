"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DEFAULT_DATE_FORMAT = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../input/index.js");

var _index2 = require("../popover/index.js");

var _calendar = _interopRequireDefault(require("./calendar.js"));

var _overrides = require("../helpers/overrides.js");

var _i18nInterpolation = _interopRequireDefault(require("../helpers/i18n-interpolation.js"));

var _index3 = require("../locale/index.js");

var _styledComponents = require("./styled-components.js");

var _dateHelpers = _interopRequireDefault(require("./utils/date-helpers.js"));

var _dateFnsAdapter = _interopRequireDefault(require("./utils/date-fns-adapter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

var DEFAULT_DATE_FORMAT = 'yyyy/MM/dd';
exports.DEFAULT_DATE_FORMAT = DEFAULT_DATE_FORMAT;

var Datepicker = /*#__PURE__*/function (_React$Component) {
  _inherits(Datepicker, _React$Component);

  var _super = _createSuper(Datepicker);

  function Datepicker(props) {
    var _this;

    _classCallCheck(this, Datepicker);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "calendar", void 0);

    _defineProperty(_assertThisInitialized(_this), "dateHelpers", void 0);

    _defineProperty(_assertThisInitialized(_this), "onChange", function (data) {
      var isOpen = false;
      var isPseudoFocused = false;
      var calendarFocused = false;
      var nextDate = data.date;

      if (Array.isArray(nextDate) && _this.props.range) {
        if (nextDate.length < 2) {
          isOpen = true;
          isPseudoFocused = true;
          calendarFocused = null;
        } else if (nextDate.length === 2) {
          var _nextDate = nextDate,
              _nextDate2 = _slicedToArray(_nextDate, 2),
              start = _nextDate2[0],
              end = _nextDate2[1];

          if (_this.dateHelpers.isAfter(start, end)) {
            nextDate = [start, start];
          }

          if (_this.state.lastActiveElm) {
            _this.state.lastActiveElm.focus();
          }
        }
      } else if (_this.state.lastActiveElm) {
        _this.state.lastActiveElm.focus();
      } // Time selectors previously caused the calendar popover to close.
      // The check below refrains from closing the popover if only times changed.


      var onlyTimeChanged = function onlyTimeChanged(prev, next) {
        if (!prev || !next) return false;

        var p = _this.dateHelpers.format(prev, 'keyboardDate');

        var n = _this.dateHelpers.format(next, 'keyboardDate');

        if (p === n) {
          return _this.dateHelpers.getHours(prev) !== _this.dateHelpers.getHours(next) || _this.dateHelpers.getMinutes(prev) !== _this.dateHelpers.getMinutes(next);
        }

        return false;
      };

      var prevValue = _this.props.value;

      if (Array.isArray(nextDate) && Array.isArray(prevValue)) {
        if (nextDate.some(function (d, i) {
          return onlyTimeChanged(prevValue[i], d);
        })) {
          isOpen = true;
        }
      } else if (!Array.isArray(nextDate) && !Array.isArray(prevValue)) {
        if (onlyTimeChanged(prevValue, nextDate)) {
          isOpen = true;
        }
      }

      _this.setState(_objectSpread(_objectSpread({
        isOpen: isOpen,
        isPseudoFocused: isPseudoFocused
      }, calendarFocused === null ? {} : {
        calendarFocused: calendarFocused
      }), {}, {
        inputValue: _this.formatDisplayValue(nextDate)
      }));

      _this.props.onChange && _this.props.onChange({
        date: nextDate
      });
    });

    _defineProperty(_assertThisInitialized(_this), "formatDisplayValue", function (date) {
      var _this$props = _this.props,
          displayValueAtRangeIndex = _this$props.displayValueAtRangeIndex,
          formatDisplayValue = _this$props.formatDisplayValue,
          range = _this$props.range;

      var formatString = _this.normalizeDashes(_this.props.formatString);

      if (typeof displayValueAtRangeIndex === 'number') {
        if (process.env.NODE_ENV !== "production") {
          if (!range) {
            console.error('displayValueAtRangeIndex only applies if range');
          }

          if (range && displayValueAtRangeIndex > 1) {
            console.error('displayValueAtRangeIndex value must be 0 or 1');
          }
        }

        if (date && Array.isArray(date)) {
          var value = date[displayValueAtRangeIndex];

          if (formatDisplayValue) {
            return formatDisplayValue(value, formatString);
          }

          return _this.formatDate(value, formatString);
        }
      }

      if (formatDisplayValue) {
        return formatDisplayValue(date, formatString);
      }

      return _this.formatDate(date, formatString);
    });

    _defineProperty(_assertThisInitialized(_this), "open", function () {
      _this.setState({
        isOpen: true,
        isPseudoFocused: true,
        calendarFocused: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      var isPseudoFocused = false;

      _this.setState({
        isOpen: false,
        isPseudoFocused: isPseudoFocused,
        calendarFocused: false
      }, _this.props.onClose);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEsc", function () {
      if (_this.state.lastActiveElm) {
        _this.state.lastActiveElm.focus();
      }

      _this.close();
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputBlur", function () {
      if (!_this.state.isPseudoFocused) {
        _this.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getMask", function () {
      var _this$props2 = _this.props,
          formatString = _this$props2.formatString,
          mask = _this$props2.mask,
          range = _this$props2.range;

      if (mask === null) {
        return null;
      }

      if (mask) {
        return _this.normalizeDashes(mask);
      }

      var normalizedFormatString = _this.normalizeDashes(formatString);

      if (formatString) {
        if (range) {
          return "".concat(normalizedFormatString, " \u2013 ").concat(normalizedFormatString).replace(/[a-z]/gi, '9');
        } else {
          return normalizedFormatString.replace(/[a-z]/gi, '9');
        }
      }

      if (range) {
        return '9999/99/99 – 9999/99/99';
      }

      return '9999/99/99';
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (event) {
      var inputValue = event.currentTarget.value;

      var mask = _this.getMask();

      if (typeof mask === 'string' && inputValue === mask.replace(/9/g, ' ') || inputValue.length === 0) {
        if (_this.props.onChange) {
          if (_this.props.range) {
            _this.props.onChange({
              date: []
            });
          } else {
            _this.props.onChange({
              date: null
            });
          }
        }
      }

      _this.setState({
        inputValue: inputValue
      });

      var formatString = _this.normalizeDashes(_this.props.formatString);

      var parseDateString = function parseDateString(dateString) {
        if (formatString === DEFAULT_DATE_FORMAT) {
          return _this.dateHelpers.parse(dateString, 'slashDate', _this.props.locale);
        }

        return _this.dateHelpers.parseString(dateString, formatString, _this.props.locale);
      };

      if (_this.props.range && typeof _this.props.displayValueAtRangeIndex !== 'number') {
        var _this$normalizeDashes = _this.normalizeDashes(inputValue).split(' – '),
            _this$normalizeDashes2 = _slicedToArray(_this$normalizeDashes, 2),
            left = _this$normalizeDashes2[0],
            right = _this$normalizeDashes2[1];

        var startDate = _this.dateHelpers.date(left);

        var endDate = _this.dateHelpers.date(right);

        if (formatString) {
          startDate = parseDateString(left);
          endDate = parseDateString(right);
        }

        var onChange = _this.props.onChange;

        if (onChange) {
          var datesValid = _this.dateHelpers.isValid(startDate) && _this.dateHelpers.isValid(endDate); // added equal case so that times within the same day can be expressed


          var rangeValid = _this.dateHelpers.isAfter(endDate, startDate) || _this.dateHelpers.isEqual(startDate, endDate);

          if (datesValid && rangeValid) {
            onChange({
              date: [startDate, endDate]
            });
          }
        }
      } else {
        var dateString = _this.normalizeDashes(inputValue);

        var date = _this.dateHelpers.date(dateString);

        var _formatString = _this.props.formatString; // Prevent early parsing of value.
        // Eg 25.12.2 will be transformed to 25.12.0002 formatted from date to string

        if (dateString.replace(/(\s)*/g, '').length < _formatString.replace(/(\s)*/g, '').length) {
          date = null;
        } else {
          date = parseDateString(dateString);
        }

        var _this$props3 = _this.props,
            displayValueAtRangeIndex = _this$props3.displayValueAtRangeIndex,
            _onChange = _this$props3.onChange,
            range = _this$props3.range,
            value = _this$props3.value;

        if (date && _this.dateHelpers.isValid(date) && _onChange) {
          if (range && Array.isArray(value) && typeof displayValueAtRangeIndex === 'number') {
            var _value = _slicedToArray(value, 2),
                _left = _value[0],
                _right = _value[1];

            if (displayValueAtRangeIndex === 0) {
              _left = date;

              if (!_right) {
                _onChange({
                  date: [_left]
                });
              } else {
                if (_this.dateHelpers.isAfter(_right, _left) || _this.dateHelpers.isEqual(_left, _right)) {
                  _onChange({
                    date: [_left, _right]
                  });
                } else {
                  // Is resetting back to previous value appropriate? Invalid range is not
                  // communicated to the user, but if it was not reset the text value would
                  // show one value and date value another. This seems a bit better but clearly
                  // has a downside.
                  _onChange({
                    date: _toConsumableArray(value)
                  });
                }
              }
            } else if (displayValueAtRangeIndex === 1) {
              _right = date;

              if (!_left) {
                // If start value is not defined, set start/end to the same day.
                _onChange({
                  date: [_right, _right]
                });
              } else {
                if (_this.dateHelpers.isAfter(_right, _left) || _this.dateHelpers.isEqual(_left, _right)) {
                  _onChange({
                    date: [_left, _right]
                  });
                } else {
                  // See comment above about resetting dates on invalid range
                  _onChange({
                    date: _toConsumableArray(value)
                  });
                }
              }
            }
          } else {
            _onChange({
              date: date
            });
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (!_this.state.isOpen && event.keyCode === 40) {
        _this.open();
      } else if (_this.state.isOpen && event.key === 'ArrowDown') {
        // next line prevents the page jump on the initial arrowDown
        event.preventDefault();

        _this.focusCalendar();
      } else if (_this.state.isOpen && event.keyCode === 9) {
        _this.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "focusCalendar", function () {
      if (typeof document !== 'undefined') {
        var lastActiveElm = document.activeElement;

        _this.setState({
          calendarFocused: true,
          lastActiveElm: lastActiveElm
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "normalizeDashes", function (inputValue) {
      // replacing both hyphens and em-dashes with en-dashes
      return inputValue.replace(/-/g, '–').replace(/—/g, '–');
    });

    _this.dateHelpers = new _dateHelpers.default(props.adapter);
    _this.state = {
      calendarFocused: false,
      isOpen: false,
      isPseudoFocused: false,
      lastActiveElm: null,
      inputValue: _this.formatDisplayValue(props.value) || ''
    };
    return _this;
  }

  _createClass(Datepicker, [{
    key: "formatDate",
    value: function formatDate(date, formatString) {
      var _this2 = this;

      var format = function format(date) {
        if (formatString === DEFAULT_DATE_FORMAT) {
          return _this2.dateHelpers.format(date, 'slashDate', _this2.props.locale);
        }

        return _this2.dateHelpers.formatDate(date, formatString, _this2.props.locale);
      };

      if (!date) {
        return '';
      } else if (Array.isArray(date) && !date[0] && !date[1]) {
        return '';
      } else if (Array.isArray(date)) {
        return date.map(function (day) {
          return format(day);
        }).join(' – ');
      } else {
        return format(date);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.value !== this.props.value) {
        this.setState({
          inputValue: this.formatDisplayValue(this.props.value)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props$overrides = this.props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides;

      var _getOverrides = (0, _overrides.getOverrides)(overrides.Input, _index.MaskedInput),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          InputComponent = _getOverrides2[0],
          inputProps = _getOverrides2[1];

      var _getOverrides3 = (0, _overrides.getOverrides)(overrides.Popover, _index2.Popover),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          PopoverComponent = _getOverrides4[0],
          popoverProps = _getOverrides4[1];

      var _getOverrides5 = (0, _overrides.getOverrides)(overrides.InputWrapper, _styledComponents.StyledInputWrapper),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          InputWrapper = _getOverrides6[0],
          inputWrapperProps = _getOverrides6[1];

      var placeholder = this.props.placeholder || (this.props.range ? 'YYYY/MM/DD – YYYY/MM/DD' : 'YYYY/MM/DD');
      return /*#__PURE__*/React.createElement(_index3.LocaleContext.Consumer, null, function (locale) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PopoverComponent, _extends({
          focusLock: false,
          mountNode: _this3.props.mountNode,
          placement: _index2.PLACEMENT.bottom,
          isOpen: _this3.state.isOpen,
          onClickOutside: _this3.close,
          onEsc: _this3.handleEsc,
          content: /*#__PURE__*/React.createElement(_calendar.default, _extends({
            adapter: _this3.props.adapter,
            autoFocusCalendar: _this3.state.calendarFocused,
            trapTabbing: true,
            value: _this3.props.value
          }, _this3.props, {
            onChange: _this3.onChange
          }))
        }, popoverProps), /*#__PURE__*/React.createElement(InputWrapper, inputWrapperProps, /*#__PURE__*/React.createElement(InputComponent, _extends({
          "aria-disabled": _this3.props.disabled,
          "aria-label": _this3.props['aria-label'] || (_this3.props.range ? locale.datepicker.ariaLabelRange : locale.datepicker.ariaLabel),
          error: _this3.props.error,
          positive: _this3.props.positive,
          "aria-describedby": _this3.props['aria-describedby'],
          "aria-labelledby": _this3.props['aria-labelledby'],
          "aria-required": _this3.props.required || null,
          disabled: _this3.props.disabled,
          size: _this3.props.size,
          value: _this3.state.inputValue,
          onFocus: _this3.open,
          onBlur: _this3.handleInputBlur,
          onKeyDown: _this3.handleKeyDown,
          onChange: _this3.handleInputChange,
          placeholder: placeholder,
          mask: _this3.getMask(),
          required: _this3.props.required,
          clearable: _this3.props.clearable
        }, inputProps)))), /*#__PURE__*/React.createElement("p", {
          id: _this3.props['aria-describedby'],
          style: {
            position: 'fixed',
            width: '0px',
            height: '0px',
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            padding: 0,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            clipPath: 'inset(100%)'
          }
        }, locale.datepicker.screenReaderMessageInput), /*#__PURE__*/React.createElement("p", {
          "aria-live": "assertive",
          style: {
            position: 'fixed',
            width: '0px',
            height: '0px',
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            padding: 0,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            clipPath: 'inset(100%)'
          }
        }, // No date selected
        !_this3.props.value || Array.isArray(_this3.props.value) && !_this3.props.value.length ? '' : // Date selected in a non-range picker
        !Array.isArray(_this3.props.value) ? (0, _i18nInterpolation.default)(locale.datepicker.selectedDate, {
          date: _this3.state.inputValue || ''
        }) : // Start and end dates are selected in a range picker
        _this3.props.value.length > 1 ? (0, _i18nInterpolation.default)(locale.datepicker.selectedDateRange, {
          startDate: _this3.formatDisplayValue(_this3.props.value[0]),
          endDate: _this3.formatDisplayValue( // $FlowFixMe
          _this3.props.value[1])
        }) : // A single date selected in a range picker
        "".concat((0, _i18nInterpolation.default)(locale.datepicker.selectedDate, {
          date: _this3.formatDisplayValue(_this3.props.value[0])
        }), " ").concat(locale.datepicker.selectSecondDatePrompt)));
      });
    }
  }]);

  return Datepicker;
}(React.Component);

exports.default = Datepicker;

_defineProperty(Datepicker, "defaultProps", {
  'aria-describedby': 'datepicker--screenreader--message--input',
  value: null,
  formatString: DEFAULT_DATE_FORMAT,
  adapter: _dateFnsAdapter.default
});