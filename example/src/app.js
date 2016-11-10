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
        }
    ]
) );

store.dispatch( i18nActions.setDictionaries(
    {
        'ru-RU':
            {
                'key_1': 'Первый дефолтный ключ из установленного нами словаря',
                'key_2': [ [ "Остался", "Осталось", "Осталось" ],  " ", "$count", " ", [ "час", "часа", "часов" ] ]
            },
        'en-US':
            {
                'key_1': 'First default key from our dictionary',
                'key_2': ["$count", " ", [ "hour", "hours"] ]
            },
        'pl':
            {
                'key_1': 'Prosze, dwa bilety drugiej klasy do Warszawy.',
                'key_2': [[ "Pozostała", "Pozostały", "Pozostało" ], " ", "$count", " ", [ "godzina", "godziny", "godzin" ] ]
            },
        'fr':
            {
                'key_1': 'Ayant risqué une fois-on peut rester heureux toute la vie',
                'key_2': ["$count", " ", [ "heure", "heures"], " ", [ "restante", "restantes"] ]
            }
    }
) );

store.dispatch( i18nActions.setCurrent( 'ru-RU' ) );