const initialState = {
    isVisible: true,
    
}

export default function reducerHide(state = initialState, action) {
    if(action.type === "HIDE_USER"){
        return {...state, 
            isVisible: action.payload};
    }
    return state;
}