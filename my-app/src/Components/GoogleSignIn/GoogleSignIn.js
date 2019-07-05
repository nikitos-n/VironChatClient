import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import './GoogleSignIn.css';
import { comeInto } from '../../redux/Actions';
import { connect } from 'react-redux';


class GoogleSignIn extends Component {

  responseGoogle = (response) => {
    const { toMainPage, comeInto } = this.props;
      const tokenID = response.tokenId;
      const tail = 'GoogleLogIN';
      comeInto(toMainPage, tokenID, tail);
    }

    render() {
     return (
       <div>
          <GoogleLogin
            clientId="546694221893-u0otjmu2mtv0ughim8pmac70mnkgkdgl.apps.googleusercontent.com"
            render={renderProps => (
              <div className="GoogleButton" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                 <i className="fab fa-google-plus-g"> Войти через Google</i>
              </div>

            )}
            buttonText="Войти через Google"
            onSuccess={this.responseGoogle}
            cookiePolicy={'single_host_origin'} />
        </div>
        )
      }
    }

    export default connect(null, { comeInto })(GoogleSignIn);