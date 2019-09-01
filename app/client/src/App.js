import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Stylesheet for foundation
import './style/scss/App.scss';
import ROUTES from './routes';
import AppDashboardLayout from './components/building-blocks/community/app-dashboard-layout/AppDashboardLayout';

class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: 'React Foundation',
      username: 'Anthony'
    };
  }
  // Loads the foundation js right after the initial rendering of React
  componentDidMount() {
    window.$(document).foundation();
  }

  render() {
    const { appName, username } = this.state;

    const routeComponents = ROUTES.map((route, index) => (
      <Route key={index} path={route.path} component={route.component} />
    ));

    return (
      <Router>
        <div className="App">
          <AppDashboardLayout
            appName={appName}
            username={username}
            menuItems={ROUTES}
          >
            {routeComponents}
          </AppDashboardLayout>
        </div>
      </Router>
    );
  }
}

export default App;
