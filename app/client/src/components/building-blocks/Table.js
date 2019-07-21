import React from 'react'
import PropTypes from 'prop-types'

/**
 * Displays a collection set in a table
 * 
 * Expects props to have info for headers, and data
 * e.g. props.header = [{key: "age", label: "Age"}, {key: "gender", label: "Gender"}...],
 *      props.data = [{id: 0, age: 25, gender: "Male"}, {id: 1, age: 45, gender: "Female"}...]
 * 
 * @param {*} props 
 */
const Table = props => (
  <div className="table-scroll">
    <table>
      <thead>
        <tr><TableHeaders headers={props.headers} /></tr>
      </thead>
      <tbody>
        <TableRows headers={props.headers} data={props.data} />
      </tbody>
    </table>
  </div>
)

Table.propTypes = {
  headers: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
}

export default Table;

// ***** Helper components *****

const TableHeaders = ({ headers }) => (
  headers.map(header => (
    <th key={header.key}>{header.label}</th>
  ))
)

const TableRows = ({ headers, data }) => (
  data.map(row => (
    <tr key={row._id}>
      {headers.map(header => (
        <td key={row._id + "+" + header.key}>{row[header.key]}</td>
      ))}
    </tr>
  ))
)