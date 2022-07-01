import React, { useState } from 'react';
import { convert } from '../api/convert';
import CurrenciesList from '../components/CurrenciesList';

import listOfCurrencies from '../components/types/listOfCurrencies';

function Home() {
  const [resultSum, setResultSum] = useState<number>(0);
  const [transferSum, setTransferSum] = useState<number>(1);
  const [firstCurrence, setFirstCurrence] = useState<string>('USD');
  const [secondCurrence, setSecondCurrence] = useState<string>('USD');
  const [rate, setRate] = useState<number>(1);

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.currentTarget.value, 10);
    setTransferSum(newValue);
  };
  const onChangeSum = async () => {
    const { roundedRate, roundedResult } = await convert({
      firstCurrence,
      secondCurrence,
      transferSum,
    });
    setRate(roundedRate);
    setResultSum(roundedResult);
  };

  return (
    <>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col">
              <input name="Currencies" type="number" onChange={onChangeInput} />
            </div>
            <div className="col">
              <p>{resultSum} </p>
            </div>
          </div>
        </div>
        <div className="col-1">
          <p>Из</p>
        </div>
        <div className="col-5">
          <CurrenciesList items={listOfCurrencies} onChange={setFirstCurrence} />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <button type="button" className="btn btn-outline-success" onClick={onChangeSum}>
            Перевести
          </button>
        </div>
        <div className="col-3">
          <p>
            Из {firstCurrence} в {secondCurrence} курс: {rate}
          </p>
        </div>
        <div className="col-1">
          <p>В</p>
        </div>
        <div className="col-5">
          <CurrenciesList items={listOfCurrencies} onChange={setSecondCurrence} />
        </div>
      </div>
    </>
  );
}

export default Home;
