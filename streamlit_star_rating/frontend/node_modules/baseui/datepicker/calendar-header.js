"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _arrowRight = _interopRequireDefault(require("../icon/arrow-right.js"));

var _arrowLeft = _interopRequireDefault(require("../icon/arrow-left.js"));

var _triangleDown = _interopRequireDefault(require("../icon/triangle-down.js"));

var _dateFnsAdapter = _interopRequireDefault(require("./utils/date-fns-adapter.js"));

var _dateHelpers = _interopRequireDefault(require("./utils/date-helpers.js"));

var _index = require("../menu/index.js");

var _index2 = require("../popover/index.js");

var _index3 = require("../locale/index.js");

var _themeProvider = require("../styles/theme-provider.js");

var _styledComponents = require("./styled-components.js");

var _constants = require("./constants.js");

var _overrides = require("../helpers/overrides.js");

var _focusVisible = require("../utils/focusVisible.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var navBtnStyle = function navBtnStyle(_ref) {
  var $theme = _ref.$theme;
  return {
    cursor: 'pointer'
  };
};

var MIN_YEAR = 2000;
var MAX_YEAR = 2030;
var MIN_MONTH = 0;
var MAX_MONTH = 11;
var DIRECTION = {
  NEXT: 'next',
  PREVIOUS: 'previous'
};

function yearMonthToId(year, month) {
  return "".concat(year, "-").concat(month);
}

function idToYearMonth(id) {
  return id.split('-').map(Number);
}

var CalendarHeader = /*#__PURE__*/function (_React$Component) {
  _inherits(CalendarHeader, _React$Component);

  var _super = _createSuper(CalendarHeader);

  function CalendarHeader(props) {
    var _this;

    _classCallCheck(this, CalendarHeader);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "dateHelpers", void 0);

    _defineProperty(_assertThisInitialized(_this), "items", void 0);

    _defineProperty(_assertThisInitialized(_this), "minYear", void 0);

    _defineProperty(_assertThisInitialized(_this), "maxYear", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      isMonthYearDropdownOpen: false,
      isFocusVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "getDateProp", function () {
      return _this.props.date || _this.dateHelpers.date();
    });

    _defineProperty(_assertThisInitialized(_this), "handleMonthChange", function (_ref2) {
      var value = _ref2.value;

      if (_this.props.onMonthChange) {
        // $FlowFixMe
        _this.props.onMonthChange({
          date: _this.dateHelpers.setMonth(_this.getDateProp(), value[0].id)
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleYearChange", function (_ref3) {
      var value = _ref3.value;

      if (_this.props.onYearChange) {
        // $FlowFixMe
        _this.props.onYearChange({
          date: _this.dateHelpers.setYear(_this.getDateProp(), value[0].id)
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "increaseMonth", function () {
      if (_this.props.onMonthChange) {
        // $FlowFixMe
        _this.props.onMonthChange({
          date: _this.dateHelpers.addMonths(_this.getDateProp(), 1)
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "decreaseMonth", function () {
      if (_this.props.onMonthChange) {
        // $FlowFixMe
        _this.props.onMonthChange({
          date: _this.dateHelpers.subMonths(_this.getDateProp(), 1)
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isMultiMonthHorizontal", function () {
      var _this$props = _this.props,
          monthsShown = _this$props.monthsShown,
          orientation = _this$props.orientation;

      if (!monthsShown) {
        return false;
      }

      return orientation === _constants.ORIENTATION.horizontal && monthsShown > 1;
    });

    _defineProperty(_assertThisInitialized(_this), "isHiddenPaginationButton", function (direction) {
      var _this$props2 = _this.props,
          monthsShown = _this$props2.monthsShown,
          order = _this$props2.order;

      if (monthsShown && _this.isMultiMonthHorizontal()) {
        if (direction === DIRECTION.NEXT) {
          var isLastMonth = order === monthsShown - 1;
          return !isLastMonth;
        } else {
          var isFirstMonth = order === 0;
          return !isFirstMonth;
        }
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      if ((0, _focusVisible.isFocusVisible)(event)) {
        _this.setState({
          isFocusVisible: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      if (_this.state.isFocusVisible !== false) {
        _this.setState({
          isFocusVisible: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderPreviousMonthButton", function (_ref4) {
      var locale = _ref4.locale,
          theme = _ref4.theme;

      var date = _this.getDateProp();

      var _this$props$overrides = _this.props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides;

      var allPrevDaysDisabled = _this.dateHelpers.monthDisabledBefore(date, _this.props);

      var isDisabled = false;

      if (allPrevDaysDisabled) {
        isDisabled = true;
      }

      var nextMonth = _this.dateHelpers.subMonths(date, 1);

      var minYear = _this.props.minDate ? _this.dateHelpers.getYear(_this.props.minDate) : MIN_YEAR;

      if (_this.dateHelpers.getYear(nextMonth) < minYear) {
        isDisabled = true;
      }

      var isHidden = _this.isHiddenPaginationButton(DIRECTION.PREVIOUS);

      if (isHidden) {
        isDisabled = true;
      }

      var _getOverrides = (0, _overrides.getOverrides)(overrides.PrevButton, _styledComponents.StyledPrevButton),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          PrevButton = _getOverrides2[0],
          prevButtonProps = _getOverrides2[1];

      var _getOverrides3 = (0, _overrides.getOverrides)(overrides.PrevButtonIcon, theme.direction === 'rtl' ? _arrowRight.default : _arrowLeft.default),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          PrevButtonIcon = _getOverrides4[0],
          prevButtonIconProps = _getOverrides4[1];

      var clickHandler = _this.decreaseMonth;

      if (allPrevDaysDisabled) {
        clickHandler = null;
      }

      return /*#__PURE__*/React.createElement(PrevButton, _extends({
        "aria-label": locale.datepicker.previousMonth,
        tabIndex: 0,
        onClick: clickHandler,
        disabled: isDisabled,
        $isFocusVisible: _this.state.isFocusVisible,
        type: "button",
        $disabled: isDisabled,
        $order: _this.props.order
      }, prevButtonProps), isHidden ? null : /*#__PURE__*/React.createElement(PrevButtonIcon, _extends({
        size: '24px',
        overrides: {
          Svg: {
            style: navBtnStyle
          }
        }
      }, prevButtonIconProps)));
    });

    _defineProperty(_assertThisInitialized(_this), "renderNextMonthButton", function (_ref5) {
      var locale = _ref5.locale,
          theme = _ref5.theme;

      var date = _this.getDateProp();

      var _this$props$overrides2 = _this.props.overrides,
          overrides = _this$props$overrides2 === void 0 ? {} : _this$props$overrides2;

      var allNextDaysDisabled = _this.dateHelpers.monthDisabledAfter(date, _this.props);

      var isDisabled = false;

      if (allNextDaysDisabled) {
        isDisabled = true;
      }

      var nextMonth = _this.dateHelpers.addMonths(date, 1);

      var maxYear = _this.props.maxDate ? _this.dateHelpers.getYear(_this.props.maxDate) : MAX_YEAR;

      if (_this.dateHelpers.getYear(nextMonth) > maxYear) {
        isDisabled = true;
      }

      var isHidden = _this.isHiddenPaginationButton(DIRECTION.NEXT);

      if (isHidden) {
        isDisabled = true;
      }

      var _getOverrides5 = (0, _overrides.getOverrides)(overrides.NextButton, _styledComponents.StyledNextButton),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          NextButton = _getOverrides6[0],
          nextButtonProps = _getOverrides6[1];

      var _getOverrides7 = (0, _overrides.getOverrides)(overrides.NextButtonIcon, theme.direction === 'rtl' ? _arrowLeft.default : _arrowRight.default),
          _getOverrides8 = _slicedToArray(_getOverrides7, 2),
          NextButtonIcon = _getOverrides8[0],
          nextButtonIconProps = _getOverrides8[1];

      var clickHandler = _this.increaseMonth; // The other option is to always provide a click handler and let customers
      // override its functionality based on the `$allPrevDaysDisabled` prop
      // in a custom NextButton component override
      // Their options would be to render `null` or not apply the components handler
      // on click or do nothing

      if (allNextDaysDisabled) {
        clickHandler = null;
      }

      return /*#__PURE__*/React.createElement(NextButton, _extends({
        "aria-label": locale.datepicker.nextMonth,
        tabIndex: 0,
        onClick: clickHandler,
        disabled: isDisabled,
        type: "button",
        $disabled: isDisabled,
        $isFocusVisible: _this.state.isFocusVisible,
        $order: _this.props.order
      }, nextButtonProps), isHidden ? null : /*#__PURE__*/React.createElement(NextButtonIcon, _extends({
        size: '24px',
        overrides: {
          Svg: {
            style: navBtnStyle
          }
        }
      }, nextButtonIconProps)));
    });

    _defineProperty(_assertThisInitialized(_this), "canArrowsOpenDropdown", function (event) {
      if (!_this.state.isMonthYearDropdownOpen) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
          return true;
        }
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "renderMonthYearDropdown", function () {
      var date = _this.getDateProp();

      var _this$props3 = _this.props,
          locale = _this$props3.locale,
          maxDate = _this$props3.maxDate,
          minDate = _this$props3.minDate,
          _this$props3$override = _this$props3.overrides,
          overrides = _this$props3$override === void 0 ? {} : _this$props3$override;

      var _getOverrides9 = (0, _overrides.getOverrides)(overrides.MonthYearSelectButton, _styledComponents.StyledMonthYearSelectButton),
          _getOverrides10 = _slicedToArray(_getOverrides9, 2),
          MonthYearSelectButton = _getOverrides10[0],
          monthYearSelectButtonProps = _getOverrides10[1];

      var _getOverrides11 = (0, _overrides.getOverrides)(overrides.MonthYearSelectIconContainer, _styledComponents.StyledMonthYearSelectIconContainer),
          _getOverrides12 = _slicedToArray(_getOverrides11, 2),
          MonthYearSelectIconContainer = _getOverrides12[0],
          monthYearSelectIconContainerProps = _getOverrides12[1];

      var _getOverrides13 = (0, _overrides.getOverrides)(overrides.MonthYearSelectPopover, _index2.Popover),
          _getOverrides14 = _slicedToArray(_getOverrides13, 2),
          OverriddenPopover = _getOverrides14[0],
          popoverProps = _getOverrides14[1];

      var _getOverrides15 = (0, _overrides.getOverrides)(overrides.MonthYearSelectStatefulMenu, _index.StatefulMenu),
          _getOverrides16 = _slicedToArray(_getOverrides15, 2),
          OverriddenStatefulMenu = _getOverrides16[0],
          menuProps = _getOverrides16[1];

      var menuOverrides = (0, _overrides.mergeOverrides)({
        List: {
          style: {
            height: 'auto',
            maxHeight: '257px'
          }
        }
      }, // $FlowFixMe
      menuProps && menuProps.overrides); // $FlowFixMe

      menuProps.overrides = menuOverrides;
      var defaultMonths = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      var maxYear = maxDate ? _this.dateHelpers.getYear(maxDate) : MAX_YEAR;
      var minYear = minDate ? _this.dateHelpers.getYear(minDate) : MIN_YEAR;
      var maxDateMonth = maxDate ? _this.dateHelpers.getMonth(maxDate) : MAX_MONTH; // Generates array like [0,1,.... maxDateMonth]

      var maxYearMonths = Array.from({
        length: maxDateMonth + 1
      }, function (x, i) {
        return i;
      });
      var minDateMonth = minDate ? _this.dateHelpers.getMonth(minDate) : MIN_MONTH; // Generates array like [minDateMonth, ...., 10, 11]

      var minYearMonths = Array.from({
        length: 12 - minDateMonth
      }, function (x, i) {
        return i + minDateMonth;
      });

      if (_this.maxYear !== maxYear || _this.minYear !== minYear) {
        _this.maxYear = maxYear;
        _this.minYear = minYear;
        _this.items = [];

        var _loop = function _loop(i) {
          var months = void 0;

          if (i === minYear && i === maxYear) {
            months = maxYearMonths.filter(function (month) {
              return minYearMonths.includes(month);
            });
          } else if (i === minYear) {
            months = minYearMonths;
          } else if (i === maxYear) {
            months = maxYearMonths;
          } else {
            months = defaultMonths;
          }

          months.forEach(function (month) {
            _this.items.push({
              id: yearMonthToId(i, month),
              label: "".concat(_this.dateHelpers.getMonthInLocale(month, locale), " ").concat(i)
            });
          });
        };

        for (var i = minYear; i <= maxYear; i++) {
          _loop(i);
        }
      }

      var initialIndex = _this.items.findIndex(function (item) {
        return item.id === yearMonthToId(_this.dateHelpers.getYear(date), _this.dateHelpers.getMonth(date));
      });

      var monthYearTitle = "".concat(_this.dateHelpers.getMonthInLocale(_this.dateHelpers.getMonth(date), locale), " ").concat(_this.dateHelpers.getYear(date));
      return _this.isMultiMonthHorizontal() ? /*#__PURE__*/React.createElement("div", null, monthYearTitle) : /*#__PURE__*/React.createElement(OverriddenPopover, _extends({
        placement: "bottom",
        autoFocus: true,
        focusLock: true,
        isOpen: _this.state.isMonthYearDropdownOpen,
        onClick: function onClick() {
          _this.setState(function (prev) {
            return {
              isMonthYearDropdownOpen: !prev.isMonthYearDropdownOpen
            };
          });
        },
        onClickOutside: function onClickOutside() {
          return _this.setState({
            isMonthYearDropdownOpen: false
          });
        },
        onEsc: function onEsc() {
          return _this.setState({
            isMonthYearDropdownOpen: false
          });
        },
        content: function content() {
          return /*#__PURE__*/React.createElement(OverriddenStatefulMenu, _extends({
            initialState: {
              highlightedIndex: initialIndex,
              isFocused: true
            },
            items: _this.items,
            onItemSelect: function onItemSelect(_ref6) {
              var item = _ref6.item,
                  event = _ref6.event;
              event.preventDefault();

              var _idToYearMonth = idToYearMonth(item.id),
                  _idToYearMonth2 = _slicedToArray(_idToYearMonth, 2),
                  year = _idToYearMonth2[0],
                  month = _idToYearMonth2[1];

              var updatedDate = _this.dateHelpers.set(date, {
                year: year,
                month: month
              });

              _this.props.onMonthChange && _this.props.onMonthChange({
                date: updatedDate
              });
              _this.props.onYearChange && _this.props.onYearChange({
                date: updatedDate
              });

              _this.setState({
                isMonthYearDropdownOpen: false
              });
            }
          }, menuProps));
        }
      }, popoverProps), /*#__PURE__*/React.createElement(MonthYearSelectButton, _extends({
        "aria-live": "polite",
        type: "button",
        $isFocusVisible: _this.state.isFocusVisible,
        onKeyUp: function onKeyUp(event) {
          if (_this.canArrowsOpenDropdown(event)) {
            _this.setState({
              isMonthYearDropdownOpen: true
            });
          }
        },
        onKeyDown: function onKeyDown(event) {
          if (_this.canArrowsOpenDropdown(event)) {
            // disables page scroll
            event.preventDefault();
          }

          if (event.key === 'Tab') {
            _this.setState({
              isMonthYearDropdownOpen: false
            });
          }
        }
      }, monthYearSelectButtonProps), monthYearTitle, /*#__PURE__*/React.createElement(MonthYearSelectIconContainer, monthYearSelectIconContainerProps, /*#__PURE__*/React.createElement(_triangleDown.default, {
        title: "",
        overrides: {
          Svg: {
            props: {
              role: 'presentation'
            }
          }
        }
      }))));
    });

    _this.dateHelpers = new _dateHelpers.default(props.adapter);
    _this.items = [];
    return _this;
  }

  _createClass(CalendarHeader, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$overrides3 = this.props.overrides,
          overrides = _this$props$overrides3 === void 0 ? {} : _this$props$overrides3;

      var _getOverrides17 = (0, _overrides.getOverrides)(overrides.CalendarHeader, _styledComponents.StyledCalendarHeader),
          _getOverrides18 = _slicedToArray(_getOverrides17, 2),
          _CalendarHeader = _getOverrides18[0],
          calendarHeaderProps = _getOverrides18[1];

      var _getOverrides19 = (0, _overrides.getOverrides)(overrides.MonthHeader, _styledComponents.StyledMonthHeader),
          _getOverrides20 = _slicedToArray(_getOverrides19, 2),
          MonthHeader = _getOverrides20[0],
          monthHeaderProps = _getOverrides20[1];

      var _getOverrides21 = (0, _overrides.getOverrides)(overrides.WeekdayHeader, _styledComponents.StyledWeekdayHeader),
          _getOverrides22 = _slicedToArray(_getOverrides21, 2),
          WeekdayHeader = _getOverrides22[0],
          weekdayHeaderProps = _getOverrides22[1];

      var startOfWeek = this.dateHelpers.getStartOfWeek(this.getDateProp(), this.props.locale);
      return /*#__PURE__*/React.createElement(_themeProvider.ThemeContext.Consumer, null, function (theme) {
        return /*#__PURE__*/React.createElement(_index3.LocaleContext.Consumer, null, function (locale) {
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_CalendarHeader, _extends({}, calendarHeaderProps, {
            onFocus: (0, _focusVisible.forkFocus)(calendarHeaderProps, _this2.handleFocus),
            onBlur: (0, _focusVisible.forkBlur)(calendarHeaderProps, _this2.handleBlur)
          }), _this2.renderPreviousMonthButton({
            locale: locale,
            theme: theme
          }), _this2.renderMonthYearDropdown(), _this2.renderNextMonthButton({
            locale: locale,
            theme: theme
          })), /*#__PURE__*/React.createElement(MonthHeader, _extends({
            role: "presentation"
          }, monthHeaderProps), _constants.WEEKDAYS.map(function (offset) {
            var day = _this2.dateHelpers.addDays(startOfWeek, offset);

            return /*#__PURE__*/React.createElement(WeekdayHeader, _extends({
              key: offset,
              alt: _this2.dateHelpers.getWeekdayInLocale(day, _this2.props.locale)
            }, weekdayHeaderProps), _this2.dateHelpers.getWeekdayMinInLocale(day, _this2.props.locale));
          })));
        });
      });
    }
  }]);

  return CalendarHeader;
}(React.Component);

exports.default = CalendarHeader;

_defineProperty(CalendarHeader, "defaultProps", {
  adapter: _dateFnsAdapter.default,
  locale: null,
  maxDate: null,
  minDate: null,
  onYearChange: function onYearChange() {},
  overrides: {}
});