const i18n = ( state, action ) => {

    switch ( action.type ) {

        case 'SET_CURRENT': {

            let newState = Object.assign( {}, state )
            newState.currentLanguage = action.data
            return newState
        }

        case 'SET_LANGUAGES': {

            let newState = Object.assign( {}, state )
            newState.languages = action.data
            return newState
        }

        case 'SET_DICTIONARIES': {

            let newState = Object.assign( {}, state )
            newState.dictionaries = action.data
            return newState
        }

        case 'ADD_DICTIONARY': {

            if ( action.data && action.data.languageCode && action.data.dictionary ) {

                let newState = Object.assign( {}, state )
                newState.dictionaries[ action.data.languageCode ] = action.data.dictionary
                return newState

            } else {
                return state
            }
        }

        default:
            return state || {
                    currentLanguage: 'ru-RU',
                    languages: [
                        {
                            code: 'ru-RU',
                            name: 'Русский'
                        },
                        {
                            code: 'en-US',
                            name: 'English (USA)'
                        }
                    ],
                    dictionaries: {
                        'ru-RU': {
                            'key_1': 'Первый дефолтный ключ',
                            'key_2': [ '$Count', ' ', [ 'штучка','штучки','штучек' ] ], // 1 штучка, 3 штучки, пять штучек
                        },
                        'en-US': {
                            'key_1': 'First default key',
                            'key_2': [ '$Count', ' ', [ 'thing','things' ] ], // 1 thing, 2 things, 153 things
                        }
                    }
            }
    }
}

export default i18n