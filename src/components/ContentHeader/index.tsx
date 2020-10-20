import React from 'react';

import { Container, Controllers, Title } from './styles';

interface ITitleProps {
  title: string;
  lineColor?: string;
}

const ContentHeader: React.FC<ITitleProps> = ({
  title,
  lineColor,
  children,
}) => (
  <Container>
    <Title lineColor={lineColor}>
      {title}
      <span />
    </Title>

    <Controllers>{children}</Controllers>
  </Container>
);
export default ContentHeader;
