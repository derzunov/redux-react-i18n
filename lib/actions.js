"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDictionaries = exports.addDictionary = exports.setLanguages = exports.setCurrentLanguage = void 0;

var _actionTypes = require("./action-types");

var setCurrentLanguage = function setCurrentLanguage(languageCode) {
  return {
    type: _actionTypes.SET_CURRENT_LANGUAGE,
    data: languageCode
  };
};

exports.setCurrentLanguage = setCurrentLanguage;

var setLanguages = function setLanguages(languageCode) {
  return {
    type: _actionTypes.SET_LANGUAGES,
    data: languageCode
  };
};

exports.setLanguages = setLanguages;

var addDictionary = function addDictionary(languageCode, dictionary) {
  return {
    type: _actionTypes.ADD_DICTIONARY,
    data: {
      languageCode: languageCode,
      dictionary: dictionary
    }
  };
};

exports.addDictionary = addDictionary;

var setDictionaries = function setDictionaries(dictionaries) {
  return {
    type: _actionTypes.SET_DICTIONARIES,
    data: dictionaries
  };
};

exports.setDictionaries = setDictionaries;