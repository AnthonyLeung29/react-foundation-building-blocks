import React, { Component } from 'react'

import './../../../style/scss/community/AppDashboardLayout.scss'
import './../../../style/css/foundation-icons.css';

class AppDashboardLayout extends Component {

  componentDidMount() {
    window.$('[data-app-dashboard-toggle-shrink]').on('click', function(e) {
      e.preventDefault();
      window.$(this).parents('.app-dashboard').toggleClass('shrink-medium').toggleClass('shrink-large');
    });
  }

  render() {
    return (
      <div>
        {example}
      </div>
    )
  }
}

export default AppDashboardLayout



const example = (
  <div className="app-dashboard shrink-medium">
    <div className="row expanded app-dashboard-top-nav-bar">
      <div className="columns medium-2">
        <button data-toggle="app-dashboard-sidebar" className="menu-icon hide-for-medium"></button>
        <a href="/" className="app-dashboard-logo">Foundation</a>
      </div>
      <div className="columns show-for-medium">
        <div className="app-dashboard-search-bar-container">
          <input className="app-dashboard-search" type="search" placeholder="Search" />
          <i className="app-dashboard-search-icon fa fa-search"></i>
        </div>
      </div>
      <div className="columns shrink app-dashboard-top-bar-actions">
        <button href="#" className="button hollow">Logout</button>
        <a href="#" height="30" width="30" alt=""><i className="fa fa-info-circle"></i></a>
      </div>
    </div>

    <div className="app-dashboard-body off-canvas-wrapper">
      <div id="app-dashboard-sidebar" className="app-dashboard-sidebar position-left off-canvas off-canvas-absolute reveal-for-medium" data-off-canvas>
        <div className="app-dashboard-sidebar-title-area">
          <div className="app-dashboard-close-sidebar">
            <h3 className="app-dashboard-sidebar-block-title">Items</h3>
            {/* <!-- Close button --> */}
          <button id="close-sidebar" data-app-dashboard-toggle-shrink className="app-dashboard-sidebar-close-button show-for-medium" aria-label="Close menu" type="button">
              <span aria-hidden="true"><a href="#"><i className="large size-72 fi-arrow-left"></i></a></span>
            </button>
          </div>
          <div className="app-dashboard-open-sidebar">
            <button id="open-sidebar" data-app-dashboard-toggle-shrink className="app-dashboard-open-sidebar-button show-for-medium" aria-label="open menu" type="button">
              <span aria-hidden="true"><a href="#"><i className="large fa fi-arrow-right"></i></a></span>
            </button>
          </div>
        </div>
        <div className="app-dashboard-sidebar-inner">
          <ul className="menu vertical">
            <li><a href="#" className="is-active">
              <i className="large fa fa-institution"></i><span className="app-dashboard-sidebar-text">Buildings</span>
            </a></li>
            <li><a>
              <i className="large fa fa-hourglass"></i><span className="app-dashboard-sidebar-text">Time</span>
            </a></li>
            <li><a>
              <i className="large fa fa-industry"></i><span className="app-dashboard-sidebar-text">Industry</span>
            </a></li>
            <li><a href="#" className="is-active">
              <i className="large fa fa-institution"></i><span className="app-dashboard-sidebar-text">Buildings</span>
            </a></li>
            <li><a>
              <i className="large fa fa-hourglass"></i><span className="app-dashboard-sidebar-text">Time</span>
            </a></li>
            <li><a>
              <i className="large fa fa-industry"></i><span className="app-dashboard-sidebar-text">Industry</span>
            </a></li>
            <li><a href="#" className="is-active">
              <i className="large fa fa-institution"></i><span className="app-dashboard-sidebar-text">Buildings</span>
            </a></li>
            <li><a>
              <i className="large fa fa-hourglass"></i><span className="app-dashboard-sidebar-text">Time</span>
            </a></li>
            <li><a>
              <i className="large fa fa-industry"></i><span className="app-dashboard-sidebar-text">Industry</span>
            </a></li>
          </ul>
        </div>
      </div>

      <div className="app-dashboard-body-content off-canvas-content" data-off-canvas-content>
        <h2 className="text-center">Lorem Ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit ligula eget est feugiat viverra. Duis a arcu laoreet, rhoncus libero imperdiet, placerat velit. Vestibulum euismod mi et ornare sodales. Donec efficitur mattis blandit. Proin in massa elit. Praesent malesuada iaculis nisl, a venenatis dui. Nullam venenatis tincidunt placerat. Suspendisse egestas urna a aliquet pretium.</p>

        <p>Curabitur ullamcorper mollis lobortis. Integer a scelerisque turpis, sed dictum lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam quis placerat sem. Suspendisse vulputate, leo ac sollicitudin lobortis, dui dui blandit justo, ut molestie justo sem in ipsum. Vestibulum convallis ex ac est tristique tincidunt. Vivamus dui dui, viverra et urna vitae, aliquam facilisis erat. Nam lorem nibh, elementum semper commodo at, fermentum quis justo. Donec finibus sapien eget scelerisque rhoncus. Nullam at nisi sed mi congue vestibulum. Vivamus nec scelerisque orci, vel fringilla nisi. Sed dictum, leo in consectetur porttitor, quam nibh aliquet nisi, in pulvinar sapien ante id dui. Aliquam massa nisl, auctor eget nisl in, faucibus gravida lectus. Nullam mattis orci at turpis finibus egestas. Nam vitae lorem accumsan, tempus lectus vitae, rutrum diam. Integer pulvinar placerat magna aliquam scelerisque.</p>

        <p>Duis consectetur magna velit, nec porttitor velit fermentum pulvinar. Duis varius justo eu varius pellentesque. Curabitur aliquet velit mauris, quis aliquam leo pharetra in. Integer rhoncus ut dui in rhoncus. Maecenas nec libero neque. Duis ac lacus at justo ullamcorper efficitur. Praesent ornare urna ante. Aliquam dapibus posuere nisl sit amet vestibulum. Quisque dapibus iaculis justo non egestas. Curabitur interdum semper justo, eget condimentum orci bibendum nec.</p>

        <p>Vivamus pharetra massa non risus sollicitudin iaculis. Donec semper finibus hendrerit. Nam ut volutpat mauris, sit amet molestie nisi. Curabitur ac nisi urna. Nulla id turpis nec dui ornare tempor in ac justo. Cras quis cursus nisi. Donec vel pellentesque ante. Maecenas non nisi risus. Praesent posuere scelerisque varius. Cras vitae mollis quam. Etiam ut dui massa. Etiam mattis aliquam enim, eget facilisis erat elementum eu. Proin et lorem volutpat, pretium massa a, venenatis mi. Suspendisse quam orci, feugiat eget suscipit ac, vehicula a ante. Nam ut mauris at tortor cursus interdum.</p>

        <p>Nullam hendrerit tincidunt risus. Sed nec nibh vel nibh euismod lobortis sed a sem. Nulla nec libero dolor. Pellentesque non sodales orci. Phasellus odio ligula, varius non orci ac, fermentum pulvinar nibh. Aliquam erat volutpat. Curabitur vehicula varius porttitor. Integer purus sapien, placerat sodales eros et, interdum vestibulum sem. Duis faucibus felis vitae augue ultricies, aliquet tempor orci vestibulum. Duis eu justo mi. Praesent feugiat, ante interdum fringilla auctor, ex nibh aliquet neque, sed feugiat tellus tortor non dui. Suspendisse potenti. Aliquam fringilla sapien felis, at faucibus justo interdum congue.</p>


      </div>
    </div>
  </div>
)