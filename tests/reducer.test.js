import reducer from '../src/reducer'
import initialState from '../src/initialState'
import {
    SET_CURRENT_LANGUAGE,
    SET_LANGUAGES,
    SET_DICTIONARIES,
    ADD_DICTIONARY
} from '../src/action-types'

describe('i18n reducer', () => {
    it( 'should return the initial state', () => {
        expect(
            reducer( undefined, {} )
        ).toEqual( initialState )
    } )

    it( 'should handle SET_CURRENT_LANGUAGE', () => {
        let newState = Object.assign( {}, initialState )
        newState.currentLanguage = 'en-US'
        expect(
            reducer( initialState, {
                type: SET_CURRENT_LANGUAGE,
                data: 'en-US'
            } )
        ).toEqual(
            newState
        )
    } )

    it( 'should handle SET_LANGUAGES', () => {

        let newState = Object.assign( {}, initialState )
        newState.languages = [
            {
                code: 'car-CAR',
                name: 'Птичий'
            },
            {
                code: 'en-US',
                name: 'English (USA)'
            }
        ]
        expect(
            reducer( initialState, {
                type: SET_LANGUAGES,
                data: [
                    {
                        code: 'car-CAR',
                        name: 'Птичий'
                    },
                    {
                        code: 'en-US',
                        name: 'English (USA)'
                    }
                ]
            } )
        ).toEqual(
            newState
        )
    } )

    it( 'should handle SET_DICTIONARIES', () => {

        let newState = Object.assign( {}, initialState )
        newState.dictionaries = {
            'car-CAR': {
                'key_1': 'Первый дефолтный ключ птичьего языка для теста',
                'key_2': [ '$Count', ' ', [ 'птичка', 'птички', 'птичек' ] ],
            },
            'en-US': {
                'key_1': 'First default key',
                'key_2': [ '$Count', ' ', [ 'thing', 'things' ] ],
            }
        }
        expect(
            reducer( initialState, {
                type: SET_DICTIONARIES,
                data: {
                    'car-CAR': {
                        'key_1': 'Первый дефолтный ключ птичьего языка для теста',
                        'key_2': [ '$Count', ' ', [ 'птичка', 'птички', 'птичек' ] ],
                    },
                    'en-US': {
                        'key_1': 'First default key',
                        'key_2': [ '$Count', ' ', [ 'thing', 'things' ] ],
                    }
                }
            } )
        ).toEqual(
            newState
        )
    } )

    it( 'should handle ADD_DICTIONARY', () => {

        let newState = Object.assign( {}, initialState )
        newState.dictionaries[ 'new-NEW' ] = {
            'new_key_1': 'First new default key',
            'new_key_2': [ '$Count new', ' ', [ 'thing', 'things' ] ],
        }

        expect(
            reducer( initialState, {
                type: ADD_DICTIONARY,
                data: {
                    languageCode: 'new-NEW',
                    dictionary: {
                        'new_key_1': 'First new default key',
                        'new_key_2': [ '$Count new', ' ', [ 'thing', 'things' ] ],
                    }
                }
            } )
        ).toEqual(
            newState
        )
    } )

})
