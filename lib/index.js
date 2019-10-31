"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "i18nReducer", {
  enumerable: true,
  get: function get() {
    return _reducer["default"];
  }
});
Object.defineProperty(exports, "Loc", {
  enumerable: true,
  get: function get() {
    return _Loc["default"];
  }
});
Object.defineProperty(exports, "LocPresentational", {
  enumerable: true,
  get: function get() {
    return _LocPresentational["default"];
  }
});
exports.i18nActions = void 0;

var i18nActions = _interopRequireWildcard(require("./actions"));

exports.i18nActions = i18nActions;

var _reducer = _interopRequireDefault(require("./reducer"));

var _Loc = _interopRequireDefault(require("./Loc"));

var _LocPresentational = _interopRequireDefault(require("./LocPresentational"));