import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';
import { RiDashboardFill } from 'react-icons/ri';
import { BiExit } from 'react-icons/bi';
import { MdMonetizationOn, MdClose } from 'react-icons/md';

import logoDarkSvg from '../../assets/logo-dark.svg';

import { useAuth } from '../../hooks/auth';

import { Container, MenuContainer, Header, ToggleMenuMobile } from './styles';

const Aside: React.FC = () => {
  const [menu, setMenu] = useState(false);

  const { signOut } = useAuth();
  return (
    <Container menuIsOpen={menu}>
      <Header>
        <ToggleMenuMobile type="button" onClick={() => setMenu(!menu)}>
          {menu ? <MdClose /> : <FaBars />}
        </ToggleMenuMobile>
        <img src={logoDarkSvg} alt="My Wallet" />
      </Header>

      <MenuContainer menuIsOpen={menu}>
        <Link to="/">
          <RiDashboardFill />
          Dashboard
        </Link>
        <Link to="/list/entry-balance">
          <FiArrowUp />
          Entradas
        </Link>
        <Link to="/list/exit-balance">
          <FiArrowDown />
          Saídas
        </Link>
        <Link to="/register-account">
          <MdMonetizationOn />
          Cadastro de contas
        </Link>

        <button type="button" onClick={signOut}>
          <BiExit />
          Sair
        </button>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
