import * as i18nActions from './actions';
import i18nReducer from './reducer';

// You can use the complete scheme of store/reducers/actions proposed by the author
import Loc from './Loc';

// Or you can just take a presentational container and map state to props by yourself
import LocPresentational from './LocPresentational';

export default { i18nActions, i18nReducer, Loc, LocPresentational }