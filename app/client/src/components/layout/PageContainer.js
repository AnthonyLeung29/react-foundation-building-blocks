import React from 'react'
import PropTypes from 'prop-types'

/**
 * A base component that encapsulates all other pages. 
 * List of what it does:
 *  - Gives an error message if there's an error
 *  - Shows a loading screen if page is loading
 *  - Contains a default centering for the body of the page
 * 
 * This is to be used in conjunction with stateful components.
 * An example of the state could be:
 *  - this.state = { isLoaded: false, error: null, ... }
 * 
 * @param {*} props 
 */
function PageContainer(props) {
  if (props.error) {
    return <ErrorScreen message={props.error.message} />
  } else if (!props.isLoaded) {
    return <LoadingScreen />;
  } return (
    <div className="grid-y grid-frame">
      <div className="cell medium-1 large-2"></div> {/* This is the offset margin from the top */}
      <div className="cell grid-x align-center">
        <div className="cell medium-10 large-8">
          {props.children}
        </div>
      </div>
    </div>
  )
}

PageContainer.propTypes = {
  children: PropTypes.array.isRequired,  
  error: PropTypes.object,
  isLoaded: PropTypes.bool.isRequired
}

export default PageContainer;

const ErrorScreen = ({ message }) => (
  <div>
    Error: {message}
  </div>
)

const LoadingScreen = () => (
  <div className="grid-y grid-frame align-center">
    <div className="grid-x align-center">
      Loading...
    </div>
  </div>
)