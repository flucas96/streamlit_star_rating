function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { STATE_CHANGE_TYPE } from './constants.js';

class StatefulContainer extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onChange", data => {
      const {
        date
      } = data;
      this.internalSetState(STATE_CHANGE_TYPE.change, {
        value: date
      });

      if (typeof this.props.onChange === 'function') {
        this.props.onChange(data);
      }
    });

    const value = props.range ? [] : null;
    this.state = {
      value,
      ...props.initialState
    };
  }

  internalSetState(type, changes) {
    const {
      stateReducer
    } = this.props;
    this.setState(prevState => stateReducer(type, changes, prevState));
  }

  render() {
    const {
      children,
      initialState,
      stateReducer,
      ...restProps
    } = this.props;
    return this.props.children({ ...restProps,
      value: this.state.value,
      onChange: this.onChange
    });
  }

}

_defineProperty(StatefulContainer, "defaultProps", {
  initialState: {},
  stateReducer: (type, nextState) => nextState,
  onChange: () => {}
});

export default StatefulContainer;