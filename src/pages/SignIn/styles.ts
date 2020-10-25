import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from  {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 16px;
  overflow: hidden;
`;

export const LoginBox = styled.main`
  background-color: ${props => props.theme.colors.tertiary};
  width: 100%;
  max-width: 600px;
  padding: 90px 80px;
  border-radius: 10px;
  text-align: center;

  animation: ${appearFromLeft} 1s;

  img {
    width: 100%;
    margin-bottom: 50px;
  }

  @media (max-width: 600px) {
    padding: 70px 30px;
  }
`;

export const Form = styled.form`
  input {
    height: 55px;
    width: 390px;
    padding-left: 0;

    @media (max-width: 600px) {
      width: 280px;
    }

    @media (max-width: 376px) {
      width: 230px;
    }

    @media (max-width: 320px) {
      width: 180px;
    }
  }

  > div {
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.colors.inputBackground};
    border-radius: 5px;
    width: 100%;
    height: 60px;

    & + div {
      margin-top: 8px;
    }

    svg {
      flex: 1;
      font-size: 20px;
      color: #504b49;
    }
  }
`;
