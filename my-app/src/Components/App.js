import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import mainPage from './mainPage/mainPage';
import AuthorizationDiv from './AuthorizationDiv/AuthorizationDiv';

const history = createBrowserHistory();

class App extends Component{

  render(){
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={AuthorizationDiv} />
          <Route path="/mainPage" component={mainPage} />
        </div>
      </Router>
    );
  }
}

export default App;
