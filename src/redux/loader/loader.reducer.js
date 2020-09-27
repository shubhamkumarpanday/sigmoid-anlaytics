const INITIAL_STATE = {
    loading: false
}

export const loaderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_LOADER":
            return {
                ...action.payload
            }
        default:
            return state;
    }
}