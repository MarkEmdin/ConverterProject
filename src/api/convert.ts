type Props = {
  firstCurrence: string;
  secondCurrence: string;
  transferSum: number;
};

export const convert = ({
  firstCurrence,
  secondCurrence,
  transferSum,
}: Props) => {
  return fetch(
    `https://api.fastforex.io/convert?from=${firstCurrence}&to=${secondCurrence}&amount=${transferSum}&api_key=a6915b7194-c1fd9d1141-re1bwh`
  ).then((response) =>
    response.json().then((res) => {
      let sum: number = transferSum * res.result.rate;
      let roundedResult: number = Math.round(sum * 1e2) / 1e2; // округлнение до нескольких 2х знаков результат
      let roundedRate: number = Math.round(res.result.rate * 1e2) / 1e2; // округлнение до нескольких 2х знаков курс

      return { roundedRate, roundedResult };
    })
  );
};
