import React, { useState, useMemo } from 'react';

import ContentHeader from '../../components/ContentHeader';
import Select from '../../components/Select';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/Message';

import PieChartBox from '../../components/Graphics/PieChartBox';
import HistoryBox from '../../components/Graphics/HistoryBox';
import BarChartBox from '../../components/Graphics/BarChartBox';

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

  const historyGraphics = useMemo(
    () =>
      listOfMonths.map((_, indexMonth) => {
        let amountEntry = 0;

        gains.forEach(gain => {
          const date = new Date(gain.date);
          const gainMonth = date.getMonth();
          const gainYear = date.getFullYear();

          if (gainMonth === indexMonth && gainYear === yearSelected) {
            amountEntry += Number(gain.amount);
          }
        });

        let amountExit = 0;

        expenses.forEach(expense => {
          const date = new Date(expense.date);
          const expenseMonth = date.getMonth();
          const expenseYear = date.getFullYear();

          if (expenseMonth === indexMonth && expenseYear === yearSelected) {
            amountExit += Number(expense.amount);
          }
        });

        return {
          monthNumber: indexMonth,
          month: listOfMonths[indexMonth].substr(0, 3),
          amountEntry,
          amountExit,
        };
      }),

    [yearSelected],
  );

  const relationExpensevesRecorrentAndEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    expenses
      .filter(expense => {
        const date = new Date(expense.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        return month === monthSelected && year === yearSelected;
      })
      .forEach(expense => {
        if (expense.frequency === 'recorrente') {
          amountRecurrent += Number(expense.amount);
        }

        if (expense.frequency === 'eventual') {
          amountEventual += Number(expense.amount);
        }
      });

    const total = amountRecurrent + amountEventual;

    return [
      {
        name: 'Recorrentes',
        total: amountRecurrent,
        color: '#4E41F0',
        percent: Number(((amountRecurrent / total) * 100).toFixed(1)),
      },

      {
        name: 'Eventuais',
        total: amountEventual,
        color: '#E44C4E',
        percent: Number(((amountEventual / total) * 100).toFixed(1)),
      },
    ];
  }, [monthSelected, yearSelected]);

  const relationGainsRecorrentAndEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    gains
      .filter(gain => {
        const date = new Date(gain.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        return month === monthSelected && year === yearSelected;
      })
      .forEach(gain => {
        if (gain.frequency === 'recorrente') {
          amountRecurrent += Number(gain.amount);
        }

        if (gain.frequency === 'eventual') {
          amountEventual += Number(gain.amount);
        }
      });

    const total = amountRecurrent + amountEventual;

    return [
      {
        name: 'Recorrentes',
        total: amountRecurrent,
        color: '#4E41F0',
        percent: Number(((amountRecurrent / total) * 100).toFixed(1)),
      },

      {
        name: 'Eventual',
        total: amountEventual,
        color: '#E44C4E',
        percent: Number(((amountEventual / total) * 100).toFixed(1)),
      },
    ];
  }, [monthSelected, yearSelected]);

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

        <PieChartBox reportData={relationEntryBalanceAndExitBalance} />

        <HistoryBox
          data={historyGraphics}
          lineColorAmountEntry="#F7931B"
          lineColorAmountExit="#E44C4E"
        />

        <BarChartBox
          data={relationExpensevesRecorrentAndEventual}
          title="Saídas"
        />
        <BarChartBox
          data={relationGainsRecorrentAndEventual}
          title="Entradas"
        />
      </Content>
    </Containet>
  );
};
export default Dashboard;
