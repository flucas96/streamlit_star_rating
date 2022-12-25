"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoricalFilter = CategoricalFilter;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../button/index.js");

var _index2 = require("../button-group/index.js");

var _index3 = require("../checkbox/index.js");

var _search = _interopRequireDefault(require("../icon/search.js"));

var _index4 = require("../input/index.js");

var _index5 = require("../styles/index.js");

var _index6 = require("../typography/index.js");

var _column = _interopRequireDefault(require("./column.js"));

var _constants = require("./constants.js");

var _index7 = require("../locale/index.js");

var _filterShell = _interopRequireDefault(require("./filter-shell.js"));

var _textSearch = require("./text-search.js");

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

function InputBefore() {
  var _useStyletron = (0, _index5.useStyletron)(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      css = _useStyletron2[0],
      theme = _useStyletron2[1];

  return /*#__PURE__*/React.createElement("div", {
    className: css({
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.sizing.scale500
    })
  }, /*#__PURE__*/React.createElement(_search.default, {
    size: "18px"
  }));
}

function FilterQuickControls(props) {
  var locale = React.useContext(_index7.LocaleContext);
  return /*#__PURE__*/React.createElement(_index2.ButtonGroup, {
    size: _index.SIZE.mini,
    kind: _index.KIND.minimal
  }, /*#__PURE__*/React.createElement(_index.Button, {
    type: "button",
    onClick: props.onSelectAll
  }, locale.datatable.categoricalFilterSelectAll), /*#__PURE__*/React.createElement(_index.Button, {
    type: "button",
    onClick: props.onClearSelection
  }, locale.datatable.categoricalFilterSelectClear));
}

var StyledHighlightLabel = (0, _index5.withStyle)(_index3.StyledLabel, function (props) {
  var style = {
    whiteSpace: 'pre',
    color: props.$isActive ? props.$theme.colors.contentPrimary : props.$theme.colors.contentSecondary
  };

  if (!props.$isFirst) {
    // $FlowFixMe
    style.paddingLeft = null;
  }

  return style;
});
StyledHighlightLabel.displayName = "StyledHighlightLabel";

function HighlightCheckboxLabel(props) {
  var children = props.children,
      restProps = _objectWithoutProperties(props, ["children"]);

  if (!props.query) {
    return /*#__PURE__*/React.createElement(_index3.StyledLabel, restProps, children);
  }

  return (0, _textSearch.splitByQuery)(children, props.query).map(function (el, i) {
    if ((0, _textSearch.matchesQuery)(el, props.query)) {
      return /*#__PURE__*/React.createElement(StyledHighlightLabel, _extends({}, restProps, {
        key: i,
        $isFirst: !i,
        $isActive: true
      }), el);
    }

    return /*#__PURE__*/React.createElement(StyledHighlightLabel, _extends({}, restProps, {
      key: i,
      $isFirst: !i
    }), el);
  });
}

function CategoricalFilter(props) {
  var _useStyletron3 = (0, _index5.useStyletron)(),
      _useStyletron4 = _slicedToArray(_useStyletron3, 2),
      css = _useStyletron4[0],
      theme = _useStyletron4[1];

  var locale = React.useContext(_index7.LocaleContext);

  var _React$useState = React.useState(props.filterParams ? props.filterParams.selection : new Set()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selection = _React$useState2[0],
      setSelection = _React$useState2[1];

  var _React$useState3 = React.useState(props.filterParams ? props.filterParams.exclude : false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      exclude = _React$useState4[0],
      setExclude = _React$useState4[1];

  var _React$useState5 = React.useState(''),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      query = _React$useState6[0],
      setQuery = _React$useState6[1];

  var categories = React.useMemo(function () {
    return props.data.reduce(function (set, category) {
      return set.add(category);
    }, new Set());
  }, [props.data]);
  var checkboxStyles = css({
    marginBottom: theme.sizing.scale200
  });
  var showQuery = Boolean(categories.size >= 10);
  var filteredCategories = Array.from(categories, function (c) {
    return c;
  }).filter(function (c) {
    return (0, _textSearch.matchesQuery)(c, query);
  });
  return /*#__PURE__*/React.createElement(_filterShell.default, {
    exclude: exclude,
    onExcludeChange: function onExcludeChange() {
      return setExclude(!exclude);
    },
    onApply: function onApply() {
      props.setFilter({
        description: Array.from(selection).join(', '),
        exclude: exclude,
        selection: selection
      });
      props.close();
    }
  }, showQuery && /*#__PURE__*/React.createElement(_index4.Input, {
    size: _index4.SIZE.compact,
    overrides: {
      Before: InputBefore
    },
    value: query,
    onChange: function onChange(event) {
      return setQuery(event.target.value);
    },
    clearable: true
  }), !query && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: showQuery ? theme.sizing.scale600 : null
    }
  }, /*#__PURE__*/React.createElement(FilterQuickControls, {
    onSelectAll: function onSelectAll() {
      categories.forEach(function (c) {
        return selection.add(c);
      });
      setSelection(new Set(selection));
    },
    onClearSelection: function onClearSelection() {
      setSelection(new Set());
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: css({
      maxHeight: '256px',
      overflowY: 'auto',
      marginTop: theme.sizing.scale600
    })
  }, !filteredCategories.length && /*#__PURE__*/React.createElement(_index6.Label3, null, locale.datatable.categoricalFilterEmpty), Boolean(filteredCategories.length) && filteredCategories.map(function (category, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: checkboxStyles,
      key: i
    }, /*#__PURE__*/React.createElement(_index3.Checkbox, {
      checked: selection.has(category),
      onChange: function onChange() {
        if (selection.has(category)) {
          selection.delete(category);
        } else {
          selection.add(category);
        }

        setSelection(new Set(selection));
      },
      overrides: {
        Label: {
          component: HighlightCheckboxLabel,
          props: {
            query: query
          }
        }
      }
    }, category));
  })));
}

function CategoricalCell(props) {
  var _useStyletron5 = (0, _index5.useStyletron)(),
      _useStyletron6 = _slicedToArray(_useStyletron5, 1),
      css = _useStyletron6[0];

  return /*#__PURE__*/React.createElement("div", {
    className: css({
      display: '-webkit-box',
      WebkitLineClamp: 1,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    })
  }, props.textQuery ? /*#__PURE__*/React.createElement(_textSearch.HighlightCellText, {
    text: props.value,
    query: props.textQuery
  }) : props.value);
}

function CategoricalColumn(options) {
  return (0, _column.default)({
    kind: _constants.COLUMNS.CATEGORICAL,
    buildFilter: function buildFilter(params) {
      return function (data) {
        var included = params.selection.has(data);
        return params.exclude ? !included : included;
      };
    },
    cellBlockAlign: options.cellBlockAlign,
    fillWidth: options.fillWidth,
    filterable: options.filterable === undefined ? true : options.filterable,
    mapDataToValue: options.mapDataToValue,
    maxWidth: options.maxWidth,
    minWidth: options.minWidth,
    renderCell: CategoricalCell,
    renderFilter: CategoricalFilter,
    sortable: options.sortable === undefined ? true : options.sortable,
    sortFn: function sortFn(a, b) {
      return a.localeCompare(b);
    },
    textQueryFilter: function textQueryFilter(textQuery, data) {
      return data.toLowerCase().includes(textQuery.toLowerCase());
    },
    title: options.title
  });
}

var _default = CategoricalColumn;
exports.default = _default;