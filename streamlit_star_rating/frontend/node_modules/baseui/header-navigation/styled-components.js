"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationList = exports.NavigationItem = exports.Root = void 0;

var _index = require("../styles/index.js");

var _constants = require("./constants.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Root = (0, _index.styled)('nav', function (props) {
  var $theme = props.$theme;
  var scale500 = $theme.sizing.scale500,
      font300 = $theme.typography.font300,
      border = $theme.colors.border;
  return _objectSpread(_objectSpread({}, font300), {}, {
    display: 'flex',
    paddingBottom: scale500,
    paddingTop: scale500,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: "".concat(border),
    backgroundColor: $theme.colors.headerNavigationFill
  });
});
exports.Root = Root;
Root.displayName = "Root";
var NavigationItem = (0, _index.styled)('li', function (props) {
  var $theme = props.$theme;
  var scale800 = $theme.sizing.scale800;
  return {
    alignSelf: 'center',
    paddingLeft: scale800
  };
});
exports.NavigationItem = NavigationItem;
NavigationItem.displayName = "NavigationItem";
var NavigationList = (0, _index.styled)('ul', function (props) {
  var $align = props.$align,
      $theme = props.$theme;
  var aligned = $align === _constants.ALIGN.right || $align === _constants.ALIGN.left;
  var scale800 = $theme.sizing.scale800;
  return {
    display: 'flex',
    ':first-child': {
      padding: 0
    },
    ':last-child': {
      padding: 0
    },
    flexGrow: aligned ? 0 : 1,
    flexShrink: aligned ? 0 : 1,
    flexBasis: aligned ? 'auto' : '0%',
    paddingLeft: scale800,
    paddingRight: scale800,
    justifySelf: $align,
    justifyContent: $align,
    listStyle: 'none',
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0
  };
});
exports.NavigationList = NavigationList;
NavigationList.displayName = "NavigationList";