import React from 'react';

import { Containe, ToggleLabel, ToggleSelector } from './styles';

interface IToggleProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

const Toggle: React.FC<IToggleProps> = ({
  labelLeft,
  labelRight,
  checked,
  onChange,
}) => (
  <Containe>
    <ToggleLabel>{labelRight}</ToggleLabel>
    <ToggleSelector
      checked={checked}
      height={20}
      width={50}
      onChange={onChange}
      uncheckedIcon={false}
      checkedIcon={false}
    />
    <ToggleLabel>{labelLeft}</ToggleLabel>
  </Containe>
);

export default Toggle;
