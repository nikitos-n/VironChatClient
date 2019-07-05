const initialState = {
    isVisibleUsers: false,
    isVisibleRooms: false,
    isAvailable: false, 
    isUserAuth: false,
    isVisibleAlert: false,
    isVisibleMenu: false,
    isAuthCompl: false,
    listofUsers: [],
    listofRooms: [],
    usersData: [],
    socketConnection: '',
    messageText: [],
    name: '',
    surname: '',
    email: '',
    password: ''
}

export default function reducerShow(state = initialState, action) {
    switch(action.type ){

        case "SHOW_USERS": {
            console.log(action.payload);
            return {...state, 
                isVisibleUsers: true,
                listofUsers: action.payload
            };
        }
        
        case "HIDE_USER": {
            return {...state,
                isVisibleUsers: false,
                listofUsers: []};
        }

        case "SHOW_ROOMS": {
            return {...state,
                isVisibleRooms: true,
                listofRooms: action.payload};
        }

        case "HIDE_ROOMS": {
            return {...state,
                isVisibleRooms: false,
                listofRooms: []};        
        }

        case "USER_WASREG": {
            return {...state,
                isVisibleAlert: true, 
                isAuthCompl: false,

            };
        }

        case "USER_COMPLETED": {
            return {...state, 
                isVisibleAlert: false
            }
        }

        case "USER_ENTER": {
            return {...state,
                isAuthCompl: true}
        }

        case "CLEAR_WARN": {
            return {...state,
                isAuthCompl: false}
        }

        case "SHOW_MENU": {
            return {...state,
                isVisibleMenu:true}
        }

        case "HIDE_MENU": {
            return {...state,
                isVisibleMenu:false}
        }

        case "SHOW_USERSDATA": {
            return {...state,
                usersData: action.payload}
        }

        case "SOCKET_CONNECTION": {
            return {...state, 
                socketConnection: action.payload}
        }

        case "SAVE_MESSAGE": {
            return {...state, 
                messageText: [...state.messageText, action.payload]}
            }

        default:{
            return state;
        }   
    }   
}
