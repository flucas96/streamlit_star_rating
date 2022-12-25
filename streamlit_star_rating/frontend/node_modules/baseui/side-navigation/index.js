"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Navigation: true,
  NavItem: true
};
Object.defineProperty(exports, "Navigation", {
  enumerable: true,
  get: function get() {
    return _nav.default;
  }
});
Object.defineProperty(exports, "NavItem", {
  enumerable: true,
  get: function get() {
    return _navItem.default;
  }
});

var _nav = _interopRequireDefault(require("./nav.js"));

var _navItem = _interopRequireDefault(require("./nav-item.js"));

var _styledComponents = require("./styled-components.js");

Object.keys(_styledComponents).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _styledComponents[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _styledComponents[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }