"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledRoot = void 0;

var _index = require("../styles/index.js");

var _index2 = require("../button/index.js");

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var StyledRoot = (0, _index.styled)('div', function (_ref) {
  var $shape = _ref.$shape,
      $length = _ref.$length,
      $theme = _ref.$theme;
  var margin = $length === 1 ? undefined : $shape !== _index2.SHAPE.default ? "-".concat($theme.sizing.scale100) : '-0.5px';
  return {
    display: 'flex',
    marginLeft: margin,
    marginRight: margin
  };
});
exports.StyledRoot = StyledRoot;
StyledRoot.displayName = "StyledRoot";