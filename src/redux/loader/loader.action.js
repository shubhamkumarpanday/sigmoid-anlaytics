/**
 * 
 * @param {*} startDate 
 * @param {*} endDate 
 */
export const setLoader = (loader) => ({
    type: "SET_LOADER",
    payload: {
        loader: loader
    }
});
