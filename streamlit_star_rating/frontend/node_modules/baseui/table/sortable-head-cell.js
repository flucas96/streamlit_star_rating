"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SortableHeadCellFactory = void 0;

var React = _interopRequireWildcard(require("react"));

var _overrides = require("../helpers/overrides.js");

var _triangleUp = _interopRequireDefault(require("../icon/triangle-up.js"));

var _triangleDown = _interopRequireDefault(require("../icon/triangle-down.js"));

var _constants = require("./constants.js");

var _styledComponents = require("./styled-components.js");

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

function SortDirectionIcon(_ref) {
  var direction = _ref.direction;

  switch (direction) {
    case _constants.SORT_DIRECTION.ASC:
      return /*#__PURE__*/React.createElement(_triangleUp.default, {
        title: "Sort ascending"
      });

    case _constants.SORT_DIRECTION.DESC:
      return /*#__PURE__*/React.createElement(_triangleDown.default, {
        title: "Sort descending"
      });

    default:
      return null;
  }
}

var SortableHeadCellFactory = function SortableHeadCellFactory() {
  var CustomHeadCell = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _styledComponents.StyledHeadCell;
  return function SortableHeadCell(props) {
    var _props$overrides = props.overrides,
        overrides = _props$overrides === void 0 ? {} : _props$overrides,
        fillClickTarget = props.fillClickTarget,
        disabled = props.disabled;

    var _getOverrides = (0, _overrides.getOverrides)(overrides.HeadCell, CustomHeadCell),
        _getOverrides2 = _slicedToArray(_getOverrides, 2),
        HeadCell = _getOverrides2[0],
        headCellProps = _getOverrides2[1];

    var _getOverrides3 = (0, _overrides.getOverrides)(overrides.SortableLabel, _styledComponents.StyledSortableLabel),
        _getOverrides4 = _slicedToArray(_getOverrides3, 2),
        SortableLabel = _getOverrides4[0],
        sortableLabelProps = _getOverrides4[1];

    var onClick = function onClick() {
      props.onSort && props.onSort();
    };

    var enableHeadClick = fillClickTarget && !disabled;
    var ariaLabel = props.ariaLabel;

    if (!ariaLabel) {
      if (typeof props.title === 'string') {
        ariaLabel = "sorts table by ".concat(props.title, " column");
      } else {
        ariaLabel = 'sort table by column';
      }
    }

    return /*#__PURE__*/React.createElement(HeadCell, _extends({
      role: "columnheader"
    }, headCellProps, {
      $cursor: enableHeadClick ? 'pointer' : undefined,
      onClick: enableHeadClick ? onClick : undefined
    }), /*#__PURE__*/React.createElement(SortableLabel, _extends({
      "aria-label": ariaLabel,
      disabled: disabled,
      onClick: !fillClickTarget ? onClick : undefined
    }, sortableLabelProps), /*#__PURE__*/React.createElement(SortDirectionIcon, {
      direction: props.direction
    }), props.title), props.children);
  };
};

exports.SortableHeadCellFactory = SortableHeadCellFactory;

var _default = SortableHeadCellFactory();

exports.default = _default;