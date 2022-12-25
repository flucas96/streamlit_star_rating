"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SORT_DIRECTIONS = exports.DATETIME_OPERATIONS = exports.NUMERICAL_OPERATIONS = exports.NUMERICAL_FORMATS = exports.COLUMNS = void 0;

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var COLUMNS = Object.freeze({
  ANCHOR: 'ANCHOR',
  BOOLEAN: 'BOOLEAN',
  CATEGORICAL: 'CATEGORICAL',
  CUSTOM: 'CUSTOM',
  DATETIME: 'DATETIME',
  NUMERICAL: 'NUMERICAL',
  ROW_INDEX: 'ROW_INDEX',
  STRING: 'STRING'
});
exports.COLUMNS = COLUMNS;
var NUMERICAL_FORMATS = Object.freeze({
  DEFAULT: 'DEFAULT',
  ACCOUNTING: 'ACCOUNTING',
  PERCENTAGE: 'PERCENTAGE'
});
exports.NUMERICAL_FORMATS = NUMERICAL_FORMATS;
var NUMERICAL_OPERATIONS = Object.freeze({
  EQ: 'EQ',
  GT: 'GT',
  GTE: 'GTE',
  LT: 'LT',
  LTE: 'LTE'
});
exports.NUMERICAL_OPERATIONS = NUMERICAL_OPERATIONS;
var DATETIME_OPERATIONS = Object.freeze({
  RANGE_DATETIME: 'RANGE_DATETIME',
  RANGE_DATE: 'RANGE_DATE',
  RANGE_TIME: 'RANGE_TIME',
  WEEKDAY: 'WEEKDAY',
  MONTH: 'MONTH',
  QUARTER: 'QUARTER',
  HALF: 'HALF',
  YEAR: 'YEAR'
});
exports.DATETIME_OPERATIONS = DATETIME_OPERATIONS;
var SORT_DIRECTIONS = Object.freeze({
  ASC: 'ASC',
  DESC: 'DESC'
});
exports.SORT_DIRECTIONS = SORT_DIRECTIONS;