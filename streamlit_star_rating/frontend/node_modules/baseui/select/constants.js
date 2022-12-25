"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SIZE", {
  enumerable: true,
  get: function get() {
    return _index.SIZE;
  }
});
exports.STATE_CHANGE_TYPE = exports.TYPE = void 0;

var _index = require("../input/index.js");

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var TYPE = {
  select: 'select',
  search: 'search'
};
exports.TYPE = TYPE;
var STATE_CHANGE_TYPE = Object.freeze({
  select: 'select',
  remove: 'remove',
  clear: 'clear'
});
exports.STATE_CHANGE_TYPE = STATE_CHANGE_TYPE;