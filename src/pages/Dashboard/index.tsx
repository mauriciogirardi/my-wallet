import React, { useState, useMemo } from 'react';

import ContentHeader from '../../components/ContentHeader';
import Select from '../../components/Select';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/Message';
import PieChartCard from '../../components/PieChartBox';

import listOfMonths from '../../utils/months';

import iconHappySvg from '../../assets/happy.svg';
import iconSadSvg from '../../assets/sad.svg';
import iconUffaSvg from '../../assets/uffa.svg';
import iconSmileyOutSvg from '../../assets/smiley-out.svg';

import gains from '../../fakedata/gains';
import expenses from '../../fakedata/expenses';

import { Containet, Content } from './styles';

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1,
  );

  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear(),
  );

  const yearSelect = useMemo(() => {
    const uniqueYears: number[] = [];

    [...expenses, ...gains].forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map(year => ({
      value: year,
      label: year,
    }));
  }, []);

  const monthSelect = useMemo(
    () =>
      listOfMonths.map((month, index) => ({
        value: index + 1,
        label: month,
      })),
    [],
  );

  const totalExitBalance = useMemo(() => {
    let total = 0;

    expenses.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        total += Number(item.amount);
      }
    });

    return total;
  }, [yearSelected, monthSelected]);

  const totalEntryBalance = useMemo(() => {
    let total = 0;

    gains.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        total += Number(item.amount);
      }
    });

    return total;
  }, [yearSelected, monthSelected]);

  const totalBalance = useMemo(() => totalEntryBalance - totalExitBalance, [
    totalEntryBalance,
    totalExitBalance,
  ]);

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: 'Que triste!',
        description: 'Neste mês, você gastou mais do que deveria.',
        footertext:
          'Verifique  seus gastos e tente cortar algumas coisas desnecessárias.',
        icon: iconSadSvg,
      };
    }

    if (
      totalBalance === 0 &&
      totalEntryBalance === 0 &&
      totalExitBalance === 0
    ) {
      return {
        title: 'Aviso!',
        description: 'Neste mês, você não teve movimentação.',
        footertext:
          'Não esqueça de cadastrar suas movimentações para manter um controle dos seu gastos.',
        icon: iconSmileyOutSvg,
      };
    }

    if (totalBalance === 0) {
      return {
        title: 'Ufaa!',
        description: 'Neste mês, você gastou exatamente o que ganhou.',
        footertext:
          'Tenha cuidado. No próximo mês tente poupar  o seu dinheiro',
        icon: iconUffaSvg,
      };
    }

    return {
      title: 'Que Bom!',
      description: 'Parabéns, sua carteira está positiva.',
      footertext: 'Continue assim. Considere investir o seu saldo.',
      icon: iconHappySvg,
    };
  }, [totalBalance, totalExitBalance, totalEntryBalance]);

  const relationEntryBalanceAndExitBalance = useMemo(() => {
    const total = totalEntryBalance + totalExitBalance;
    const percentEntryBalance = (totalEntryBalance / total) * 100;
    const percentExitBalance = (totalExitBalance / total) * 100;

    const reportData = [
      {
        name: 'Entradas',
        value: totalEntryBalance,
        percent: Number(percentEntryBalance.toFixed(1)),
        color: '#F7931B',
      },

      {
        name: 'Saídas',
        value: totalExitBalance,
        percent: Number(percentExitBalance.toFixed(1)),
        color: '#E44C4E',
      },
    ];

    return reportData;
  }, [totalEntryBalance, totalExitBalance]);

  return (
    <Containet>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <Select
          options={monthSelect}
          onChange={e => setMonthSelected(Number(e.target.value))}
          defaultValue={monthSelected}
        />
        <Select
          options={yearSelect}
          onChange={e => setYearSelected(Number(e.target.value))}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Content>
        <WalletBox
          title="Saldo"
          amount={totalBalance}
          footerlabel="Atualizado com base nas entradas e saídas"
          color="#4E41F0"
          icon="dolar"
        />

        <WalletBox
          title="Entrada"
          amount={totalEntryBalance}
          footerlabel="Atualizado com base nas entradas"
          color="#F7931B"
          icon="arrowUp"
        />

        <WalletBox
          title="Saída"
          amount={totalExitBalance}
          footerlabel="Atualizado com base nas saídas"
          color="#E44C4E"
          icon="arrowDown"
        />

        <MessageBox
          title={message.title}
          icon={message.icon}
          description={message.description}
          footertext={message.footertext}
        />

        <PieChartCard reportData={relationEntryBalanceAndExitBalance} />
      </Content>
    </Containet>
  );
};
export default Dashboard;
