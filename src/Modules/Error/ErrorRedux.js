// Initial state
const INITIAL_STATE = {
    isError: false,
    errorMessage: '',
}

// Selectors
export const isErrorSelector = state => state.error.isError;
export const errorMessageSelector = state => state.error.errorMessage;

// Action Types
const SET_IS_ERROR = "error/set_is_error";
const SET_ERROR_MESSAGE = "error/set_error_message";

// Action Creators
export const setIsErrorAC = (isError) => {
    return {
        type: SET_IS_ERROR,
        payload: { isError },
    };
}

export const setErrorMessageAC = (errorMessage) => {
    return {
        type: SET_ERROR_MESSAGE,
        payload: { errorMessage },
    };
}

// Reducer
export const errorReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case SET_IS_ERROR:
            return{
                ...state,
                isError:action.payload.isError,
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage:action.payload.errorMessage,
            }
        default:
            return state;
    }
}