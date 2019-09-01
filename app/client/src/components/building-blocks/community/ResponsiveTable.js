import React from 'react';
import PropTypes from 'prop-types';

/**
 * Creates a responsive table that stacks into cards when space is limited.
 *
 * Given an array of headers and data, will create the table with keys corresponding
 * to each row and cell, starting from the top-left as (0, 0).
 *
 * The table will abbreviate cells in which the content is too long
 *
 * Ex props:
 *    headers = ["Age", "Gender", ...],
 *    data = [{Age: 25, Gender: "Male"}, {Age: 45, Gender: "Female"}, ...]
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
      {data.map((row, index) => (
        <BodyRow key={index} cols={headers} row={row} />
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
    {headers.map((header, index) => (
      <th key={index}>{abbreviate(header)}</th>
    ))}
  </tr>
);

const BodyRow = ({ cols, row }) => (
  <tr>
    {cols.map((col, index) => {
      return (
        <td key={index} data-label={col}>
          {abbreviate(row[col])}
        </td>
      );
    })}
  </tr>
);

/**
 * Given a string, the function will return a JSX object an abbreviating the string
 * if necessary.
 *
 * @param {string} string
 */
function abbreviate(string) {
  const LIMIT = 25;
  switch (true) {
    case string === undefined:
      return <label>UNDEFINED</label>;
    case string.length > LIMIT:
      return <abbr title={string}>{string.substring(0, LIMIT)}</abbr>;
    default:
      return <React.Fragment>{string}</React.Fragment>;
  }
}
