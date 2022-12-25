"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../checkbox/index.js");

var _index2 = require("../styles/index.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Column(options) {
  return {
    kind: options.kind,
    buildFilter: options.buildFilter || function () {
      return function () {
        return true;
      };
    },
    textQueryFilter: options.textQueryFilter,
    fillWidth: options.fillWidth === undefined ? true : options.fillWidth,
    filterable: Boolean(options.filterable) && Boolean(options.renderFilter) && Boolean(options.buildFilter),
    mapDataToValue: options.mapDataToValue,
    maxWidth: options.maxWidth,
    minWidth: options.minWidth,
    renderCell: /*#__PURE__*/React.forwardRef(function (props, ref) {
      var _useStyletron = (0, _index2.useStyletron)(),
          _useStyletron2 = _slicedToArray(_useStyletron, 2),
          css = _useStyletron2[0],
          theme = _useStyletron2[1];

      var ProvidedCell = options.renderCell;
      var cellBlockAlign = 'flex-start';

      if (options.cellBlockAlign === 'center') {
        cellBlockAlign = 'center';
      } else if (options.cellBlockAlign === 'end') {
        cellBlockAlign = 'flex-end';
      }

      return /*#__PURE__*/React.createElement("div", {
        ref: ref,
        className: css(_objectSpread(_objectSpread({}, theme.typography.font100), {}, {
          boxSizing: 'border-box',
          color: theme.colors.contentPrimary,
          display: props.isMeasured ? 'inline-block' : null,
          height: '100%',
          paddingTop: theme.sizing.scale300,
          paddingLeft: theme.sizing.scale500,
          paddingBottom: theme.sizing.scale300,
          paddingRight: theme.sizing.scale500,
          width: props.isMeasured ? null : '100%'
        }))
      }, /*#__PURE__*/React.createElement("div", {
        className: css({
          alignItems: cellBlockAlign,
          display: 'flex',
          height: '100%'
        })
      }, Boolean(props.onSelect) && /*#__PURE__*/React.createElement(_index.Checkbox, {
        onChange: props.onSelect,
        checked: props.isSelected,
        overrides: {
          Checkmark: {
            style: {
              marginTop: null,
              marginBottom: null
            }
          }
        }
      }), /*#__PURE__*/React.createElement(ProvidedCell, props)));
    }),
    renderFilter: options.renderFilter || function () {
      return null;
    },
    sortable: Boolean(options.sortable) && Boolean(options.sortFn),
    sortFn: options.sortFn || function () {
      return 0;
    },
    title: options.title
  };
}

var _default = Column;
exports.default = _default;