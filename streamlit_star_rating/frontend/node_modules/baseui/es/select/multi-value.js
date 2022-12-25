function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { Tag, VARIANT as TAG_VARIANT } from '../tag/index.js'; // eslint-disable-next-line flowtype/no-weak-types

export default function MultiValue(props) {
  const {
    overrides = {},
    removeValue,
    ...restProps
  } = props; // todo(v11): remove the MultiValue override in favor of Tag

  const [MultiValue, tagProps] = getOverrides(overrides.Tag || overrides.MultiValue, Tag);
  return /*#__PURE__*/React.createElement(MultiValue, _extends({
    variant: TAG_VARIANT.solid,
    overrides: {
      Root: {
        style: ({
          $theme: {
            sizing
          }
        }) => ({
          marginRight: sizing.scale0,
          marginBottom: sizing.scale0,
          marginLeft: sizing.scale0,
          marginTop: sizing.scale0
        })
      }
    },
    onActionClick: removeValue
  }, restProps, tagProps), props.children);
}