export const setCurrent = ( languageCode )  =>  ( { type: "SET_CURRENT", data: languageCode } )
export const setLanguages = ( languageCode )  =>  ( { type: "SET_LANGUAGES", data: languageCode } )
export const addDictionary = ( languageCode, dictionary )  =>  ( { type: "ADD_DICTIONARY", data: { languageCode, dictionary } } )
export const setDictionaries = ( dictionaries )  =>  ( { type: "SET_DICTIONARIES", data: dictionaries } )