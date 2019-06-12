import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

class GoogleSignIn extends React.Component {
    
  responseGoogle = (response) => {
      console.log(response);
      axios.post("http://localhost:3001/", response.Zi)//Получили токен и отправлем axios 
        .then((response) => {//Ответ от сервера
          console.log(response.data);
        });
    }


    render() {
     return ( 
        <div className = "container" >
          <div className = "row justify-content-center" > 
           
          <GoogleLogin
            clientId="546694221893-u0otjmu2mtv0ughim8pmac70mnkgkdgl.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          </div> 
        </div>
        )
      }
    }

    export default GoogleSignIn;