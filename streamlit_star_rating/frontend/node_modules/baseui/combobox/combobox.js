"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../input/index.js");

var _utils = require("../menu/utils.js");

var _overrides = require("../helpers/overrides.js");

var _index2 = require("../popover/index.js");

var _getBuiId = _interopRequireDefault(require("../utils/get-bui-id.js"));

var _styledComponents = require("./styled-components.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ENTER = 13;
var ESCAPE = 27;
var ARROW_UP = 38;
var ARROW_DOWN = 40; // aria 1.1 spec: https://www.w3.org/TR/wai-aria-practices/#combobox
// aria 1.2 spec: https://www.w3.org/TR/wai-aria-practices-1.2/#combobox

function Combobox(props) {
  var _props$autocomplete = props.autocomplete,
      autocomplete = _props$autocomplete === void 0 ? true : _props$autocomplete,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onSubmit = props.onSubmit,
      mapOptionToNode = props.mapOptionToNode,
      mapOptionToString = props.mapOptionToString,
      id = props.id,
      name = props.name,
      options = props.options,
      _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides,
      _props$positive = props.positive,
      positive = _props$positive === void 0 ? false : _props$positive,
      forwardInputRef = props.inputRef,
      _props$size = props.size,
      size = _props$size === void 0 ? _index.SIZE.default : _props$size,
      value = props.value;

  var _React$useState = React.useState(-1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectionIndex = _React$useState2[0],
      setSelectionIndex = _React$useState2[1];

  var _React$useState3 = React.useState(value),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      tempValue = _React$useState4[0],
      setTempValue = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isOpen = _React$useState6[0],
      setIsOpen = _React$useState6[1];

  var rootRef = React.useRef(null);
  var inputRef = React.useRef(null);
  var listboxRef = React.useRef(null);
  var selectedOptionRef = React.useRef(null);
  var activeDescendantId = React.useMemo(function () {
    return (0, _getBuiId.default)();
  }, []);
  var listboxId = React.useMemo(function () {
    return (0, _getBuiId.default)();
  }, []); // Handles case where an application wants to update the value in the input element
  // from outside of the combobox component.

  React.useEffect(function () {
    setTempValue('');
  }, [value]); // Changing the 'selected' option temporarily updates the visible text string
  // in the input element until the user clicks an option or presses enter.

  React.useEffect(function () {
    // If no option selected, display the most recently user-edited string.
    if (selectionIndex === -1) {
      setTempValue(value);
    } else if (selectionIndex > options.length) {
      // Handles the case where option length is variable. After user clicks an
      // option and selection index is not in option bounds, reset it to default.
      setSelectionIndex(-1);
    } else {
      if (autocomplete) {
        var selectedOption = options[selectionIndex];

        if (selectedOption) {
          setTempValue(mapOptionToString(selectedOption));
        }
      }
    }
  }, [options, selectionIndex]);
  React.useEffect(function () {
    if (isOpen && selectedOptionRef.current && listboxRef.current) {
      (0, _utils.scrollItemIntoView)(selectedOptionRef.current, listboxRef.current, selectionIndex === 0, selectionIndex === options.length - 1);
    }
  }, [isOpen, selectedOptionRef.current, listboxRef.current]);
  var listboxWidth = React.useMemo(function () {
    if (rootRef.current) {
      return "".concat(rootRef.current.clientWidth, "px");
    }

    return null;
  }, [rootRef.current]);

  function handleOpen() {
    if (!disabled) {
      setIsOpen(true);
    }
  }

  function handleKeyDown(event) {
    if (event.keyCode === ARROW_DOWN) {
      event.preventDefault();
      handleOpen();
      setSelectionIndex(function (prev) {
        var next = prev + 1;

        if (next > options.length - 1) {
          next = -1;
        }

        return next;
      });
    }

    if (event.keyCode === ARROW_UP) {
      event.preventDefault();
      setSelectionIndex(function (prev) {
        var next = prev - 1;

        if (next < -1) {
          next = options.length - 1;
        }

        return next;
      });
    }

    if (event.keyCode === ENTER) {
      var clickedOption = options[selectionIndex];

      if (clickedOption) {
        event.preventDefault();
        setIsOpen(false);
        setSelectionIndex(-1);
        onChange(mapOptionToString(clickedOption), clickedOption);
      } else {
        if (onSubmit) {
          onSubmit({
            closeListbox: function closeListbox() {
              return setIsOpen(false);
            },
            value: value
          });
        }
      }
    }

    if (event.keyCode === ESCAPE) {
      // NOTE(chase): aria 1.2 spec outlines a pattern where when escape is
      // pressed, it closes the listbox and further presses will clear value.
      // Google search and some other examples I've seen do not implement this,
      // but something to consider when the 1.2 spec becomes more widespread.
      setIsOpen(false);
      setSelectionIndex(-1);
      setTempValue(value);
    }
  }

  function handleFocus(event) {
    if (!isOpen && options.length) {
      handleOpen();
    }

    if (onFocus) onFocus(event);
  }

  function handleBlur(event) {
    if (listboxRef.current && event.relatedTarget && // NOTE(chase): Contains method expects a Node type, but relatedTarget is
    // EventTarget which is a super type of Node. Passing an EventTarget seems
    // to work fine, assuming the flow type is too strict.
    // eslint-disable-next-line flowtype/no-weak-types
    listboxRef.current.contains(event.relatedTarget)) {
      return;
    }

    setIsOpen(false);
    setSelectionIndex(-1);
    setTempValue(value);
    if (onBlur) onBlur(event);
  }

  function handleInputClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    if (!isOpen && options.length) {
      handleOpen();
    }
  }

  function handleInputChange(event) {
    handleOpen();
    setSelectionIndex(-1);
    onChange(event.target.value, null);
    setTempValue(event.target.value);
  }

  function handleInputRef(input) {
    inputRef.current = input;

    if (forwardInputRef) {
      if (typeof forwardInputRef === 'function') {
        forwardInputRef(input);
      } else {
        forwardInputRef.current = input;
      }
    }
  }

  function handleOptionClick(index) {
    var clickedOption = options[index];

    if (clickedOption) {
      var stringified = mapOptionToString(clickedOption);
      setIsOpen(false);
      setSelectionIndex(index);
      onChange(stringified, clickedOption);
      setTempValue(stringified);

      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }

  var _getOverrides = (0, _overrides.getOverrides)(overrides.Root, _styledComponents.StyledRoot),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      Root = _getOverrides2[0],
      rootProps = _getOverrides2[1];

  var _getOverrides3 = (0, _overrides.getOverrides)(overrides.InputContainer, _styledComponents.StyledInputContainer),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      InputContainer = _getOverrides4[0],
      inputContainerProps = _getOverrides4[1];

  var _getOverrides5 = (0, _overrides.getOverrides)(overrides.ListBox, _styledComponents.StyledListBox),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      ListBox = _getOverrides6[0],
      listBoxProps = _getOverrides6[1];

  var _getOverrides7 = (0, _overrides.getOverrides)(overrides.ListItem, _styledComponents.StyledListItem),
      _getOverrides8 = _slicedToArray(_getOverrides7, 2),
      ListItem = _getOverrides8[0],
      listItemProps = _getOverrides8[1];

  var _getOverrides9 = (0, _overrides.getOverrides)(overrides.Input, _index.Input),
      _getOverrides10 = _slicedToArray(_getOverrides9, 2),
      OverriddenInput = _getOverrides10[0],
      _getOverrides10$ = _getOverrides10[1],
      _getOverrides10$$over = _getOverrides10$.overrides,
      inputOverrides = _getOverrides10$$over === void 0 ? {} : _getOverrides10$$over,
      restInputProps = _objectWithoutProperties(_getOverrides10$, ["overrides"]);

  var _getOverrides11 = (0, _overrides.getOverrides)(overrides.Popover, _index2.Popover),
      _getOverrides12 = _slicedToArray(_getOverrides11, 2),
      OverriddenPopover = _getOverrides12[0],
      _getOverrides12$ = _getOverrides12[1],
      _getOverrides12$$over = _getOverrides12$.overrides,
      popoverOverrides = _getOverrides12$$over === void 0 ? {} : _getOverrides12$$over,
      restPopoverProps = _objectWithoutProperties(_getOverrides12$, ["overrides"]);

  return /*#__PURE__*/React.createElement(Root // eslint-disable-next-line flowtype/no-weak-types
  , _extends({
    ref: rootRef
  }, rootProps), /*#__PURE__*/React.createElement(OverriddenPopover, _extends({
    isOpen: isOpen,
    overrides: popoverOverrides,
    placement: _index2.PLACEMENT.bottomLeft,
    onClick: handleInputClick,
    content: /*#__PURE__*/React.createElement(ListBox // TabIndex attribute exists to exclude option clicks from triggering onBlur event actions.
    , _extends({
      tabIndex: "-1",
      id: listboxId // eslint-disable-next-line flowtype/no-weak-types
      ,
      ref: listboxRef,
      role: "listbox",
      $width: listboxWidth
    }, listBoxProps), options.map(function (option, index) {
      var isSelected = selectionIndex === index;
      var ReplacementNode = mapOptionToNode;
      return (
        /*#__PURE__*/
        // List items are not focusable, therefore will never trigger a key event from it.
        // Secondly, key events are handled from the input element.
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        React.createElement(ListItem, _extends({
          "aria-selected": isSelected,
          id: isSelected ? activeDescendantId : null,
          key: index,
          onClick: function onClick() {
            return handleOptionClick(index);
          } // eslint-disable-next-line flowtype/no-weak-types
          ,
          ref: isSelected ? selectedOptionRef : null,
          role: "option",
          $isSelected: isSelected,
          $size: size
        }, listItemProps), ReplacementNode ? /*#__PURE__*/React.createElement(ReplacementNode, {
          isSelected: isSelected,
          option: option
        }) : mapOptionToString(option))
      );
    }))
  }, restPopoverProps), /*#__PURE__*/React.createElement(InputContainer, _extends({
    "aria-expanded": isOpen,
    "aria-haspopup": "listbox",
    "aria-owns": listboxId // a11y linter implements the older 1.0 spec, suppressing to use updated 1.1
    // https://github.com/A11yance/aria-query/issues/43
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/442
    // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
    ,
    role: "combobox"
  }, inputContainerProps), /*#__PURE__*/React.createElement(OverriddenInput, _extends({
    inputRef: handleInputRef,
    "aria-activedescendant": selectionIndex >= 0 ? activeDescendantId : undefined,
    "aria-autocomplete": "list",
    "aria-controls": listboxId,
    disabled: disabled,
    error: error,
    name: name,
    id: id,
    onBlur: handleBlur,
    onChange: handleInputChange,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    overrides: inputOverrides,
    positive: positive,
    size: size,
    value: tempValue ? tempValue : value
  }, restInputProps)))));
}

var _default = Combobox;
exports.default = _default;