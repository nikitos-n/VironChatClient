const initialState = {
    isVisibleUsers: false,
    isVisibleRooms: false,
    isAvailable: false, 
    listofUsers: [],
    listofRooms: []
}

export default function reducerShow(state = initialState, action) {
    if(action.type === "SHOW_USERS") {
        console.log(action.payload);
        return {...state, 
            isVisibleUsers: true,
            listofUsers: action.payload
        };
    }
    
    else if(action.type === "HIDE_USER") {
        return {...state,
            isVisibleUsers: false,
            listofUsers: []};
    }

    else if(action.type === "SHOW_ROOMS") {
        return {...state,
            isVisibleRooms: true,
            listofRooms: action.payload};
    }

    else if(action.type === "HIDE_ROOMS") {
        return {...state,
            isVisibleRooms: false,
            listofRooms: []};        
    }

    return state;
}
