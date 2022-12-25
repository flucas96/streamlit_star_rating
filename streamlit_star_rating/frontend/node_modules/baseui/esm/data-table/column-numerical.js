function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Button, SIZE } from '../button/index.js';
import { ButtonGroup, MODE } from '../button-group/index.js';
import { Input, SIZE as INPUT_SIZE } from '../input/index.js';
import { useStyletron } from '../styles/index.js';
import { Paragraph4 } from '../typography/index.js';
import Column from './column.js';
import { COLUMNS, NUMERICAL_FORMATS, NUMERICAL_OPERATIONS } from './constants.js';
import FilterShell from './filter-shell.js';
import { LocaleContext } from '../locale/index.js';

function roundToFixed(value, precision) {
  var k = Math.pow(10, precision);
  return Math.round(value * k) / k;
}

function format(value, options) {
  if (typeof options.format === 'function') {
    return options.format(value);
  }

  var formatted = value.toString();

  switch (options.format) {
    case NUMERICAL_FORMATS.ACCOUNTING:
      {
        var abs = Math.abs(value);

        if (value < 0) {
          formatted = "($".concat(roundToFixed(abs, options.precision), ")");
          break;
        }

        formatted = "$".concat(roundToFixed(abs, options.precision));
        break;
      }

    case NUMERICAL_FORMATS.PERCENTAGE:
      {
        formatted = "".concat(roundToFixed(value, options.precision), "%");
        break;
      }

    case NUMERICAL_FORMATS.DEFAULT:
    default:
      formatted = roundToFixed(value, options.precision);
      break;
  }

  return formatted;
}

function validateInput(input) {
  return Boolean(parseFloat(input)) || input === '' || input === '-';
}

function filterParamsToInitialState(filterParams) {
  if (filterParams) {
    if (filterParams.comparisons.length > 1) {
      if (filterParams.comparisons[0].operation === NUMERICAL_OPERATIONS.LT && filterParams.comparisons[1].operation === NUMERICAL_OPERATIONS.GT) {
        return {
          exclude: !filterParams.exclude,
          comparatorIndex: 0,
          operatorIndex: 4,
          right: filterParams.comparisons[1].value.toString(),
          left: filterParams.comparisons[0].value.toString()
        };
      }
    } else {
      var comparison = filterParams.comparisons[0];

      if (comparison.operation === NUMERICAL_OPERATIONS.LT) {
        return {
          exclude: filterParams.exclude,
          comparatorIndex: 0,
          operatorIndex: 0,
          left: '',
          right: comparison.value.toString()
        };
      } else if (comparison.operation === NUMERICAL_OPERATIONS.GT) {
        return {
          exclude: filterParams.exclude,
          comparatorIndex: 0,
          operatorIndex: 1,
          left: comparison.value.toString(),
          right: ''
        };
      } else if (comparison.operation === NUMERICAL_OPERATIONS.LTE) {
        return {
          exclude: filterParams.exclude,
          comparatorIndex: 0,
          operatorIndex: 2,
          left: '',
          right: comparison.value.toString()
        };
      } else if (comparison.operation === NUMERICAL_OPERATIONS.GTE) {
        return {
          exclude: filterParams.exclude,
          comparatorIndex: 0,
          operatorIndex: 3,
          left: comparison.value.toString(),
          right: ''
        };
      } else if (comparison.operation === NUMERICAL_OPERATIONS.EQ) {
        return {
          exclude: filterParams.exclude,
          comparatorIndex: 1,
          operatorIndex: 0,
          left: comparison.value.toString(),
          right: ''
        };
      }
    }
  }

  return {
    exclude: false,
    comparatorIndex: 0,
    operatorIndex: 0,
    left: '',
    right: ''
  };
}

function NumericalFilter(props) {
  var _useStyletron = useStyletron(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      css = _useStyletron2[0],
      theme = _useStyletron2[1];

  var locale = React.useContext(LocaleContext);
  var initialState = filterParamsToInitialState(props.filterParams);

  var _React$useState = React.useState(initialState.exclude),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      exclude = _React$useState2[0],
      setExclude = _React$useState2[1];

  var _React$useState3 = React.useState(initialState.comparatorIndex),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      comparatorIndex = _React$useState4[0],
      setComparatorIndex = _React$useState4[1];

  var _React$useState5 = React.useState(initialState.operatorIndex),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      operatorIndex = _React$useState6[0],
      setOperatorIndex = _React$useState6[1];

  var _React$useState7 = React.useState(initialState.left),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      left = _React$useState8[0],
      setLeft = _React$useState8[1];

  var _React$useState9 = React.useState(initialState.right),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      right = _React$useState10[0],
      setRight = _React$useState10[1];

  var isRange = comparatorIndex === 0;
  var min = React.useMemo(function () {
    return Math.min.apply(Math, _toConsumableArray(props.data));
  }, [props.data]);
  var max = React.useMemo(function () {
    return Math.max.apply(Math, _toConsumableArray(props.data));
  }, [props.data]);
  React.useEffect(function () {
    if (!left) {
      setLeft(min.toString());
    }

    if (!right) {
      setRight(max.toString());
    }
  }, []);

  var _React$useMemo = React.useMemo(function () {
    if (!isRange) return [false, false];

    switch (operatorIndex) {
      case 4:
        return [false, false];

      case 0:
      case 2:
        return [true, false];

      case 1:
      case 3:
        return [false, true];

      default:
        return [true, true];
    }
  }, [operatorIndex, isRange]),
      _React$useMemo2 = _slicedToArray(_React$useMemo, 2),
      leftDisabled = _React$useMemo2[0],
      rightDisabled = _React$useMemo2[1];

  var leftInputRef = React.useRef(null);
  var rightInputRef = React.useRef(null);
  React.useEffect(function () {
    if (!leftDisabled && leftInputRef.current) {
      leftInputRef.current.focus({
        preventScroll: true
      });
    } else if (!rightDisabled && rightInputRef.current) {
      rightInputRef.current.focus({
        preventScroll: true
      });
    }
  }, [leftDisabled, rightDisabled, comparatorIndex]);
  React.useEffect(function () {
    switch (operatorIndex) {
      case 4:
      default:
        break;

      case 1:
      case 3:
        setRight(max.toString());
        break;

      case 0:
      case 2:
        setLeft(min.toString());
        break;
    }
  }, [operatorIndex]);
  return /*#__PURE__*/React.createElement(FilterShell, {
    exclude: exclude,
    onExcludeChange: function onExcludeChange() {
      return setExclude(!exclude);
    },
    onApply: function onApply() {
      if (isRange) {
        switch (operatorIndex) {
          case 0:
            {
              var _value = parseFloat(right);

              var operation = NUMERICAL_OPERATIONS.LT;
              props.setFilter({
                comparisons: [{
                  value: _value,
                  operation: operation
                }],
                description: "< ".concat(_value),
                exclude: exclude
              });
              break;
            }

          case 1:
            {
              var _value2 = parseFloat(left);

              var _operation = NUMERICAL_OPERATIONS.GT;
              props.setFilter({
                comparisons: [{
                  value: _value2,
                  operation: _operation
                }],
                description: "> ".concat(_value2),
                exclude: exclude
              });
              break;
            }

          case 2:
            {
              var _value3 = parseFloat(right);

              var _operation2 = NUMERICAL_OPERATIONS.LTE;
              props.setFilter({
                comparisons: [{
                  value: _value3,
                  operation: _operation2
                }],
                description: "\u2264 ".concat(_value3),
                exclude: exclude
              });
              break;
            }

          case 3:
            {
              var _value4 = parseFloat(left);

              var _operation3 = NUMERICAL_OPERATIONS.GTE;
              props.setFilter({
                comparisons: [{
                  value: _value4,
                  operation: _operation3
                }],
                description: "\u2265 ".concat(_value4),
                exclude: exclude
              });
              break;
            }

          case 4:
            {
              // 'between' case is interesting since if we want less than 10 plus greater than 5
              // comparators, the filter will include _all_ numbers.
              var leftValue = parseFloat(left);
              var rightValue = parseFloat(right);
              props.setFilter({
                comparisons: [{
                  value: leftValue,
                  operation: NUMERICAL_OPERATIONS.LT
                }, {
                  value: rightValue,
                  operation: NUMERICAL_OPERATIONS.GT
                }],
                description: "\u2265 ".concat(leftValue, " & \u2264 ").concat(rightValue),
                exclude: !exclude
              });
              break;
            }

          default:
            break;
        }
      } else {
        var _value5 = parseFloat(left);

        var _operation4 = NUMERICAL_OPERATIONS.EQ;
        props.setFilter({
          comparisons: [{
            value: _value5,
            operation: _operation4
          }],
          description: "= ".concat(_value5),
          exclude: exclude
        });
      }

      props.close();
    }
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    size: SIZE.compact,
    mode: MODE.radio,
    selected: comparatorIndex,
    onClick: function onClick(_, index) {
      return setComparatorIndex(index);
    },
    overrides: {
      Root: {
        style: function style(_ref) {
          var $theme = _ref.$theme;
          return {
            marginBottom: $theme.sizing.scale300
          };
        }
      }
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    overrides: {
      BaseButton: {
        style: {
          width: '100%'
        }
      }
    }
  }, locale.datatable.numericalFilterRange), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    overrides: {
      BaseButton: {
        style: {
          width: '100%'
        }
      }
    }
  }, locale.datatable.numericalFilterSingleValue)), isRange && /*#__PURE__*/React.createElement(ButtonGroup, {
    size: SIZE.compact,
    mode: MODE.radio,
    selected: operatorIndex,
    onClick: function onClick(_, index) {
      return setOperatorIndex(index);
    },
    overrides: {
      Root: {
        style: function style(_ref2) {
          var $theme = _ref2.$theme;
          return {
            marginBottom: $theme.sizing.scale500
          };
        }
      }
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    overrides: {
      BaseButton: {
        style: {
          width: '100%'
        }
      }
    }
  }, "<"), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    overrides: {
      BaseButton: {
        style: {
          width: '100%'
        }
      }
    }
  }, ">"), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    overrides: {
      BaseButton: {
        style: {
          width: '100%'
        }
      }
    }
  }, "\u2264"), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    overrides: {
      BaseButton: {
        style: {
          width: '100%'
        }
      }
    }
  }, "\u2265"), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    overrides: {
      BaseButton: {
        style: {
          width: '100%'
        }
      }
    }
  }, "=")), /*#__PURE__*/React.createElement("div", {
    className: css({
      display: 'flex',
      justifyContent: 'space-between',
      marginLeft: theme.sizing.scale300,
      marginRight: theme.sizing.scale300
    })
  }, /*#__PURE__*/React.createElement(Paragraph4, null, format(min, props.options)), ' ', /*#__PURE__*/React.createElement(Paragraph4, null, format(max, props.options))), /*#__PURE__*/React.createElement("div", {
    className: css({
      display: 'flex',
      justifyContent: 'space-between'
    })
  }, /*#__PURE__*/React.createElement(Input, {
    size: INPUT_SIZE.compact,
    overrides: {
      Root: {
        style: {
          width: isRange ? '152px' : '100%'
        }
      }
    },
    disabled: leftDisabled,
    inputRef: leftInputRef,
    value: left,
    onChange: function onChange(event) {
      if (validateInput(event.target.value)) {
        setLeft(event.target.value);
      }
    }
  }), isRange && /*#__PURE__*/React.createElement(Input, {
    size: INPUT_SIZE.compact,
    overrides: {
      Root: {
        style: {
          width: '152px'
        }
      }
    },
    disabled: rightDisabled,
    inputRef: rightInputRef,
    value: right,
    onChange: function onChange(event) {
      if (validateInput(event.target.value)) {
        setRight(event.target.value);
      }
    }
  })));
}

function NumericalCell(props) {
  var _useStyletron3 = useStyletron(),
      _useStyletron4 = _slicedToArray(_useStyletron3, 2),
      css = _useStyletron4[0],
      theme = _useStyletron4[1];

  return /*#__PURE__*/React.createElement("div", {
    className: css(_objectSpread(_objectSpread({}, theme.typography.MonoParagraphXSmall), {}, {
      display: 'flex',
      justifyContent: theme.direction !== 'rtl' ? 'flex-end' : 'flex-start',
      color: props.highlight(props.value) ? theme.colors.contentNegative : null,
      width: '100%'
    }))
  }, format(props.value, {
    format: props.format,
    precision: props.precision
  }));
}

var defaultOptions = {
  title: '',
  sortable: true,
  filterable: true,
  format: NUMERICAL_FORMATS.DEFAULT,
  highlight: function (n) {
    return false;
  },
  precision: 0
};

function NumericalColumn(options) {
  var normalizedOptions = _objectSpread(_objectSpread({}, defaultOptions), options);

  if (normalizedOptions.format !== NUMERICAL_FORMATS.DEFAULT && (options.precision === null || options.precision === undefined)) {
    normalizedOptions.precision = 2;
  }

  if (normalizedOptions.format === NUMERICAL_FORMATS.ACCOUNTING && (options.highlight === null || options.highlight === undefined)) {
    normalizedOptions.highlight = function (n) {
      return n < 0;
    };
  }

  return Column({
    kind: COLUMNS.NUMERICAL,
    buildFilter: function buildFilter(params) {
      return function (data) {
        var included = params.comparisons.some(function (c) {
          var left = roundToFixed(data, normalizedOptions.precision);
          var right = roundToFixed(c.value, normalizedOptions.precision);

          switch (c.operation) {
            case NUMERICAL_OPERATIONS.EQ:
              return left === right;

            case NUMERICAL_OPERATIONS.GT:
              return left > right;

            case NUMERICAL_OPERATIONS.GTE:
              return left >= right;

            case NUMERICAL_OPERATIONS.LT:
              return left < right;

            case NUMERICAL_OPERATIONS.LTE:
              return left <= right;

            default:
              return true;
          }
        });
        return params.exclude ? !included : included;
      };
    },
    cellBlockAlign: options.cellBlockAlign,
    fillWidth: options.fillWidth,
    filterable: normalizedOptions.filterable,
    mapDataToValue: options.mapDataToValue,
    maxWidth: options.maxWidth,
    minWidth: options.minWidth,
    renderCell: function RenderNumericalCell(props) {
      return /*#__PURE__*/React.createElement(NumericalCell, _extends({}, props, {
        format: normalizedOptions.format,
        highlight: normalizedOptions.highlight,
        precision: normalizedOptions.precision
      }));
    },
    renderFilter: function RenderNumericalFilter(props) {
      return /*#__PURE__*/React.createElement(NumericalFilter, _extends({}, props, {
        options: normalizedOptions
      }));
    },
    sortable: normalizedOptions.sortable,
    sortFn: function sortFn(a, b) {
      return a - b;
    },
    title: normalizedOptions.title
  });
}

export default NumericalColumn;