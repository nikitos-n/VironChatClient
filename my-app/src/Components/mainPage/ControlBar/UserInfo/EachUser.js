import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createRoom, showUsersData } from '../../../../redux/Actions/index';
import './EachUser.css';

class EachUser extends Component{


    CreateChatRoom = (email, avatar, name, surname) => {
        const myEmail = localStorage.getItem('myUserEmail');
        const membersEmail = [myEmail, email];
        console.log(membersEmail);
        const UserDataArray = [name, surname, email, avatar];
        console.log(UserDataArray);
        const { showUsersData: showUser } = this.props;
        showUser(UserDataArray);
        createRoom.call(this, membersEmail);//Отправляем данные на сервер, там создается  комната
    }

    render(){
        const {name, surname, avatar, email} = this.props;
        return(
            <div class="contactsModule">
                <img className="contactsAvatar" src={avatar} alt="" />
                    
                <div className="contactsData">
                    {name} {surname} 
                    <Link to="/mainPage/messageBoxWith">
                        <i className="pl-4 far fa-comment-alt" title="Написать сообщение" 
                            onClick={() => this.CreateChatRoom(email, avatar, name, surname)}></i>
                        </Link>
                    <i className="pl-4 fas fa-user-plus" title="Добавить в друзья" ></i>
                </div>

                <div className="contactsData">
                    {email}
                </div>
            </div>
        )
    }
}

export default connect(null, { createRoom, showUsersData })(EachUser);