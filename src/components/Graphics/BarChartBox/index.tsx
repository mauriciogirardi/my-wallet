import React from 'react';
import { BarChart, Bar, Cell, Tooltip } from 'recharts';

import formatCurrency from '../../../utils/formatCurrency';

import { Container, SideLeft, LegendContainer, Legend } from './styles';

interface IBarChartBoxProps {
  title: string;
  data: {
    name: string;
    total: number;
    percent: number;
    color: string;
  }[];
}

const BarChartBox: React.FC<IBarChartBoxProps> = ({ data, title }) => (
  <Container>
    <SideLeft>
      <h2>{title}</h2>
      <LegendContainer>
        {data.map(inducator => (
          <Legend key={inducator.name} color={inducator.color}>
            <div>{inducator.percent ? `${inducator.percent}%` : ''}</div>
            <span>{inducator.name}</span>
          </Legend>
        ))}
      </LegendContainer>
    </SideLeft>

    <BarChart data={data} width={150} height={200}>
      <Bar dataKey="total">
        {data.map(indicator => (
          <Cell
            key={indicator.name}
            cursor="pointer"
            fill={indicator.color}
            width={50}
          />
        ))}
      </Bar>
      <Tooltip
        formatter={value => formatCurrency(Number(value))}
        cursor={{ fill: 'none' }}
      />
    </BarChart>
  </Container>
);

export default BarChartBox;
