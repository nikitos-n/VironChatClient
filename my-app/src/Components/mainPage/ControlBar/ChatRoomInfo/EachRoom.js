import React, {Component} from 'react';
import './EachRoom.css';

export default class EachUser extends Component{

    render(){
        const {name, surname, avatar, email} = this.props;
        return(
            <div className="row no-gutters" id="row-3">
                <div className="col-4" title=""><img style={{"height":"7vh"}} src={avatar} alt="" /></div>
                <div className="col-8" id="col-81">{name} {surname}</div>   
            </div>
        )
    }
}