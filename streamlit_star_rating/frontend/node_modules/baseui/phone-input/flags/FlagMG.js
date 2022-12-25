"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagMG;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagMG(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURfpHQxCBP/39/fj4+BONRhGHQvPz8/YVPaQAAAERSURBVDjL7Y4xjsMgEEV9hFDQr8IFIoiot2D6IMEBVqzn/kfYP4MdxYpxUqbYJw+x+T//z3S+8zXt8m/o+JcJ3i0MDFDOSMExTNAMHANDcM4HecJlsGSACLy/DHdwQRkYRHLaMaxYAg4SumO0A3bsLUc7vFyyc007fL9raGNDFOBobWBoGoAzHibIXBOlglkoGEq3KTaOEQWNfykRlTsEUkEFR4aMhLmUiivSEStRpdvE2sFgFq12ocqJQUVjBaa5KlAhr29IQAW3noArWoT1lAqWBuy6JGyRBF4TDgz8nsE+kfOj4SeDamW6mLO1GwMuq8nWGNGyeU6ABPC3/isec3o04DurZjXHyNfWsMNHGP4ArGXq1mbKYCQAAAAASUVORK5CYII=",
    alt: "MG"
  }, props));
}