function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { RadioGroupRoot as StyledRadioGroupRoot } from './styled-components.js';
import { isFocusVisible } from '../utils/focusVisible.js';

class StatelessRadioGroup extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isFocusVisible: false,
      focusedRadioIndex: -1
    });

    _defineProperty(this, "handleFocus", (event, index) => {
      if (isFocusVisible(event)) {
        this.setState({
          isFocusVisible: true
        });
      }

      this.setState({
        focusedRadioIndex: index
      });
      this.props.onFocus && this.props.onFocus(event);
    });

    _defineProperty(this, "handleBlur", (event, index) => {
      if (this.state.isFocusVisible !== false) {
        this.setState({
          isFocusVisible: false
        });
      }

      this.setState({
        focusedRadioIndex: -1
      });
      this.props.onBlur && this.props.onBlur(event);
    });
  }

  componentDidMount() {
    if (process.env.NODE_ENV !== "production" && this.props.isError) {
      console.warn('baseui:Radio Property "isError" will be removed in the next major version. Use "error" property instead.');
    }
  }

  render() {
    const {
      overrides = {}
    } = this.props;
    const [RadioGroupRoot, radioGroupRootProps] = getOverrides(overrides.RadioGroupRoot, StyledRadioGroupRoot);

    if (process.env.NODE_ENV !== "production") {
      const overrideKeys = Object.keys(overrides); // TODO(v11)

      if (overrideKeys.length && !overrideKeys.includes('RadioGroupRoot')) {
        // eslint-disable-next-line no-console
        console.warn(`All overrides beside 'RadioGroupRoot' will be deprecated in the next major version update.
          Pass other overrides to the 'Radio' children instead.
        `);
      }
    }

    return /*#__PURE__*/React.createElement(RadioGroupRoot, _extends({
      id: this.props.id,
      role: "radiogroup",
      "aria-describedby": this.props['aria-describedby'],
      "aria-errormessage": this.props['aria-errormessage'],
      "aria-invalid": this.props.error || this.props.isError || null,
      "aria-label": this.props['aria-label'],
      "aria-labelledby": this.props['aria-labelledby'],
      $align: this.props.align,
      $disabled: this.props.disabled,
      $isError: this.props.error || this.props.isError,
      $error: this.props.error || this.props.isError,
      $required: this.props.required
    }, radioGroupRootProps), React.Children.map(this.props.children, (child, index) => {
      if (! /*#__PURE__*/React.isValidElement(child)) {
        return null;
      }

      const checked = this.props.value === child.props.value;
      return /*#__PURE__*/React.cloneElement(child, {
        align: this.props.align,
        autoFocus: this.props.autoFocus,
        checked,
        disabled: this.props.disabled || child.props.disabled,
        isError: this.props.isError,
        error: this.props.error,
        isFocused: this.state.focusedRadioIndex === index,
        isFocusVisible: this.state.isFocusVisible,
        tabIndex: index === 0 && !this.props.value || checked ? '0' : '-1',
        labelPlacement: this.props.labelPlacement,
        name: this.props.name,
        onBlur: e => this.handleBlur(e, index),
        onFocus: e => this.handleFocus(e, index),
        onChange: this.props.onChange,
        onMouseEnter: this.props.onMouseEnter,
        onMouseLeave: this.props.onMouseLeave,
        // will need to remove overrides pass-through on next major version
        overrides: { ...this.props.overrides,
          ...child.props.overrides
        }
      });
    }));
  }

}

_defineProperty(StatelessRadioGroup, "defaultProps", {
  name: '',
  value: '',
  disabled: false,
  autoFocus: false,
  labelPlacement: 'right',
  align: 'vertical',
  isError: false,
  error: false,
  required: false,
  onChange: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onFocus: () => {},
  onBlur: () => {},
  overrides: {}
});

export default StatelessRadioGroup;