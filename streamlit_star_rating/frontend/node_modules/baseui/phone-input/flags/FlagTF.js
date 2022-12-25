"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagTF;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagTF(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURQIvnwEslwg4sgUzqf////AxP/M/Tfj5+n6Wz/X19vPz8/Hx8bbE5O1TYVBwv+ru9wYsLXQAAAIeSURBVDjLzZKxahtBEIbntCpsI8Je52AIhy7gdrkVBENImgUhEE51Z5y0OaVKYwSHOiOlcJo0CUinN4j0BnETsEvXqVPkDZIHyD9zOp0ky0qbX9rZ2Zlv/z2WpSb01EE96O2wuaGAKuB978eDQB/6h0N75xHHWdvtdDjuZ1m2Awjh0G4z8G4LYKFn2cJhKxBFBZCmvWSHw3iAfnI2DMO1flgAJ4PxOE/iND0bRmEYwTO0IccoMmSNNSf5IM/jpHCIwMAH/SaygMgYtZ/n7BDH5yNsEwtMPMPBGGIADnGanI/E2doIg+fQEOsg/zqbxik7oMom4sBzUACz6XSGE+LXI9lny2itOHgHM6gEWNESMuT7vj76Np/PV4FKhrTv+UfXUAU8d6KuLR0q4I0ALwrgdCugFKq3AtzwHRq6XhMc1EeElgOHRBm6WpMlY798Vqrlri4lkWsgXCYtMqvgYEzLuZEkhkuGyyJeG45115Eq7kn2KtTRQQJTQ7Wg7j41ucxdbnGCjhwJk8b3uqM7pZYnc2IWH8E+v07r7pH7ueyXn1pitT+vWu6l+121NtRw7ha/Lj2sWt9d0E59cJcrKy3Rk6GLZaOLaVH3PB6IGuLo7U3oyQXtTaRKGlGLBOLifsfzAs2RAdktXZ8jj8NJEaVDPp4Uvyr28H1vkRxOuISOprLv85/b/IL04w5n6Gh5UfcFh0IrgHcv2QC2678A/gLcmfQUCpHiZgAAAABJRU5ErkJggg==",
    alt: "TF"
  }, props));
}