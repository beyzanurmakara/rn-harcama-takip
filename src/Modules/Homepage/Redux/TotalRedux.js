const INITIAL_STATE = {
    total:0,
}
export const totalSelector = state => state.total.total;
const SET_TOTAL= "total/set_total";
export const setTotalAC=(total)=>{
    return {
        type:SET_TOTAL,
        payload:{ total },
    }
}
export const totalReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case SET_TOTAL:

            return {
                total:action.payload.total
            }
        default:
            return state;
    }
}