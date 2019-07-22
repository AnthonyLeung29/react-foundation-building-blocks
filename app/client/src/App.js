import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './style/scss/App.scss';
import TableExpand from './components/building-blocks/community/TableExpand';
import FoundationIcons from './components/FoundationIcons';
import AppDashboardLayout from './components/building-blocks/community/AppDashboardLayout';

class App extends Component {
  state = {
    toLoginPage: false,
    toSplash: true
  }

  // Loads the foundation js right after the initial rendering of React
  componentDidMount() {
    window.$(document).foundation();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={ AppDashboardLayout } />
          <Route path='/foundationIcons' component={ FoundationIcons } />
          <Route path='/tableExpand' component={ TableExpand } />         
        </div>
      </Router>
    );
  }
}

export default App;
