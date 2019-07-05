import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './EachRoom.css';

export default class EachUser extends Component{

    render(){
        const {name, surname, avatar, email} = this.props;
        return(
            <Link to="/mainPage/messageBoxWith" style={{"color":"yellow"}}>
                <div class="roomsModule" title="Показать переписку">
                    <img className="roomsAvatar" src={avatar} alt="" />
                        
                    <div className="roomsData">
                        {name} {surname} 
                    </div>

                    <div className="roomsData">
                        {email}
                    </div>
                </div>
            </Link>
        )
    }
}