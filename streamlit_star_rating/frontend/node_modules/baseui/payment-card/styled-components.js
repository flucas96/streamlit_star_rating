"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconWrapper = void 0;

var _index = require("../styles/index.js");

var _index2 = require("../input/index.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IconWrapper = (0, _index.styled)('div', function (props) {
  var _margin, _ref;

  var $size = props.$size,
      $theme = props.$theme;
  var margin = (_margin = {}, _defineProperty(_margin, _index2.SIZE.mini, $theme.sizing.scale300), _defineProperty(_margin, _index2.SIZE.compact, $theme.sizing.scale500), _defineProperty(_margin, _index2.SIZE.default, $theme.sizing.scale600), _defineProperty(_margin, _index2.SIZE.large, $theme.sizing.scale700), _margin);
  return _ref = {}, _defineProperty(_ref, $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft', margin[$size]), _defineProperty(_ref, "height", '100%'), _defineProperty(_ref, "display", 'flex'), _defineProperty(_ref, "alignItems", 'center'), _ref;
});
exports.IconWrapper = IconWrapper;
IconWrapper.displayName = "IconWrapper";