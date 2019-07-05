import React, {Component} from 'react';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import './AuthorizationDiv.css'; 
import crypto from 'crypto';
import { connect } from 'react-redux';
import { checkUser, resetEmail } from '../../redux/Actions/index';
import FacebookSignIn from '../FacebookSignIn/FacebookSignIn';
import Registrate from '../Registrate/Registrate';

class AuthorizationDiv extends Component{

    toMainPage = () => {
        this.props.history.push('/mainPage');
    }

    toRegistratePage = () => {
        this.props.history.push('/registrationPage');
        this.props.resetEmail();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {inputTextEmail, inputTextPassword} = this;
        const email = inputTextEmail.value;
        const password = inputTextPassword.value;

        const hashedPassword = crypto.createHash('sha256')
                   .update(password)
                   .digest('hex');
        
        const userdata = { email, hashedPassword };
        console.log(userdata);
        this.props.checkUser(userdata, this.toMainPage);
    }

    render(){
        return(
            <div className="box">
                <form  onSubmit={this.handleSubmit} method="post" style={{"width": "100%"}}>
                    <h1>Вход</h1>
                    
                    {/* Почта */}
                    <input type="email" name="email" placeholder="Почта" autocomplete="off" pattern=".+@.+\..+" 
                    ref={(inputTextEmail) => {this.inputTextEmail = inputTextEmail}} required />

                    {/* Пароль */}
                    <input type="password" name="password" placeholder="Пароль" autocomplete="off"
                    ref={(inputTextPassword) => {this.inputTextPassword = inputTextPassword}} required />
                    <div className={this.props.isAuthCompl ? 'warnEmail' : 'notVisible'}>Неверная почта или пароль</div>
            
                    <input type="submit" name="" value="Войти"  />
                    <div className="SignIn">
                        <GoogleSignIn toMainPage={this.toMainPage}  />
                        <FacebookSignIn  toMainPage={this.toMainPage}  />
                    </div>
                    <Registrate toRegistratePage={this.toRegistratePage}  />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {isAuthCompl: state.isAuthCompl}
}

export default connect(mapStateToProps, {checkUser, resetEmail})(AuthorizationDiv);