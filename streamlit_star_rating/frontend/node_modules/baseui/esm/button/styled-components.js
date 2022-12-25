function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { KIND, SIZE, SHAPE } from './constants.js';
export var BaseButton = styled('button', function (_ref) {
  var $theme = _ref.$theme,
      $size = _ref.$size,
      $kind = _ref.$kind,
      $shape = _ref.$shape,
      $isLoading = _ref.$isLoading,
      $isSelected = _ref.$isSelected,
      $disabled = _ref.$disabled,
      $isFocusVisible = _ref.$isFocusVisible;
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
    display: 'inline-flex',
    // need to maintain button width while showing loading spinner
    flexDirection: $isLoading ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    outline: 'none',
    boxShadow: $isFocusVisible ? "inset 0 0 0 3px ".concat($theme.colors.accent) : 'none',
    textDecoration: 'none',
    WebkitAppearance: 'none',
    transitionProperty: 'background',
    transitionDuration: $theme.animation.timing200,
    transitionTimingFunction: $theme.animation.linearCurve,
    cursor: 'pointer',
    ':disabled': {
      cursor: 'not-allowed',
      backgroundColor: $theme.colors.buttonDisabledFill,
      color: $theme.colors.buttonDisabledText
    },
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0
  }, getFontStyles({
    $theme: $theme,
    $size: $size
  })), getBorderRadiiStyles({
    $theme: $theme,
    $size: $size,
    $shape: $shape
  })), getPaddingStyles({
    $theme: $theme,
    $size: $size,
    $shape: $shape
  })), getKindStyles({
    $theme: $theme,
    $kind: $kind,
    $isLoading: $isLoading,
    $isSelected: $isSelected,
    $disabled: $disabled
  })), getShapeStyles({
    $theme: $theme,
    $shape: $shape,
    $size: $size
  }));
});
BaseButton.displayName = "BaseButton";
export var EndEnhancer = styled('div', function (_ref2) {
  var $theme = _ref2.$theme;
  var marginDirection = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  return _defineProperty({
    display: 'flex'
  }, marginDirection, $theme.sizing.scale500);
});
EndEnhancer.displayName = "EndEnhancer";
export var StartEnhancer = styled('div', function (_ref4) {
  var $theme = _ref4.$theme;
  var marginDirection = $theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';
  return _defineProperty({
    display: 'flex'
  }, marginDirection, $theme.sizing.scale500);
});
StartEnhancer.displayName = "StartEnhancer";
export var LoadingSpinnerContainer = styled('div', function (_ref6) {
  var $theme = _ref6.$theme,
      $size = _ref6.$size;
  // we don't have a theming value for this
  var margins = '3px';

  if ($size === SIZE.mini || $size === SIZE.compact) {
    margins = $theme.sizing.scale0;
  }

  if ($size === SIZE.large) {
    margins = $theme.sizing.scale100;
  }

  return {
    lineHeight: 0,
    position: 'static',
    marginBottom: margins,
    marginTop: margins
  };
});
LoadingSpinnerContainer.displayName = "LoadingSpinnerContainer";
export var LoadingSpinner = styled('span', function (_ref7) {
  var $theme = _ref7.$theme,
      $kind = _ref7.$kind,
      $disabled = _ref7.$disabled,
      $size = _ref7.$size;

  var _getLoadingSpinnerCol = getLoadingSpinnerColors({
    $theme: $theme,
    $kind: $kind,
    $disabled: $disabled
  }),
      foreground = _getLoadingSpinnerCol.foreground,
      background = _getLoadingSpinnerCol.background;

  var dimension = $theme.sizing.scale550;

  if ($size === SIZE.mini || $size === SIZE.compact) {
    dimension = $theme.sizing.scale500;
  }

  if ($size === SIZE.large) {
    dimension = $theme.sizing.scale600;
  }

  return {
    height: dimension,
    width: dimension,
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',
    borderLeftStyle: 'solid',
    borderTopStyle: 'solid',
    borderRightStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftWidth: $theme.sizing.scale0,
    borderTopWidth: $theme.sizing.scale0,
    borderRightWidth: $theme.sizing.scale0,
    borderBottomWidth: $theme.sizing.scale0,
    borderTopColor: foreground,
    borderLeftColor: background,
    borderBottomColor: background,
    borderRightColor: background,
    boxSizing: 'border-box',
    display: 'inline-block',
    animationDuration: $theme.animation.timing700,
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationName: {
      to: {
        transform: 'rotate(360deg)'
      },
      from: {
        transform: 'rotate(0deg)'
      }
    }
  };
});
LoadingSpinner.displayName = "LoadingSpinner";

function getLoadingSpinnerColors(_ref8) {
  var $theme = _ref8.$theme,
      $kind = _ref8.$kind,
      $disabled = _ref8.$disabled;

  if ($disabled) {
    return {
      foreground: $theme.colors.buttonDisabledSpinnerForeground,
      background: $theme.colors.buttonDisabledSpinnerBackground
    };
  }

  switch ($kind) {
    case KIND.secondary:
      {
        return {
          foreground: $theme.colors.buttonSecondarySpinnerForeground,
          background: $theme.colors.buttonSecondarySpinnerBackground
        };
      }

    case KIND.tertiary:
      {
        return {
          foreground: $theme.colors.buttonTertiarySpinnerForeground,
          background: $theme.colors.buttonTertiarySpinnerBackground
        };
      }

    case KIND.minimal:
      {
        return {
          foreground: $theme.colors.buttonMinimalSpinnerForeground,
          background: $theme.colors.buttonMinimalSpinnerBackground
        };
      }

    case KIND.primary:
    default:
      {
        return {
          foreground: $theme.colors.buttonPrimarySpinnerForeground,
          background: $theme.colors.buttonPrimarySpinnerBackground
        };
      }
  }
}

function getBorderRadiiStyles(_ref9) {
  var $theme = _ref9.$theme,
      $size = _ref9.$size,
      $shape = _ref9.$shape;
  var value = $theme.borders.buttonBorderRadius;

  if ($shape === SHAPE.pill) {
    if ($size === SIZE.compact) {
      value = '30px';
    } else if ($size === SIZE.large) {
      value = '42px';
    } else {
      value = '38px';
    }
  } else if ($shape === SHAPE.circle || $shape === SHAPE.round) {
    value = '50%';
  }

  return {
    borderTopRightRadius: value,
    borderBottomRightRadius: value,
    borderTopLeftRadius: value,
    borderBottomLeftRadius: value
  };
}

function getFontStyles(_ref10) {
  var $theme = _ref10.$theme,
      $size = _ref10.$size;

  switch ($size) {
    case SIZE.mini:
      return $theme.typography.font150;

    case SIZE.compact:
      return $theme.typography.font250;

    case SIZE.large:
      return $theme.typography.font450;

    default:
      return $theme.typography.font350;
  }
}

function getPaddingStyles(_ref11) {
  var $theme = _ref11.$theme,
      $size = _ref11.$size,
      $shape = _ref11.$shape;
  var iconShape = $shape === SHAPE.square || $shape === SHAPE.circle || $shape === SHAPE.round;

  switch ($size) {
    case SIZE.mini:
      return {
        paddingTop: $theme.sizing.scale200,
        paddingBottom: $theme.sizing.scale200,
        paddingLeft: iconShape ? $theme.sizing.scale200 : $theme.sizing.scale300,
        paddingRight: iconShape ? $theme.sizing.scale200 : $theme.sizing.scale300
      };

    case SIZE.compact:
      return {
        paddingTop: $theme.sizing.scale400,
        paddingBottom: $theme.sizing.scale400,
        paddingLeft: iconShape ? $theme.sizing.scale400 : $theme.sizing.scale500,
        paddingRight: iconShape ? $theme.sizing.scale400 : $theme.sizing.scale500
      };

    case SIZE.large:
      return {
        paddingTop: $theme.sizing.scale600,
        paddingBottom: $theme.sizing.scale600,
        paddingLeft: iconShape ? $theme.sizing.scale600 : $theme.sizing.scale700,
        paddingRight: iconShape ? $theme.sizing.scale600 : $theme.sizing.scale700
      };

    default:
      return {
        paddingTop: $theme.sizing.scale550,
        paddingBottom: $theme.sizing.scale550,
        paddingLeft: iconShape ? $theme.sizing.scale550 : $theme.sizing.scale600,
        paddingRight: iconShape ? $theme.sizing.scale550 : $theme.sizing.scale600
      };
  }
}

function getKindStyles(_ref12) {
  var $theme = _ref12.$theme,
      $isLoading = _ref12.$isLoading,
      $isSelected = _ref12.$isSelected,
      $kind = _ref12.$kind,
      $disabled = _ref12.$disabled;

  if ($disabled) {
    return Object.freeze({});
  }

  switch ($kind) {
    case KIND.primary:
      if ($isSelected) {
        return {
          color: $theme.colors.buttonPrimarySelectedText,
          backgroundColor: $theme.colors.buttonPrimarySelectedFill
        };
      }

      return {
        color: $theme.colors.buttonPrimaryText,
        backgroundColor: $theme.colors.buttonPrimaryFill,
        ':hover': {
          backgroundColor: $isLoading ? $theme.colors.buttonPrimaryActive : $theme.colors.buttonPrimaryHover
        },
        ':active': {
          backgroundColor: $theme.colors.buttonPrimaryActive
        }
      };

    case KIND.secondary:
      if ($isSelected) {
        return {
          color: $theme.colors.buttonPrimaryText,
          backgroundColor: $theme.colors.buttonPrimaryFill
        };
      }

      return {
        color: $theme.colors.buttonSecondaryText,
        backgroundColor: $theme.colors.buttonSecondaryFill,
        ':hover': {
          backgroundColor: $isLoading ? $theme.colors.buttonSecondaryActive : $theme.colors.buttonSecondaryHover
        },
        ':active': {
          backgroundColor: $theme.colors.buttonSecondaryActive
        }
      };

    case KIND.tertiary:
      if ($isSelected) {
        return {
          color: $theme.colors.buttonTertiarySelectedText,
          backgroundColor: $theme.colors.buttonTertiarySelectedFill
        };
      }

      return {
        color: $theme.colors.buttonTertiaryText,
        backgroundColor: $theme.colors.buttonTertiaryFill,
        ':hover': {
          backgroundColor: $isLoading ? $theme.colors.buttonTertiaryActive : $theme.colors.buttonTertiaryHover
        },
        ':active': {
          backgroundColor: $theme.colors.buttonTertiaryActive
        }
      };

    case KIND.minimal:
      if ($isSelected) {
        return {
          color: $theme.colors.buttonMinimalSelectedText,
          backgroundColor: $theme.colors.buttonMinimalSelectedFill
        };
      }

      return {
        color: $theme.colors.buttonMinimalText,
        backgroundColor: $theme.colors.buttonMinimalFill,
        ':hover': {
          backgroundColor: $isLoading ? $theme.colors.buttonMinimalActive : $theme.colors.buttonMinimalHover
        },
        ':active': {
          backgroundColor: $theme.colors.buttonMinimalActive
        }
      };

    default:
      return Object.freeze({});
  }
}

function getShapeStyles(_ref13) {
  var $theme = _ref13.$theme,
      $shape = _ref13.$shape,
      $size = _ref13.$size;

  if ($shape === SHAPE.circle || $shape === SHAPE.square) {
    var height, width;

    switch ($size) {
      case SIZE.mini:
        height = '28px';
        width = '28px';
        break;

      case SIZE.compact:
        height = '36px';
        width = '36px';
        break;

      case SIZE.large:
        height = '56px';
        width = '56px';
        break;

      case SIZE.default:
      default:
        height = '48px';
        width = '48px';
        break;
    }

    return {
      height: height,
      width: width,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    };
  } else {
    return {};
  }
}