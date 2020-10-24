import React from 'react';

import { Container } from './styles';

interface IInputProps {
  name: string;
  placeholder?: string;
  type: string;
}

const Input: React.FC<IInputProps> = ({ name, placeholder, type, ...rest }) => (
  <Container>
    <input name={name} placeholder={placeholder} type={type} {...rest} />
  </Container>
);

export default Input;
