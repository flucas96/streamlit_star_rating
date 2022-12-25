function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
export var Label = styled('label', function (props) {
  var $disabled = props.$disabled,
      _props$$theme = props.$theme,
      colors = _props$$theme.colors,
      sizing = _props$$theme.sizing,
      typography = _props$$theme.typography;
  return _objectSpread(_objectSpread({}, typography.font250), {}, {
    fontWeight: 500,
    width: '100%',
    color: $disabled ? colors.contentSecondary : colors.contentPrimary,
    display: 'block',
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    marginTop: sizing.scale300,
    marginRight: 0,
    marginBottom: sizing.scale300,
    marginLeft: 0
  });
});
Label.displayName = "Label";
export var Caption = styled('div', function (props) {
  var $error = props.$error,
      $positive = props.$positive,
      _props$$theme2 = props.$theme,
      colors = _props$$theme2.colors,
      sizing = _props$$theme2.sizing,
      typography = _props$$theme2.typography;
  var fontColor = colors.contentSecondary;

  if ($error) {
    fontColor = colors.negative400;
  } else if ($positive) {
    fontColor = colors.positive400;
  }

  return _objectSpread(_objectSpread({}, typography.font100), {}, {
    color: fontColor,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    marginTop: sizing.scale300,
    marginRight: 0,
    marginBottom: sizing.scale300,
    marginLeft: 0
  });
});
Caption.displayName = "Caption";
export var ControlContainer = styled('div', function (props) {
  var sizing = props.$theme.sizing;
  return {
    width: '100%',
    marginBottom: sizing.scale600
  };
});
ControlContainer.displayName = "ControlContainer";