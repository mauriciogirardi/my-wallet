import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #ff9000;
  transition: opacity 0.2s;

  &:hover {
    opacity: 80%;
  }
`;
