import React, {Component} from 'react';
import  './MeAndOthers.css';

class MeAndOthers extends Component {
    render() {
        const NameOfUser = localStorage.getItem('myUserName');
        const SurnameOfUser = localStorage.getItem('myUserSurname');
        const PictureOfUser = localStorage.getItem('myUserPicture');
        return (
            <div className="container-fluid" id="container-1">

                <div className="row" id="row-1">
                    <div className="col-4"><img src={PictureOfUser} alt=""/></div>
                    <div className="col-8" id="col-8">{NameOfUser} {SurnameOfUser}</div>
                </div>
            </div> 
        )
    }
}

export default MeAndOthers;