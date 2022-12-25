"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NestedMenuContext = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NestedMenuContext = /*#__PURE__*/React.createContext({
  addMenuToNesting: function addMenuToNesting() {},
  removeMenuFromNesting: function removeMenuFromNesting() {},
  getParentMenu: function getParentMenu() {},
  getChildMenu: function getChildMenu() {},
  mountRef: {
    current: null
  }
});
exports.NestedMenuContext = NestedMenuContext;

function isSame(a, b) {
  if (!a || !b) {
    return false;
  }

  return a.isSameNode(b);
}

var NestedMenus = /*#__PURE__*/function (_React$Component) {
  _inherits(NestedMenus, _React$Component);

  var _super = _createSuper(NestedMenus);

  function NestedMenus() {
    var _this;

    _classCallCheck(this, NestedMenus);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      menus: []
    });

    _defineProperty(_assertThisInitialized(_this), "mountRef", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "addMenuToNesting", function (ref) {
      // check offsetHeight to determine if component is visible in the dom (0 means hidden)
      // we need to do this so that when we renderAll, the hidden seo-only child-menus don't
      // register themselves which would break the nesting logic
      if (ref.current && ref.current.offsetHeight) {
        _this.setState(function (state) {
          return {
            menus: [].concat(_toConsumableArray(state.menus), [ref])
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "removeMenuFromNesting", function (ref) {
      _this.setState(function (state) {
        var nextMenus = state.menus.filter(function (r) {
          return r.current;
        }).filter(function (r) {
          return !isSame(r.current, ref.current);
        });
        return {
          menus: nextMenus
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "findMenuIndexByRef", function (ref) {
      return _this.state.menus.findIndex(function (r) {
        return isSame(r.current, ref.current);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getParentMenu", function (ref) {
      var index = _this.findMenuIndexByRef(ref) - 1;
      return _this.state.menus[index];
    });

    _defineProperty(_assertThisInitialized(_this), "getChildMenu", function (ref) {
      var index = _this.findMenuIndexByRef(ref) + 1;
      return _this.state.menus[index];
    });

    return _this;
  }

  _createClass(NestedMenus, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(NestedMenuContext.Provider, {
        value: {
          addMenuToNesting: this.addMenuToNesting,
          removeMenuFromNesting: this.removeMenuFromNesting,
          getParentMenu: this.getParentMenu,
          getChildMenu: this.getChildMenu,
          mountRef: this.mountRef
        }
      }, /*#__PURE__*/React.createElement(React.Fragment, null, this.props.children, /*#__PURE__*/React.createElement("span", {
        ref: this.mountRef
      })));
    }
  }]);

  return NestedMenus;
}(React.Component);

exports.default = NestedMenus;