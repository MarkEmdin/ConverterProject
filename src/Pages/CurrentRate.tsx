import React, { useState, useEffect } from 'react';
import CurrenciesList from '../components/CurrenciesList';
import listOfCurrencies from '../listOfCurrencies';
import ReactPaginate from 'react-paginate';
import PaginationTest from '../components/Pagination';
import Pagination from '../components/Pagination';

function CurrentRate() {
  const [mainСurrency, setMainСurrency] = useState<string>('USD'); // главная валюта
  const [otherСurrency, setOtherСurrency] = useState<Array<Array<string | number>>>([]); // валюта,коэф,размер массива (хз как убрать)   name: string }[]

  const setNewValue = (name: string) => {
    setMainСurrency(name);
    fetch(`https://api.fastforex.io/fetch-all?from=${name}&api_key=a6915b7194-c1fd9d1141-re1bwh`)
      .then((response) => response.json())
      .then((res) => {
        const currenciesArray: any = Object.entries(res.results); // проблема с типом данных
        console.log(currenciesArray);
        setMainСurrency(res.base);
        setOtherСurrency(currenciesArray);
      });
  };

  useEffect(() => {
    fetch('https://api.fastforex.io/fetch-all?from=USD&api_key=a6915b7194-c1fd9d1141-re1bwh')
      .then((response) => response.json())
      .then((res) => {
        const currenciesArray: any = Object.entries(res.results);
        //console.log(currenciesArray);
        setMainСurrency(res.base);
        setOtherСurrency(currenciesArray);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <CurrenciesList items={listOfCurrencies} func={setNewValue} />
        </div>
        <div className="col"></div>
        <div className="col">Выбранная Валюта : {mainСurrency}</div>
      </div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-8">
          <Pagination items={otherСurrency} />
        </div>
      </div>
    </div>
  );
}

export default CurrentRate;
