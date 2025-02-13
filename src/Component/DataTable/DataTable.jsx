import React from 'react';
import "./DataTable.css";

const DataTable = ({ columns, fetchData }) => {
  const data = fetchData();

 const displayColumn = () =>
    columns.map((col, index) => (
      <th key={index}>{col}</th>
    ));

  const displayRow = () =>
    data.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {columns.map((col, colIndex) => (
          <td key={colIndex}>{row[col]}</td>
        ))}
      </tr>
    ));

  return (
      <table>
        <thead>
          <tr>
            {displayColumn()}
          </tr>
        </thead>
        <tbody>
          {displayRow()}
        </tbody>
      </table>
  );
};

export default DataTable;