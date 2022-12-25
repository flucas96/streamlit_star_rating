function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
import React, { useState } from 'react';
import { StyledRoot, StyledFlagContainer, StyledCountrySelectDropdownListItem as DefaultListItem, StyledCountrySelectDropdownFlagColumn as DefaultFlagColumn, StyledCountrySelectDropdownNameColumn as DefaultNameColumn, StyledCountrySelectDropdownDialcodeColumn as DefaultDialcodeColumn } from './styled-components.js';
import { SingleSelect as DefaultSelect } from '../select/index.js';
import { PLACEMENT } from '../popover/index.js';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
import defaultProps from './default-props.js';
import { iso2FlagEmoji } from './utils.js';
CountryPicker.defaultProps = {
  disabled: defaultProps.disabled,
  inputRef: {
    current: null
  },
  maxDropdownHeight: defaultProps.maxDropdownHeight,
  maxDropdownWidth: defaultProps.maxDropdownWidth,
  overrides: {},
  size: defaultProps.size,
  error: defaultProps.error,
  positive: defaultProps.positive,
  required: defaultProps.required
};
var DropdownListItem = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ["children"]);

  return /*#__PURE__*/React.createElement(DefaultListItem, _extends({
    ref: ref
  }, rest), props.children);
});

function DropdownOptionContent(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, props.children);
}

export default function CountryPicker(props) {
  var country = props.country,
      disabled = props.disabled,
      error = props.error,
      inputRef = props.inputRef,
      maxDropdownHeight = props.maxDropdownHeight,
      maxDropdownWidth = props.maxDropdownWidth,
      mapIsoToLabel = props.mapIsoToLabel,
      onCountryChange = props.onCountryChange,
      overrides = props.overrides,
      positive = props.positive,
      required = props.required,
      size = props.size;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      resetScrollIndex = _useState2[0],
      setResetScrollIndex = _useState2[1];

  var sharedProps = {
    $disabled: disabled,
    $error: error,
    $positive: positive,
    $required: required,
    $size: size
  };
  var options = Object.values(props.countries); // $FlowFixMe

  var scrollIndex = options.findIndex(function (opt) {
    return opt.id === country.id;
  });
  var baseSelectOverrides = {
    Root: {
      component: StyledRoot
    },
    Input: {
      style: {
        width: 0
      },
      props: {
        'aria-label': 'Select country'
      }
    },
    IconsContainer: {
      style: {
        paddingRight: '0'
      }
    },
    SingleValue: {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    },
    StatefulMenu: {
      props: {
        stateReducer: function stateReducer(type, nextState) {
          var next = _objectSpread(_objectSpread({}, nextState), {}, {
            highlightedIndex: resetScrollIndex ? 0 : nextState.highlightedIndex
          });

          setResetScrollIndex(false);
          return next;
        },
        initialState: {
          isFocused: true,
          highlightedIndex: scrollIndex
        }
      }
    },
    DropdownContainer: {
      style: {
        width: maxDropdownWidth,
        maxWidth: 'calc(100vw - 10px)'
      }
    },
    Dropdown: {
      props: {
        $country: country,
        $maxDropdownHeight: maxDropdownHeight,
        $mapIsoToLabel: mapIsoToLabel,
        $overrides: {
          CountrySelectDropdown: overrides.CountrySelectDropdown,
          CountrySelectDropdownListItem: overrides.CountrySelectDropdownListItem,
          CountrySelectDropdownFlagColumn: overrides.CountrySelectDropdownFlagColumn,
          CountrySelectDropdownNameColumn: overrides.CountrySelectDropdownNameColumn,
          CountrySelectDropdownDialcodeColumn: overrides.CountrySelectDropdownDialcodeColumn,
          FlagContainer: overrides.FlagContainer
        }
      }
    },
    DropdownListItem: {
      component: DropdownListItem
    },
    OptionContent: {
      component: DropdownOptionContent
    },
    Popover: {
      props: {
        focusLock: false,
        placement: PLACEMENT.bottomLeft
      }
    }
  };

  var _getOverrides = getOverrides(overrides.CountrySelect, DefaultSelect),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      Select = _getOverrides2[0],
      selectProps = _getOverrides2[1]; // $FlowFixMe


  var selectOverrides = mergeOverrides(baseSelectOverrides, {
    Dropdown: overrides.CountrySelectDropdown,
    DropdownListItem: overrides.CountrySelectDropdownListItem
  }); // $FlowFixMe

  selectProps.overrides = mergeOverrides(selectOverrides, // $FlowFixMe
  selectProps.overrides);

  var _getOverrides3 = getOverrides(overrides.CountrySelectDropdownFlagColumn, DefaultFlagColumn),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      FlagColumn = _getOverrides4[0],
      flagColumnProps = _getOverrides4[1];

  var _getOverrides5 = getOverrides(overrides.FlagContainer, StyledFlagContainer),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      FlagContainer = _getOverrides6[0],
      flagContainerProps = _getOverrides6[1];

  var _getOverrides7 = getOverrides(overrides.CountrySelectDropdownNameColumn, DefaultNameColumn),
      _getOverrides8 = _slicedToArray(_getOverrides7, 2),
      NameColumn = _getOverrides8[0],
      nameColumnProps = _getOverrides8[1];

  var _getOverrides9 = getOverrides(overrides.CountrySelectDropdownDialcodeColumn, DefaultDialcodeColumn),
      _getOverrides10 = _slicedToArray(_getOverrides9, 2),
      Dialcode = _getOverrides10[0],
      dialcodeProps = _getOverrides10[1];

  return /*#__PURE__*/React.createElement(Select, _extends({
    clearable: false,
    disabled: disabled,
    getOptionLabel: function getOptionLabel(_ref) {
      var option = _ref.option,
          optionState = _ref.optionState;
      var iso = option.id;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FlagColumn, flagColumnProps, /*#__PURE__*/React.createElement(FlagContainer, _extends({
        $iso: iso,
        "data-iso": iso
      }, flagContainerProps), iso2FlagEmoji(iso))), /*#__PURE__*/React.createElement(NameColumn, nameColumnProps, mapIsoToLabel ? mapIsoToLabel(iso) : option.label), /*#__PURE__*/React.createElement(Dialcode, dialcodeProps, option.dialCode));
    },
    getValueLabel: function getValueLabel(value) {
      var iso = value.option.id;
      return /*#__PURE__*/React.createElement(FlagContainer, _extends({
        $iso: iso,
        "data-iso": iso
      }, sharedProps, flagContainerProps), iso2FlagEmoji(iso));
    },
    error: error,
    maxDropdownHeight: maxDropdownHeight,
    onChange: function onChange(event) {
      if (typeof onCountryChange === 'function') {
        onCountryChange(event);
      } else if (process.env.NODE_ENV !== "production") {
        console.warn('CountryPicker component is controlled (or stateless) ' + 'and requires an `onCountryChange` handler to be passed in ' + 'that handles the `country` prop value update.');
      } // After choosing a country, shift focus to the text input


      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
    },
    options: options,
    positive: positive,
    required: required,
    size: size,
    value: [country],
    onInputChange: function onInputChange() {
      setResetScrollIndex(true);
    }
  }, selectProps));
}