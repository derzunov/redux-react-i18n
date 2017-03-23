const initialState = {
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
            'key_2': [ '$Count', ' ', [ 'штучка', 'штучки', 'штучек' ] ], // 1 штучка, 3 штучки, пять штучек
        },
        'en-US': {
            'key_1': 'First default key',
            'key_2': [ '$Count', ' ', [ 'thing', 'things' ] ], // 1 thing, 2 things, 153 things
        }
    }
}

export default initialState
