import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppDashboardTopNavBar from './AppDashboardTopNavBar';
import AppDashboardSideBar from './AppDashboardSideBar';

/**
 * A responsive layout common for app dashboards, with a top navigation,
 * expandable sidebar, and scrolling content.
 *
 * I kept a number of components as classes since lifecycle components may come in handy.
 *
 * Note that foundation's scss messes with this building block and hence, for this to work,
 * foundation's _off-canvass.scss had to be overwritten.
 *
 * SCSS and style creds go to:
 * https://foundation.zurb.com/building-blocks/blocks/app-dashboard-layout.html
 */
class AppDashboardLayout extends Component {
  render() {
    const { appName, menuItems, username } = this.props;
    return (
      <div className="app-dashboard shrink-medium">
        <AppDashboardTopNavBar appName={appName} username={username} />
        <div className="app-dashboard-body off-canvas-wrapper">
          <AppDashboardSideBar menuItems={menuItems} />
          <div
            className="app-dashboard-body-content off-canvas-content"
            data-off-canvas-content
          >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

AppDashboardLayout.propTypes = {
  appName: PropTypes.string,
  username: PropTypes.string,
  menuItems: PropTypes.array
};

export default AppDashboardLayout;
