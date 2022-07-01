import { useState, useEffect } from 'react';
import { CurrencyRate } from './types/CurrencyRate';

const ITEMS_PER_PAGE = 10;

type Props = { items: Array<CurrencyRate> };
function Pagination({ items }: Props) {
  const [countButtons, setCountButtons] = useState<Array<number>>([]);
  const [showList, setShowList] = useState<Array<CurrencyRate>>([]);

  useEffect(() => {
    let countOfButtons: number = items.length / ITEMS_PER_PAGE;

    let arrBut: Array<number> = [];
    for (let i = 0; i < countOfButtons; i++) {
      arrBut.push(i + 1);
    }
    setCountButtons(arrBut);

    let arr = items.slice(0, ITEMS_PER_PAGE);
    setShowList(arr);
  }, [items]);

  const onChangeList = (value: number) => {
    let from: number = value * ITEMS_PER_PAGE - ITEMS_PER_PAGE;
    let to: number = value * ITEMS_PER_PAGE - 1;
    let myArr: Array<CurrencyRate> = items.slice(from, to);
    setShowList(myArr);
  };

  return (
    <div>
      <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group me-2" role="group" aria-label="First group">
          {countButtons.map((value, index) => (
            <button
              type="button"
              className="btn btn-primary"
              key={`${value}_${index}`}
              onClick={() => onChangeList(value)}>
              {countButtons[index]}
            </button>
          ))}
        </div>
      </div>
      <ul className="list-group list-group-flush">
        {showList.map((element, index) => (
          <li key={`${element}_${index}`} className="list-group-item">
            <div className="row">
              <div className="col-3">валюта: {showList[index].name} </div>
              <div className="col-3">курс: {showList[index].rate} </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
