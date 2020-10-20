import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import Select from '../../components/Select';

const List: React.FC = () => {
  const options = [
    {
      value: 'Josiana',
      label: 'Josiana',
    },
  ];
  return (
    <div>
      <ContentHeader title="Lista" lineColor="#F7931B">
        <Select options={options} />
        <Select options={options} />
      </ContentHeader>
    </div>
  );
};

export default List;
