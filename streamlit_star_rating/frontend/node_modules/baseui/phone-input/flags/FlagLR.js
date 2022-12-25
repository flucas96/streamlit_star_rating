"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagLR;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagLR(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURfj4+PPz8wQsbPz8/As9it8iSMsXPNUdQsITNr8RNAk4gQYxddLa5X6Ut7XB0z1gloYJkIgAAAFbSURBVDjL1Y8xS8QwFIBfdpEWXF2yFrHQXyDclEFc3J2c3Vwd7daxt3d6UYSODR7OUhRXD8HBSZ0cRdD3kuvZa9O7QUH8muYl7319SWG0yH6HPfgXgnJ8ujBKOsSAWKAqigdUNCN6BEUPYo2MUr4OzEXy7hZDwnly7xXiRjiD68EOGnfr+grW6voJsTrucAQaq+IRIAZYV1qjRyAugZlWRF8wujLmg+q3xpDbFyo2toSAqdGkeDowEyGCF4raDAg7YR1u2BX04Gx5t2lotIV4QTCvb3L7Zi7EvQ7mWRo5oTtGniOiSJZGRhzKqIz6QkkFKXkiRZZ9QXJFsmONww4H4Cq2yPiFFn8ihMsJIAgFBZrotYMQdhnyHHAHIWxyBjtuw18GME+6Pi42dT7i+9Ow1Uc0I1h9ydPlnPyCMB4iz9N0PM5ISNN8lqNMTo/dpzaRZ8MdHNnq3/yx8AUvWsa9gclYNAAAAABJRU5ErkJggg==",
    alt: "LR"
  }, props));
}