import { combineReducers } from 'redux';
import navigation from 'actions/nav.reducer';
import loading from 'actions/loading.reducer';

const reducers = combineReducers({
  navigation,
  loading,
});

export default reducers;