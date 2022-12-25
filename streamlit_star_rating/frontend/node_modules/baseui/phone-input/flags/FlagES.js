"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagES;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagES(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURdUSJ8kMIM8PJNsWK//HBv/NIP/QLf/JEqcaF89rGuuiHv/ljaRQqnYAAAGCSURBVDjLrZRBboMwEEVHcIHCCYATWOICWVhC6oqNcZpVNkbqLgtb0BuYrFsJcoLeoZfrjDEkURKSBU/2ZMbzlKzyIV+GwVMhZI48JPIQGNac+QoIc5uQ2tBd9zrV0XlCEpyr6y6X+JoFGREkmSfILkkgW8YLaZbFvomvhTeIiDiK0uguXnjMC0K9zH41QVl7fCCouq5q9WltV2OrRn1aq7oEpUQlqh1+gxDKHTFVgZs94KQ+Opqwoq0IqlWFXlUCrbZ2NwynrRW3TEJrLd77gpEShZ+/XxQkTsIg1OAVsgQaW9t2Q7+1ZmR0qDGmBCmd4H6iMY2UjWwaKtLQeIAGQaG3PQrEbCCmmYSv47HzwjWz0A2PBN0UurW6t98oFDhNaFxrfQDOdfF+4uPRBdda45ZrXnBiA+PnLQUdXWyAL7OGsEqAhD488DB2EyDgA4T52HBd6OsYLE8IfGKcYyRxT4F7wZv4xJgDhOZgfnk1QDA/0vntMkLSZPr7n/MjXjtA/gEI0UkCY7aGtwAAAABJRU5ErkJggg==",
    alt: "ES"
  }, props));
}