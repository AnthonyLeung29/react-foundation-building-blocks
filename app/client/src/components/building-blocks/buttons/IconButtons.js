import React from 'react'
import PropTypes from 'prop-types'
import RedirectButton from './RedirectButton';
import { GeneralBtnPropTypes } from '../../general';
import Button from './Button';

/**
 * Contains a group of stateless components that is composed using the
 * Redirect component. Take a look at RedirectButton.js and Button.js
 * for more info.
 * 
 * Typically contains a preset icon as the label.
 */

export const AddButton = props => (
  <RedirectButton
    className={props.className}
    btnClassName={props.btnClassName}
    label={<i className="fi-plus"></i>}
    to={props.to}
    style={props.style}
  />
)

AddButton.propTypes = {
  ...GeneralBtnPropTypes,
  to: PropTypes.string
}

export const BackButton = props => (
  <RedirectButton
    className={props.className}
    btnClassName={props.btnClassName}
    label={<i className="fi-rewind"></i>}
    to={props.to}
    style={props.style}
  />
)

BackButton.propTypes = {
  ...GeneralBtnPropTypes,
  to: PropTypes.string
}

export const EditButton = props => (
  <RedirectButton
    className={props.className}
    btnClassName={props.btnClassName}
    label={<i className="fi-wrench"></i>}
    to={props.to}
    style={props.style}
  />
)

EditButton.propTypes = {
  ...GeneralBtnPropTypes,
  to: PropTypes.string
}

export const DeleteButton = props => (
  <Button
    className={props.className}
    btnClassName={props.btnClassName}
    label={<i className="fi-trash"></i>}
    handleClick={props.handleDelete}
    style={props.style}
  />
)

DeleteButton.propTypes = {
  ...GeneralBtnPropTypes,
  handleDelete: PropTypes.func.isRequired
}