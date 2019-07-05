import React, {Component} from 'react';
import  './MeAndOthers.css';

class MeAndOthers extends Component {
    render() {
        const NameOfUser = localStorage.getItem('myUserName');
        const SurnameOfUser = localStorage.getItem('myUserSurname');
        const PictureOfUser = localStorage.getItem('myUserPicture');
        const EmailOfUser = localStorage.getItem('myUserEmail');
        return (
                <div className="PersonalInfo">
                    <div className="PersonEnterModule">
                        <div className="avatarModule"><img className="myAvatar" src={PictureOfUser} alt=""/></div>
                        <div className="personData NS">{NameOfUser} {SurnameOfUser}</div>
                        <div className="personData EM">{EmailOfUser}</div>
                    </div>
                </div> 
        )
    }
}

export default MeAndOthers;