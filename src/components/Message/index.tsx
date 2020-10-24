import React from 'react';

import { Container } from './styles';

interface IMessageBoxProps {
  title: string;
  description: string;
  footertext: string;
  icon?: string;
}

const MessageBox: React.FC<IMessageBoxProps> = ({
  title,
  description,
  footertext,
  icon,
}) => (
  <Container>
    <header>
      <h1>
        {title}
        <img src={icon} alt={description} />
      </h1>
      <p>{description}</p>
    </header>
    <span>{footertext}</span>
  </Container>
);

export default MessageBox;
