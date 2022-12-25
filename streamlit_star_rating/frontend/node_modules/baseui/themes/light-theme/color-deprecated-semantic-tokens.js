"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colorTokens = _interopRequireDefault(require("./color-tokens.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* ---- DEPRECATED ---- */
var _default = function _default() {
  var themePrimitives = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _colorTokens.default;
  return {
    // TODO(#2318) Remove Legacy Semantic Colors values in the next v11 major
    // since it's not used in the component specific tokens
    // and we ship semantic tokens separately

    /* ---- Legacy Semantic Colors ---- */
    // Font Color
    colorPrimary: themePrimitives.black,
    colorSecondary: themePrimitives.mono800,
    // Background
    background: themePrimitives.white,
    backgroundAlt: themePrimitives.white,
    backgroundInv: themePrimitives.primary,
    // Foreground
    foreground: themePrimitives.black,
    foregroundAlt: themePrimitives.mono800,
    foregroundInv: themePrimitives.white,
    // Borders
    border: themePrimitives.mono500,
    borderAlt: themePrimitives.mono600,
    borderFocus: themePrimitives.primary,
    borderError: themePrimitives.negative,
    // Shadow
    shadowFocus: 'rgba(39, 110, 241, 0.32)',
    shadowError: 'rgba(229, 73, 55, 0.32)'
  };
};

exports.default = _default;