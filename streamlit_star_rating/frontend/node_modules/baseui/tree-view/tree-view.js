"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TreeView;

var React = _interopRequireWildcard(require("react"));

var _treeNode = _interopRequireDefault(require("./tree-node.js"));

var _styledComponents = require("./styled-components.js");

var _utils = require("./utils.js");

var _focusVisible = require("../utils/focusVisible.js");

var _overrides = require("../helpers/overrides.js");

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

function TreeView(props) {
  var data = props.data,
      _props$indentGuides = props.indentGuides,
      indentGuides = _props$indentGuides === void 0 ? false : _props$indentGuides,
      _onToggle = props.onToggle,
      _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides,
      renderAll = props.renderAll,
      _props$getId = props.getId,
      getId = _props$getId === void 0 ? _utils.defaultGetId : _props$getId;
  var RootOverride = overrides.Root;

  var Root = (0, _overrides.getOverride)(RootOverride) || _styledComponents.StyledTreeItemList;

  var firstId = data.length && getId(data[0]);

  var _React$useState = React.useState(firstId),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedNodeId = _React$useState2[0],
      setSelectedNodeId = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      focusVisible = _React$useState4[0],
      setFocusVisible = _React$useState4[1];

  var _React$useState5 = React.useState(''),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      typeAheadChars = _React$useState6[0],
      setTypeAheadChars = _React$useState6[1];

  var timeOutRef = React.useRef(null);
  var treeItemRefs = React.useRef({});

  var focusTreeItem = function focusTreeItem(id) {
    if (!id) return;
    setSelectedNodeId(id);
    var refs = treeItemRefs.current[id];
    var node = refs && refs.current;
    if (node) node.focus();
  };

  var onKeyDown = function onKeyDown(e, node) {
    // eslint-disable-next-line flowtype/no-weak-types
    var elementId = e.target.getAttribute('data-nodeid'); // this check prevents bubbling

    if (elementId !== getId(node) && parseInt(elementId) !== getId(node)) {
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();

        if (typeof node.isExpanded === 'boolean' && !node.isExpanded) {
          _onToggle && _onToggle(node);
        } else {
          focusTreeItem((0, _utils.getFirstChildId)(data, selectedNodeId, getId));
        }

        break;

      case 'ArrowLeft':
        e.preventDefault();

        if (typeof node.isExpanded === 'boolean' && node.isExpanded) {
          _onToggle && _onToggle(node);
        } else {
          focusTreeItem((0, _utils.getParentId)(data, selectedNodeId, null, getId));
        }

        break;

      case 'ArrowUp':
        e.preventDefault();
        focusTreeItem((0, _utils.getPrevId)(data, selectedNodeId, null, getId));
        break;

      case 'ArrowDown':
        e.preventDefault();
        focusTreeItem((0, _utils.getNextId)(data, selectedNodeId, null, getId));
        break;

      case ' ':
      case 'Enter':
        e.preventDefault();
        _onToggle && _onToggle(node);
        break;

      case 'Home':
        e.preventDefault();

        if (data.length) {
          focusTreeItem(getId(data[0]));
        }

        break;

      case 'End':
        e.preventDefault();
        focusTreeItem((0, _utils.getEndId)(data, getId));
        break;

      case '*':
        e.preventDefault();
        (0, _utils.getExpandableSiblings)(data, selectedNodeId, getId).forEach(function (node) {
          return _onToggle && _onToggle(node);
        });
        break;

      default:
        e.preventDefault();

        if (timeOutRef.current !== null) {
          clearTimeout(timeOutRef.current);
        }

        setTypeAheadChars(typeAheadChars + e.key);
        timeOutRef.current = setTimeout(function () {
          setTypeAheadChars('');
        }, 500);
        focusTreeItem((0, _utils.getCharMatchId)(data, selectedNodeId, typeAheadChars + e.key, null, getId));
        break;
    }
  };

  var onFocus = function onFocus(event) {
    if ((0, _focusVisible.isFocusVisible)(event)) {
      setFocusVisible(true);
    }

    if (selectedNodeId === null && data.length) {
      setSelectedNodeId(getId(data[0]));
    }
  };

  var onBlur = function onBlur(event) {
    if (focusVisible) {
      setFocusVisible(false);
    }
  };

  return /*#__PURE__*/React.createElement(Root, _extends({
    role: "tree"
  }, (0, _overrides.getOverrideProps)(RootOverride)), data.map(function (node) {
    return /*#__PURE__*/React.createElement(_treeNode.default, {
      indentGuides: indentGuides,
      key: getId(node),
      node: node,
      getId: getId,
      onToggle: function onToggle(node) {
        _onToggle && _onToggle(node);
        focusTreeItem(getId(node));
      },
      overrides: overrides,
      renderAll: renderAll,
      selectedNodeId: selectedNodeId,
      onKeyDown: onKeyDown,
      onFocus: onFocus,
      onBlur: onBlur,
      addRef: function addRef(id, ref) {
        treeItemRefs.current[id] = ref;
      },
      removeRef: function removeRef(id) {
        delete treeItemRefs.current[id];
      },
      isFocusVisible: focusVisible
    });
  }));
}