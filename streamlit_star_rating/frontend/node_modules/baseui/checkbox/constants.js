"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LABEL_PLACEMENT = exports.STYLE_TYPE = exports.STATE_TYPE = void 0;

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable import/prefer-default-export */
var STATE_TYPE = {
  change: 'CHANGE'
};
exports.STATE_TYPE = STATE_TYPE;
var STYLE_TYPE = Object.freeze({
  default: 'default',
  toggle: 'toggle',
  toggle_round: 'toggle_round'
});
exports.STYLE_TYPE = STYLE_TYPE;
var LABEL_PLACEMENT = Object.freeze({
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left'
});
/* eslint-enable import/prefer-default-export */

exports.LABEL_PLACEMENT = LABEL_PLACEMENT;