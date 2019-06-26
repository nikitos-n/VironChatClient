import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import './FacebookSignIn.css';
import axios from 'axios';

class FacebookSignIn extends Component {

      render() {
       return (
           <div>  
                <FacebookLogin
                    appId="1088597931155576"
                    autoLoad={true}
                    fields="name,email,picture"
                    onSuccess={alert("Hello")}
                    cssClass="class1"
                    icon={
                        <div className="FacebookButton">
                            <i className="fab fa-facebook-f"> Войти через Facebook</i>
                        </div>
                    }
                />
            </div>
          )
        }
      }
  
  export default FacebookSignIn;