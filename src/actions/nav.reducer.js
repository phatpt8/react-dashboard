export const LOADING = '@nav/LOADING';
export const SHOW_NAVIGATION_LEFT = '@nav/SHOW_NAVIGATION_LEFT';
export const HIDE_NAVIGATION_LEFT = '@nav/HIDE_NAVIGATION_LEFT';
export const initialState = {
  loaded: false,
  showNavLeft: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { loaded: true };
    case SHOW_NAVIGATION_LEFT:
      return { showNavLeft: true };
    case HIDE_NAVIGATION_LEFT:
      return { showNavLeft: false };
    default:
      return state;
  }
};

export const toggleNavigationLeft = () => (dispatch, getState) => {
  const { showNavLeft } = getState().navigation;
  dispatch({
    type: showNavLeft ? HIDE_NAVIGATION_LEFT : SHOW_NAVIGATION_LEFT,
  });
};
