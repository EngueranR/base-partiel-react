import React, { useEffect, useState } from 'react';
import "./DataTable.css";

const DataTable = ({ columns, fetchData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchData();
      setData(result.data); 
    };
    fetchData();
  }, [fetchData]);

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
          {columns && columns.length > 0 ? displayColumn() : <th>pas de colonne</th>}
        </tr>
      </thead>
      <tbody>
        {data && data.length > 0 ? displayRow() : <tr><td>pas de donnée</td></tr>}
      </tbody>
    </table>
  );
};

export default DataTable;