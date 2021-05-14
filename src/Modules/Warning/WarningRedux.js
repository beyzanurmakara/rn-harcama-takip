// Initial state
const INITIAL_STATE = {
    warning: '',
}

// Selectors
export const warningSelector = state => state.warning.warning;

// Action Types
const SET_WARNING= "warning/set_warning";

// Action Creators
export const setWarningCodeAC=(warning)=>{
    return {
        type:SET_WARNING,
        payload:{ warning },
    }
}

// Reducer
export const warningReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case SET_WARNING:
            return {
                warning:action.payload.warning
            }
        default:
            return state;
    }
}