import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RedirectButton from '../../buttons/RedirectButton';
import Button from '../../buttons/Button';

/**
 * A subcomponent of the AppDashboardLayout that manages just the sidebar
 */
class AppDashboardSideBar extends Component {
  handleClick = event => {
    const $titleButton = window.$(event.target);
    $titleButton
      .parents('.app-dashboard')
      .toggleClass('shrink-medium')
      .toggleClass('shrink-large');
  };

  render() {
    const { menuItems } = this.props;
    const title = 'Actions';

    return (
      <div
        id="app-dashboard-sidebar"
        className="app-dashboard-sidebar off-canvas off-canvas-absolute reveal-for-medium position-left"
        data-off-canvas
      >
        <div className="app-dashboard-sidebar-title-area">
          <SidebarTitle title={title} handleClick={this.handleClick} />
        </div>
        <div className="app-dashboard-sidebar-inner">
          <SidebarMenu menuItems={menuItems} />
        </div>
      </div>
    );
  }
}

AppDashboardSideBar.propTypes = {
  menuItems: PropTypes.array
};

export default AppDashboardSideBar;

const SidebarTitle = ({ title, handleClick }) => (
  <React.Fragment>
    <div className="app-dashboard-close-sidebar">
      <h3 className="app-dashboard-sidebar-block-title">{title}</h3>
      <Button
        className="clear app-dashboard-sidebar-close-button show-for-medium"
        handleClick={handleClick}
      >
        <div className="size-24">{'<<'}</div>
      </Button>
    </div>
    <div className="app-dashboard-open-sidebar">
      <Button
        className="clear app-dashboard-sidebar-open-button show-for-medium"
        handleClick={handleClick}
      >
        <div className="size-24">{'>>'}</div>
      </Button>
    </div>
  </React.Fragment>
);

const SidebarMenu = ({ menuItems }) => (
  <ul className="menu vertical">
    {menuItems.map((item, index) => (
      <li key={index}>
        <SidebarMenuItem
          to={item.path}
          ficonName={item.icon}
          label={item.name}
        />
      </li>
    ))}
  </ul>
);

const SidebarMenuItem = ({ to, ficonName, label }) => (
  <RedirectButton to={to} className="clear expanded">
    <div className="grid-x align-middle align-center">
      <i className={'cell shrink size-30 ' + ficonName} />
      <div className="cell auto small-offset-1 text-left size-16 app-dashboard-sidebar-text">
        {label}
      </div>
    </div>
  </RedirectButton>
);
