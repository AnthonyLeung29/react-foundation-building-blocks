import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GeneralBtnPropTypes } from './general';
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
    };
  }

  componentDidUpdate() {
    const { toRedirect } = this.state;
    if (toRedirect) {
      this.setState({ toRedirect: false });
    }
  }

  handleClick = () => {
    this.setState({ toRedirect: true });
  };

  renderRedirect = () => {
    if (this.state.toRedirect) {
      return <Redirect to={this.props.to} />;
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.renderRedirect()}
        <Button
          className={this.props.className}
          style={this.props.style}
          handleClick={this.handleClick}
        >
          {this.props.children}
        </Button>
      </React.Fragment>
    );
  }
}

RedirectButton.propType = {
  ...GeneralBtnPropTypes,
  to: PropTypes.string
};

export default RedirectButton;
