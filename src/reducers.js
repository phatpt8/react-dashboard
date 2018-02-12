import { combineReducers } from 'redux';
import { reducer as notifications } from 'react-notification-system-redux';
import navigation from 'actions/nav.reducer';
import loading from 'actions/loading.reducer';
import accounts from 'actions/accounts.reducer';

const reducers = combineReducers({
  notifications,
  navigation,
  loading,
  accounts,
});

export default reducers;
