import React from 'react';
import Authorization from './Authorization'
import Email from './Email'
import SignBy from './SignBy'
import './AuthorizationDiv.css' 

function AuthorizationDiv(){
    return(
        <div className="centringDiv">
            <Authorization />
            <Email />
            <SignBy />
        </div>
    );
}

export default AuthorizationDiv;