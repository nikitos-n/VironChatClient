import React, {Component} from 'react';
import './Greeting.css' 

class Greeting extends Component {

    render(){
        return(
            <div className="centring">
                <i class="fas fa-cat"></i><br />
                <div className="description">
                    Приветcтвуем тебя в нашем чате!
                </div>
            </div>
        )
    }
}

export default Greeting;