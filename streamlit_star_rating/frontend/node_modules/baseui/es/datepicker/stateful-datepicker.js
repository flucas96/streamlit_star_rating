function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulContainer from './stateful-container.js';
import Datepicker from './datepicker.js';

class StatefulComponent extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(StatefulContainer, this.props, extendedProps => /*#__PURE__*/React.createElement(Datepicker, extendedProps));
  }

}

_defineProperty(StatefulComponent, "defaultProps", {
  initialState: {},
  stateReducer: (type, nextState) => nextState,
  onChange: () => {}
});

export default StatefulComponent;