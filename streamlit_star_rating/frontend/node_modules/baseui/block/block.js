"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = require("./styled-components.js");

var _overrides = require("../helpers/overrides.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Block(_ref) {
  var forwardedRef = _ref.forwardedRef,
      children = _ref.children,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'div' : _ref$as,
      _ref$overrides = _ref.overrides,
      overrides = _ref$overrides === void 0 ? {} : _ref$overrides,
      color = _ref.color,
      backgroundAttachment = _ref.backgroundAttachment,
      backgroundClip = _ref.backgroundClip,
      backgroundColor = _ref.backgroundColor,
      backgroundImage = _ref.backgroundImage,
      backgroundOrigin = _ref.backgroundOrigin,
      backgroundPosition = _ref.backgroundPosition,
      backgroundRepeat = _ref.backgroundRepeat,
      backgroundSize = _ref.backgroundSize,
      font = _ref.font,
      alignContent = _ref.alignContent,
      alignItems = _ref.alignItems,
      alignSelf = _ref.alignSelf,
      flexDirection = _ref.flexDirection,
      display = _ref.display,
      flex = _ref.flex,
      grid = _ref.grid,
      gridArea = _ref.gridArea,
      gridAutoColumns = _ref.gridAutoColumns,
      gridAutoFlow = _ref.gridAutoFlow,
      gridAutoRows = _ref.gridAutoRows,
      gridColumn = _ref.gridColumn,
      gridColumnEnd = _ref.gridColumnEnd,
      gridColumnGap = _ref.gridColumnGap,
      gridColumnStart = _ref.gridColumnStart,
      gridGap = _ref.gridGap,
      gridRow = _ref.gridRow,
      gridRowEnd = _ref.gridRowEnd,
      gridRowGap = _ref.gridRowGap,
      gridRowStart = _ref.gridRowStart,
      gridTemplate = _ref.gridTemplate,
      gridTemplateAreas = _ref.gridTemplateAreas,
      gridTemplateColumns = _ref.gridTemplateColumns,
      gridTemplateRows = _ref.gridTemplateRows,
      justifyContent = _ref.justifyContent,
      justifyItems = _ref.justifyItems,
      justifySelf = _ref.justifySelf,
      position = _ref.position,
      width = _ref.width,
      minWidth = _ref.minWidth,
      maxWidth = _ref.maxWidth,
      height = _ref.height,
      minHeight = _ref.minHeight,
      maxHeight = _ref.maxHeight,
      overflow = _ref.overflow,
      margin = _ref.margin,
      marginTop = _ref.marginTop,
      marginRight = _ref.marginRight,
      marginBottom = _ref.marginBottom,
      marginLeft = _ref.marginLeft,
      padding = _ref.padding,
      paddingTop = _ref.paddingTop,
      paddingRight = _ref.paddingRight,
      paddingBottom = _ref.paddingBottom,
      paddingLeft = _ref.paddingLeft,
      placeContent = _ref.placeContent,
      placeItems = _ref.placeItems,
      placeSelf = _ref.placeSelf,
      flexWrap = _ref.flexWrap,
      left = _ref.left,
      top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      textOverflow = _ref.textOverflow,
      whiteSpace = _ref.whiteSpace,
      restProps = _objectWithoutProperties(_ref, ["forwardedRef", "children", "as", "overrides", "color", "backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPosition", "backgroundRepeat", "backgroundSize", "font", "alignContent", "alignItems", "alignSelf", "flexDirection", "display", "flex", "grid", "gridArea", "gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridColumn", "gridColumnEnd", "gridColumnGap", "gridColumnStart", "gridGap", "gridRow", "gridRowEnd", "gridRowGap", "gridRowStart", "gridTemplate", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows", "justifyContent", "justifyItems", "justifySelf", "position", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "overflow", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "placeContent", "placeItems", "placeSelf", "flexWrap", "left", "top", "right", "bottom", "textOverflow", "whiteSpace"]);

  var _getOverrides = (0, _overrides.getOverrides)(overrides.Block, _styledComponents.StyledBlock),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      BaseBlock = _getOverrides2[0],
      baseBlockProps = _getOverrides2[1];

  return /*#__PURE__*/React.createElement(BaseBlock // coerced to any because because of how react components are typed.
  // cannot guarantee an html element
  // eslint-disable-next-line flowtype/no-weak-types
  , _extends({
    ref: forwardedRef,
    $as: as,
    $color: color,
    $backgroundAttachment: backgroundAttachment,
    $backgroundClip: backgroundClip,
    $backgroundColor: backgroundColor,
    $backgroundImage: backgroundImage,
    $backgroundOrigin: backgroundOrigin,
    $backgroundPosition: backgroundPosition,
    $backgroundRepeat: backgroundRepeat,
    $backgroundSize: backgroundSize,
    $font: font,
    $alignContent: alignContent,
    $alignItems: alignItems,
    $alignSelf: alignSelf,
    $flexDirection: flexDirection,
    $display: display,
    $flex: flex,
    $grid: grid,
    $gridArea: gridArea,
    $gridAutoColumns: gridAutoColumns,
    $gridAutoFlow: gridAutoFlow,
    $gridAutoRows: gridAutoRows,
    $gridColumn: gridColumn,
    $gridColumnEnd: gridColumnEnd,
    $gridColumnGap: gridColumnGap,
    $gridColumnStart: gridColumnStart,
    $gridGap: gridGap,
    $gridRow: gridRow,
    $gridRowEnd: gridRowEnd,
    $gridRowGap: gridRowGap,
    $gridRowStart: gridRowStart,
    $gridTemplate: gridTemplate,
    $gridTemplateAreas: gridTemplateAreas,
    $gridTemplateColumns: gridTemplateColumns,
    $gridTemplateRows: gridTemplateRows,
    $justifyContent: justifyContent,
    $justifyItems: justifyItems,
    $justifySelf: justifySelf,
    $position: position,
    $width: width,
    $minWidth: minWidth,
    $maxWidth: maxWidth,
    $height: height,
    $minHeight: minHeight,
    $maxHeight: maxHeight,
    $overflow: overflow,
    $margin: margin,
    $marginTop: marginTop,
    $marginRight: marginRight,
    $marginBottom: marginBottom,
    $marginLeft: marginLeft,
    $padding: padding,
    $paddingTop: paddingTop,
    $paddingRight: paddingRight,
    $paddingBottom: paddingBottom,
    $paddingLeft: paddingLeft,
    $placeContent: placeContent,
    $placeItems: placeItems,
    $placeSelf: placeSelf,
    $flexWrap: flexWrap,
    $left: left,
    $top: top,
    $right: right,
    $bottom: bottom,
    $textOverflow: textOverflow,
    $whiteSpace: whiteSpace,
    "data-baseweb": "block"
  }, restProps, baseBlockProps), children);
}

var BlockComponent = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({}, props, {
    forwardedRef: ref
  }));
});
BlockComponent.displayName = 'Block';
var _default = BlockComponent;
exports.default = _default;