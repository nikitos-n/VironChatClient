import React, {Component} from 'react';
import Greeting from './Greeting/Greeting';
import VerticalSideBar from './ControlBar/VerticalSideBar';
import MeAndOthers from './ControlBar/MeAndOthers';
import { showUsers, hideUsers } from '../../../redux/Actions';
import { connect } from 'react-redux';
import UserInfo from './ControlBar/UserInfo/UserInfo';
import io from 'socket.io-client';
import axios from 'axios';
import './mainPage.css';


class mainPage extends Component {

    constructor(props){
        super(props);
        this.socket = io('http://localhost:3001');
    }

    componentDidMount(){
        this.socket.emit('addUserEmail', localStorage.getItem('myUserEmail'));
    }

    showUsers = () => {
        if(!this.props.isVisible){
            const myEmail = localStorage.getItem('myUserEmail');

            axios.post("http://localhost:3001/getUSERS", {myEmail})//Делаем запрос на сервер, чтобы отобразить пользователей
                .then((response) => {//Ответ от сервера
                    console.log(response.data);
                    this.props.showUsers(response.data);
                })
        }

        else{
            this.props.hideUsers();
        }
    }

    render(){
        const {UsersArr} = this.props;
        console.log(UsersArr);
        return(
            <div className="conatiner-fluid"> 
                <div className="row no-gutters">
                    <div className="col-3">
                        <MeAndOthers />
                        
                        <VerticalSideBar name={"Пользователи"} MakeVisible={this.showUsers}/>
                        <UserInfo isVisible={this.props.isVisible} UsersArr={UsersArr}/>
                        
                        <VerticalSideBar name={"Друзья"} />
                        <VerticalSideBar name={"Чат-Комнаты"} />
                    </div>

                    <div className="col-9">
                            <Greeting />
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) =>{
    return {isVisible: state.isVisible,
            UsersArr: state.list}
}

export default connect(mapStateToProps, {showUsers, hideUsers})(mainPage);