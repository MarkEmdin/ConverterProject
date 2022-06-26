import CurrenciesList from './components/CurrenciesList';
import React, { useState, useEffect } from 'react';

function App() {
  const [resultSum, setResultSum] = useState(0); // итоговый результат
  const [transferSum, setTransferSum] = useState(1); // сумма пользователя
  const [firstCurrence, setFirstCurrence] = useState('USD'); // Переводим из
  const [secondCurrence, setSecondCurrence] = useState('USD'); // Переводим в
  const [rate, setRate] = useState(1); // Переводим в

  // useEffect(() => {
  //   fetch(
  //     'https://api.fastforex.io/fetch-multi?from=USD&to=EUR%2CRUB%2CILS%2CCNY&api_key=a6915b7194-c1fd9d1141-re1bwh',
  //   ).then((response) =>
  //     response.json().then((res) => {
  //       let transformedArray = Object.entries(res.results);
  //       console.log(transformedArray);
  //       // setlistOfCurrencies(transformedArray);
  //     }),
  //   );
  // }, []);
  //console.log(listOfCurrencies);
  const listOfCurrencies = [
    { name: 'USD' },
    { name: 'RUB' },
    { name: 'ILS' },
    { name: 'CNY' },
    { name: 'EUR' },
    { name: 'GBP' },
    { name: 'CHF' },
    { name: 'JPY' },
  ];
  const setFirstValue = (name: string) => {
    setFirstCurrence(name);
  };
  const setSecondValue = (name: string) => {
    setSecondCurrence(name);
  };

  const resultChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.currentTarget.value, 10);
    setTransferSum(newValue);
  };
  const onChangeSum = () => {
    fetch(
      `https://api.fastforex.io/convert?from=${firstCurrence}&to=${secondCurrence}&amount=${transferSum}&api_key=a6915b7194-c1fd9d1141-re1bwh`,
    ).then((response) =>
      response.json().then((res) => {
        let sum = transferSum * res.result.rate;
        console.log(res.result);
        let roundedResult = Math.round(sum * 1e2) / 1e2; // округлнение до нескольких 3х знаков
        let roundedRate = Math.round(res.result.rate * 1e2) / 1e2; // округлнение до нескольких 3х знаков
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
              <button type="button" className="btn btn-outline-success" onClick={onChangeSum}>
                Перевести
              </button>
            </div>
            <div className="col">
              <h5>{resultSum} </h5>
              <label>курс: {rate}</label>
            </div>
          </div>
        </div>
        <div className="col-3">
          <CurrenciesList items={listOfCurrencies} func={setFirstValue} />
        </div>
        <div className="col-3">
          <CurrenciesList items={listOfCurrencies} func={setSecondValue} />
        </div>
      </div>
    </div>
  );
}

export default App;
