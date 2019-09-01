import React from 'react';
import { Link } from 'react-router-dom';

/**
 * A subcomponent of the AppDashboardLayout that manages just the top bar
 */
const AppDashboardTopNavBar = ({ appName, username }) => {
  return (
    <div>
      <div className="grid-x grid-padding-x app-dashboard-top-nav-bar">
        <Logo className="cell auto medium-2" appName={appName} />
        <SearchBar className="cell auto show-for-medium" />
        <LogoutButton />
        <div className="cell shrink">{username}</div>
        <UserSettingsDropDown className="cell shrink app-dashboard-top-bar-actions" />
      </div>
    </div>
  );
};

const Logo = props => (
  <div className={props.className}>
    <button
      data-toggle="app-dashboard-sidebar"
      className="menu-icon hide-for-medium"
    />
    <Link to="/" className="app-dashboard-logo">
      {' ' + props.appName}
    </Link>
  </div>
);

const SearchBar = props => (
  <div className={props.className}>
    <div className="app-dashboard-search-bar-container">
      <input
        className="app-dashboard-search"
        type="search"
        placeholder="Search"
      />
      <i className="app-dashboard-search-icon fa fi-magnifying-glass" />
    </div>
  </div>
);

const LogoutButton = props => (
  <div className="cell shrink app-dashboard-top-bar-actions">
    <button href="#" className="button hollow">
      Logout
    </button>
  </div>
);

// Need to fix. The jquery doesn't work when being redirected. Must use a refresh somehow
const UserSettingsDropDown = props => (
  <div className={props.className}>
    <ul className="dropdown menu" data-dropdown-menu>
      <li className="app-dashboard-top-bar-dropdown-list">
        <i className="icon fi-widget" />
        <ul className="menu">
          <li>
            <Link to="/" className="menu-item">
              Home
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default AppDashboardTopNavBar;
