import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

class GoogleSignIn extends React.Component {

  constructor(){
    super();
    this.setState({
      visible: true
    })
  }
    
  responseGoogle = (response) => {
      const tokenID = response.tokenId;
      // console.log(tokenID);
      axios.post("http://localhost:3001/", {tokenID})//Получили токен и отправлем axios 
        .then((response) => {//Ответ от сервера(распакованный)
          const name = response.data.given_name;
          const surname = response.data.family_name;
          console.log({name, surname});
          this.renderRooms();
        });
    }

    renderRooms = () =>{
      this.visible=false;
    }

    render() {
     return ( 
        <div className = "container" >
          <div className = "row justify-content-center" >   
          <GoogleLogin
            clientId="546694221893-u0otjmu2mtv0ughim8pmac70mnkgkdgl.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            cookiePolicy={'single_host_origin'} />
          </div> 
        </div>
        )
      }
    }

    export default GoogleSignIn;