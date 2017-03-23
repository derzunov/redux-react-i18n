import initialState from './initialState'

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
            return state || initialState
    }
}

export default i18n
