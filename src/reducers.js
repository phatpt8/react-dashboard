import { combineReducers } from 'redux';
import navigation from 'actions/nav.reducer';
import loading from 'actions/loading.reducer';
import accounts from 'actions/accounts.reducer';

const reducers = combineReducers({
  navigation,
  loading,
  accounts,
});

export default reducers;
