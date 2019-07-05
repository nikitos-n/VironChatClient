import React, {Component}from 'react';
import Greeting from './Greeting/Greeting';
import MessageBox from './MessageBox/MessageBox';
import VerticalSideBar from './ControlBar/VerticalSideBar';
import MeAndOthers from './ControlBar/MeAndOthers';
import { showUsers, showRoomsList, hideUsers, showRooms, saveMessage, hideRooms, showMenu, hideMenu} from '../../redux/Actions';
import { connect } from 'react-redux';

import {Route} from 'react-router-dom';
import UserInfo from './ControlBar/UserInfo/UserInfo';
import ChatRoomInfo from './ControlBar/ChatRoomInfo/ChatRoomInfo';
import io from 'socket.io-client';
import './mainPage.scss';


class mainPage extends Component {

    constructor(props){
        super(props);
        this.socket = io('http://localhost:3001');
        this.socket.on('sendMessageBack', (data) => {
            console.log(data);
            this.props.saveMessage(data);

        })
    }

    componentDidMount(){
        const EmailOfUser = localStorage.getItem('myUserEmail')
        this.socket.emit('id', EmailOfUser);
        this.socket.emit('addUserEmail', localStorage.getItem('myUserEmail'));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.socketConnection !== this.props.socketConnection) {
            this.socket.emit('messageText', this.props.socketConnection);
        }
      }

    makeVisibleMenu = () => {
        if(!this.props.isVisibleMenu) {
            this.props.showMenu();
        }
        
        else{
            this.props.hideMenu();
        }
    }

    showUsers = () => {
        if(!this.props.isVisibleUsers){
            this.props.showUsers();
        }

        else{
            this.props.hideUsers();
        }
    }

    showRooms = () => {
        if(!this.props.isVisibleRooms){
            const myEmail = localStorage.getItem('myUserEmail');
            this.props.showRoomsList(myEmail);
        }

        else{
            this.props.hideRooms();
        }        
    }

    render(){
        const {UsersArr, RoomsArr} = this.props;
        console.log(UsersArr);
        return(
            <div style={{"width" : "100%"}}>
                <div className="mainPagePosition">
                
                    <div className = {this.props.isVisibleMenu ? 'menu menu-active' : 'menu'}>
                        <div className="menu-btn" onClick = {this.makeVisibleMenu} >
                            <div className="textMenu">МЕНЮ</div>
                        </div>
                        <div className = 'center'>
                            <div className="menu-list ">
                                <MeAndOthers />
                                
                                <VerticalSideBar name={"Пользователи"} MakeVisible={this.showUsers}/>
                                <UserInfo isVisible={this.props.isVisibleUsers} UsersArr={UsersArr}/>
                                
                                <VerticalSideBar name={"Друзья"} />

                                <VerticalSideBar name={"Чат-Комнаты"} MakeVisible={this.showRooms}/>
                                <ChatRoomInfo isVisible={this.props.isVisibleRooms} RoomsArr={RoomsArr}/>
                            </div>
                        </div>
                    </div>
                        <Route exact path="/mainPage" component={Greeting} />
                        <Route path="/mainPage/messageBoxWith" component={MessageBox} />
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) =>{
    return {isVisibleUsers: state.isVisibleUsers,
            isVisibleRooms: state.isVisibleRooms,
            UsersArr: state.listofUsers,
            RoomsArr: state.listofRooms,
            socketConnection: state.socketConnection,
            isVisibleMenu: state.isVisibleMenu}
}

export default connect(mapStateToProps, {showUsers, hideUsers, showRooms, 
    showRoomsList, hideRooms, showMenu, hideMenu, saveMessage})(mainPage);