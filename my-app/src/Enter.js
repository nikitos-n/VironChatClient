import React from 'react';

class Enter extends React.Component{
    
    render(){
        return(
            <div className="container">
                <div className="row justify-content-end"> 
                    <div className="col-2">
                        <button type="button" class="btn btn-info">Войти</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Enter;