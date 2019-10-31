"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actionTypes = require("./action-types");

var _initialState = _interopRequireDefault(require("./initialState"));

var i18n = function i18n(state, action) {
  switch (action.type) {
    case _actionTypes.SET_CURRENT_LANGUAGE:
      {
        var newState = Object.assign({}, state);
        newState.currentLanguage = action.data;
        return newState;
      }

    case _actionTypes.SET_LANGUAGES:
      {
        var _newState = Object.assign({}, state);

        _newState.languages = action.data;
        return _newState;
      }

    case _actionTypes.SET_DICTIONARIES:
      {
        var _newState2 = Object.assign({}, state);

        _newState2.dictionaries = action.data;
        return _newState2;
      }

    case _actionTypes.ADD_DICTIONARY:
      {
        if (action.data && action.data.languageCode && action.data.dictionary) {
          var _newState3 = Object.assign({}, state);

          _newState3.dictionaries[action.data.languageCode] = action.data.dictionary;
          return _newState3;
        } else {
          return state;
        }
      }

    default:
      return state || _initialState["default"];
  }
};

var _default = i18n;
exports["default"] = _default;