import React, {Component} from 'react';
import EachUser from './EachUser';
import './UserInfo.css';

export default class UsersInfo extends Component{
    render(){
        const {UsersArr} = this.props;
        return(
            <div className = {this.props.isVisible ? '' : 'notVisible'}>
                <div>
                    {UsersArr.map((value, index) => 
                        <EachUser key = {index} avatar={value.picture} name={value.name} surname={value.surname} 
                        email={value.email} /> 
                        )}
                </div> 
            </div>
        )
    }
}

