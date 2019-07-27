import React from 'react';
import PropTypes from 'prop-types';

/**
 * Creates a responsive table that stacks into cards when space is limited.
 * 
 * Given an array of headers and data, will create the table with keys corresponding
 * to each row and cell, starting from the top-left as (0, 0)
 * 
 * Ex of props:
 *    header = ["Age", "Gender", ...],
 *    data = [{ Age: 25, Gender: "Male" }, { Age: 45, Gender: "Female"}, ...]
 *
 * SCSS Credits to:
 * https://foundation.zurb.com/building-blocks/blocks/responsive-card-table.html
 */
const ResponsiveTable = ({ headers, data }) => (
  <table className="responsive-card-table unstriped table-scroll hover">
    <thead>
      <HeaderRow headers={headers} />
    </thead>
    <tbody>
      {mapEachIndex(data, (i, row) => (
        <BodyRow key={i} cols={headers} row={row} />
      ))}
    </tbody>
  </table>
);

ResponsiveTable.propTypes = {
  headers: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
};

export default ResponsiveTable;

// ***** Helper Components *****

const HeaderRow = ({ headers }) => (
  <tr>
    {mapEachIndex(headers, (index, header) => (
      <th key={index}>{header}</th>
    ))}
  </tr>
);

const BodyRow = ({ cols, row }) => (
  <tr>
    {mapEachIndex(cols, (j, col) => (
      <td key={j} data-label={col}>
        {row[col]}
      </td>
    ))}
  </tr>
);

// ***** Helper Functions *****

/**
 * Similar to a Array.prototype.map except that the callback passes
 * an index AND the element
 * 
 * @param {array} array 
 * @param {function(int, object):object} callback 
 */
const mapEachIndex = function(array, callback) {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArray.push(callback(index, element));
  }
  return newArray;
};
