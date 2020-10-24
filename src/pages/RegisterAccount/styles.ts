import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form`
  background-color: ${props => props.theme.colors.tertiary};
  padding: 30px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
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
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  margin-top: 30px;
  border-radius: 5px;
  color: #fff;
  background-color: #ff9000;
  transition: opacity 0.2s;
  font-size: 18px;
  font-weight: 700;

  &:hover {
    opacity: 80%;
  }
`;
