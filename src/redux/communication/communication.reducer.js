const INITIAL_STATE = {
    startDate: "",
    endDate: ""
}

export const communicationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_DATE_RANGE":
            return {
                ...action.payload
            }
        default:
            return state;
    }
}