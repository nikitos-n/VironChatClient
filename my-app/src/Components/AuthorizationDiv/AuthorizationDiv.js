import React, {Component} from 'react';
import Authorization from '../Authorization/Authorization';
import Email from '../Email/Email';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import Enter from '../Enter/Enter';
import './AuthorizationDiv.css'; 


class AuthorizationDiv extends Component{
    toMainPage = () => {
        this.props.history.push('/mainPage');
    }
    render(){
        return(
            <div className="centringDiv">
                <Authorization />
                <Email />
                <GoogleSignIn toMainPage={this.toMainPage}/>
                <Enter />
            </div>
        );
    }
}

export default AuthorizationDiv;