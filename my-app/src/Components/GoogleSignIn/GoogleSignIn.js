import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import './GoogleSignIn.css';
import axios from 'axios';


class GoogleSignIn extends Component {

  responseGoogle = (response) => {
    const {toMainPage} = this.props;
      const tokenID = response.tokenId;
      console.log(response);
      axios.post("http://localhost:3001/", {tokenID})//Получили токен и отправлем axios 
        .then((response) => {//Ответ от сервера(распакованный)
          console.log(response.data);
          const name = response.data.given_name;
          const surname = response.data.family_name;
          const picture = response.data.picture;
          const email = response.data.email;
          localStorage.setItem('myUserName', name);
          localStorage.setItem('myUserSurname', surname);
          localStorage.setItem('myUserEmail', email);
          localStorage.setItem('myUserPicture', picture);
          toMainPage();
        });
    }

    render() {
     return (
       <div>
          <GoogleLogin
            clientId="546694221893-u0otjmu2mtv0ughim8pmac70mnkgkdgl.apps.googleusercontent.com"
            render={renderProps => (
              <div className="GoogleButton" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                 <i class="fab fa-google-plus-g"> Войти через Google</i>
              </div>

            )}
            buttonText="Войти через Google"
            onSuccess={this.responseGoogle}
            cookiePolicy={'single_host_origin'} />
        </div>
        )
      }
    }

export default GoogleSignIn;