import React from 'react';
import CountUp from 'react-countup';

import dolarSvg from '../../assets/dolar.svg';
import arrowUpSvg from '../../assets/arrow-up.svg';
import arrowDownSvg from '../../assets/arrow-down.svg';

import { Container } from './styles';

interface IWalletBoxProps {
  title: string;
  amount: number;
  footerlabel: string;
  icon?: 'dolar' | 'arrowUp' | 'arrowDown';
  color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  amount,
  footerlabel,
  icon,
  color,
}) => {
  const iconSeleced = () => {
    switch (icon) {
      case 'dolar':
        return dolarSvg;
      case 'arrowDown':
        return arrowDownSvg;
      case 'arrowUp':
        return arrowUpSvg;
      default:
        return '';
    }
  };

  return (
    <Container color={color}>
      <div>
        <span>{title}</span>
        <h1>
          <CountUp
            end={amount}
            prefix="R$  "
            separator="."
            decimal=","
            decimals={2}
          />
        </h1>
      </div>
      <small>{footerlabel}</small>
      <img src={iconSeleced()} alt={title} />
    </Container>
  );
};

export default WalletBox;
