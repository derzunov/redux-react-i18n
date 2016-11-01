import * as actions from './actions';
import reducer from './reducer';

// You can use the complete scheme of store/reducers/actions proposed by the author
import Loc from './Loc';

// Or you can just take a presentational container and map state to props by yourself
import LocPresentational from './LocPresentational';

export default { actions, reducer, Loc, LocPresentational }