import React, {Component} from 'react';
import Greeting from './Greeting/Greeting';
import VerticalSideBar from './ControlBar/VerticalSideBar';
import MeAndOthers from './ControlBar/MeAndOthers';
import { showUsers, hideUsers, showRooms, hideRooms} from '../../redux/Actions';
import { connect } from 'react-redux';

import UserInfo from './ControlBar/UserInfo/UserInfo';
import ChatRoomInfo from './ControlBar/ChatRoomInfo/ChatRoomInfo';
import io from 'socket.io-client';
import axios from 'axios';
import './mainPage.scss';


class mainPage extends Component {

    constructor(props){
        super(props);
        this.socket = io('http://localhost:3001');
    }

    componentDidMount(){
        this.socket.emit('addUserEmail', localStorage.getItem('myUserEmail'));
    }

    showUsers = () => {
        if(!this.props.isVisibleUsers){
            const myEmail = localStorage.getItem('myUserEmail');

            axios.get(`http://localhost:3001/getUSERS/${myEmail}`)//Делаем запрос на сервер, чтобы отобразить пользователей
                .then((response) => {//Ответ от сервера
                    console.log(response.data);
                    this.props.showUsers(response.data);
                })
        }

        else{
            this.props.hideUsers();
        }
    }

    showRooms = () => {
        if(!this.props.isVisibleRooms){
            const myEmail = localStorage.getItem('myUserEmail');
            axios.get(`http://localhost:3001/getROOMS/${myEmail}`)//Делаем запрос на сервер, чтобы отобразить Чат-Комнаты
                .then((response) => {
                    console.log(response.data);
                    this.props.showRooms(response.data);
                })
        }

        else{
            this.props.hideRooms();
        }        
    }

    render(){
        const {UsersArr, RoomsArr} = this.props;
        console.log(UsersArr);
        return(
                <div class="mainPagePosition">
                    <div className="module">
                        <div className="leftColumn">
                            <MeAndOthers />
                            
                            <VerticalSideBar name={"Пользователи"} MakeVisible={this.showUsers}/>
                            <UserInfo isVisible={this.props.isVisibleUsers} UsersArr={UsersArr}/>
                            
                            <VerticalSideBar name={"Друзья"} />

                            <VerticalSideBar name={"Чат-Комнаты"} MakeVisible={this.showRooms}/>
                            <ChatRoomInfo isVisible={this.props.isVisibleRooms} RoomsArr={RoomsArr}/>
                        </div>
                    </div>
                    
                    <div className="rightColumn">
                        <Greeting />
                    </div>
                </div>
        );
    }
}


const mapStateToProps = (state) =>{
    return {isVisibleUsers: state.isVisibleUsers,
            isVisibleRooms: state.isVisibleRooms,
            UsersArr: state.listofUsers,
            RoomsArr: state.listofRooms}
}

export default connect(mapStateToProps, {showUsers, hideUsers, showRooms, hideRooms})(mainPage);