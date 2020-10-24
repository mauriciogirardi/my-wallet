import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

import {
  Container,
  SideLeft,
  LegendContainer,
  Legend,
  SideRight,
} from './styles';

interface IPieChartCArdProps {
  reportData: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

const PieChartCard: React.FC<IPieChartCArdProps> = ({ reportData }) => (
  <Container>
    <SideLeft>
      <h3>Relação</h3>
      <LegendContainer>
        {reportData.map(data => (
          <Legend key={data.name} color={data.color}>
            <div>{data.percent ? `${data.percent}%` : ''}</div>
            <span>{data.name}</span>
          </Legend>
        ))}
      </LegendContainer>
    </SideLeft>

    <SideRight>
      <PieChart width={230} height={230}>
        <Pie data={reportData} dataKey="percent">
          {reportData.map(data => (
            <Cell key={data.name} fill={data.color} />
          ))}
        </Pie>
      </PieChart>
    </SideRight>
  </Container>
);

export default PieChartCard;
