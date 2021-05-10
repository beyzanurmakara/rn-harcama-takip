// Initial state
const INITIAL_STATE = {
    price: '',
}
// Selectors
export const priceSelector = state => state.shopping.price;
// Action Types
const SET_PRICE= "shopping/set_shopping";
// Action Creators
export const setPriceAC=(price)=>{
    return {
        type:SET_PRICE,
        payload:{ price },
    }
}
// Reducer
export const shoppingReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case SET_PRICE:
            return {
                price:action.payload.price+priceSelector
            }
        default:
            return state;
    }
}

