import React, { Component } from 'react'

import '../../../style/scss/community/TableExpand.scss';

/**
 * Table that features smooth expanding rows to show and hide further information.
 * 
 * All credit belongs to author for the creation of this building block.
 * I just ported it to a react component for ease of use.
 * 
 * Link: https://foundation.zurb.com/building-blocks/blocks/table-expand.html
 */
class TableExpand extends Component {
  
  componentDidMount() {
    window.$('[data-open-details]').click(function (e) {
      e.preventDefault();
      window.$(this).next().toggleClass('is-active');
      window.$(this).toggleClass('is-active');
    });
  }

  render() {
    return (
      <div>
        {example};
      </div>
    )
  }
}

export default TableExpand;

/**
 * This is just an example class that demostrates how the JS (if any) can be used with this component.
 */
const example = (
  <table className="table-expand">
    <thead>
      <tr className="table-expand-row">
        <th width="200">Date</th>
        <th>Number of items</th>
        <th className="text-right" width="150">Amount</th>
        <th width="150">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr className="table-expand-row" data-open-details>
        <td>August 15</td>
        <td>2 items</td>
        <td className="text-right">$0.50</td>
        <td>in progress <span className="expand-icon"></span></td>
      </tr>

      <tr className="table-expand-row-content">
        <td colSpan="8" className="table-expand-row-nested">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde quaerat reprehenderit ipsa ipsam, adipisci facere repellendus impedit at, quisquam dicta optio veniam quia nesciunt, inventore quod in neque magni?</p>
        </td>
      </tr>

      <tr className="table-expand-row" data-open-details>
        <td>July 15</td>
        <td>4 items</td>
        <td className="text-right">$1.30</td>
        <td>scheduled <span className="expand-icon"></span></td>
      </tr>

      <tr className="table-expand-row-content">
        <td colSpan="8" className="table-expand-row-nested">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde quaerat reprehenderit ipsa ipsam, adipisci facere repellendus impedit at, quisquam dicta optio veniam quia nesciunt, inventore quod in neque magni?</p>
        </td>
      </tr>

      <tr className="table-expand-row" data-open-details>
        <td>June 15</td>
        <td>1 item</td>
        <td className="text-right">$0.10</td>
        <td>carried over <span className="expand-icon"></span></td>
      </tr>

      <tr className="table-expand-row-content">
        <td colSpan="8" className="table-expand-row-nested">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde quaerat reprehenderit ipsa ipsam, adipisci facere repellendus impedit at, quisquam dicta optio veniam quia nesciunt, inventore quod in neque magni?</p>
        </td>
      </tr>

      <tr className="table-expand-row" data-open-details>
        <td>May 15</td>
        <td>1 item</td>
        <td className="text-right">$0.10</td>
        <td>carried over <span className="expand-icon"></span></td>
      </tr>

      <tr className="table-expand-row-content">
        <td colSpan="8" className="table-expand-row-nested">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde quaerat reprehenderit ipsa ipsam, adipisci facere repellendus impedit at, quisquam dicta optio veniam quia nesciunt, inventore quod in neque magni?</p>
        </td>
      </tr>

      <tr className="table-expand-row" data-open-details>
        <td>April 15</td>
        <td>1 item</td>
        <td className="text-right">$0.10</td>
        <td>carried over <span className="expand-icon"></span></td>
      </tr>

      <tr className="table-expand-row-content">
        <td colSpan="8" className="table-expand-row-nested">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde quaerat reprehenderit ipsa ipsam, adipisci facere repellendus impedit at, quisquam dicta optio veniam quia nesciunt, inventore quod in neque magni?</p>
        </td>
      </tr>

      <tr className="table-expand-row" data-open-details>
        <td>March 15</td>
        <td>1 item</td>
        <td className="text-right">$0.10</td>
        <td>carried over <span className="expand-icon"></span></td>
      </tr>

      <tr className="table-expand-row-content">
        <td colSpan="8" className="table-expand-row-nested">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde quaerat reprehenderit ipsa ipsam, adipisci facere repellendus impedit at, quisquam dicta optio veniam quia nesciunt, inventore quod in neque magni?</p>
        </td>
      </tr>

      <tr className="table-expand-row" data-open-details>
        <td>February 15</td>
        <td>2 items</td>
        <td className="text-right">$1.20</td>
        <td>paid <span className="expand-icon"></span></td>
      </tr>

      <tr className="table-expand-row-content">
        <td colSpan="8" className="table-expand-row-nested">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde quaerat reprehenderit ipsa ipsam, adipisci facere repellendus impedit at, quisquam dicta optio veniam quia nesciunt, inventore quod in neque magni?</p>
        </td>
      </tr>

      <tr className="table-expand-row" data-open-details>
        <td>January 15</td>
        <td>5 items</td>
        <td className="text-right">$0.50</td>
        <td>carried over <span className="expand-icon"></span></td>
      </tr>

      <tr className="table-expand-row-content">
        <td colSpan="8" className="table-expand-row-nested">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde quaerat reprehenderit ipsa ipsam, adipisci facere repellendus impedit at, quisquam dicta optio veniam quia nesciunt, inventore quod in neque magni?</p>
        </td>
      </tr>

      <tr className="table-expand-row" data-open-details>
        <td>December 15</td>
        <td>2 items</td>
        <td className="text-right">$0.20</td>
        <td>carried over <span className="expand-icon"></span></td>
      </tr>

      <tr className="table-expand-row-content">
        <td colSpan="8" className="table-expand-row-nested">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde quaerat reprehenderit ipsa ipsam, adipisci facere repellendus impedit at, quisquam dicta optio veniam quia nesciunt, inventore quod in neque magni?</p>
        </td>
      </tr>

    </tbody>
  </table>
)