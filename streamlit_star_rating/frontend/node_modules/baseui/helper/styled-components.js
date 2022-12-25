"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledArrow = exports.StyledBody = void 0;

var _index = require("../styles/index.js");

var _constants = require("../popover/constants.js");

var _styledComponents = require("../popover/styled-components.js");

var _utils = require("../popover/utils.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var CLAMP_ARROW_SIZE = 16;

function dimensions(placement) {
  switch (placement) {
    case _constants.PLACEMENT.left:
    case _constants.PLACEMENT.right:
      return [CLAMP_ARROW_SIZE, CLAMP_ARROW_SIZE * 2];

    case _constants.PLACEMENT.top:
    case _constants.PLACEMENT.bottom:
      return [CLAMP_ARROW_SIZE * 2, CLAMP_ARROW_SIZE];

    default:
      return [CLAMP_ARROW_SIZE, CLAMP_ARROW_SIZE];
  }
}

function linearGradientDirection(placement) {
  return ['to'].concat(_toConsumableArray((0, _utils.splitPlacement)(placement))).join(' ');
}

function conicGradientOrigin(placement) {
  switch (placement) {
    case _constants.PLACEMENT.right:
      return [0, 50];

    case _constants.PLACEMENT.bottom:
      return [50, 0];

    case _constants.PLACEMENT.left:
      return [100, 50];

    case _constants.PLACEMENT.top:
      return [50, 100];

    default:
      return [0, 0];
  }
}

function conicGradientDegStart(placement) {
  switch (placement) {
    case _constants.PLACEMENT.right:
      return 45;

    case _constants.PLACEMENT.bottom:
      return 135;

    case _constants.PLACEMENT.left:
      return 225;

    case _constants.PLACEMENT.top:
      return 315;

    default:
      return 0;
  }
}

function position(offsets, placement, width, height) {
  if (placement === _constants.PLACEMENT.top) {
    return {
      bottom: "-".concat(height, "px"),
      left: "".concat(offsets.left, "px")
    };
  } else if (placement === _constants.PLACEMENT.bottom) {
    return {
      top: "-".concat(height, "px"),
      left: "".concat(offsets.left, "px")
    };
  } else if (placement === _constants.PLACEMENT.left) {
    return {
      top: "".concat(offsets.top, "px"),
      right: "-".concat(width, "px")
    };
  } else if (placement === _constants.PLACEMENT.right) {
    return {
      top: "".concat(offsets.top, "px"),
      left: "-".concat(width, "px")
    };
  } else if (placement === _constants.PLACEMENT.topLeft) {
    return {
      bottom: "-".concat(height, "px")
    };
  } else if (placement === _constants.PLACEMENT.topRight) {
    return {
      bottom: "-".concat(height, "px"),
      right: '0px'
    };
  } else if (placement === _constants.PLACEMENT.rightTop) {
    return {
      left: "-".concat(width, "px")
    };
  } else if (placement === _constants.PLACEMENT.rightBottom) {
    return {
      bottom: '0px',
      left: "-".concat(width, "px")
    };
  } else if (placement === _constants.PLACEMENT.bottomRight) {
    return {
      top: "-".concat(height, "px"),
      right: '0px'
    };
  } else if (placement === _constants.PLACEMENT.bottomLeft) {
    return {
      top: "-".concat(height, "px")
    };
  } else if (placement === _constants.PLACEMENT.leftBottom) {
    return {
      right: "-".concat(width, "px"),
      bottom: '0px'
    };
  } else if (placement === _constants.PLACEMENT.leftTop) {
    return {
      right: "-".concat(width, "px")
    };
  }

  return {};
}

function clampArrowStyle(offsets, placement, color) {
  if (placement === _constants.PLACEMENT.auto) {
    return {};
  } else if (placement === _constants.PLACEMENT.top || placement === _constants.PLACEMENT.bottom || placement === _constants.PLACEMENT.left || placement === _constants.PLACEMENT.right) {
    var _dimensions = dimensions(placement),
        _dimensions2 = _slicedToArray(_dimensions, 2),
        w = _dimensions2[0],
        h = _dimensions2[1];

    var _conicGradientOrigin = conicGradientOrigin(placement),
        _conicGradientOrigin2 = _slicedToArray(_conicGradientOrigin, 2),
        x = _conicGradientOrigin2[0],
        y = _conicGradientOrigin2[1];

    return _objectSpread({
      position: 'absolute',
      width: "".concat(w, "px"),
      height: "".concat(h, "px"),
      background: "conic-gradient(from ".concat(conicGradientDegStart(placement), "deg at ").concat(x, "% ").concat(y, "%, ").concat(color, " 0%, ").concat(color, " 25%, transparent 25%, transparent 100%)")
    }, position(offsets, placement, w, h));
  } else {
    var _dimensions3 = dimensions(placement),
        _dimensions4 = _slicedToArray(_dimensions3, 2),
        _w = _dimensions4[0],
        _h = _dimensions4[1];

    return _objectSpread({
      position: 'absolute',
      width: "".concat(_w, "px"),
      height: "".concat(_h, "px"),
      background: "linear-gradient(".concat(linearGradientDirection(placement), ", transparent 0%, transparent 50%, ").concat(color, " 50%, ").concat(color, " 100%)")
    }, position(offsets, placement, _w, _h));
  }
}

var StyledBody = (0, _index.styled)('div', function (props) {
  return _objectSpread(_objectSpread(_objectSpread({}, (0, _styledComponents.getBodyStyles)(props)), (0, _utils.getPopoverMarginStyles)(props.$showArrow ? CLAMP_ARROW_SIZE : 0, props.$placement, props.$popoverMargin)), {}, {
    backgroundColor: props.$theme.colors.backgroundPrimary
  });
});
exports.StyledBody = StyledBody;
StyledBody.displayName = "StyledBody";
var StyledArrow = (0, _index.styled)('div', function (props) {
  return _objectSpread({}, clampArrowStyle(props.$arrowOffset, props.$placement, props.$theme.colors.backgroundPrimary));
});
exports.StyledArrow = StyledArrow;
StyledArrow.displayName = "StyledArrow";