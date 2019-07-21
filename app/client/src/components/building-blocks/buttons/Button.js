import React from 'react'
import PropTypes from 'prop-types'
import { GeneralBtnPropTypes } from '../../general';

/**
 * A component to create a general button for use.
 * 
 * This is different than a normal button in that it allows a button
 * to be manipulated by the grid feature of foundation.
 *
 *  Props:
 * - className: string
 *    Allows additional foundation features from the caller to this component
 * - btnClassName: string
 *    Allows the caller to add additional foundation features to the buttons specifically.
 *    Default includes 'button' already
 * - label: string
 *    The text that will be displayed on the button
 * - style: object
 *    An object equivelent to css to alter the style of the button
 * - handleClick: function
 *    A function that dictates what happens when this button is clicked
 * 
 * @param {*} props 
 */
const Button = props => (
  <div className={props.className}>
  <button type="button" 
          className={getBtnClassName(props)}
          style={getBtnStyle(props)}
          onClick={props.handleClick}>
    {props.label}
  </button>
</div>
)

Button.propTypes = {
  ...GeneralBtnPropTypes,
  label: PropTypes.string,
  handleClick: PropTypes.func
}

Button.defaultProps = {
  className: "",
}

export default Button;

// ***** Helper Functions *****

const defaultBtnName = "button";

const getBtnClassName = props => (
  props.btnClassName ? defaultBtnName.concat(" ", props.btnClassName) : defaultBtnName
)

const getBtnStyle = props => (
  props.style ? props.style : {}
)
