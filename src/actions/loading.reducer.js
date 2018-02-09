export const LOADING = '@loading/show';
export const LOADED = '@loading/hide';
export const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { loading: true };
    case LOADED:
      return { loading: false };
    default:
      return state;
  }
};
