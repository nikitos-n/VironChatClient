import React, {Component} from 'react';
import MessageArea from './MessageArea/MessageArea';
import { socketConnection } from '../../../redux/Actions';
import { connect } from 'react-redux';
import './MessageBox.css';

class MessageBox extends Component {


    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.trackInput.value !== '') {
            const { usersData } = this.props;
            const messageText = this.trackInput.value;
            const EmailOfUser = localStorage.getItem('myUserEmail');
            const membersInChat = [usersData[2], EmailOfUser];
            const dataToSend = [messageText, ...membersInChat, EmailOfUser];
            console.log(dataToSend);
            this.props.socketConnection(dataToSend);
        }

        this.trackInput.value= '';
    }

    render(){
        const { usersData } = this.props;
        const EmailOfUser = localStorage.getItem('myUserEmail');
        console.log(this.props.messageText);
        console.log(usersData[2]);
        return(
            <div className="mainMessageBoxModule">
                <div className="ChatContainer">
                    <div className="headerBox">
                        <div><img className="contactAvatar" src={usersData[3]} alt="" /></div>
                        <div>{usersData[0]} {usersData[1]}</div>
                    </div>
                    <div className="formBox">
                        {this.props.messageText.map((value, index) =>
                           ((usersData[2] === value[2] && EmailOfUser == value[0]) || (usersData[2] === value[0] && EmailOfUser == value[2]))?
                           <MessageArea key={index} messageText = {value[1]} email = {value[2]} />: ''
                        )}
                            <form className= "inputBox" onClick={this.handleSubmit}>
                                <textarea className="messageText" type="text" name="meassageText"
                                    ref={(inputText) => {this.trackInput = inputText}}  autocomplete="off"  />
                                <i title="Отправить сообщение" class="fas fa-paper-plane"></i>
                            </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {usersData: state.usersData,
        messageText: state.messageText}
}

export default connect(mapStateToProps, { socketConnection })(MessageBox);