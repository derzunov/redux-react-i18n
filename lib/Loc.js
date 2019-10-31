"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _LocPresentational = _interopRequireDefault(require("./LocPresentational"));

// The component expects that reducer will be named as i18n
var mapStateToProps = function mapStateToProps(_ref, ownProps) {
  var _ref$i18n = _ref.i18n,
      currentLanguage = _ref$i18n.currentLanguage,
      dictionaries = _ref$i18n.dictionaries;
  return {
    currentLanguage: currentLanguage,
    dictionary: dictionaries[currentLanguage]
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(_LocPresentational["default"]);

exports["default"] = _default;