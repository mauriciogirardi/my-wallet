import React from 'react';

import { Container } from './styles';

interface ISelectProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string | number;
}

const Select: React.FC<ISelectProps> = ({
  options,
  onChange,
  defaultValue,
}) => (
  <Container>
    <select onChange={onChange} defaultValue={defaultValue}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </Container>
);

export default Select;
