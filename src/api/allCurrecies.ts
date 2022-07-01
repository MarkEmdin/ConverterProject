import { CurrencyRate } from "../components/types/CurrencyRate";

export const allCurencies = (
  name: string
): Promise<Array<CurrencyRate>> => {
  return fetch(
    `https://api.fastforex.io/fetch-all?from=${name}&api_key=a6915b7194-c1fd9d1141-re1bwh`
  )
    .then((response) => response.json())
    .then((res) => {
      const currenciesArray: any = Object.entries(res.results);
      const result = currenciesArray.map((element:Array<string | number>)=>new CurrencyRate(element[0] as string ,element[1] as number))
      return result;
    });
};
