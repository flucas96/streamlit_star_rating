function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { getInputStyles, getInputContainerStyles, getRootStyles } from '../input/styled-components.js';
// $FlowFixMe https://github.com/facebook/flow/issues/7745
export var StyledTextAreaRoot = styled('div', function (props) {
  return getRootStyles(_objectSpread(_objectSpread({}, props), {}, {
    $hasIconTrailing: false
  }));
}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

StyledTextAreaRoot.displayName = "StyledTextAreaRoot";
export var StyledTextareaContainer = styled('div', function (props) {
  return _objectSpread({}, getInputContainerStyles(props));
}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

StyledTextareaContainer.displayName = "StyledTextareaContainer";
export var StyledTextarea = styled('textarea', function (props) {
  return _objectSpread(_objectSpread({}, getInputStyles(props)), {}, {
    resize: 'none'
  });
});
StyledTextarea.displayName = "StyledTextarea";