"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagKG;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagKG(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURekbN/EoQ+4iPf/vQfzKQPaQP/NqPvBHPqtN/e4AAAHNSURBVDjL3VJNcxoxDFU80Fyxhw1XW1PCuZUXroVNplfIFrgym016bZN28vf7ZC8MIRN6bh94JUtPT/4iex4D+vcIo268S7haWbs5RyhmdlSeEMKxfhHtsDzu4qAQnA2As8XWDmVVRztZW+cQxdd60hwmiIxkNZRSoq1nLgfxHRAyWSDYKrbbny/fWplr0CUW1pCdwC7UsVFqK3dqNOqCJ2bnOCQ8zwMDtnoCP+g/MBS0FqPYfP/N3FY3DRcvj2uHOodiVYDhwFcic/4lIvEpVDJNWqmFdmed3kszEcVXdZk1zpwVEq4jf0wE2CmnmteE8IDKhGbcHKJHhMmWq0xYwH1LKKpPB0KQW3dKuBb5zDmfnOmB4Nl44I0C4qyJvYIxr9aQ04gT+Qz2/OD3u+g3BoxOwbBJXU7OITEAIljvdeD4LvJJwt2ZDl5bwBiDbSx8vguDu9BcWv5hEWPcpifc5s6PcZtaRygnMvuPMc8LUpjqB+Y+NYCCEpWNDdVxByq1ssxRylBr0k/f5GCEN/kliebmSVuzRJey7OmrNvczVaC9QgdD/TvqybKOZNaUFY565JVSP1KvTF5XdKJC/RldlnQGH5ZEG/oLDP2H+AOAK4gvyPUEfgAAAABJRU5ErkJggg==",
    alt: "KG"
  }, props));
}