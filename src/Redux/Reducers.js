// Packages
import { combineReducers } from 'redux';

// Reducers
import { ThemeReducer } from '../Modules/Theming';
import { LocalizationReducer } from '../Modules/Localization';
import { userReducer } from '../Modules/Auth';
import { loadingReducer } from '../Modules/Loading';
import { errorReducer } from '../Modules/Error'
import { totalReducer } from '../Modules/Homepage/Redux/TotalRedux';
import { warningReducer } from '../Modules/Warning'

export default combineReducers({
  theme: ThemeReducer,
  localization: LocalizationReducer,
  auth: userReducer,
  loading: loadingReducer,
  error: errorReducer,
  total: totalReducer,
  warning: warningReducer,
});


