import React, { useMemo, useState } from 'react';

import { useTheme } from '../../hooks/theme';

import emojis from '../../utils/emojis';
import Toggle from '../Toggle';

import { Container, Profiel } from './styles';

const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark');

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);

    return emojis[index];
  }, []);

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  return (
    <Container>
      <Toggle
        checked={darkTheme}
        onChange={handleChangeTheme}
        labelLeft="Dark"
        labelRight="Light"
      />
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
