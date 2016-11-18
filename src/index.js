import * as i18nActions from './actions'
export { i18nActions }
export { default as i18nReducer } from './reducer'

// You can use the complete scheme of store/reducers/actions proposed by author
export { default as Loc } from './Loc'
// React Native Component
export { default as LocRN } from './LocRN'

// Or you can just take a presentational container and map state to props by yourself
export { default as LocPresentational } from './LocPresentational'