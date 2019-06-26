import React, {Component} from 'react';
import './VerticalSideBar.css'


class VerticalSideBar extends Component{
    render(){
        const {MakeVisible, name} = this.props;
        return(
            <div className="mainMenu">
                <div className="menuComponents" onClick={MakeVisible}>{name}</div>
            </div>
        )
    }
}

export default VerticalSideBar;