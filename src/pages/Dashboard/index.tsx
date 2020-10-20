import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import Select from '../../components/Select';

import { Containet } from './styles';

const Dashboard: React.FC = () => {
  const options = [
    {
      value: 'Mauricio',
      label: 'Mauricio',
    },
  ];

  return (
    <Containet>
      <ContentHeader title="Dashboard" lineColor="#E44C4E">
        <Select options={options} />
        <Select options={options} />
      </ContentHeader>
    </Containet>
  );
};
export default Dashboard;
