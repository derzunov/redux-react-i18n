import {
    SET_CURRENT_LANGUAGE,
    SET_LANGUAGES,
    SET_DICTIONARIES,
    ADD_DICTIONARY
} from './action-types'

export const setCurrentLanguage = ( languageCode )  =>  ( { type: SET_CURRENT_LANGUAGE, data: languageCode } )
export const setLanguages = ( languageCode )  =>  ( { type: SET_LANGUAGES, data: languageCode } )
export const addDictionary = ( languageCode, dictionary )  =>  ( { type: ADD_DICTIONARY, data: { languageCode, dictionary } } )
export const setDictionaries = ( dictionaries )  =>  ( { type: SET_DICTIONARIES, data: dictionaries } )
