import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

import { Container, Form, Wrapper } from './styles';

const options = [
  { value: 'recorrente', label: 'recorrente' },
  { value: 'eventual', label: 'eventual' },
];

const RegisterAccount: React.FC = () => (
  <Container>
    <ContentHeader title="Cadastro de contas" lineColor="#e95f78" />
    <Form onSubmit={() => {}} autoComplete="off">
      <Wrapper>
        <div>
          <span>Nome</span>
          <Input
            name="nameAccount"
            type="text"
            placeholder="Água,Luz,Telefone..."
          />
        </div>

        <div>
          <span>Tipo de movimentação</span>
          <Select options={options} />
        </div>
      </Wrapper>

      <Wrapper>
        <div>
          <span>Data</span>
          <Input name="date" type="date" />
        </div>

        <div>
          <span>Valor</span>
          <Input name="accountValue" type="number" placeholder="R$" />
        </div>
      </Wrapper>

      <Button type="submit">Cadastrar</Button>
    </Form>
  </Container>
);

export default RegisterAccount;
