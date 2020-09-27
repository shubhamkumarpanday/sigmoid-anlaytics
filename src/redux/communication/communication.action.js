/**
 * 
 * @param {*} startDate 
 * @param {*} endDate 
 */
export const setDateRange = (startDate, endDate) => ({
    type: "SET_DATE_RANGE",
    payload: {
        startDate: startDate,
        endDate: endDate
    }
});
