"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagSO;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagSO(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUiO3lCU4lud6FaZ5fb3+Mfb8pi/7Haq5gZzvxcAAAF+SURBVDjL7VDBTkIxENzGg9fWGrwSinf6NnDXFLwqPOOZyAdIwv/HmfZReE/wbuKEtruzM7OATH7HWP6MIFwbN2EsAWguI4RJA8GEVVad7hCOvpmoatBGOUCpC61oMNCZQKUQk6FregrAOJSEjFCe3ed5BBO0j3bTa8NQ0KTnPjEULNLqgiCqx8GlOk9Ldj4PUXkIvPesokZgmlLAo55NSeDru6NxlxJ/ho85B7CC2kXvvH98B1JKS77R5wznkACZY+3bVLF2tDHGimPlkOBGdb4CCQLgClfGzrvDUbCPJHMuEs7QLdlQHQt1EjBx1C2ohBsklIi3c6YvsDnh6brgIQteBgJjbHfM8TuYCmvFOswgxbH3KW3xZxtHMvuRQK+1Rvg5pA9326a9pVlygogF8gZ8dstozDxt4UBi2SF1Ga72C60cXm1hCJESTkru1pn1aza0YsQdeNiLveENC1+aOMoJmTVSoqyR4hcyUpCVtesoc+Sl3sVozQ/tP0S+ATzdlwX4VebIAAAAAElFTkSuQmCC",
    alt: "SO"
  }, props));
}