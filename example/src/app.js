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

function render () {
    ReactDOM.render(
        <Provider store={store}>
            <App></App>
        </Provider>
        ,
        document.getElementById('root'));
}

render();

store.subscribe(render);

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
                'key_3': 'Просто число после двоеточия: $Count'
            },
        'en-US':
            {
                'key_1': 'First default key from our dictionary',
                'key_2': ["$count", " ", [ "hour", "hours"] ],
                'key_3': 'Number: $Count'
            },
        'pl':
            {
                'key_1': 'Prosze, dwa bilety drugiej klasy do Warszawy.',
                'key_2': [[ "Pozostała", "Pozostały", "Pozostało" ], " ", "$count", " ", [ "godzina", "godziny", "godzin" ] ],
                'key_3': 'Numer: $Count'
            },
        'fr':
            {
                'key_1': 'Ayant risqué une fois-on peut rester heureux toute la vie',
                'key_2': ["$count", " ", [ "heure", "heures"], " ", [ "restante", "restantes"] ],
                'key_3': 'Nombre: $Count'
            },
        'be':
            {
                'key_1': 'Адзін квіток да Мінска, калі ласка', //Застаўся 1 гадзіна
                'key_2': [ [ "Застаўся", "Засталіся", "Засталося" ],  " ", "$count", " ", [ "гадзіна", "гадзіны", "гадзін" ] ],
                'key_3': 'Засталося: $Count'
            }
    }
) );

store.dispatch( i18nActions.setCurrent( 'ru-RU' ) );
