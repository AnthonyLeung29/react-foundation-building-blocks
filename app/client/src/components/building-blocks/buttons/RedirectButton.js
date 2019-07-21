import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'
import { GeneralBtnPropTypes } from '../../general';
import Button from './Button';

/**
 * Creates a button that redirects to given url when clicked.
 * Tries to follow the react mindset: A state change trigger updates.
 * 
 * For more information. Look at the Button.js
 */
class RedirectButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toRedirect: false
    }
  }

  handleClick = () => {
    this.setState({ toRedirect: true });
  }

  render() {
    if (this.state.toRedirect) {
      return <Redirect to={this.props.to} />
    }

    return (
      <Button 
        className={this.props.className}
        btnClassName={this.props.btnClassName}
        style={this.props.style}
        handleClick={this.handleClick}
        label={this.props.label} 
      />
    )
  }
}

RedirectButton.propType = {
  ...GeneralBtnPropTypes,
  label: PropTypes.string.isRequired,
  to: PropTypes.string,
}

export default RedirectButton;
