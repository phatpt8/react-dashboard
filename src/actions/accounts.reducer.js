import Notifications from 'react-notification-system-redux';

export const LOADING = '@main/LOADING';
export const GET_ACCOUNTS = '@main/GET_ACCOUNTS';
export const SORT_ACCOUNTS = '@main/SORT_ACCOUNTS';
export const initialState = {
  loading: false,
  sort: {},
  data: [
    {
      // TESTING - REMOVE IN PRODUCTION
      index: 1,
      username: 'wolftungvn',
      total: 231,
      packages: 1000,
      avai: 41.6,
      interest: 8.2,
      income: 100,
      wallet: 0,
      percentage: 7,
      date: '3h',
    },
    {
      // TESTING - REMOVE IN PRODUCTION
      index: 2,
      username: 'wolftungvn2',
      total: 232,
      packages: 999,
      avai: 40,
      interest: 9,
      income: 101,
      wallet: 1,
      percentage: 9,
      date: '3h',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { loaded: true };
    case GET_ACCOUNTS:
      return { ...state, data: action.data };
    case SORT_ACCOUNTS:
      return { ...state, data: action.newData, sort: action.sort };
    default:
      return state;
  }
};

export const sortByColumn = colField => (dispatch, getState) => {
  const { data, sort } = getState().accounts;
  const sorted = !sort[colField];
  const newData = data
    .sort((a, b) => {
      if (a[colField] > b[colField]) return sorted ? 1 : -1;
      if (a[colField] < b[colField]) return sorted ? -1 : 1;
      return 0;
    })
    .concat([]); // for testing (immutable issue with static data)

  sort[colField] = sorted;

  dispatch({
    type: SORT_ACCOUNTS,
    newData,
    sort,
  });
};

export const withdraw = () => dispatch => {
  dispatch(
    Notifications.success({
      message: 'Now you can see how easy it is to use notifications in React!',
      position: 'bl',
      autoDismiss: 5000,
    })
  );
};
