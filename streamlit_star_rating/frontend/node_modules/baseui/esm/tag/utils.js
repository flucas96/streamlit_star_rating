function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable import/prefer-default-export */
import * as React from 'react';
var JOINABLE_TYPES = new Set(['string', 'number']); // Checks the children of a React component to ensure every value is a number
// or a string. If they are, they are joined and returned. Useful for collecting
// text from the child of a node to use as an attribute.

export function getTextFromChildren(children) {
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