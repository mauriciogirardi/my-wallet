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

  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1,
  );

  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear(),
  );

  const configListPage = useMemo(() => {
    if (type === 'entry-balance') {
      return {
        title: 'Entradas',
        lineColor: '#4E41F0',
        typeList: gains,
      };
    }
    return {
      title: 'Saídas',
      lineColor: '#E44C4E',
      typeList: expenses,
    };
  }, [type]);

  const yearSelect = useMemo(() => {
    const uniqueYears: number[] = [];

    configListPage.typeList.forEach(item => {
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
  }, [configListPage.typeList]);

  const monthSelect = useMemo(
    () =>
      listOfMonths.map((month, index) => ({
        value: index + 1,
        label: month,
      })),
    [],
  );

  useEffect(() => {
    const filterByYearAndMaonth = configListPage.typeList.filter(item => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return (
        month === monthSelected &&
        year === yearSelected &&
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
  }, [configListPage.typeList, monthSelected, yearSelected, selectedFrequency]);

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
      <ContentHeader
        title={configListPage.title}
        lineColor={configListPage.lineColor}
      >
        <Select
          options={monthSelect}
          defaultValue={monthSelected}
          onChange={e => {
            setMonthSelected(Number(e.target.value));
          }}
        />
        <Select
          options={yearSelect}
          defaultValue={yearSelected}
          onChange={e => {
            setYearSelected(Number(e.target.value));
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
