import React, { memo } from 'react';

type Props = { items: { name: string }[]; onChange: (value: string) => void };
const CurrenciesList = memo(({ items, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };
  return (
    <select className="form-select form-select-sm" onChange={handleChange}>
      {items.map((element, index) => (
        <option value={element.name} key={`${element}_${index}`}>
          {element.name}
        </option>
      ))}
    </select>
  );
});

export default CurrenciesList;
//{ name: String; value: number }[]
