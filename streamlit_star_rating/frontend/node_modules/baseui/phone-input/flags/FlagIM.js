"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagIM;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagIM(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAMAAAAun0N9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURdQiNvz8/Pf29vjXTeEpPswdMd0nPOQrQdAfNNklOfbm4/LExuNbauBCT+2jrOeBjPnnn+h4P2BI8vgAAAJkSURBVEjH1ZLbtuMgCIaJNTZ4TN//ZYeDqMnudNbavZpfExH4kBzg+Z3gv+f9sD3b/t/MyKI7yMb7pzdc7cUntmr4xc0XrHvv1xrm493dN/zgp56lzagvLZ2pjN2r+FWWuPK+brEMeNsej0eyENn+nSYf6Hy3xcw0wZvwW+5B5tUbs18YkDsPLpDd5nKpm8qdbksaDc9XKeqNVZODBEBX27ftrjzildkmD6g+viAMeb4l41ylZkjJgk/qTdmeKgI92C7MJ51Bys8Q4myARK3F5SBv/FX0ngJeeqk9Ege/6sYj8yblXZFNns9y55FPxN7bq4xY1U9QJZiUn5mdx2Aj4DpoEn8+TsLoFRR5pR3XsEyYHE+c4cDvn38hAhv1QruGligLG4C6ovltT7hzzPOypXjS+8uWNrOVRwMHjYRvzsn5ZEgjrlzSRIDvVSLjjp7fOWskvsn7Cx8Ep3lGWRz179I7HrQILKXIqE6VEXKVElSk4TWPzb63Cjr44bnpVDSUa+IWwi1NQGpAr7VY4rZdVS9KtBQc9sgFALyM7pLPloZDQ7CwMCfAmqeXfvaEAxm0abimb2wQivQvBeDKziK4VPuhIryr8FuV9FWB44AmBRqEVxDPj5ThOzidZ/f1NcszZHqXGupuS1yOmjEbckP5a4i/+hf7UJyl9y6rx79xeuFxrGeD5oJ5Nf2YZyyiDtKtttUfPXwSNVA+Jnzm9+Ta8Wt+P5qLYPabMDmB73ufusyxRzp+/zFWA8yQE6yYGTHiDZ2n6QA9tWuU183e8traSJq97qCBY03ohS6uta1VsH+nb/k/9Ow9mU8R5pQAAAAASUVORK5CYII=",
    alt: "IM"
  }, props));
}