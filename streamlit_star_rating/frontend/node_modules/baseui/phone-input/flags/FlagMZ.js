"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagMZ;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagMZ(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURf3hNg+CeNoaPQ97cRCJfugeQ//lQ/7jPREREeAcQA50axkZGf/+/vHx8SAgICQkJNEbPCglJfi+POE7QelnSfCRO5cbMmMaKGFZYZpEWPzbefTU2u+mswSw9pgAAAHCSURBVEjHpZSLcqsgEEBXrALNjRJB00z7/9959wEoJk19HCgLGw4LmWng8XEKaFx9zm+ar0NmxQP5zaM6wAeP7DfuszqI+PiGnKlXMS3q1bQu/OZRR6pVTItlvsqfZx/fUB9g9vENJ/3m8bmbwsc3vKV+npV+Y79O1UfCv10UvqXBf+/zLYvS5ISfnX40Qz5gujH9rcc+x5Qj0jr6NOh56uKuvwEy2As6JB0z924bkAQ76pFPisdNPX/eY+v6Zy/lgQVCa7A2nYC429vCl1zf+oHQWnP06UB1v3TcpK9aDFKTZEH0eIcJxWj/hvg2gOYWbMG03Nq98fHb/0v/rb7irSMQI65wrdL7zaqVUIbqkzOgDDCIiF0pdzMsmfgn85KLAbaVB/zi/ABelorubmbhkmPZjAHFjOMyWOXuZhtAu5XyomHk8q4z2305waqZyZhdfon9uW7n2fff1zN+uF4P+C7pY7sPQJWaBD+0u32uLUcE3e73XS4/tjo36XNc5wiagbh89/gT0HIveJGKgMh4d9BHAEe6c6M+6pON/3ka4k8QT/J8uX6Vp/p4d5BFYjlPG3nQT3m6+4vNm6G7nyGcsuE/FdBQ9vZemsoAAAAASUVORK5CYII=",
    alt: "MZ"
  }, props));
}