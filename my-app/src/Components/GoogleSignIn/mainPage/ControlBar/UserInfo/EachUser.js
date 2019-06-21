import React, {Component} from 'react';
import { connect } from 'react-redux';
import './EachUser.css';

export default class EachUser extends Component{

    showMessageBox(){
        
    }

    render(){
        const name = this.props.name;
        const surname = this.props.surname;
        const avatar = this.props.avatar;
    return(
        <div className="row no-gutters" id="row-3">
            <div className="col-4"><img style={{"height":"7vh"}} src={avatar} alt="" /></div>
            <div className="col-8" id="col-81">{name} {surname}
                <div id="col-82">
                    <i className="pl-4 far fa-comment-alt" title="Написать сообщение" onClick={this.showMessageBox}></i>
                    <i className="pl-4 fas fa-user-plus" title="Добавить в друзья" ></i>
                </div>
            </div>   
        </div>
        )
    }
}
