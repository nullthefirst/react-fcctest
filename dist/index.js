"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ReactFCCtest = function ReactFCCtest() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react["default"].createElement("script", {
    type: "text/javascript",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
  })));
};

var _default = ReactFCCtest;
exports["default"] = _default;