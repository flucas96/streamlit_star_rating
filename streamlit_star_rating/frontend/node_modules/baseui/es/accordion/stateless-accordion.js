function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { Root as StyledRoot } from './styled-components.js';

function StatelessAccordion({
  accordion = true,
  children,
  disabled,
  expanded,
  onChange,
  overrides = {},
  renderAll,
  renderPanelContent
}) {
  const {
    Root: RootOverrides,
    ...PanelOverrides
  } = overrides;
  const [Root, rootProps] = getOverrides(RootOverrides, StyledRoot);
  return /*#__PURE__*/React.createElement(Root, _extends({
    "data-baseweb": "accordion"
  }, rootProps), React.Children.map(children, (child, index) => {
    const key = child.key || String(index);
    return /*#__PURE__*/React.cloneElement(child, {
      disabled: child.props.disabled || disabled,
      expanded: expanded.includes(key),
      key,
      onChange: // Don't bother constructing the wrapper function if no one is listening
      onChange && typeof onChange === 'function' ? () => {
        let next;

        if (accordion) {
          if (expanded.includes(key)) {
            next = [];
          } else {
            next = [key];
          }
        } else {
          if (expanded.includes(key)) {
            next = expanded.filter(k => k !== key);
          } else {
            next = [...expanded, key];
          }
        }

        onChange({
          key,
          expanded: next
        });
      } : onChange,
      overrides: child.props.overrides || PanelOverrides,
      renderAll,
      renderPanelContent
    });
  }));
}

export default StatelessAccordion;