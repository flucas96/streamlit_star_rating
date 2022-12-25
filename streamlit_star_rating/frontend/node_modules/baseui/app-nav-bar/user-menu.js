"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UserMenuComponent;

var React = _interopRequireWildcard(require("react"));

var _index = require("../avatar/index.js");

var _index2 = require("../button/index.js");

var _overrides = require("../helpers/overrides.js");

var _chevronDown = _interopRequireDefault(require("../icon/chevron-down.js"));

var _chevronUp = _interopRequireDefault(require("../icon/chevron-up.js"));

var _index3 = require("../list/index.js");

var _index4 = require("../menu/index.js");

var _index5 = require("../popover/index.js");

var _styledComponents = require("./styled-components.js");

var _userProfileTile = _interopRequireDefault(require("./user-profile-tile.js"));

var _utils = require("./utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var MENU_ITEM_WIDTH = '275px';
var UserMenuListItem = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var item = props.item,
      _props$mapItemToNode = props.mapItemToNode,
      mapItemToNode = _props$mapItemToNode === void 0 ? _utils.defaultMapItemToNode : _props$mapItemToNode; // Replace with a user menu item renderer

  return /*#__PURE__*/React.createElement(_index3.MenuAdapter, _extends({}, props, {
    ref: ref,
    artwork: item.icon || null,
    artworkSize: _index3.ARTWORK_SIZES.LARGE
  }), /*#__PURE__*/React.createElement(_index3.ListItemLabel, null, mapItemToNode(item)));
});

var svgStyleOverride = function svgStyleOverride(_ref) {
  var $theme = _ref.$theme;
  return {
    paddingLeft: $theme.sizing.scale200
  };
};

function UserMenuComponent(props) {
  // isOpen is used for displaying different arrow icons in open or closed state
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var _props$userItems = props.userItems,
      userItems = _props$userItems === void 0 ? [] : _props$userItems,
      username = props.username,
      userImgUrl = props.userImgUrl,
      _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides;

  var _getOverrides = (0, _overrides.getOverrides)(overrides.UserMenuProfileListItem, _styledComponents.StyledUserMenuProfileListItem),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      UserMenuProfileListItem = _getOverrides2[0],
      userMenuProfileListItemProps = _getOverrides2[1];

  var _getOverrides3 = (0, _overrides.getOverrides)(overrides.UserMenuButton, _index2.Button),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      UserMenuButton = _getOverrides4[0],
      userMenuButtonProps = _getOverrides4[1]; // $FlowFixMe


  userMenuButtonProps.overrides = (0, _overrides.mergeOverrides)({
    BaseButton: {
      component: _styledComponents.StyledUserMenuButton
    }
  }, // $FlowFixMe
  userMenuButtonProps.overrides);

  var _getOverrides5 = (0, _overrides.getOverrides)(overrides.UserMenu, _index4.StatefulMenu),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      UserMenu = _getOverrides6[0],
      userMenuProps = _getOverrides6[1]; // $FlowFixMe


  userMenuProps.overrides = (0, _overrides.mergeOverrides)({
    List: {
      component: /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
        var children = _ref2.children,
            restProps = _objectWithoutProperties(_ref2, ["children"]);

        return /*#__PURE__*/React.createElement(_index4.StyledList, _extends({}, restProps, {
          ref: ref
        }), /*#__PURE__*/React.createElement(UserMenuProfileListItem, userMenuProfileListItemProps, /*#__PURE__*/React.createElement(_userProfileTile.default, {
          username: props.username,
          usernameSubtitle: props.usernameSubtitle,
          userImgUrl: props.userImgUrl,
          overrides: overrides
        })), children);
      }),
      style: {
        width: MENU_ITEM_WIDTH
      }
    },
    ListItem: function ListItem(listItemProps) {
      return /*#__PURE__*/React.createElement(UserMenuListItem, _extends({}, listItemProps, {
        mapItemToNode: props.mapItemToNode
      }));
    }
  }, // $FlowFixMe
  userMenuProps.overrides);
  return /*#__PURE__*/React.createElement(_index5.StatefulPopover, {
    content: function content(_ref3) {
      var close = _ref3.close;
      return /*#__PURE__*/React.createElement(UserMenu, _extends({
        items: userItems,
        onItemSelect: function onItemSelect(_ref4) {
          var item = _ref4.item;
          props.onItemSelect(item);
          close();
        }
      }, userMenuProps));
    },
    dismissOnEsc: true,
    dismissOnClickOutside: true,
    onOpen: function onOpen() {
      return setIsOpen(true);
    },
    onClose: function onClose() {
      return setIsOpen(false);
    },
    placement: _index5.PLACEMENT.bottomRight,
    popperOptions: {
      modifiers: {
        flip: {
          enabled: false
        }
      }
    },
    triggerType: _index5.TRIGGER_TYPE.click
  }, /*#__PURE__*/React.createElement(UserMenuButton, userMenuButtonProps, /*#__PURE__*/React.createElement(_index.Avatar, {
    name: username || '',
    src: userImgUrl,
    size: '32px'
  }), isOpen ? /*#__PURE__*/React.createElement(_chevronUp.default, {
    size: 28,
    overrides: {
      Svg: {
        style: svgStyleOverride
      }
    }
  }) : /*#__PURE__*/React.createElement(_chevronDown.default, {
    size: 28,
    overrides: {
      Svg: {
        style: svgStyleOverride
      }
    }
  })));
}