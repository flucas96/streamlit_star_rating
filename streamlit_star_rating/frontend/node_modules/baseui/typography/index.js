"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Caption2 = exports.Caption1 = exports.Label4 = exports.Label3 = exports.Label2 = exports.Label1 = exports.Paragraph4 = exports.Paragraph3 = exports.Paragraph2 = exports.Paragraph1 = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.Display4 = exports.Display3 = exports.Display2 = exports.Display1 = exports.Display = exports.MonoParagraphXSmall = exports.MonoParagraphSmall = exports.MonoParagraphMedium = exports.MonoParagraphLarge = exports.MonoLabelXSmall = exports.MonoLabelSmall = exports.MonoLabelMedium = exports.MonoLabelLarge = exports.MonoHeadingXSmall = exports.MonoHeadingSmall = exports.MonoHeadingMedium = exports.MonoHeadingLarge = exports.MonoHeadingXLarge = exports.MonoHeadingXXLarge = exports.MonoDisplayXSmall = exports.MonoDisplaySmall = exports.MonoDisplayMedium = exports.MonoDisplayLarge = exports.ParagraphXSmall = exports.ParagraphSmall = exports.ParagraphMedium = exports.ParagraphLarge = exports.LabelXSmall = exports.LabelSmall = exports.LabelMedium = exports.LabelLarge = exports.HeadingXSmall = exports.HeadingSmall = exports.HeadingMedium = exports.HeadingLarge = exports.HeadingXLarge = exports.HeadingXXLarge = exports.DisplayXSmall = exports.DisplaySmall = exports.DisplayMedium = exports.DisplayLarge = void 0;

var React = _interopRequireWildcard(require("react"));

var _block = _interopRequireDefault(require("../block/block.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DisplayLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-displaylarge"
  }, props, {
    font: props.font || 'DisplayLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.DisplayLarge = DisplayLarge;
DisplayLarge.displayName = 'DisplayLarge';
var DisplayMedium = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-displaymedium"
  }, props, {
    font: props.font || 'DisplayMedium',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.DisplayMedium = DisplayMedium;
DisplayMedium.displayName = 'DisplayMedium';
var DisplaySmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-displaysmall"
  }, props, {
    font: props.font || 'DisplaySmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.DisplaySmall = DisplaySmall;
DisplaySmall.displayName = 'DisplaySmall';
var DisplayXSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-displayxsmall"
  }, props, {
    font: props.font || 'DisplayXSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.DisplayXSmall = DisplayXSmall;
DisplayXSmall.displayName = 'DisplayXSmall';
var HeadingXXLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-headingxxlarge",
    as: props.as || 'h1'
  }, props, {
    font: props.font || 'HeadingXXLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.HeadingXXLarge = HeadingXXLarge;
HeadingXXLarge.displayName = 'HeadingXXLarge';
var HeadingXLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-headingxlarge",
    as: props.as || 'h2'
  }, props, {
    font: props.font || 'HeadingXLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.HeadingXLarge = HeadingXLarge;
HeadingXLarge.displayName = 'HeadingXLarge';
var HeadingLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-headinglarge",
    as: props.as || 'h3'
  }, props, {
    font: props.font || 'HeadingLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.HeadingLarge = HeadingLarge;
HeadingLarge.displayName = 'HeadingLarge';
var HeadingMedium = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-headingmedium",
    as: props.as || 'h4'
  }, props, {
    font: props.font || 'HeadingMedium',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.HeadingMedium = HeadingMedium;
HeadingMedium.displayName = 'HeadingMedium';
var HeadingSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-headingsmall",
    as: props.as || 'h5'
  }, props, {
    font: props.font || 'HeadingSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.HeadingSmall = HeadingSmall;
HeadingSmall.displayName = 'HeadingSmall';
var HeadingXSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-headingxsmall",
    as: props.as || 'h6'
  }, props, {
    font: props.font || 'HeadingXSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.HeadingXSmall = HeadingXSmall;
HeadingXSmall.displayName = 'HeadingXSmall';
var LabelLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-labellarge"
  }, props, {
    font: props.font || 'LabelLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.LabelLarge = LabelLarge;
LabelLarge.displayName = 'LabelLarge';
var LabelMedium = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-labelmedium"
  }, props, {
    font: props.font || 'LabelMedium',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.LabelMedium = LabelMedium;
LabelMedium.displayName = 'LabelMedium';
var LabelSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-labelsmall"
  }, props, {
    font: props.font || 'LabelSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.LabelSmall = LabelSmall;
LabelSmall.displayName = 'LabelSmall';
var LabelXSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-labelxsmall"
  }, props, {
    font: props.font || 'LabelXSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.LabelXSmall = LabelXSmall;
LabelXSmall.displayName = 'LabelXSmall';
var ParagraphLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-paragraphlarge",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'ParagraphLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.ParagraphLarge = ParagraphLarge;
ParagraphLarge.displayName = 'ParagraphLarge';
var ParagraphMedium = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-paragraphmedium",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'ParagraphMedium',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.ParagraphMedium = ParagraphMedium;
ParagraphMedium.displayName = 'ParagraphMedium';
var ParagraphSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-paragraphsmall",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'ParagraphSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.ParagraphSmall = ParagraphSmall;
ParagraphSmall.displayName = 'ParagraphSmall';
var ParagraphXSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-paragraphxsmall",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'ParagraphXSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.ParagraphXSmall = ParagraphXSmall;
ParagraphXSmall.displayName = 'ParagraphXSmall';
var MonoDisplayLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-monodisplaylarge"
  }, props, {
    font: props.font || 'MonoDisplayLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.MonoDisplayLarge = MonoDisplayLarge;
MonoDisplayLarge.displayName = 'MonoDisplayLarge';
var MonoDisplayMedium = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-monodisplaymedium"
  }, props, {
    font: props.font || 'MonoDisplayMedium',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.MonoDisplayMedium = MonoDisplayMedium;
MonoDisplayMedium.displayName = 'MonoDisplayMedium';
var MonoDisplaySmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-monodisplaysmall"
  }, props, {
    font: props.font || 'MonoDisplaySmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.MonoDisplaySmall = MonoDisplaySmall;
MonoDisplaySmall.displayName = 'MonoDisplaySmall';
var MonoDisplayXSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-monodisplayxsmall"
  }, props, {
    font: props.font || 'MonoDisplayXSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.MonoDisplayXSmall = MonoDisplayXSmall;
MonoDisplayXSmall.displayName = 'MonoDisplayXSmall';
var MonoHeadingXXLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-monoheadingxxlarge",
    as: props.as || 'h1'
  }, props, {
    font: props.font || 'MonoHeadingXXLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.MonoHeadingXXLarge = MonoHeadingXXLarge;
MonoHeadingXXLarge.displayName = 'MonoHeadingXXLarge';
var MonoHeadingXLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-monoheadingxlarge",
    as: props.as || 'h2'
  }, props, {
    font: props.font || 'MonoHeadingXLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.MonoHeadingXLarge = MonoHeadingXLarge;
MonoHeadingXLarge.displayName = 'MonoHeadingXLarge';
var MonoHeadingLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-monoheadinglarge",
    as: props.as || 'h3'
  }, props, {
    font: props.font || 'MonoHeadingLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.MonoHeadingLarge = MonoHeadingLarge;
MonoHeadingLarge.displayName = 'MonoHeadingLarge';
var MonoHeadingMedium = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-monoheadingmedium",
    as: props.as || 'h4'
  }, props, {
    font: props.font || 'MonoHeadingMedium',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.MonoHeadingMedium = MonoHeadingMedium;
MonoHeadingMedium.displayName = 'MonoHeadingMedium';
var MonoHeadingSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-monoheadingsmall",
    as: props.as || 'h5'
  }, props, {
    font: props.font || 'MonoHeadingSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.MonoHeadingSmall = MonoHeadingSmall;
MonoHeadingSmall.displayName = 'MonoHeadingSmall';
var MonoHeadingXSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-monoheadingxsmall",
    as: props.as || 'h6'
  }, props, {
    font: props.font || 'MonoHeadingXSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.MonoHeadingXSmall = MonoHeadingXSmall;
MonoHeadingXSmall.displayName = 'MonoHeadingXSmall';
var MonoLabelLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-monolabellarge"
  }, props, {
    font: props.font || 'MonoLabelLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.MonoLabelLarge = MonoLabelLarge;
MonoLabelLarge.displayName = 'MonoLabelLarge';
var MonoLabelMedium = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-monolabelmedium"
  }, props, {
    font: props.font || 'MonoLabelMedium',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.MonoLabelMedium = MonoLabelMedium;
MonoLabelMedium.displayName = 'MonoLabelMedium';
var MonoLabelSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-monolabelsmall"
  }, props, {
    font: props.font || 'MonoLabelSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.MonoLabelSmall = MonoLabelSmall;
MonoLabelSmall.displayName = 'MonoLabelSmall';
var MonoLabelXSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-monolabelxsmall"
  }, props, {
    font: props.font || 'MonoLabelXSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.MonoLabelXSmall = MonoLabelXSmall;
MonoLabelXSmall.displayName = 'MonoLabelXSmall';
var MonoParagraphLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-monoparagraphlarge",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'MonoParagraphLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.MonoParagraphLarge = MonoParagraphLarge;
MonoParagraphLarge.displayName = 'MonoParagraphLarge';
var MonoParagraphMedium = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-monoparagraphmedium",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'MonoParagraphMedium',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.MonoParagraphMedium = MonoParagraphMedium;
MonoParagraphMedium.displayName = 'MonoParagraphMedium';
var MonoParagraphSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-monoparagraphsmall",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'MonoParagraphSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.MonoParagraphSmall = MonoParagraphSmall;
MonoParagraphSmall.displayName = 'MonoParagraphSmall';
var MonoParagraphXSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(_block.default, _extends({
    "data-baseweb": "typo-monoparagraphxsmall",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'MonoParagraphXSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
exports.MonoParagraphXSmall = MonoParagraphXSmall;
MonoParagraphXSmall.displayName = 'MonoParagraphXSmall'; // TODO(v11): remove
// Aliases for backwards compatibility

var Display = DisplayLarge;
exports.Display = Display;
var Display1 = DisplayLarge;
exports.Display1 = Display1;
var Display2 = DisplayMedium;
exports.Display2 = Display2;
var Display3 = DisplaySmall;
exports.Display3 = Display3;
var Display4 = DisplayXSmall;
exports.Display4 = Display4;
var H1 = HeadingXXLarge;
exports.H1 = H1;
var H2 = HeadingXLarge;
exports.H2 = H2;
var H3 = HeadingLarge;
exports.H3 = H3;
var H4 = HeadingMedium;
exports.H4 = H4;
var H5 = HeadingSmall;
exports.H5 = H5;
var H6 = HeadingXSmall;
exports.H6 = H6;
var Paragraph1 = ParagraphLarge;
exports.Paragraph1 = Paragraph1;
var Paragraph2 = ParagraphMedium;
exports.Paragraph2 = Paragraph2;
var Paragraph3 = ParagraphSmall;
exports.Paragraph3 = Paragraph3;
var Paragraph4 = ParagraphXSmall;
exports.Paragraph4 = Paragraph4;
var Label1 = LabelLarge;
exports.Label1 = Label1;
var Label2 = LabelMedium;
exports.Label2 = Label2;
var Label3 = LabelSmall;
exports.Label3 = Label3;
var Label4 = LabelXSmall;
exports.Label4 = Label4;
var Caption1 = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Paragraph4, _extends({}, props, {
    color: props.color || 'contentSecondary',
    ref: ref
  }));
});
exports.Caption1 = Caption1;
Caption1.displayName = 'Caption1';
var Caption2 = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Label4, _extends({}, props, {
    color: props.color || 'contentSecondary'
  }));
});
exports.Caption2 = Caption2;
Caption2.displayName = 'Caption2';