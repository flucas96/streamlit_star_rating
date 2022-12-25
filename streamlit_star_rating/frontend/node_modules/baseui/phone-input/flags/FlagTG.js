"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagTG;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagTG(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURf/POP/SQxOWcP/SQecdQg1yVROTbgxtURCCYdcYPP/SRfj39xSYcv/TRhSac+dnf//TR+RAXvLI0PGfrnmDcZcAAAFcSURBVEjH7ZDZloMgDEChAja4gv//r5MQF1Ktg6fjmZdeKcSQC6nKvKcvQJ34bd8m+rbv38WnfgFn/qN94GhbWomjWPpB+gVIP0rfPXC4HXle+KERDbgj9QXhT830i+9O/djEyz4YA1QM1H4z/wFO+tHjGEdaiSWmlaBYsTkQE/pTikI6YfRdwnceh4xpJRRWggmxyYkh9ZDXHUH77IOZMh0/IlBOe53wmmt1xzHl8SWdrVIlTsOqD5wyoAtQbANAmPXACbq/xEeThc3n8wAqRFcax35d9hTX4jSs7RvgBuayU5b7ASJ9d5rE/UV+OiN9OOrCLKlnAas/xJDWEIfNd8/0c2skMy73YRdduv+Ar2/vv/9vqbKgWl5TML9V26jW7S0jD1FZ8qY+v3yI/Yx/92tLD00cbY+t989rvlb1wnzAKVasVK5mUVTYLWnlvs1dQtXFHPZ2wa/v8H8ANL4++C+4KaoAAAAASUVORK5CYII=",
    alt: "TG"
  }, props));
}