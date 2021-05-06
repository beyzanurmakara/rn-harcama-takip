// Initial state
const INITIAL_STATE = {
    errorCode: '',
}

// Selectors
export const errorCodeSelector = state => state.error.errorCode;

// Action Types
const SET_ERROR_CODE= "error/set_error_code";

// Action Creators
export const setErrorCodeAC=(errorCode)=>{
    return {
        type:SET_ERROR_CODE,
        payload:{ errorCode },
    }
}

// Reducer
export const errorReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case SET_ERROR_CODE:
            return {
                errorCode:action.payload.errorCode
            }
        default:
            return state;
    }
}