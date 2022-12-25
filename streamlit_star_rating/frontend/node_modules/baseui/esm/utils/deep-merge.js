function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable flowtype/no-weak-types */
export default function deepMerge(target) {
  target = target || {};
  var len = arguments.length <= 1 ? 0 : arguments.length - 1;
  var obj;
  var value;

  for (var i = 0; i < len; i++) {
    obj = (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) || {};

    for (var key in obj) {
      if (_typeof(obj[key]) !== undefined) {
        value = obj[key];

        if (isCloneable(value)) {
          target[key] = deepMerge(
          /* eslint-disable-next-line no-mixed-operators */
          target[key] || Array.isArray(value) && [] || {}, value);
        } else {
          target[key] = value;
        }
      }
    }
  }

  return target;
}
/* eslint-enable flowtype/no-weak-types */

/* eslint-disable-next-line flowtype/no-weak-types */

function isCloneable(obj) {
  /* eslint-disable-next-line eqeqeq */
  return Array.isArray(obj) || {}.toString.call(obj) == '[object Object]';
}