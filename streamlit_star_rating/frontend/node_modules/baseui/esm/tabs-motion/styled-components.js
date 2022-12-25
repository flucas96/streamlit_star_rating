function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { ORIENTATION, FILL } from './constants.js';
import { isHorizontal, isVertical, isRTL, isIntrinsic, isFixed } from './utils.js';
export var StyledRoot = styled('div', function (_ref) {
  var $theme = _ref.$theme,
      _ref$$orientation = _ref.$orientation,
      $orientation = _ref$$orientation === void 0 ? ORIENTATION.horizontal : _ref$$orientation;
  var style = {
    // Creates a stacking context so we can use z-index on the TabHighlight
    // without affecting anything outside of this element.
    transform: 'scale(1)'
  };

  if (isVertical($orientation)) {
    style.display = 'flex';
  }

  return style;
});
StyledRoot.displayName = "StyledRoot";
export var StyledTabList = styled('div', function (_ref2) {
  var $theme = _ref2.$theme,
      _ref2$$fill = _ref2.$fill,
      $fill = _ref2$$fill === void 0 ? FILL.intrinsic : _ref2$$fill,
      _ref2$$orientation = _ref2.$orientation,
      $orientation = _ref2$$orientation === void 0 ? ORIENTATION.horizontal : _ref2$$orientation;
  var style = {
    position: 'relative',
    display: 'flex',
    flexWrap: 'nowrap'
  };

  if (isHorizontal($orientation)) {
    style.flexDirection = 'row';
    style.paddingBottom = '5px';
    style.marginBottom = '-5px';
  } else {
    style.flexDirection = 'column';

    if (isRTL($theme.direction)) {
      style.paddingLeft = '5px';
      style.marginLeft = '-5px';
    } else {
      style.paddingRight = '5px';
      style.marginRight = '-5px';
    }
  }

  if (isIntrinsic($fill)) {
    style['::-webkit-scrollbar'] = {
      display: 'none'
    }; // $FlowFixMe: property missing in StyleObject

    style['-ms-overflow-style'] = 'none';
    style.scrollbarWidth = 'none';

    if (isHorizontal($orientation)) {
      style.overflowX = 'scroll';
    } else {
      style.overflowY = 'scroll';
    }
  }

  return style;
});
StyledTabList.displayName = "StyledTabList";
export var StyledTab = styled('button', function (_ref3) {
  var $theme = _ref3.$theme,
      _ref3$$orientation = _ref3.$orientation,
      $orientation = _ref3$$orientation === void 0 ? ORIENTATION.horizontal : _ref3$$orientation,
      _ref3$$fill = _ref3.$fill,
      $fill = _ref3$$fill === void 0 ? FILL.intrinsic : _ref3$$fill,
      _ref3$$focusVisible = _ref3.$focusVisible,
      $focusVisible = _ref3$$focusVisible === void 0 ? false : _ref3$$focusVisible,
      _ref3$$isActive = _ref3.$isActive,
      $isActive = _ref3$$isActive === void 0 ? false : _ref3$$isActive;

  var style = _objectSpread({
    cursor: 'pointer',
    WebkitAppearance: 'none',
    marginLeft: '0',
    marginRight: '0',
    marginTop: '0',
    marginBottom: '0',
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    paddingLeft: $theme.sizing.scale600,
    paddingTop: $theme.sizing.scale600,
    paddingRight: $theme.sizing.scale600,
    paddingBottom: $theme.sizing.scale600,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    color: $theme.colors.contentPrimary,
    background: $theme.colors.backgroundPrimary,
    transitionProperty: 'background',
    transitionDuration: $theme.animation.timing200,
    transitionTimingFunction: $theme.animation.linearCurve,
    outline: 'none',
    outlineOffset: '-3px',
    ':disabled': {
      cursor: 'not-allowed',
      color: $theme.colors.contentStateDisabled
    },
    ':hover': {
      background: $theme.colors.backgroundSecondary
    },
    ':disabled:hover': {
      background: 'none'
    }
  }, $theme.typography.LabelSmall);

  if ($focusVisible) {
    style.outline = "3px solid ".concat($theme.colors.accent);
  }

  if (isFixed($fill)) {
    style.flexGrow = 1;
    style.flexBasis = 0;
  }

  if (isHorizontal($orientation)) {
    style.justifyContent = 'center';
  } else {
    style.justifyContent = 'flex-end';
  }

  return style;
});
StyledTab.displayName = "StyledTab";
export var StyledArtworkContainer = styled('div', function (_ref4) {
  var $theme = _ref4.$theme,
      _ref4$$orientation = _ref4.$orientation,
      $orientation = _ref4$$orientation === void 0 ? ORIENTATION.horizontal : _ref4$$orientation;
  var style = {
    display: 'flex'
  };

  if (isRTL($theme.direction)) {
    style.marginLeft = $theme.sizing.scale300;
  } else {
    style.marginRight = $theme.sizing.scale300;
  }

  return style;
});
StyledArtworkContainer.displayName = "StyledArtworkContainer";
export var StyledTabBorder = styled('div', function (_ref5) {
  var $theme = _ref5.$theme,
      _ref5$$orientation = _ref5.$orientation,
      $orientation = _ref5$$orientation === void 0 ? ORIENTATION.horizontal : _ref5$$orientation;
  var style = {
    backgroundColor: $theme.colors.borderOpaque,
    position: 'relative'
  };

  if (isHorizontal($orientation)) {
    style.height = '5px';
  } else {
    style.width = '5px';
  }

  return style;
});
StyledTabBorder.displayName = "StyledTabBorder";
export var StyledTabHighlight = styled('div', function (_ref6) {
  var $theme = _ref6.$theme,
      _ref6$$orientation = _ref6.$orientation,
      $orientation = _ref6$$orientation === void 0 ? ORIENTATION.horizontal : _ref6$$orientation,
      _ref6$$length = _ref6.$length,
      $length = _ref6$$length === void 0 ? 0 : _ref6$$length,
      _ref6$$distance = _ref6.$distance,
      $distance = _ref6$$distance === void 0 ? 0 : _ref6$$distance,
      _ref6$$animate = _ref6.$animate,
      $animate = _ref6$$animate === void 0 ? false : _ref6$$animate;
  var style = {
    backgroundColor: $theme.colors.borderSelected,
    position: 'absolute',
    zIndex: 1
  };

  if (isHorizontal($orientation)) {
    style.bottom = '0px';
    style.left = '0px';
    style.height = '5px';
    style.width = "".concat($length, "px");
    style.transform = "translateX(".concat($distance, "px)");
  } else {
    style.transform = "translateY(".concat($distance, "px)");
    style.width = '5px';
    style.height = "".concat($length, "px");

    if (isRTL($theme.direction)) {
      style.left = '0px';
    } else {
      style.right = '0px';
    }
  }

  if ($animate) {
    style.transitionProperty = 'all';
    style.transitionDuration = $theme.animation.timing400;
    style.transitionTimingFunction = $theme.animation.easeInOutQuinticCurve;
  }

  return style;
});
StyledTabHighlight.displayName = "StyledTabHighlight";
export var StyledTabPanel = styled('div', function (_ref7) {
  var $theme = _ref7.$theme,
      _ref7$$pad = _ref7.$pad,
      $pad = _ref7$$pad === void 0 ? true : _ref7$$pad;
  var style = {
    flexGrow: 1,
    // only used in vertical orientation
    outline: 'none'
  };

  if ($pad) {
    style.paddingTop = $theme.sizing.scale600;
    style.paddingRight = $theme.sizing.scale600;
    style.paddingBottom = $theme.sizing.scale600;
    style.paddingLeft = $theme.sizing.scale600;
  }

  return style;
});
StyledTabPanel.displayName = "StyledTabPanel";