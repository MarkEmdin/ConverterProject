import React, { useState, useEffect, useCallback } from 'react';
import CurrenciesList from '../components/CurrenciesList';
import { Link } from 'react-router-dom';

import listOfCurrencies from '../listOfCurrencies';

function Home() {
  const [resultSum, setResultSum] = useState<number>(0); // итоговый результат
  const [transferSum, setTransferSum] = useState<number>(1); // сумма пользователя
  const [firstCurrence, setFirstCurrence] = useState<string>('USD'); // Переводим из
  const [secondCurrence, setSecondCurrence] = useState<string>('USD'); // Переводим в
  const [rate, setRate] = useState<number>(1); // коэфициент перевода

  const setFirstValue = useCallback((name: string) => {
    setFirstCurrence(name);
  }, []);
  const setSecondValue = useCallback((name: string) => {
    setSecondCurrence(name);
  }, []);

  const resultChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.currentTarget.value, 10);
    setTransferSum(newValue);
  };
  const onChangeSum = () => {
    fetch(
      `https://api.fastforex.io/convert?from=${firstCurrence}&to=${secondCurrence}&amount=${transferSum}&api_key=a6915b7194-c1fd9d1141-re1bwh`,
    ).then((response) =>
      response.json().then((res) => {
        let sum: number = transferSum * res.result.rate;
        let roundedResult: number = Math.round(sum * 1e2) / 1e2; // округлнение до нескольких 2х знаков результат
        let roundedRate: number = Math.round(res.result.rate * 1e2) / 1e2; // округлнение до нескольких 2х знаков курс
        setRate(roundedRate);
        setResultSum(roundedResult);
      }),
    );
  };
  return (
    <div className="container">
      <br></br>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col">
              <input name="Currencies" type="number" onChange={resultChange} />
            </div>
            <div className="col">
              <h5>{resultSum} </h5>
            </div>
          </div>
        </div>
        <div className="col-1">
          <label>Из</label>
        </div>
        <div className="col-5">
          <CurrenciesList items={listOfCurrencies} func={setFirstValue} />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <button type="button" className="btn btn-outline-success" onClick={onChangeSum}>
            Перевести
          </button>
        </div>
        <div className="col-3">
          <label>
            Из {firstCurrence} в {secondCurrence} курс: {rate}
          </label>
        </div>
        <div className="col-1">
          <label>В </label>
        </div>
        <div className="col-5">
          <CurrenciesList items={listOfCurrencies} func={setSecondValue} />
        </div>
      </div>
    </div>
  );
}

export default Home;
