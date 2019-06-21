const initialState = {
    isVisible: false,
    isAvailable: false, 
    list: []
}

export default function reducerShow(state = initialState, action) {
    if(action.type === "SHOW_USERS") {
        console.log(action.payload);
        return {...state, 
            isVisible: true,
            list: action.payload
        };
    }
    
    else if(action.type === "HIDE_USER") {
        return {...state,
            isVisible: false,
            list: []};
    }
    return state;
}
