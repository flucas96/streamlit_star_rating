"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlagHK;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FlagHK(props) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtBAMAAADrb658AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExUReErEe81G+YvFeszGPj39/Xh3+pNN++PgfGxqPTJw+5sWiiYnbIAAAHFSURBVDjL5ZAxbxNBEIVHW7iOuT9wmpViksq7q8TC9TvjS8uBUttYSFQoiSKlNYegBRlBn1CQX8nM7OHEJ/APgCft7Nx738ydTcP9OqB/Ayh2noteXhxQCKkISYoq9JQEkETyMLRYzn1RpGRd0JExyZXUMzOlH1imoXUyJ3VMEumIFrkmQEjWmRWCAfpop0ivIRsKe0u2OmCrtsbtjtEH8Hk/cApUqQ9EkXRxukxpCpxtM58B7720whzVH5eHwGW4efmtENfrZBxTtBXR+xPgVWrO4h0erynJ5zjGZ6iqJ1fvj4F5g9vsxVgSs/ccmXmCa1xM1kfArMUX9qzyssFLb1uaCi948fRtA9RrcVVsGzIdV8BzHZo09YLjdoOtN+p0I5/JvGB5eWdxt4GN8scfzhc8qi75kRTY0T23833A9Du3WP8VGH1FzRvM/gw49vKVc86/xUlmhZzcrjSNcIXZIW7mGpVS1CR7kAnH7qRaYe3xs9JIN4hNVOp8Pq38hew2qDuHSCrZrZgbNFV14WiFuQSkqVNAdggvBNGbT9dSB83MmWkfQBmmTBhNd+/MU8OIrn/QgH6PlZ2Td4hXUl+uS8nRf65f+L6qhL+cU/IAAAAASUVORK5CYII=",
    alt: "HK"
  }, props));
}