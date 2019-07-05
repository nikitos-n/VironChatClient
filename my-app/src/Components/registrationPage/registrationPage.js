import React, {Component} from 'react';
import './registrationPage.css';
import { sendPassword } from '../../redux/Actions';
import crypto from 'crypto';
import { connect } from 'react-redux';

class registatonPage extends Component {

    constructor(props){
        super(props);
        this.toAuthPage = this.toAuthPage.bind(this);
    }

    toAuthPage(){
        this.props.history.push('/');
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.picture = "http://la.by/sites/default/files/pictures/avatar.png";
        const {inputTextName, inputTextSurname, inputTextEmail, inputTextPassword, picture} = this;
        const name = inputTextName.value;
        const surname = inputTextSurname.value;
        const email = inputTextEmail.value;
        const password = inputTextPassword.value;
        const hashedPassword = crypto.createHash('sha256')
                   .update(password)
                   .digest('hex');
        const user = {name, surname, email, hashedPassword, picture};
        console.log(user);
        this.props.sendPassword(user, this.toAuthPage);
    }

    render(){
        return(
            <div className="regBox">
                <form onSubmit={this.handleSubmit} method="post" style={{"width": "100%"}}>
                    <h1>Регистрация</h1>
                    {/* Фамилия */}
                    <input id="yourName" type="text" name="name" placeholder="Введите имя (на английском)"  
                        pattern="^[A-Z]{1}[a-z]{2,9}$" autocomplete="off" required 
                        ref={(inputTextName) => {this.inputTextName = inputTextName}}/>

                    {/* Имя */}
                    <input id="yourSurname" type="text" name="surname" placeholder="Введите фамилию фамилию (на английском)" 
                        pattern="^[A-Z]{1}[a-z]{2,15}$" autocomplete="off" required 
                        ref={(inputTextSurname) => {this.inputTextSurname = inputTextSurname}}/>
                     {/* Почта */}
                    <input id="yourLogin" type="email" name="email" placeholder="Почта"
                        pattern=".+@.+\..+" autocomplete="off" required 
                        ref={(inputTextEmail) => {this.inputTextEmail = inputTextEmail}}/> 
                    {/* Пароль */}
                    <input id="yourPassword" type="password" name="password" placeholder="Придумайте пароль" autocomplete="off" 
                        required ref={(inputTextPassword) => {this.inputTextPassword = inputTextPassword}}/>

                         <div className={this.props.isVisibleAlert ? 'warnEmail' : 'notVisible'}>Пользователь с таким email уже существует!</div>
                    <div className="SignIn">
                        <input type="button" name="" value="Отмена" onClick={this.toAuthPage}/>
                        <input type="submit" name="" value="Готово" />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {isVisibleAlert: state.isVisibleAlert}
}

export default connect(mapStateToProps, { sendPassword })(registatonPage);
