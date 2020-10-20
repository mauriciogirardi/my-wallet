import styled from 'styled-components';

interface ITitleProps {
  lineColor?: string;
}

export const Container = styled.header`
  width: 100%;
  margin-bottom: 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1<ITitleProps>`
  font-weight: 500;

  span {
    width: 50px;
    height: 5px;
    background-color: ${props => props.lineColor};
    display: block;
  }
`;
export const Controllers = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 200px;
  width: 100%;
`;
