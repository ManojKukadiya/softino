import React, { Component, Fragment } from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import logo from './logo.svg';

import Footer1 from './layouts/footer/footer1';
import Header1 from './layouts/header/header1';
import Home from './components/home';

import './App.css';
import './vendor.js';

class App extends Component {
  render()
  {
    return (
        <Fragment>
          <div className="page-wrapper">
            <Header1 />
              <Switch>
                  <Route exact path="/" component={Home} />
              </Switch>
            <Footer1 />
          </div>
         </Fragment>
    );
  }
}

export default App;
