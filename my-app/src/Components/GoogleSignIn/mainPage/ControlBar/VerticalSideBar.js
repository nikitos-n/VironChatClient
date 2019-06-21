import React, {Component} from 'react';
import './VerticalSideBar.css'


class VerticalSideBar extends Component{


    render(){
        const {MakeVisible, name} = this.props;
        return(
            <div className="container-fluid">
                <div className="row no-gutters">
                    <div id="row-2" className=".buttons" onClick={MakeVisible}>{name}</div>
                </div>
            </div>
        )
    }
}

export default VerticalSideBar;