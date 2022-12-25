"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagYE;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagYE(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURdIYL94eNf39/REREff39xkZGfPz8yAgICQkJCKmdpgAAAENSURBVDjL1Yw9isMwEIXHN1BuEBYdICDcmzCoDgjhNoVQ7cY45XbZY+88/cTOLigpXOx+lubNvHkWHdoo+hcB1doeOgkoEjr5VLe5yVNpiZhSdVcFJjqVsimdBaewdj/n9MSf4qPNcZ+Azn2S868AM5+11lJFpLAMGpVZhAeCxbhApx4n9ZIaCA4M/JezImmXXh2I27wRiFbgwMHaGG0MoqWGwNZeKcQHodSwma5Uu2La+ERAoMkega82n68DS5uJlttyv6/GdkI/vXhhnGgcRz9XcjuuzBN572dfkUSZq3ch3+aNQJ+R3mU8pod3IeMcjtD3pjdODj648E4k4vLCQJDMO3HllxOZNjsEvgFdRjikRIevYAAAAABJRU5ErkJggg==",
    alt: "YE"
  }, props));
}