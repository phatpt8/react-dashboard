export const LOADING = '@nav/loading';
export const initialState = {
    loaded: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return { loaded: true };
        default:
            return state;
    }
}