import React from 'react'
import PropTypes from 'prop-types'
import { AddButton, BackButton } from '../building-blocks/buttons/IconButtons';

/**
 * Creates a large header with heading size 'h1' and a back button
 * to the left
 * -  Optional add button
 * -  Title spans the whole component
 */
function PageHeader(props) {
  const btnSize = "large";

  // Only generate an add button if the url is given
  const getAddButton = props => (
    (props.addUrl ? <AddButton btnClassName={btnSize} to={props.addUrl} /> : null)
  )

  return (
    <div className="grid-x grid-padding-x">
      <BackButton btnClassName={btnSize} to={props.backUrl} />
      <h1 className="cell auto">{props.title}</h1>
      {getAddButton(props)} 
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  backUrl: PropTypes.string.isRequired,
  addUrl: PropTypes.string
}

export default PageHeader;
