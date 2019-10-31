"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _translatr = _interopRequireDefault(require("translatr"));

var _react = _interopRequireDefault(require("react"));

var Loc = function Loc(_ref) {
  var currentLanguage = _ref.currentLanguage,
      locKey = _ref.locKey,
      number = _ref.number,
      dictionary = _ref.dictionary,
      dispatch = _ref.dispatch,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["currentLanguage", "locKey", "number", "dictionary", "dispatch"]);
  return _react["default"].createElement(_react["default"].Fragment, rest, (0, _translatr["default"])(dictionary, currentLanguage, locKey, number));
};

var _default = Loc;
exports["default"] = _default;