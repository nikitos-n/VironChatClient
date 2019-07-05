import React, {Component} from 'react';
import './MessageArea.css';

export default class MessageArea extends Component {
    render(){
        const { messageText, email } = this.props;
        const myEmail = localStorage.getItem('myUserEmail');
        return(
            <div className="messageBorder">
                    { myEmail === email ? 
                        <div className="leftSide"><div className="anotherMessage">{messageText}</div></div>:
                        <div className="rigthSide"><div className="myMessage">{messageText}</div></div>}
            </div>
        )
    }
}