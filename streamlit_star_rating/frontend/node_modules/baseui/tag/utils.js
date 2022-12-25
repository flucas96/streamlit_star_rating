"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextFromChildren = getTextFromChildren;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var JOINABLE_TYPES = new Set(['string', 'number']); // Checks the children of a React component to ensure every value is a number
// or a string. If they are, they are joined and returned. Useful for collecting
// text from the child of a node to use as an attribute.

function getTextFromChildren(children) {
  var childList = React.Children.toArray(children).filter(function (child) {
    return child !== null && child !== undefined;
  });

  if (!childList.length) {
    return null;
  }

  var isJoinable = childList.every(function (child) {
    return JOINABLE_TYPES.has(_typeof(child));
  });

  if (!isJoinable) {
    return null;
  } // Join on an empty string to preserve React's whitespace handling:
  // <Tag>foo{'bar'}baz</Tag> => 'foobar'
  // <Tag>foo {'bar'} baz</Tag> => 'foo bar baz'


  return childList.join('');
}