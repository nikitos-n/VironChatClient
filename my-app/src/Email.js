import React from 'react';
import './Email.css'

class Email extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xm-11 col-sm-10 col-md-9">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1" style={{color: "white"}}>Адресс электронной почты</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите адресс электронной почты" />
                                <small id="emailHelp" className="form-text text-muted">Вход через почту</small>
                            </div>
                        </form>
                    </div>
                </div>
            
                <div className="row justify-content-center align-items-center">
                    <div className="col-9">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1" style={{color: "white"}} >Запомнить меня</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Email;