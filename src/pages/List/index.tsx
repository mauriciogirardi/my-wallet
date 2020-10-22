import React, { useMemo, useState, useEffect } from 'react';
import { v4 } from 'uuid';

import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import Select from '../../components/Select';
import listOfMonths from '../../utils/months';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatdate';

import gains from '../../fakedata/gains';
import expenses from '../../fakedata/expenses';

import { Container, Content, Filters } from './styles';

interface IListProps {
  match: {
    params: {
      type: string;
    };
  };
}

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  type: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC<IListProps> = ({ match }) => {
  const { type } = match.params;

  const [selectedFrequency, setSelectedFrequency] = useState([
    'recorrente',
    'eventual',
  ]);

  const [data, setData] = useState<IData[]>([]);

  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1),
  );

  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear()),
  );

  const title = useMemo(
    () => (type === 'entry-balance' ? 'Entradas' : 'Saídas'),
    [type],
  );

  const lineColor = useMemo(
    () => (type === 'entry-balance' ? '#F7931B' : '#E44C4E'),
    [type],
  );

  const filterListData = useMemo(
    () => (type === 'entry-balance' ? gains : expenses),
    [type],
  );

  const yearSelect = useMemo(() => {
    const uniqueYears: number[] = [];

    filterListData.forEach(item => {
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
  }, [filterListData]);

  const monthSelect = useMemo(() => {
    const uniqueMonth: number[] = [];

    filterListData.forEach(item => {
      const date = new Date(item.date);
      const month = date.getMonth();

      if (!uniqueMonth.includes(month)) {
        uniqueMonth.push(month);
      }
    });

    return uniqueMonth.map(month => ({
      value: month + 1,
      label: listOfMonths[month],
    }));
  }, [filterListData]);

  useEffect(() => {
    const filterByYearAndMaonth = filterListData.filter(item => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return (
        month === Number(monthSelected) &&
        year === Number(yearSelected) &&
        selectedFrequency.includes(item.frequency)
      );
    });

    const formattedData = filterByYearAndMaonth.map(item => ({
      id: v4(),
      description: item.description,
      amountFormatted: formatCurrency(Number(item.amount)),
      type: item.type,
      frequency: item.frequency,
      dateFormatted: formatDate(item.date),
      tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
    }));

    setData(formattedData);
  }, [filterListData, monthSelected, yearSelected, selectedFrequency]);

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = selectedFrequency.findIndex(
      item => item === frequency,
    );

    if (alreadySelected >= 0) {
      const filtered = selectedFrequency.filter(item => item !== frequency);
      setSelectedFrequency(filtered);
    } else {
      setSelectedFrequency(prevState => [...prevState, frequency]);
    }
  };

  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <Select
          options={monthSelect}
          defaultValue={monthSelected}
          onChange={e => {
            setMonthSelected(e.target.value);
          }}
        />
        <Select
          options={yearSelect}
          defaultValue={yearSelected}
          onChange={e => {
            setYearSelected(e.target.value);
          }}
        />
      </ContentHeader>

      <Filters>
        <button
          type="button"
          onClick={() => handleFrequencyClick('recorrente')}
          className={`${selectedFrequency.includes('recorrente') && 'actived'}`}
        >
          Recorrentes
        </button>
        <button
          type="button"
          onClick={() => handleFrequencyClick('eventual')}
          className={`${selectedFrequency.includes('eventual') && 'actived'}`}
        >
          Eventuais
        </button>
      </Filters>

      <Content>
        {data.map(item => (
          <HistoryFinanceCard
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dateFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  );
};

export default List;
