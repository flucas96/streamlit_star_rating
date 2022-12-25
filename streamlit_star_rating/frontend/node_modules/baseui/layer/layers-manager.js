"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Consumer = exports.Provider = exports.LayersContext = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../styles/index.js");

var _overrides = require("../helpers/overrides.js");

var _focusVisible = require("../utils/focusVisible.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var StyledAppContainer = (0, _index.styled)('div', {});
StyledAppContainer.displayName = "StyledAppContainer";
var StyledLayersContainer = (0, _index.styled)('div', {});
StyledLayersContainer.displayName = "StyledLayersContainer";

function defaultEventHandlerFn() {
  if (process.env.NODE_ENV !== "production") {
    console.warn('`LayersManager` was not found. This occurs if you are attempting to use a component requiring `Layer` without using the `BaseProvider` at the root of your app. Please visit https://baseweb.design/components/base-provider/ for more information');
  }
}

var LayersContext = /*#__PURE__*/React.createContext({
  addEscapeHandler: defaultEventHandlerFn,
  removeEscapeHandler: defaultEventHandlerFn,
  addDocClickHandler: defaultEventHandlerFn,
  removeDocClickHandler: defaultEventHandlerFn,
  host: undefined,
  zIndex: undefined
});
exports.LayersContext = LayersContext;
var Provider = LayersContext.Provider;
exports.Provider = Provider;
var Consumer = LayersContext.Consumer;
exports.Consumer = Consumer;

var LayersManager = /*#__PURE__*/function (_React$Component) {
  _inherits(LayersManager, _React$Component);

  var _super = _createSuper(LayersManager);

  function LayersManager(props) {
    var _this;

    _classCallCheck(this, LayersManager);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "host", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "containerRef", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "onDocumentClick", function (event) {
      var docClickHandler = _this.state.docClickHandlers[_this.state.docClickHandlers.length - 1];

      if (docClickHandler) {
        docClickHandler(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyUp", function (event) {
      if (event.key === 'Escape') {
        var escapeKeyHandler = _this.state.escapeKeyHandlers[_this.state.escapeKeyHandlers.length - 1];

        if (escapeKeyHandler) {
          escapeKeyHandler();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAddEscapeHandler", function (escapeKeyHandler) {
      _this.setState(function (prev) {
        return {
          escapeKeyHandlers: [].concat(_toConsumableArray(prev.escapeKeyHandlers), [escapeKeyHandler])
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onRemoveEscapeHandler", function (escapeKeyHandler) {
      _this.setState(function (prev) {
        return {
          escapeKeyHandlers: prev.escapeKeyHandlers.filter(function (handler) {
            return handler !== escapeKeyHandler;
          })
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAddDocClickHandler", function (docClickHandler) {
      _this.setState(function (prev) {
        return {
          docClickHandlers: [].concat(_toConsumableArray(prev.docClickHandlers), [docClickHandler])
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onRemoveDocClickHandler", function (docClickHandler) {
      _this.setState(function (prev) {
        return {
          docClickHandlers: prev.docClickHandlers.filter(function (handler) {
            return handler !== docClickHandler;
          })
        };
      });
    });

    _this.state = {
      escapeKeyHandlers: [],
      docClickHandlers: []
    };
    return _this;
  }

  _createClass(LayersManager, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.forceUpdate();
      (0, _focusVisible.initFocusVisible)(this.containerRef.current);

      if (typeof document !== 'undefined') {
        document.addEventListener('keyup', this.onKeyUp); // using mousedown event so that callback runs before events on children inside of the layer

        document.addEventListener('mousedown', this.onDocumentClick);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof document !== 'undefined') {
        document.removeEventListener('keyup', this.onKeyUp);
        document.removeEventListener('mousedown', this.onDocumentClick);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$overrides = this.props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides;

      var _getOverrides = (0, _overrides.getOverrides)(overrides.AppContainer, StyledAppContainer),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          AppContainer = _getOverrides2[0],
          appContainerProps = _getOverrides2[1];

      var _getOverrides3 = (0, _overrides.getOverrides)(overrides.LayersContainer, StyledLayersContainer),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          LayersContainer = _getOverrides4[0],
          layersContainerProps = _getOverrides4[1];

      return /*#__PURE__*/React.createElement(Consumer, null, function (_ref) {
        var host = _ref.host;

        if (process.env.NODE_ENV !== "production") {
          if (host !== undefined) {
            // eslint-disable-next-line no-console
            console.warn('There is a LayersManager already exists in your application. It is not recommended to have more than one LayersManager in an application.');
          }
        }

        return /*#__PURE__*/React.createElement(Provider, {
          value: {
            host: host || _this2.host.current,
            zIndex: _this2.props.zIndex,
            addEscapeHandler: _this2.onAddEscapeHandler,
            removeEscapeHandler: _this2.onRemoveEscapeHandler,
            addDocClickHandler: _this2.onAddDocClickHandler,
            removeDocClickHandler: _this2.onRemoveDocClickHandler
          }
        }, /*#__PURE__*/React.createElement(AppContainer, _extends({}, appContainerProps, {
          ref: _this2.containerRef
        }), _this2.props.children), /*#__PURE__*/React.createElement(LayersContainer, _extends({}, layersContainerProps, {
          ref: _this2.host
        })));
      });
    }
  }]);

  return LayersManager;
}(React.Component);

exports.default = LayersManager;