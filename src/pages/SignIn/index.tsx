import React, { ChangeEvent, useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

import logoDarkSvg from '../../assets/logo-dark.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

import { Container, Form, LoginBox } from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const [values, setValues] = useState({ email: '', password: '' });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Container>
      <LoginBox>
        <img src={logoDarkSvg} alt="My Wallet" />

        <Form
          onSubmit={() => signIn(values.email, values.password)}
          autoComplete="off"
          autoCorrect="off"
        >
          <div>
            <FaUser />
            <Input
              type="text"
              name="email"
              placeholder="Usuario"
              required
              onChange={onChange}
              value={values.email}
            />
          </div>

          <div>
            <FaLock />
            <Input
              type="password"
              name="password"
              placeholder="Senha"
              required
              onChange={onChange}
              value={values.password}
            />
          </div>

          <Button type="submit">Entrar</Button>
        </Form>
      </LoginBox>
    </Container>
  );
};

export default SignIn;
