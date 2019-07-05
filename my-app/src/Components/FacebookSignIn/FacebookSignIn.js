import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import { comeInto } from '../../redux/Actions';
import { connect } from 'react-redux';
import './FacebookSignIn.css';

class FacebookSignIn extends Component {

    responseFacebook = (response) => {
        const {toMainPage, comeInto} = this.props;
        const tokenID = response;
        const tail = 'FacebookLogIn';
        comeInto(toMainPage, tokenID, tail);
    }

    render() {
        return (
            <div>  
                <FacebookLogin
                    appId="2533177913399939"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    cssClass="class1"
                    icon={
                        <div className="FacebookButton">
                            <i className="fab fa-facebook-f">Войти через Facebook</i>
                        </div>
                    }
                />
            </div>
        )
    }
}

export default connect(null, {comeInto})(FacebookSignIn);