import axios from 'axios';
import {
    nameParser
} from '../../Components/App';

export const showUsers = () => {
    return (dispatch) => {
        const myEmail = localStorage.getItem('myUserEmail');
        axios.get(`http://localhost:3001/getUSERS/${myEmail}`) //Делаем запрос на сервер, чтобы отобразить пользователей
            .then((response) => { //Ответ от сервера
                console.log(response.data);
                dispatch(giveUser(response.data));
            })
    }
};

export const sendPassword = (user, callBack) => {
    return (dispatch) => {
        axios.post('http://localhost:3001/RegistrationUser', user)
            .then(response => {
                if (response.data !== 'Пользователь с таким email уже зарегестрироан!') {
                    console.log('Пользователь успешно зарегестрирован!');
                    dispatch(authCompleted())
                    callBack();
                } else {
                    console.log(response.data);
                    dispatch(authorWarn());
                }
            })
    }
}

export const checkUser = (userData, toMainPage) => {
    return (dispatch) => {
        axios.post('http://localhost:3001/CheckingUser', userData)
            .then(response => {

                if (response.data !== 'Аутентификация не пройдена') {
                    dispatch(authCompleted());
                    const userData = response.data[0];
                    console.log(userData);
                    const name = userData.name;
                    const surname = userData.surname;
                    const picture = userData.picture;
                    const email = userData.email;
                    localStorage.setItem('myUserName', name);
                    localStorage.setItem('myUserSurname', surname);
                    localStorage.setItem('myUserEmail', email);
                    localStorage.setItem('myUserPicture', picture);
                    toMainPage();

                } else {
                    dispatch(authDONOTCompleted());
                }
            })
    }
}

export const resetEmail = () => {
    return (dispatch) => {
        dispatch(hideWarn());
    }
}

export const comeInto = (callBack, tokenID, tail) => {
    return () => {
        axios.post("http://localhost:3001/" + tail, {
                tokenID
            }) //Получили токен и отправлем axios 
            .then((response) => { //Ответ от сервера(распакованный)
                console.log(response.data);
                const name = nameParser(response.data.name)[0];
                const surname = nameParser(response.data.name)[1];
                const picture = response.data.picture;
                const email = response.data.email;
                localStorage.setItem('myUserName', name);
                localStorage.setItem('myUserSurname', surname);
                localStorage.setItem('myUserEmail', email);
                localStorage.setItem('myUserPicture', picture);
                callBack();
            })
            .catch(err => console.log(err));
    }
}


export const createRoom = (membersEmail) => {
        axios.post('http://localhost:3001/createROOM', {
                membersEmail
            }) //Делаем запрос на сервер, чтобы посмотреть комнату
            .then((response) => { //Ответ от сервера
                console.log(response.data);
            })
}

export const showRoomsList = (myEmail) => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/getROOMS/${myEmail}`) //Делаем запрос на сервер, чтобы отобразить Чат-Комнаты
            .then((response) => {
                console.log(response.data);
                dispatch(showRooms(response.data));
            })
    }
}

export const socketConnection = (data) => ({
    type: "SOCKET_CONNECTION",
    payload: data
})

export const saveMessage = (data) => ({
    type: "SAVE_MESSAGE",
    payload: data
})

export const showUsersData = (data) => ({
    type: "SHOW_USERSDATA",
    payload: data
})

export const showMenu = () => ({
    type: "SHOW_MENU"
})

export const hideMenu = () => ({
    type: "HIDE_MENU"
})

export const authCompleted = () => ({
    type: "CLEAR_WARN"
})

export const authDONOTCompleted = () => ({
    type: 'USER_ENTER'
})

export const hideWarn = (warning) => ({
    type: 'USER_COMPLETED',
})

export const authorWarn = (warning) => ({
    type: 'USER_WASREG'
})

export const giveUser = (result) => ({
    type: 'SHOW_USERS',
    payload: result
});

export const hideUsers = () => ({
    type: 'HIDE_USER'
});

export const showRooms = (RoomsList) => ({
    type: 'SHOW_ROOMS',
    payload: RoomsList
});

export const hideRooms = (RoomsList) => ({
    type: 'HIDE_ROOMS'
});