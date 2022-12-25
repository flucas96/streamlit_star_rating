function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable cup/no-undef */
import * as React from 'react';
import { isValidElementType } from 'react-is';
import deepMerge from '../utils/deep-merge.js';

/**
 * Given an override argument, returns the component implementation override if it exists
 */
// eslint-disable-next-line flowtype/no-weak-types
export function getOverride(override) {
  if (isValidElementType(override)) {
    return override;
  } // Check if override is OverrideObjectT


  if (override && _typeof(override) === 'object') {
    // Remove this 'any' once this flow issue is fixed:
    // https://github.com/facebook/flow/issues/6666
    // eslint-disable-next-line flowtype/no-weak-types
    return override.component;
  } // null/undefined


  return override;
}
/**
 * Given an override argument, returns the override props that should be passed
 * to the component when rendering it.
 */

export function getOverrideProps(override) {
  if (override && _typeof(override) === 'object') {
    if (_typeof(override.props) === 'object') {
      return _objectSpread(_objectSpread({}, override.props), {}, {
        $style: override.style
      });
    } else {
      return {
        $style: override.style
      };
    }
  }

  return {};
}
/**
 * Coerces an override argument into an override object
 * (sometimes it is just an override component)
 */

export function toObjectOverride(override) {
  if (isValidElementType(override)) {
    return {
      // eslint-disable-next-line flowtype/no-weak-types
      component: override
    };
  } // Flow can't figure out that typeof 'function' above will
  // catch React.StatelessFunctionalComponent
  // (probably related to https://github.com/facebook/flow/issues/6666)
  // eslint-disable-next-line flowtype/no-weak-types


  return override || {};
}
/**
 * Get a convenient override array that will always have [component, props]
 */

/* eslint-disable flowtype/no-weak-types */

export function getOverrides(override, defaultComponent) {
  var Component = getOverride(override) || defaultComponent;

  if (override && _typeof(override) === 'object' && typeof override.props === 'function') {
    // TODO(v11)
    if (process.env.NODE_ENV !== "production") {
      console.warn('baseui:Overrides Props as a function will be removed in the next major version. Override the whole component instead. ' + 'See https://baseweb.design/guides/understanding-overrides/#override-the-entire-subcomponent');
    }

    var DynamicOverride = /*#__PURE__*/React.forwardRef(function (props, ref) {
      var mappedProps = override.props(props);
      var nextProps = getOverrideProps(_objectSpread(_objectSpread({}, override), {}, {
        props: mappedProps
      }));
      return /*#__PURE__*/React.createElement(Component, _extends({
        ref: ref
      }, nextProps));
    });
    DynamicOverride.displayName = Component.displayName;
    return [DynamicOverride, {}];
  }

  var props = getOverrideProps(override);
  return [Component, props];
}
/* eslint-enable flowtype/no-weak-types */

/**
 * Merges two overrides objects – this is useful if you want to inject your own
 * overrides into a child component, but also accept further overrides from
 * from upstream. See `mergeOverride` below.
 */

export function mergeOverrides() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var merged = Object.assign({}, target, source);
  var allIdentifiers = Object.keys(merged); // const allIdentifiers = Object.keys({...target, ...source});

  return allIdentifiers.reduce(function (acc, name) {
    acc[name] = mergeOverride(toObjectOverride(target[name]), toObjectOverride(source[name]));
    return acc;
  }, {});
}
/**
 * Merges two override objects using the following behavior:
 * - Component implementation from the source (parent) replaces target
 * - Props and styles are both deep merged
 */

export function mergeOverride(target, source) {
  // Shallow merge should handle `component`
  var merged = _objectSpread(_objectSpread({}, target), source);

  if (target.props && source.props) {
    merged.props = mergeConfigurationOverrides(target.props, source.props);
  }

  if (target.style && source.style) {
    merged.style = mergeConfigurationOverrides(target.style, source.style);
  }

  return merged;
}
/**
 * Since style or props overrides can be an object *or* a function, we need to handle
 * the case that one of them is a function. We do this by returning a new
 * function that deep merges the result of each style override
 */

export function mergeConfigurationOverrides(target, source) {
  // Simple case of both objects
  if (_typeof(target) === 'object' && _typeof(source) === 'object') {
    return deepMerge({}, target, source);
  } // At least one is a function, return a new composite function


  return function () {
    return deepMerge({}, typeof target === 'function' ? target.apply(void 0, arguments) : target, typeof source === 'function' ? source.apply(void 0, arguments) : source);
  };
} // Lil' hook for memoized unpacking of overrides

export function useOverrides(defaults) {
  var overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return React.useMemo(function () {
    return (// eslint-disable-next-line flowtype/no-weak-types
      Object.keys(defaults).reduce(function (obj, key) {
        obj[key] = getOverrides(overrides[key], defaults[key]);
        return obj;
      }, {})
    );
  }, [overrides]);
}