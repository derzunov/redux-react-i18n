import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { i18nReducer, i18nActions } from 'redux-react-i18n';

let reducers = {};
import { reducer as formReducer } from 'redux-form'
reducers.form = formReducer;
reducers.i18n = i18nReducer;

import App from './components/App';

const store = createStore( combineReducers( reducers ) );

store.dispatch( i18nActions.setLanguages(
    [
        {
            code: 'ru-RU',
            name: 'Русский'
        },
        {
            code: 'en-US',
            name: 'English (USA)'
        },
        {
            code: 'pl',
            name: 'Polish'
        },
        {
            code: 'fr',
            name: 'French'
        },
        {
            code: 'be',
            name: 'Белорусский'
        }
    ]
) );

store.dispatch( i18nActions.setDictionaries(
    {
        'ru-RU':
            {
                'key_1': 'Первый дефолтный ключ из установленного нами словаря',
                'key_2': [ [ "Остался", "Осталось", "Осталось" ],  " ", "$count", " ", [ "час", "часа", "часов" ] ],
                'key_3': 'Просто число после двоеточия: $Count',
                'key_4': {
                    nested_1: 'Москва',
                    nested_2: 'Санкт-Петербург'
                }
            },
        'en-US':
            {
                'key_1': 'First default key from our dictionary',
                'key_2': ["$count", " ", [ "hour", "hours"] ],
                'key_3': 'Number: $Count',
                'key_4': {
                    nested_1: 'Moscow',
                    nested_2: 'St. Petersburg'
                }
            },
        'pl':
            {
                'key_1': 'Prosze, dwa bilety drugiej klasy do Warszawy.',
                'key_2': [[ "Pozostała", "Pozostały", "Pozostało" ], " ", "$count", " ", [ "godzina", "godziny", "godzin" ] ],
                'key_3': 'Numer: $Count',
                'key_4': {
                    nested_1: 'Moskwa',
                    nested_2: 'Petersburg'
                }
            },
        'fr':
            {
                'key_1': 'Ayant risqué une fois-on peut rester heureux toute la vie',
                'key_2': ["$count", " ", [ "heure", "heures"], " ", [ "restante", "restantes"] ],
                'key_3': 'Nombre: $Count',
                'key_4': {
                    nested_1: 'Moscou',
                    nested_2: 'St. Pétersbourg'
                }
            },
        'be':
            {
                'key_1': 'Адзін квіток да Мінска, калі ласка',
                'key_2': [ [ "Засталася", "Засталося", "Засталося" ],  " ", "$count", " ", [ "гадзіна", "гадзіны", "гадзін" ] ],
                'key_3': 'Засталося: $Count',
                'key_4': {
                    nested_1: 'Масква',
                    nested_2: 'Санкт-Пецярбург'
                }
            }
    }
) );

store.dispatch( i18nActions.setCurrentLanguage( 'ru-RU' ) );

function render () {
    ReactDOM.render(
        <Provider store={store}>
            <App></App>
        </Provider>
        ,
        document.getElementById('root'));
}

render();
