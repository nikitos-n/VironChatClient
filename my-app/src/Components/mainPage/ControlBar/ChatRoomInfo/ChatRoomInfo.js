import React, {Component} from 'react';
import EachRoom from './EachRoom';
import './ChatRoomInfo.css';

export default class ChatRoomInfo extends Component{
    render(){
        const {RoomsArr} = this.props;
        return(
            <div className = {this.props.isVisible ? '' : 'notVisible'}>
                <div className = 'container-fluid'>
                    {RoomsArr.map((value, index) => 
                        <EachRoom key = {index} avatar={value.picture} name={value.name} surname={value.surname} 
                        email={value.email} /> 
                        )}
                </div> 
            </div>
        )
    }
}
