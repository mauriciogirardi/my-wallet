import React, { useMemo } from 'react';

import emojis from '../../utils/emojis';
import Toggle from '../Toggle';
import { Container, Profiel } from './styles';

const Header: React.FC = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);

    return emojis[index];
  }, []);

  return (
    <Container>
      <Toggle />
      <Profiel>
        <h2>
          <span>Olá,</span>
          {emoji}
        </h2>
        <h3>Mauricio Girardi</h3>
      </Profiel>
    </Container>
  );
};
export default Header;
