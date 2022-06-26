import React from 'react';

type Props = { items: { name: string }[]; func: (value: string) => void };
function CurrenciesList({ items, func }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    console.log(newValue);
    func(newValue);
    //console.log(e.target.value);
  };
  return (
    <select className="form-select form-select-sm" onChange={handleChange}>
      {items.map((name, index) => (
        <option value={items[index].name} key={`${name}_${index}`}>
          {items[index].name}
        </option>
      ))}
    </select>
  );
}

export default CurrenciesList;
//{ name: String; value: number }[]
