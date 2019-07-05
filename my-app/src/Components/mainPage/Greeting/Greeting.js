import React, {Component} from 'react';
import './Greeting.css' 

class MessageBox extends Component {

    render(){
        return(
            <div className="greeting">
                <div>Войдите в меню и начните переписку!</div>
            </div>
        )
    }
}

export default MessageBox;