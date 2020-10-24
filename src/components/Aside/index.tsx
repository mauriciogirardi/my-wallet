import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { RiDashboardFill } from 'react-icons/ri';
import { BiExit } from 'react-icons/bi';
import { MdMonetizationOn } from 'react-icons/md';

import logoDarkSvg from '../../assets/logo-dark.svg';

import { Container, MenuContainet, Header } from './styles';

const Aside: React.FC = () => (
  <Container>
    <Header>
      <img src={logoDarkSvg} alt="My Wallet" />
    </Header>

    <MenuContainet>
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
      <Link to="/signIn">
        <BiExit />
        Sair
      </Link>
    </MenuContainet>
  </Container>
);

export default Aside;
