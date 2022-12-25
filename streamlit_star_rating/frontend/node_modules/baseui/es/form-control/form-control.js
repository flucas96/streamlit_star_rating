function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverride, getOverrideProps } from '../helpers/overrides.js';
import getBuiId from '../utils/get-bui-id.js';
import { Label as StyledLabel, Caption as StyledCaption, ControlContainer as StyledControlContainer } from './styled-components.js';

function chooseRenderedHint(caption, error, positive, sharedProps) {
  if (error && typeof error !== 'boolean') {
    return typeof error === 'function' ? error(sharedProps) : error;
  }

  if (positive && typeof positive !== 'boolean') {
    return typeof positive === 'function' ? positive(sharedProps) : positive;
  }

  if (caption) {
    return typeof caption === 'function' ? caption(sharedProps) : caption;
  }

  return null;
}

export default class FormControl extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      captionId: getBuiId()
    });
  }

  render() {
    const {
      overrides: {
        Label: LabelOverride,
        Caption: CaptionOverride,
        ControlContainer: ControlContainerOverride
      },
      label,
      caption,
      disabled,
      error,
      positive,
      htmlFor,
      children
    } = this.props;
    const onlyChildProps = React.Children.only(children).props;
    const sharedProps = {
      $disabled: !!disabled,
      $error: !!error,
      $positive: !!positive
    };
    const Label = getOverride(LabelOverride) || StyledLabel;
    const Caption = getOverride(CaptionOverride) || StyledCaption;
    const ControlContainer = getOverride(ControlContainerOverride) || StyledControlContainer;
    const hint = chooseRenderedHint(caption, error, positive, sharedProps);

    if (process.env.NODE_ENV !== "production") {
      if (error && positive) {
        // eslint-disable-next-line no-console
        console.warn(`[FormControl] \`error\` and \`positive\` are both set to \`true\`. \`error\` will take precedence but this may not be what you want.`);
      }
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, label && /*#__PURE__*/React.createElement(Label, _extends({
      "data-baseweb": "form-control-label",
      htmlFor: htmlFor || onlyChildProps.id
    }, sharedProps, getOverrideProps(LabelOverride)), typeof label === 'function' ? label(sharedProps) : label), /*#__PURE__*/React.createElement(ControlContainer, _extends({
      "data-baseweb": "form-control-container"
    }, sharedProps, getOverrideProps(ControlContainerOverride)), React.Children.map(children, (child, index) => {
      if (!child) return;
      const key = child.key || String(index);
      return /*#__PURE__*/React.cloneElement(child, {
        key,
        'aria-errormessage': error ? this.state.captionId : null,
        'aria-describedby': caption || positive ? this.state.captionId : null,
        disabled: onlyChildProps.disabled || disabled,
        error: typeof onlyChildProps.error !== 'undefined' ? onlyChildProps.error : error,
        positive: typeof onlyChildProps.positive !== 'undefined' ? onlyChildProps.positive : positive
      });
    }), (caption || error || positive) && /*#__PURE__*/React.createElement(Caption, _extends({
      "data-baseweb": "form-control-caption",
      id: this.state.captionId
    }, sharedProps, getOverrideProps(CaptionOverride)), hint)));
  }

}

_defineProperty(FormControl, "defaultProps", {
  overrides: {},
  label: null,
  caption: null,
  disabled: false
});