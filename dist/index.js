'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactFCCtest = function ReactFCCtest() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement('script', { type: 'text/javascript',
        src: 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js' })
    )
  );
};

exports.default = ReactFCCtest;