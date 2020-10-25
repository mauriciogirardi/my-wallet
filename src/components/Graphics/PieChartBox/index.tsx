import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import { Container, SideLeft, LegendContainer, Legend } from './styles';

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

    <ResponsiveContainer>
      <PieChart>
        <Pie data={reportData} dataKey="percent">
          {reportData.map(data => (
            <Cell key={data.name} fill={data.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </Container>
);

export default PieChartCard;
