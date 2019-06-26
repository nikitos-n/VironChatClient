import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './EachUser.css';

export default class EachUser extends Component{

    CreateChatRoom(email){
        const myEmail = localStorage.getItem('myUserEmail');
        const membersEmail = [myEmail, email];
        console.log(membersEmail);
        axios.post('http://localhost:3001/createROOM', {membersEmail})//Делаем запрос на сервер, чтобы посмотреть комнату
            .then((response) => {//Ответ от сервера
                console.log(response.data);
                })
    }

    render(){
        const {name, surname, avatar, email} = this.props;
        return(
            <div className="row no-gutters" id="row-3">
                <div className="col-4"><img style={{"height":"7vh"}} src={avatar} alt="" /></div>
                <div className="col-8" id="col-81">{name} {surname}
                    <div id="col-82">
                        <i className="pl-4 far fa-comment-alt" title="Написать сообщение" 
                        onClick={() => this.CreateChatRoom(email)}></i>
                        <i className="pl-4 fas fa-user-plus" title="Добавить в друзья" ></i>
                    </div>
                </div>   
            </div>
        )
    }
}
