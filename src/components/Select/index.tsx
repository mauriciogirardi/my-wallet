import React from 'react';

import { Container } from './styles';

interface ISelectProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
}

const Select: React.FC<ISelectProps> = ({ options }) => (
  <Container>
    <select>
      {options.map(option => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  </Container>
);

export default Select;
