"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Thumbnail = exports.Root = exports.HeaderImage = exports.Contents = exports.Body = exports.Action = void 0;

var _index = require("../styles/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Action = (0, _index.styled)('div', function (_ref) {
  var $theme = _ref.$theme;
  return _objectSpread({}, $theme.typography.LabelMedium);
});
exports.Action = Action;
Action.displayName = "Action";
var Body = (0, _index.styled)('div', function (_ref2) {
  var $theme = _ref2.$theme;
  return _objectSpread({
    marginBottom: $theme.sizing.scale600,
    color: $theme.colors.contentPrimary
  }, $theme.typography.ParagraphMedium);
});
exports.Body = Body;
Body.displayName = "Body";
var Contents = (0, _index.styled)('div', function (_ref3) {
  var $theme = _ref3.$theme;
  return {
    marginLeft: $theme.sizing.scale600,
    marginTop: $theme.sizing.scale600,
    marginRight: $theme.sizing.scale600,
    marginBottom: $theme.sizing.scale600
  };
});
exports.Contents = Contents;
Contents.displayName = "Contents";
var HeaderImage = (0, _index.styled)('img', function (_ref4) {
  var $theme = _ref4.$theme;
  return {
    borderTopLeftRadius: $theme.borders.surfaceBorderRadius,
    borderTopRightRadius: $theme.borders.surfaceBorderRadius,
    objectFit: 'contain',
    maxWidth: '100%'
  };
}); // by using the section tag, we can keep the h1 for the title
// https://html.spec.whatwg.org/multipage/sections.html#headings-and-sections

exports.HeaderImage = HeaderImage;
HeaderImage.displayName = "HeaderImage";
var Root = (0, _index.styled)('section', function (_ref5) {
  var $theme = _ref5.$theme;
  return {
    borderLeftWidth: '2px',
    borderTopWidth: '2px',
    borderRightWidth: '2px',
    borderBottomWidth: '2px',
    borderLeftStyle: 'solid',
    borderTopStyle: 'solid',
    borderRightStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftColor: $theme.colors.borderOpaque,
    borderRightColor: $theme.colors.borderOpaque,
    borderTopColor: $theme.colors.borderOpaque,
    borderBottomColor: $theme.colors.borderOpaque,
    borderTopLeftRadius: $theme.borders.surfaceBorderRadius,
    borderTopRightRadius: $theme.borders.surfaceBorderRadius,
    borderBottomLeftRadius: $theme.borders.surfaceBorderRadius,
    borderBottomRightRadius: $theme.borders.surfaceBorderRadius,
    backgroundColor: $theme.colors.backgroundPrimary
  };
});
exports.Root = Root;
Root.displayName = "Root";
var Thumbnail = (0, _index.styled)('img', function (_ref6) {
  var $theme = _ref6.$theme;
  return _objectSpread(_objectSpread({
    float: 'right',
    height: $theme.sizing.scale2400,
    width: $theme.sizing.scale2400,
    objectFit: 'cover',
    borderTopLeftRadius: $theme.borders.surfaceBorderRadius,
    borderTopRightRadius: $theme.borders.surfaceBorderRadius,
    borderBottomLeftRadius: $theme.borders.surfaceBorderRadius,
    borderBottomRightRadius: $theme.borders.surfaceBorderRadius
  }, (0, _index.expandBorderStyles)($theme.borders.border200)), {}, {
    margin: "0 0 ".concat($theme.sizing.scale500, " ").concat($theme.sizing.scale500)
  });
});
exports.Thumbnail = Thumbnail;
Thumbnail.displayName = "Thumbnail";
var Title = (0, _index.styled)('h1', function (_ref7) {
  var $theme = _ref7.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.HeadingSmall), {}, {
    color: $theme.colors.contentPrimary,
    fontWeight: 500,
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: $theme.sizing.scale500,
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0
  });
});
exports.Title = Title;
Title.displayName = "Title";