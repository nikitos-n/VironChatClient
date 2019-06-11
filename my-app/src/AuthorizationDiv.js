import React from 'react';
import Authorization from './Authorization'
import Email from './Email'
import GoogleSignIn from './GoogleSignIn'
import Enter from './Enter'
import './AuthorizationDiv.css' 

class AuthorizationDiv extends React.Component{
    
    render(){
        return(
            <div className="centringDiv">
                <Authorization />
                <Email />
                <GoogleSignIn />
                <Enter />
            </div>
        );
    }
}

export default AuthorizationDiv;