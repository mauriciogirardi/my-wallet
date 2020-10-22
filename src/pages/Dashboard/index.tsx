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
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <Select options={options} onChange={() => {}} />
        <Select options={options} onChange={() => {}} />
      </ContentHeader>
    </Containet>
  );
};
export default Dashboard;
