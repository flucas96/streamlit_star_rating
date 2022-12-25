function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// global Intl
import * as React from 'react';
import { findTimeZone, getZonedTime, listTimeZones } from 'timezone-support/dist/index-1900-2050.js';
import { formatZonedTime } from 'timezone-support/dist/parse-format.js';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
import { LocaleContext } from '../locale/index.js';
import { Select } from '../select/index.js';

class TimezonePicker extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      timezones: [],
      value: null
    });

    _defineProperty(this, "buildTimezones", compareDate => {
      const timezones = listTimeZones().map(zone => {
        const timezone = findTimeZone(zone);
        const zonedTime = getZonedTime(compareDate, timezone);
        const formatted = formatZonedTime(zonedTime, `z - [${zone}] ([GMT] Z)`).replace('_', ' ');
        const option = {
          id: zone,
          label: formatted,
          offset: zonedTime.zone.offset
        };

        if (this.props.mapLabels) {
          option.label = this.props.mapLabels(option);
        }

        return option;
      }) // Formats 'noisy' timezones without a letter acronym.
      .map(option => {
        const rgx = /(^(\+|-)\d+\s- )/;
        const matches = option.label.match(rgx);

        if (matches) {
          const prefix = matches[0];
          option.label = option.label.split(prefix)[1];
        }

        return option;
      }) // Sorts W -> E, prioritizes america. could be more nuanced based on system tz but simple for now
      .sort((a, b) => {
        const offsetDelta = b.offset - a.offset;
        if (offsetDelta !== 0) return offsetDelta;
        if (a.label < b.label) return -1;
        if (a.label > b.label) return 1;
        return 0;
      });
      return timezones;
    });
  }

  componentDidMount() {
    const timezones = this.buildTimezones(this.props.date || new Date());

    if (typeof document !== 'undefined') {
      if (!this.props.value) {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.setState({
          timezones,
          value: tz
        });
        const option = timezones.find(o => o.id === tz);
        option && this.props.onChange && this.props.onChange(option);
      } else {
        this.setState({
          timezones
        });
      }
    } else {
      this.setState({
        timezones
      });
    }
  }

  componentDidUpdate(prevProps) {
    const prevTime = prevProps.date ? prevProps.date.getTime() : 0;
    const nextTime = this.props.date ? this.props.date.getTime() : 0;

    if (prevTime !== nextTime) {
      const timezones = this.buildTimezones(this.props.date || new Date());
      this.setState({
        timezones
      });
      const option = timezones.find(o => o.id === this.state.value);
      option && this.props.onChange && this.props.onChange(option);
    }
  }

  render() {
    const {
      overrides = {}
    } = this.props;
    const [OverriddenSelect, selectProps] = getOverrides(overrides.Select, Select);
    const selectOverrides = mergeOverrides({
      Dropdown: {
        style: {
          maxHeight: '360px'
        }
      }
    }, // $FlowFixMe
    selectProps.overrides); // $FlowFixMe

    selectProps.overrides = selectOverrides;
    return /*#__PURE__*/React.createElement(LocaleContext.Consumer, null, locale => /*#__PURE__*/React.createElement(OverriddenSelect, _extends({
      "aria-label": locale.datepicker.timezonePickerAriaLabel,
      options: this.state.timezones,
      clearable: false,
      disabled: this.props.disabled,
      error: this.props.error,
      positive: this.props.positive,
      size: this.props.size,
      onChange: params => {
        if (params.type === 'clear') {
          this.setState({
            value: ''
          });
          this.props.onChange && this.props.onChange(null);
        } else {
          this.setState({
            value: params.option.id
          });
          this.props.onChange && this.props.onChange(params.option);
        }
      },
      value: this.props.value || this.state.value ? [{
        id: this.props.value || this.state.value
      }] : null
    }, selectProps)));
  }

}

export default TimezonePicker;