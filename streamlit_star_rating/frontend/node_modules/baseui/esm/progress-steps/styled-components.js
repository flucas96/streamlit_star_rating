function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
export var StyledProgressSteps = styled('ol', function (_ref) {
  var $theme = _ref.$theme;
  return {
    display: 'inline-block',
    marginBottom: 0,
    marginTop: 0,
    paddingTop: $theme.sizing.scale300,
    paddingRight: $theme.sizing.scale100,
    paddingLeft: $theme.sizing.scale100,
    paddingBottom: $theme.sizing.scale300
  };
});
StyledProgressSteps.displayName = "StyledProgressSteps";
export var StyledStep = styled('li', function (_ref2) {
  var $theme = _ref2.$theme;
  return {
    listStyleType: 'none',
    position: 'relative',
    overflow: 'visible'
  };
});
StyledStep.displayName = "StyledStep";
export var StyledIconContainer = styled('div', function (_ref3) {
  var $theme = _ref3.$theme,
      $isActive = _ref3.$isActive,
      $isCompleted = _ref3.$isCompleted,
      $disabled = _ref3.$disabled;
  var currentColor = $theme.colors.backgroundPrimary;
  var size = $theme.sizing.scale500;
  var marginLeft = '26px';
  var marginRight = '26px';
  var font = $theme.typography.LabelMedium;
  var titlePad = $theme.sizing.scale800;

  if ($isActive) {
    size = $theme.sizing.scale700;
    marginLeft = $theme.sizing.scale750;
    marginRight = $theme.sizing.scale750;
  }

  var marginTop = "calc(".concat(titlePad, " + (").concat(font.lineHeight, " - ").concat(size, ") / 2)");

  if ($theme.direction === 'rtl') {
    var _ref4 = [marginRight, marginLeft];
    marginLeft = _ref4[0];
    marginRight = _ref4[1];
  }

  return {
    marginRight: marginRight,
    marginLeft: marginLeft,
    marginTop: marginTop,
    width: size,
    height: size,
    lineHeight: size,
    backgroundColor: currentColor,
    float: $theme.direction === 'rtl' ? 'right' : 'left',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
});
StyledIconContainer.displayName = "StyledIconContainer";
export var StyledIcon = styled('div', function (_ref5) {
  var $theme = _ref5.$theme,
      $isActive = _ref5.$isActive,
      $isCompleted = _ref5.$isCompleted,
      $disabled = _ref5.$disabled;
  var currentColor = $theme.colors.mono400;
  var size = $theme.sizing.scale300;

  if ($isCompleted) {
    currentColor = $theme.colors.primary;
  } else if ($isActive) {
    currentColor = $theme.colors.progressStepsActiveFill;
  }

  if ($isActive) {
    size = $theme.sizing.scale600;
  }

  return {
    width: size,
    height: size,
    lineHeight: size,
    borderTopLeftRadius: size,
    borderTopRightRadius: size,
    borderBottomRightRadius: size,
    borderBottomLeftRadius: size,
    backgroundColor: currentColor,
    float: $theme.direction === 'rtl' ? 'right' : 'left',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
});
StyledIcon.displayName = "StyledIcon";
export var StyledInnerIcon = styled('div', function (_ref6) {
  var $theme = _ref6.$theme;
  return {
    width: $theme.sizing.scale300,
    height: $theme.sizing.scale300,
    lineHeight: $theme.sizing.scale300,
    borderTopLeftRadius: $theme.sizing.scale300,
    borderTopRightRadius: $theme.sizing.scale300,
    borderBottomRightRadius: $theme.sizing.scale300,
    borderBottomLeftRadius: $theme.sizing.scale300,
    backgroundColor: $theme.colors.progressStepsActiveText,
    textAlign: 'center'
  };
});
StyledInnerIcon.displayName = "StyledInnerIcon";
export var StyledContent = styled('div', function (_ref7) {
  var $theme = _ref7.$theme;
  var marginDir = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  return _defineProperty({}, marginDir, $theme.sizing.scale1600);
});
StyledContent.displayName = "StyledContent";
export var StyledContentTitle = styled('div', function (_ref9) {
  var $theme = _ref9.$theme,
      $isActive = _ref9.$isActive,
      $isCompleted = _ref9.$isCompleted;
  var color = $theme.colors.primary400;

  if ($isCompleted) {
    color = $theme.colors.contentSecondary;
  } else if ($isActive) {
    color = $theme.colors.contentPrimary;
  }

  var font = $theme.typography.LabelMedium;
  return _objectSpread(_objectSpread({}, font), {}, {
    color: color,
    paddingTop: $theme.sizing.scale800,
    paddingBottom: $theme.sizing.scale800
  });
});
StyledContentTitle.displayName = "StyledContentTitle";
export var StyledContentTail = styled('div', function (_ref10) {
  var _ref11;

  var $theme = _ref10.$theme,
      $isCompleted = _ref10.$isCompleted,
      $isActive = _ref10.$isActive;
  var currentColor = $theme.colors.mono400;
  var size = $theme.sizing.scale500;
  var font = $theme.typography.LabelMedium;
  var titlePad = $theme.sizing.scale800;

  if ($isActive) {
    size = $theme.sizing.scale700;
  }

  if ($isCompleted) {
    currentColor = $theme.colors.primary;
  }

  var dir = $theme.direction === 'rtl' ? 'right' : 'left';
  return _ref11 = {
    position: 'absolute'
  }, _defineProperty(_ref11, dir, '31px'), _defineProperty(_ref11, "top", 0), _defineProperty(_ref11, "height", "calc(100% + ".concat($theme.sizing.scale500, ")")), _defineProperty(_ref11, "marginBottom", 0), _defineProperty(_ref11, "width", $theme.sizing.scale0), _defineProperty(_ref11, "marginTop", "calc(".concat(titlePad, " + (").concat(font.lineHeight, " + ").concat(size, ") / 2)")), _defineProperty(_ref11, "display", 'inline-block'), _defineProperty(_ref11, "backgroundColor", currentColor), _ref11;
});
StyledContentTail.displayName = "StyledContentTail";
export var StyledContentDescription = styled('div', function (_ref12) {
  var $theme = _ref12.$theme;
  return {
    marginBottom: $theme.sizing.scale700
  };
});
StyledContentDescription.displayName = "StyledContentDescription";
export var StyledNumberStep = styled('li', function (_ref13) {
  var $theme = _ref13.$theme;
  return {
    listStyleType: 'none',
    position: 'relative',
    overflow: 'visible'
  };
});
StyledNumberStep.displayName = "StyledNumberStep";
export var StyledNumberIcon = styled('div', function (_ref14) {
  var $theme = _ref14.$theme,
      $isActive = _ref14.$isActive,
      $isCompleted = _ref14.$isCompleted,
      $disabled = _ref14.$disabled;
  var backgroundColor = $theme.colors.mono400;
  var color = $theme.colors.contentStateDisabled;
  var size = $theme.sizing.scale950;
  var font = $theme.typography.ParagraphMedium;
  var marginLeft = $theme.sizing.scale550;
  var marginRight = $theme.sizing.scale550;
  var titlePad = $theme.sizing.scale800;
  var titleFont = $theme.typography.LabelMedium;

  if ($isCompleted) {
    color = $theme.colors.progressStepsCompletedText;
    backgroundColor = $theme.colors.progressStepsCompletedFill;
  } else if ($isActive) {
    color = $theme.colors.progressStepsActiveText;
    backgroundColor = $theme.colors.progressStepsActiveFill;
  }

  var marginTop = "calc(".concat(titlePad, " + (").concat(titleFont.lineHeight, " - ").concat(size, ") / 2)");
  return _objectSpread({
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginTop: marginTop,
    width: size,
    height: size,
    borderTopLeftRadius: size,
    borderTopRightRadius: size,
    borderBottomRightRadius: size,
    borderBottomLeftRadius: size,
    backgroundColor: backgroundColor,
    color: color,
    float: $theme.direction === 'rtl' ? 'right' : 'left',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }, font);
});
StyledNumberIcon.displayName = "StyledNumberIcon";
export var StyledNumberContentTail = styled('div', function (_ref15) {
  var _ref16;

  var $theme = _ref15.$theme,
      $isActive = _ref15.$isActive,
      $isCompleted = _ref15.$isCompleted,
      $disabled = _ref15.$disabled;
  var currentColor = $theme.colors.mono300;
  var size = $theme.sizing.scale950;
  var titleFont = $theme.typography.LabelMedium;
  var titlePad = $theme.sizing.scale800;

  if ($isCompleted) {
    currentColor = $theme.colors.primary;
  }

  var marginTop = "calc(".concat(titlePad, " + ").concat(size, " + (").concat(titleFont.lineHeight, " - ").concat(size, ") / 2)");
  var dir = $theme.direction === 'rtl' ? 'right' : 'left';
  return _ref16 = {
    position: 'absolute'
  }, _defineProperty(_ref16, dir, '31px'), _defineProperty(_ref16, "top", 0), _defineProperty(_ref16, "height", "calc(100% - ".concat($theme.sizing.scale500, ")")), _defineProperty(_ref16, "paddingBottom", 0), _defineProperty(_ref16, "marginTop", marginTop), _defineProperty(_ref16, "width", $theme.sizing.scale0), _defineProperty(_ref16, "backgroundColor", currentColor), _defineProperty(_ref16, "display", 'inline-block'), _ref16;
});
StyledNumberContentTail.displayName = "StyledNumberContentTail";