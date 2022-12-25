"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WEEKDAYS = exports.STATE_CHANGE_TYPE = exports.ORIENTATION = exports.ISO_MONTH_FORMAT = exports.ISO_FORMAT = exports.DISPLAY_FORMAT = void 0;

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var DISPLAY_FORMAT = 'L';
exports.DISPLAY_FORMAT = DISPLAY_FORMAT;
var ISO_FORMAT = 'YYYY-MM-DD';
exports.ISO_FORMAT = ISO_FORMAT;
var ISO_MONTH_FORMAT = 'YYYY-MM';
exports.ISO_MONTH_FORMAT = ISO_MONTH_FORMAT;
var ORIENTATION = Object.freeze({
  horizontal: 'horizontal',
  vertical: 'vertical'
});
exports.ORIENTATION = ORIENTATION;
var STATE_CHANGE_TYPE = Object.freeze({
  change: 'change',
  moveUp: 'moveUp',
  moveDown: 'moveDown',
  moveLeft: 'moveLeft',
  moveRight: 'moveRight',
  mouseOver: 'mouseOver',
  mouseLeave: 'mouseLeave'
});
exports.STATE_CHANGE_TYPE = STATE_CHANGE_TYPE;
var WEEKDAYS = [0, 1, 2, 3, 4, 5, 6];
exports.WEEKDAYS = WEEKDAYS;