import React from 'react';

import { Containe, ToggleLabel, ToggleSelector } from './styles';

const Toggle: React.FC = () => (
  <Containe>
    <ToggleLabel>Light</ToggleLabel>
    <ToggleSelector
      checked
      height={20}
      width={50}
      onChange={() => {
        console.log('mudou');
      }}
      uncheckedIcon={false}
      checkedIcon={false}
    />
    <ToggleLabel>Dark</ToggleLabel>
  </Containe>
);

export default Toggle;
