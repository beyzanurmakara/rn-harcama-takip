// Packages
import { combineReducers } from 'redux';

// Reducers
import { ThemeReducer } from '../Modules/Theming';
import { LocalizationReducer } from '../Modules/Localization';
import { userReducer } from '../Modules/Auth';
import { loadingReducer } from '../Modules/Loading';

export default combineReducers({
  theme: ThemeReducer,
  localization: LocalizationReducer,
  auth:userReducer,
  loading:loadingReducer,
});


