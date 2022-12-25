"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CountrySelect;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("./styled-components.js");

var _baseCountryPicker = _interopRequireDefault(require("./base-country-picker.js"));

var _index = require("../select/index.js");

var _overrides = require("../helpers/overrides.js");

var _defaultProps = _interopRequireDefault(require("./default-props.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

CountrySelect.defaultProps = {
  disabled: _defaultProps.default.disabled,
  inputRef: {
    current: null
  },
  maxDropdownHeight: _defaultProps.default.maxDropdownHeight,
  maxDropdownWidth: _defaultProps.default.maxDropdownWidth,
  overrides: {},
  size: _defaultProps.default.size,
  error: _defaultProps.default.error,
  positive: _defaultProps.default.positive,
  required: _defaultProps.default.required
};

function CountrySelect(props) {
  var country = props.country,
      disabled = props.disabled,
      error = props.error,
      overrides = props.overrides,
      positive = props.positive,
      required = props.required,
      size = props.size;
  var sharedProps = {
    $disabled: disabled,
    $error: error,
    $positive: positive,
    $required: required,
    $size: size
  };
  var baseSelectOverrides = {
    ControlContainer: {
      style: function style(props) {
        if (!props.$isFocused && !props.$isPseudoFocused) {
          return {
            backgroundColor: 'transparent',
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent'
          };
        }
      }
    }
  };

  var _getOverrides = (0, _overrides.getOverrides)(overrides.CountrySelect, _index.SingleSelect),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      Select = _getOverrides2[0],
      selectProps = _getOverrides2[1]; // $FlowFixMe


  var selectOverrides = (0, _overrides.mergeOverrides)(baseSelectOverrides, {
    Dropdown: overrides.CountrySelectDropdown,
    DropdownListItem: overrides.CountrySelectDropdownListItem
  }); // $FlowFixMe

  selectProps.overrides = (0, _overrides.mergeOverrides)(selectOverrides, // $FlowFixMe
  selectProps.overrides);

  var _getOverrides3 = (0, _overrides.getOverrides)(overrides.CountrySelectContainer, _styledComponents.StyledCountrySelectContainer),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      CountrySelectContainer = _getOverrides4[0],
      countrySelectContainerProps = _getOverrides4[1];

  var _getOverrides5 = (0, _overrides.getOverrides)(overrides.DialCode, _styledComponents.StyledDialCode),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      DialCode = _getOverrides6[0],
      dialCodeProps = _getOverrides6[1];

  return /*#__PURE__*/_react.default.createElement(CountrySelectContainer, countrySelectContainerProps, /*#__PURE__*/_react.default.createElement(_baseCountryPicker.default, _extends({}, props, {
    overrides: _objectSpread(_objectSpread({}, overrides), {}, {
      CountrySelect: {
        component: Select,
        props: selectProps
      }
    })
  })), /*#__PURE__*/_react.default.createElement(DialCode, _extends({}, sharedProps, dialCodeProps), country.dialCode));
}