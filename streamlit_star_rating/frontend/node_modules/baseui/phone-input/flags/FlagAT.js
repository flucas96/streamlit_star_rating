"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagAT;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagAT(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURe0xQ/E4SvU/UP39/fn5+fT09PHx8YdbDj0AAAEgSURBVDjLzVRBbsJADLR/sM4Lun0BUvyASDF3DglnLuH/T6g93gTRoqgHoJ11Zmc9I24Dfe7jg94QkM4hNaarecWNz41CtYo0XwRJR2qp0hWSffwiUIKLcHESUF7cFJEPc/gp2Bd4M0GTkzOtouRBOLbpbeD753f7Vej3cXhCYOx70370cWiqHLdVD2RmowXUTyhVtQ06kCkiesu19wgeyPYx0DFhE8iRDOUYaLbJfDUfpyAHGHaETjQnfL+qVcyxOtFm3Hkbtl8AlkeBa2BZzuf4XPhAte0FgeX6CNhmYAcX+h/tRnVR2ChyJ1nkmutC8MOrkar4B1hP96x2e4+Zs84FvZbctXZ7Z6PHBfVm9Lq1vbUb/q2r2IB/tpv/qt1fpYTGyqRr6dUAAAAASUVORK5CYII=",
    alt: "AT"
  }, props));
}