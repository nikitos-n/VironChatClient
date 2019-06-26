import React, {Component} from 'react';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import './AuthorizationDiv.css'; 
import FacebookSignIn from '../FacebookSignIn/FacebookSignIn';
import Registrate from '../Registrate/Registrate';

class AuthorizationDiv extends Component{
        
    toMainPage = () => {
        this.props.history.push('/mainPage');
    }

    render(){
        return(
            <div className="box">
                <form action="http://localhost:3001/" method="post">
                    <h1>Вход</h1>
                    <input type="text" name="" placeholder="Логин" />
                    <input type="password" name="" placeholder="Пароль" />
                    <input type="submit" name="" value="Войти" />
                    <div className="SignIn">
                        <GoogleSignIn toMainPage={this.toMainPage} />
                        <FacebookSignIn />
                    </div>
                    <Registrate />
                </form>
            </div>
        );
    }
}

export default AuthorizationDiv;