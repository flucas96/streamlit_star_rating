"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledInputOverrideInput = exports.StyledInputOverrideRoot = exports.StyledRoot = void 0;

var _index = require("../styles/index.js");

var _styledComponents = require("../input/styled-components.js");

var _constants = require("../input/constants.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledRoot = (0, _index.styled)('div', {
  display: 'flex',
  alignItems: 'center'
});
exports.StyledRoot = StyledRoot;
StyledRoot.displayName = "StyledRoot";
var StyledInputOverrideRoot = (0, _index.withStyle)(_styledComponents.Root, function (_ref) {
  var _SIZE$mini$SIZE$compa;

  var _ref$$size = _ref.$size,
      $size = _ref$$size === void 0 ? _constants.SIZE.default : _ref$$size;
  var width = (_SIZE$mini$SIZE$compa = {}, _defineProperty(_SIZE$mini$SIZE$compa, _constants.SIZE.mini, '32px'), _defineProperty(_SIZE$mini$SIZE$compa, _constants.SIZE.compact, '36px'), _defineProperty(_SIZE$mini$SIZE$compa, _constants.SIZE.default, '48px'), _defineProperty(_SIZE$mini$SIZE$compa, _constants.SIZE.large, '56px'), _SIZE$mini$SIZE$compa)[$size];
  return {
    width: width,
    marginRight: '8px'
  };
});
exports.StyledInputOverrideRoot = StyledInputOverrideRoot;
StyledInputOverrideRoot.displayName = "StyledInputOverrideRoot";
var StyledInputOverrideInput = (0, _index.withStyle)(_styledComponents.Input, {
  textAlign: 'center',
  paddingLeft: '0',
  paddingRight: '0'
});
exports.StyledInputOverrideInput = StyledInputOverrideInput;
StyledInputOverrideInput.displayName = "StyledInputOverrideInput";