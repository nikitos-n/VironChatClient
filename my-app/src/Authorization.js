import React from 'react';
import './Authorization.css'

class Authorization extends React.Component{
    render(){
        return(
            <div class="HeadAuthorization"> 
                <i class="fas fa-sign-in-alt" style={{padding:"1vh"}}></i>
                    Авторизация
            </div>
        );
    }
}

export default Authorization;