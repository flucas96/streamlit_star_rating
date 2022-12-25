"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFixed = exports.isIntrinsic = exports.isRTL = exports.isVertical = exports.isHorizontal = exports.getTabPanelId = exports.getTabId = void 0;

var React = _interopRequireWildcard(require("react"));

var _constants = require("./constants.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var getTabId = function getTabId(uid, key) {
  return "tabs-".concat(uid, "-tab-").concat(key);
};

exports.getTabId = getTabId;

var getTabPanelId = function getTabPanelId(uid, key) {
  return "tabs-".concat(uid, "-tabpanel-").concat(key);
};

exports.getTabPanelId = getTabPanelId;

var isHorizontal = function isHorizontal(orientation) {
  return orientation === _constants.ORIENTATION.horizontal;
};

exports.isHorizontal = isHorizontal;

var isVertical = function isVertical(orientation) {
  return orientation === _constants.ORIENTATION.vertical;
};

exports.isVertical = isVertical;

var isRTL = function isRTL(direction) {
  return direction === 'rtl';
};

exports.isRTL = isRTL;

var isIntrinsic = function isIntrinsic(fill) {
  return fill === _constants.FILL.intrinsic;
};

exports.isIntrinsic = isIntrinsic;

var isFixed = function isFixed(fill) {
  return fill === _constants.FILL.fixed;
};

exports.isFixed = isFixed;