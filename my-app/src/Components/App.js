import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import mainPage from './mainPage/mainPage';
import AuthorizationDiv from './AuthorizationDiv/AuthorizationDiv';
import registatonPage from './registrationPage/registrationPage';
import './App.css';

const history = createBrowserHistory();

export class App extends Component{

  render(){
    return (
      <Router history={history}>
        <div className="parrentDiv">
          <Route exact path="/" component={AuthorizationDiv} />
            <Route path="/mainPage" component={mainPage} />
          <Route path="/registrationPage" component={registatonPage} />
        </div>
      </Router>
    );
  }
}

export const nameParser = name => {
	const nameArr = name.split(" ");
    const newNameArr = nameArr.filter(value => value.length>0);
    return newNameArr;
}
