import React from 'react';
import RowEntry from './RowEntry.jsx';

const Row = ({ row, rowIndex, onCircleClickHandler }) => (
  <div>
    { row.map((rowEntry, columnIndex) =>
      (<RowEntry
        key = {rowEntry.id}
        colorValue={rowEntry}
        onCircleClickHandler={onCircleClickHandler}
        rowIndex={rowIndex}
        columnIndex={columnIndex}
      />))
    }
  </div>
);

export default Row;