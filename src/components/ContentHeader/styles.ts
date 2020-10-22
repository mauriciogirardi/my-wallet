import styled from 'styled-components';

interface ITitleProps {
  lineColor?: string;
}

export const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
`;

export const Title = styled.h1<ITitleProps>`
  font-weight: 500;

  span {
    background-color: ${props => props.lineColor};
    display: block;
    width: 50px;
    height: 5px;
  }
`;
export const Controllers = styled.main`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 200px;
  width: 100%;
`;
