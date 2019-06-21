import React, {Component} from 'react';
import './Authorization.css';

class Authorization extends Component{
    render(){
        return(
            <div className="HeadAuthorization"> 
                <i class="fas fa-cat"></i>
                <i className="fas fa-sign-in-alt" style={{padding:"1vh"}}></i>
                    Авторизация
            </div>
        );
    }
}

export default Authorization;