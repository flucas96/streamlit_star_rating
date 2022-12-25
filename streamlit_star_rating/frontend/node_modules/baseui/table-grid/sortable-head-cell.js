"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortableHeadCell = void 0;

var _index = require("../table/index.js");

var _styledComponents = require("./styled-components.js");

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var SortableHeadCell = (0, _index.SortableHeadCellFactory)(_styledComponents.StyledHeadCell);
exports.SortableHeadCell = SortableHeadCell;