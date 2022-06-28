import { closeSync } from 'fs';
import React, { useState, useEffect } from 'react';

type Props = { items: Array<Array<string | number>> };
function Pagination({ items }: Props) {
  const arrButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // переделать динамически, добавить в state
  const [showList, setShowList] = useState<Array<Array<string | number>>>([]);

  //console.log('rerender', items);
  useEffect(() => {
    //console.log('gggg', items);
    let arr = items.slice(0, 10);
    setShowList(arr);
    //console.log(arr);
  }, [items]);

  const onChangeList = (value: number) => {
    let from = value * 10 - 10; // c
    let to = value * 10 - 1; //до
    let myArr = items.slice(from, to);
    setShowList(myArr);
  };

  return (
    <div>
      <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group me-2" role="group" aria-label="First group">
          {arrButtons.map((value, index) => (
            <button
              type="button"
              className="btn btn-primary"
              key={`${value}_${index}`}
              onClick={() => onChangeList(value)}>
              {arrButtons[index]}
            </button>
          ))}
        </div>
      </div>
      <ul className="list-group list-group-flush">
        {showList.map((name, index) => (
          <li key={`${name}_${index}`} className="list-group-item">
            <div className="row">
              <div className="col-3">валюта: {showList[index][0]} </div>
              <div className="col-3">курс: {showList[index][1]} </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
