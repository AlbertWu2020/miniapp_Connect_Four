import Row from './Row.jsx';
import React from 'react';
const Table = ({ table, onCircleClickHandler }) => (
  <div>
    {table.map((row, rowIndex) =>
      (<Row
        key={row.id}
        row={row}
        rowIndex={rowIndex}
        onCircleClickHandler={onCircleClickHandler}
      />))
    }
  </div>
);

export default Table;