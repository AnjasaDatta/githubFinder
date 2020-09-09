import React, { Fragment } from 'react';
import './App.css';
import NavbarGit from './Components/NavbarGit';
import Users from './Components/Users';
import Search from './Components/Search';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Components/About';
import User from './Components/User';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className='container'>
          <NavbarGit />
          <br />
          <br />
          <Alert />
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <Search />
                  <Users />
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route
              exact
              path='/user/:login'
              render={props => <User {...props} />}
            />
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
