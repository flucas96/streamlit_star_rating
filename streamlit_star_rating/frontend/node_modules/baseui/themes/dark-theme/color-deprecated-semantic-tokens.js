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
    colorPrimary: themePrimitives.mono100,
    colorSecondary: themePrimitives.mono200,
    // Background
    background: themePrimitives.mono1000,
    backgroundAlt: themePrimitives.mono700,
    backgroundInv: themePrimitives.mono100,
    // Foreground
    foreground: themePrimitives.mono100,
    foregroundAlt: themePrimitives.mono300,
    foregroundInv: themePrimitives.mono1000,
    // Borders
    border: themePrimitives.mono600,
    borderAlt: themePrimitives.mono700,
    borderFocus: themePrimitives.primary,
    borderError: themePrimitives.negative,
    // Shadow
    shadowFocus: 'rgba(39, 110, 241, 0.32)',
    shadowError: 'rgba(229, 73, 55, 0.32)'
  };
};

exports.default = _default;