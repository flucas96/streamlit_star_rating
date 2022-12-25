function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react'; // eslint-disable-next-line flowtype/no-weak-types

export default function (Component, displayName) {
  // eslint-disable-next-line flowtype/no-weak-types
  return /*#__PURE__*/React.forwardRef(function (props, ref) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("We have stabilized the ".concat(displayName, " component, so you can drop the \"Unstable_\" prefix from your imports. We will remove the \"Unstable_\" exports soon, so please make these changes as soon as possible!"));
    }

    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      ref: ref
    }));
  });
}