"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PhoneInputLite;

var _react = _interopRequireWildcard(require("react"));

var _index = require("../input/index.js");

var _countrySelect = _interopRequireDefault(require("./country-select.js"));

var _overrides = require("../helpers/overrides.js");

var _defaultProps = _interopRequireDefault(require("./default-props.js"));

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var country = _defaultProps.default.country,
    lightDefaultProps = _objectWithoutProperties(_defaultProps.default, ["country"]);

PhoneInputLite.defaultProps = lightDefaultProps;

function PhoneInputLite(props) {
  var ariaLabel = props['aria-label'],
      ariaLabelledBy = props['aria-labelledby'],
      ariaDescribedBy = props['aria-describedby'],
      countries = props.countries,
      country = props.country,
      disabled = props.disabled,
      error = props.error,
      id = props.id,
      mapIsoToLabel = props.mapIsoToLabel,
      maxDropdownHeight = props.maxDropdownHeight,
      maxDropdownWidth = props.maxDropdownWidth,
      name = props.name,
      onTextChange = props.onTextChange,
      onCountryChange = props.onCountryChange,
      overrides = props.overrides,
      placeholder = props.placeholder,
      positive = props.positive,
      required = props.required,
      size = props.size,
      text = props.text,
      restProps = _objectWithoutProperties(props, ["aria-label", "aria-labelledby", "aria-describedby", "countries", "country", "disabled", "error", "id", "mapIsoToLabel", "maxDropdownHeight", "maxDropdownWidth", "name", "onTextChange", "onCountryChange", "overrides", "placeholder", "positive", "required", "size", "text"]);

  var inputRef = (0, _react.useRef)(null);
  var baseOverrides = {
    Input: {
      style: function style(_ref) {
        var sizing = _ref.$theme.sizing;
        return {
          paddingLeft: sizing.scale100
        };
      }
    },
    Before: {
      component: _countrySelect.default,
      props: {
        countries: countries,
        country: country,
        disabled: disabled,
        error: error,
        inputRef: inputRef,
        mapIsoToLabel: mapIsoToLabel,
        maxDropdownHeight: maxDropdownHeight,
        maxDropdownWidth: maxDropdownWidth,
        onCountryChange: onCountryChange,
        overrides: overrides,
        positive: positive,
        required: required,
        size: size
      }
    }
  };

  var _getOverrides = (0, _overrides.getOverrides)(overrides.Input, _index.Input),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      Input = _getOverrides2[0],
      inputProps = _getOverrides2[1]; // $FlowFixMe


  inputProps.overrides = (0, _overrides.mergeOverrides)(baseOverrides, inputProps.overrides);
  return /*#__PURE__*/_react.default.createElement(Input, _extends({
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    autoComplete: "tel-national",
    "data-baseweb": "phone-input",
    disabled: disabled,
    error: error,
    id: id,
    inputMode: "tel",
    inputRef: inputRef,
    name: name,
    onChange: onTextChange,
    positive: positive,
    placeholder: placeholder,
    size: size,
    type: "text",
    value: text
  }, restProps, inputProps));
}