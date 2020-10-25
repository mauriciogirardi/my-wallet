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

export const Container = styled.div``;

export const Form = styled.form`
  background-color: ${props => props.theme.colors.tertiary};
  padding: 30px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;

  animation: ${appearFromLeft} 1s;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + div {
    margin-top: 15px;
  }

  > div {
    width: 48%;

    select {
      width: 100%;
      height: 40px;
      border: 0;
      font-size: 16px;
      margin-top: 5px;
    }

    input::-webkit-calendar-picker-indicator {
      background-color: #fff;
      border-radius: 5px;
      cursor: pointer;
    }

    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

    @media (max-width: 600px) {
      width: 100%;

      & + div {
        margin-top: 15px;
      }
    }
  }

  @media (max-width: 600px) {
    display: block;
  }
`;
