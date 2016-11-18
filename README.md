# redux-react-i18n

[![Build Status](https://travis-ci.org/derzunov/redux-react-i18n.svg?branch=master)](https://travis-ci.org/derzunov/redux-react-i18n)
[![npm](https://img.shields.io/npm/dt/redux-react-i18n.svg)](https://www.npmjs.com/package/redux-react-i18n)
[![npm](https://img.shields.io/npm/v/redux-react-i18n.svg)](https://www.npmjs.com/package/redux-react-i18n)

An i18n solution for Redux/React + React Native

## Workers of all countries, unite!



### Supported languages list with expected codes for pluralize mechanics switching
- Russian ( ru, ru-RU )
- English ( en, en-US, en-UK )
- French ( fr )
- German ( de )
- Polish ( pl )
- Czech ( cs )
- Portuguese ( pt )
- Brazilian Portuguese ( pt-BR, br )
- Arabic ( ar-AR, ar )
- Turkish ( tr )
- Occitan ( oc )
- Belarusian ( be )
- Bosnian ( bs )
- Croatian ( hr )
- Serbian ( sr )
- Ukrainian ( uk )
- ...

## Example Demo

[derzunov.github.io/redux-react-i18n](https://derzunov.github.io/redux-react-i18n/)

### What's in demo?
- webpack/gulp dev/prod build system
- languages:
   * English
   * Russian
   * Polish
   * French
   * Belarusian
   * ...
- language switcher component
- simple key demo
- key with pluralization demo

```
git clone https://github.com/derzunov/redux-react-i18n redux-react-i18n
cd redux-react-i18n/example
npm i
```
and then
```
gulp
```
or
```
gulp prod
```

## Short code demo

####Write ( jsx ):
```jsx
<Loc locKey="your_key_1"/>
<Loc locKey="your_key_2" number={1}/>
<Loc locKey="your_key_2" number={2}/>
<Loc locKey="your_key_2" number={5}/>
```
####Result ( html ):
```html
<span>Перевод вашего первого ключа из словаря для текущего языка</span>
<span>Пришла 1 кошечка</span>
<span>Пришли 2 кошечки</span>
<span>Пришло 5 кошечек</span>
```
======

### What am I using:
pluralizer: ( [github](https://github.com/derzunov/pluralizer) or [npm](https://www.npmjs.com/package/pluralizr) ) for plural forms changing

translator: ( [github](https://github.com/derzunov/translator) or [npm](https://www.npmjs.com/package/translatr) ) for translation ([translator demo](https://derzunov.github.io/translator/))

### Install:
Terminal:
```
npm i 'redux-react-i18n'
```

## Full code demo ( complete solution for Redux ):
```
import { i18nReducer, i18nActions, Loc } from 'redux-react-i18n'

...
// reducers - is your reducers
reducers.i18n = i18nReducer
...

const store = createStore( combineReducers( reducers ) )

...
// Set dictionaries (simpliest exapmple) -----------------------------------------------------------------------------------------------

// This dictionaries can be supported by Localization team without need to know somth about interface or project, 
// and you just can fetch it to your project
const dictionaries = {
    'ru-RU': {
        'key_1': 'Первый дефолтный ключ',
        'key_2': [ '$Count', ' ', ['штучка','штучки','штучек']], // 1 штучка, 3 штучки, пять штучек
        /* ... */
        /* Other keys */
    },
    'en-US': {
        'key_1': 'First default key',
        'key_2': [ '$Count', ' ', ['thing','things']], // 1 thing, 2 things, 153 things
    }
    /* ... */
    /* Other dictionaries */
}
store.dispatch( i18nActions.setDictionaries( dictionaries ) )
// / Set dictionaries (simpliest exapmple) ---------------------------------------------------------------------------------------------

// Set languages (simpliest exapmple) --------------------------------------------------------------------------------------------------
const languages = [
    {
        code: 'ru-RU',
        name: 'Русский'
    },
    {
        code: 'en-US',
        name: 'English (USA)'
    }
    /* ... */
    /* Other languages */
]

store.dispatch( i18nActions.setLanguages( languages ) )
// / Set languages (simpliest exapmple) ------------------------------------------------------------------------------------------------

// Set current language code (you can map this action to select component or somth like this)
store.dispatch( i18nActions.setCurrent( 'ru-RU' ) )
```

#### And now inside any component you can use mapped container component

```
import { Loc } from 'redux-react-i18n'
...

<p>
  <Loc locKey="key_1"/> // => Первый дефолтный ключ
</p>

<p>
  <Loc locKey="key_2" number={7}/> // => 7 штучек
</p>
```

## If you don't want to use a complete solution:

#### Just use a dumb component and you can design store/actions/reducers by yourself like you want

```
// Just import presentational component LocPresentational
import { LocPresentational } from 'redux-react-i18n'
...
...
...
// Then map data to props => currentLanguage, dictionary (See more in src/Loc.js):
const mapStateToProps = ( { /*getting data from the state*/ }, ownProps ) => ({
    currentLanguage: yourCurrentLanguageFromState,
    dictionary: yourDictionaryFromState
});
Loc = connect( mapStateToProps )( LocPresentational )
...
...
...
<p>
  <Loc locKey="YOUR_KEY_1"/>
</p>

<p>
  <Loc locKey="YOUR_KEY_2"  number={42}/>
</p>
```
See more in src/\*.js


## Using with React Native

Just use the LocRN component instead of Loc

```

import { LocRN } from 'redux-react-i18n'
...

<p>
  <LocRN locKey="key_1"/>
</p>

<p>
  <LocRN locKey="key_2" number={7}/>
</p>
```

And do not forget that you need 'react-native' to be installed in your project.
I haven't added this module in dependencies, because web-projects have no need of it and react native projects already have it usually.


## Roadmap
1. Demo project with how-to examples
2. Different languages (like arabic and chinese) support demo
3. Different improvements
4. Pure react-component evolution
5. Tests
6. ...
