"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagVA;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagVA(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURf7+/v3hRv7gPP/gNv7gQ//fM/Hx8fr6+vX19f7gP//gOf7gOdemLdXU1OSzOPYeJOHg4Oa+XvPs4u7dsujPkfGJjPndVOxNMe26u/JTWPLnyzm/xbgAAAJxSURBVEjHzZTZduIwEEQ1ttWSvK+D4f8/dHqTLIMDPM1JydGWvlVtwon581bmo34R//d/57vvePddfnXJO3WgdW3bdo0nJ1NVVUTiFNd877DK8UQPLOsyEyUXPDJAlnRgPstXK+OOfFy4Pik5qCRbSDdPfdtPs8tlzvXV2Sv27y54fYsqVPRgebiw0fTUfUTT0UhdYA92CHIIef8Sv05930/r6QUMlwYMZy6EKg2aEo0r0aTpic9HdT6GvPQ6X3JCeqgHFm/cJ5m8Wuaj+1O+B908/FP+iT755fw8isHST9HAH/kXIgsq4cePKMDNQp+B3Ob9n1XETUofRzFY5E8AnI7DvJCF4ryTIkkncTr/DbUFw+WFYkW+p9UzzQaAPytno8mDf4GPKVjhWEI6oVysA/DeI95i6355yGdC/cfKkOhcVKJCjPAOxFGuDv5a+voOlmVe8L/P1HUdADWjvp94yaF/XKRpHjvRrA0cfIPjBx7xXnDvo4G2YIqGwSZbSWrGGaDp7eI9gPKd9t8cuvDhmkfkV3/kUwNP/IW4ZnnL13VTv4K13HPNjOhtuHH/xG/Ddplfv3rJS05tOwxD2xMC3Y77rhv1/eszEz1iPuDwMGH+cHtIN/dhuHcjXTNflk0p9aQSzyS6w8mzAfhlwtD7jFvCh11o/CKZsqmx7qyGB9lpHY5tIIeN6GHzIG8P3hyAUHiwhx99VXWwAWvjW/4ag0mlln6Y1am2xHuI1fuN6duuhixTvhVEMbBv27bDSRlvbWm5i5zXKOnC60tnw9jYvcXmhbeljUbwScZKLTFWJmuPu9j8Wz5XeT5+lf9Gv57/B4qPRpSZPV0wAAAAAElFTkSuQmCC",
    alt: "VA"
  }, props));
}