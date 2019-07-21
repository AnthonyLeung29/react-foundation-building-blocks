import React from 'react';
import PropTypes from 'prop-types';

const TopBar = props => (
  /* TODO: Make it fully responsive for mobile (small screens) */
  <div className="top-bar">
  <div className="top-bar-left">
    {/* Something for Icon Here */}
  </div>
  <div className="top-bar-right">
    <div className="menu" >
      <TopBarUser name={props.name} /> {/* TODO: Pass in username prop */}
      {/* <TopBarUserSettings /> */} {/* TODO: Need to fix refresh issue */}
    </div>
  </div>
</div>
)

TopBar.propType = {
  name: PropTypes.string.isRequired
}

export default TopBar;

/************ STATELESS COMPONENTS **********
 * 
 * A group of stateless components used by the main component to make
 * code easier to read and debug
 */

const TopBarUser = ({ name }) => (
  <ul className="menu">
    <li className="menu-text">{name}</li>
  </ul>
)

// Need to fix. The jquery doesn't work when being redirected. Must use a refresh somehow
const TopBarUserSettings = props => (
  <ul className="dropdown menu" data-dropdown-menu>
    <li> <a href="/"><i className="fi-widget size-72" /></a>  {/* TODO: Change the href to a proper link  */}
      <ul className="menu vertical">
        <li><a href="/">Home</a></li>
      </ul>
    </li>
  </ul>
)