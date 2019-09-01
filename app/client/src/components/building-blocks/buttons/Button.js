import React from 'react';
import PropTypes from 'prop-types';
import { GeneralBtnPropTypes } from './general';

/**
 * A component to create a general button for use.
 *
 * This is different than a normal button in that it allows a button
 * to be manipulated by the grid feature of foundation.
 *
 *  Props:
 * - className: string
 *    Allows additional foundation features from the caller to this component
 *    Default includes 'button' already
 * - Children: object
 *    The item(s) that will be displayed on the button
 * - style: object
 *    An object equivelent to css to alter the style of the button
 * - handleClick: function
 *    A function that dictates what happens when this button is clicked
 *
 * @param {*} props
 */
const Button = props => (
  <button
    type="button"
    className={getClassName(props)}
    style={props.style}
    onClick={props.handleClick}
  >
    {props.children}
  </button>
);

Button.propTypes = {
  ...GeneralBtnPropTypes,
  children: PropTypes.object,
  handleClick: PropTypes.func
};

Button.defaultProps = {
  className: ''
};

export default Button;

// ***** Helper Functions *****

const defaultBtnName = 'button';

const getClassName = props =>
  props.className
    ? defaultBtnName.concat(' ', props.className)
    : defaultBtnName;
