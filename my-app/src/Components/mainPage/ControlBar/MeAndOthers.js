import React, {Component} from 'react';
import  './MeAndOthers.css';

class MeAndOthers extends Component {
    render() {
        const NameOfUser = localStorage.getItem('myUserName');
        const SurnameOfUser = localStorage.getItem('myUserSurname');
        const PictureOfUser = localStorage.getItem('myUserPicture');
        return (
                <div className="PersonalInfo">
                    <div className="avatarModule"><img className="myAvatar" src={PictureOfUser} alt=""/></div>
                    <div className="myName">{NameOfUser} {SurnameOfUser}</div>
                </div> 
        )
    }
}

export default MeAndOthers;