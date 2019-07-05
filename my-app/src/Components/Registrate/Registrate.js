import React, {Component} from 'react';
import './Registrate.css'

export default class Registrate extends Component {
    render(){
        return(
            <div className="askRegistrate" onClick={this.props.toRegistratePage}>Зарегестрироваться?</div>
        )
    }
}