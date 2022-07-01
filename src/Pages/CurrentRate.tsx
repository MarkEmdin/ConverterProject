import { useState, useEffect } from 'react';
import CurrenciesList from '../components/CurrenciesList';
import listOfCurrencies from '../components/types/listOfCurrencies';
import Pagination from '../components/Pagination';
import { allCurencies } from '../api/allCurrecies';
import { CurrencyRate } from '../components/types/CurrencyRate';

function CurrentRate() {
  const [mainСurrency, setMainСurrency] = useState<string>('USD');
  const [otherСurrency, setOtherСurrency] = useState<Array<CurrencyRate>>([]);

  const setNewValue = async (name: string) => {
    let allCur = await allCurencies(name);
    setOtherСurrency(allCur);
    setMainСurrency(name);
  };

  useEffect(() => {
    setNewValue('USD');
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <CurrenciesList items={listOfCurrencies} onChange={setNewValue} />
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

// fetch(`https://api.fastforex.io/fetch-all?from=${name}&api_key=a6915b7194-c1fd9d1141-re1bwh`)
// .then((response) => response.json())
// .then((res) => {
//   const currenciesArray: any = Object.entries(res.results);
//   console.log(currenciesArray);
//   setMainСurrency(res.base);
//   setOtherСurrency(currenciesArray);
// });
