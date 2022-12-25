function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import * as valid from 'card-validator';
import { addGaps, getCaretPosition } from './utils.js';
import { getOverrides } from '../helpers/overrides.js';
import { Input, SIZE } from '../input/index.js';
import { ThemeContext } from '../styles/theme-provider.js';
import AmexIcon from './icons/amex.js';
import DinersClubIcon from './icons/dinersclub.js';
import DiscoverIcon from './icons/discover.js';
import EloIcon from './icons/elo.js';
import GenericIcon from './icons/generic.js';
import JcbIcon from './icons/jcb.js';
import MaestroIcon from './icons/maestro.js';
import MastercardIcon from './icons/mastercard.js';
import UnionPayIcon from './icons/unionpay.js';
import VisaIcon from './icons/visa.js';
import { IconWrapper as StyledIconWrapper } from './styled-components.js';
const CardTypeToComponent = {
  visa: VisaIcon,
  mastercard: MastercardIcon,
  'american-express': AmexIcon,
  'diners-club': DinersClubIcon,
  discover: DiscoverIcon,
  jcb: JcbIcon,
  unionpay: UnionPayIcon,
  maestro: MaestroIcon,
  elo: EloIcon,
  generic: GenericIcon
};

class PaymentCard extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "caretPosition", 0);

    _defineProperty(this, "inRef", null);
  }

  componentDidUpdate(prevProps) {
    if (this.inRef && prevProps.value !== this.props.value) {
      this.inRef.setSelectionRange(this.caretPosition, this.caretPosition);
    }
  }

  render() {
    const {
      overrides = {},
      size = SIZE.default,
      onChange,
      value,
      'aria-label': ariaLabel = 'Please enter a debit or credit card number.',
      ...restProps
    } = this.props;
    const {
      IconWrapper: IconWrapperOverride,
      ...restOverrides
    } = overrides;
    const [IconWrapper, iconWrapperProps] = getOverrides(IconWrapperOverride, StyledIconWrapper);
    const validatedValue = valid.number(value);
    let gaps = [];
    let type = undefined;

    if (validatedValue.card) {
      gaps = validatedValue.card.gaps || [];
      type = validatedValue.card.type;
    }

    const getBeforeComponent = theme => {
      const iconSize = {
        [SIZE.mini]: theme.sizing.scale600,
        [SIZE.compact]: theme.sizing.scale800,
        [SIZE.default]: theme.sizing.scale900,
        [SIZE.large]: theme.sizing.scale1000
      };
      return () => /*#__PURE__*/React.createElement(IconWrapper, _extends({
        $size: size
      }, iconWrapperProps), /*#__PURE__*/React.createElement(CardTypeToComponent[type || 'generic'] || GenericIcon, {
        size: iconSize[size]
      }));
    };

    return /*#__PURE__*/React.createElement(ThemeContext.Consumer, null, theme => /*#__PURE__*/React.createElement(Input, _extends({
      size: size,
      "aria-label": ariaLabel,
      "data-baseweb": "payment-card-input",
      inputMode: "numeric",
      overrides: Object.freeze({ ...restOverrides,
        Before: getBeforeComponent(theme)
      }),
      onChange: e => {
        const [position, value] = getCaretPosition(e.target.value, this.props.value ? String(this.props.value) : '', e.target.selectionStart);
        this.caretPosition = position;
        this.inRef = e.target;
        e.target.value = value;
        onChange && onChange(e);
      },
      value: addGaps(gaps, String(value) || '')
    }, restProps)));
  }

}

_defineProperty(PaymentCard, "defaultProps", {
  autoComplete: 'cc-number',
  autoFocus: false,
  disabled: false,
  name: '',
  error: false,
  onBlur: () => {},
  onFocus: () => {},
  overrides: {},
  required: false,
  size: 'default',
  startEnhancer: null,
  endEnhancer: null
});

export default PaymentCard;