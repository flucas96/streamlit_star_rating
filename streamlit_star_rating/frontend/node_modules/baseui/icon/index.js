"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Icon: true,
  StyledSvg: true
};
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function get() {
    return _icon.default;
  }
});
Object.defineProperty(exports, "StyledSvg", {
  enumerable: true,
  get: function get() {
    return _styledComponents.Svg;
  }
});

var _icon = _interopRequireDefault(require("./icon.js"));

var _styledComponents = require("./styled-components.js");

var _iconExports = require("./icon-exports.js");

Object.keys(_iconExports).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _iconExports[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _iconExports[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }