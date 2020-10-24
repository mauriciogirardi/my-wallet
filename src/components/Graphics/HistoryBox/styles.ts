import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.tertiary};
  width: 100%;
  height: 300px;
  padding: 30px 30px 70px 10px;
  border-radius: 10px;
  overflow: hidden;

  h2 {
    margin-bottom: 20px;
    margin-left: 20px;
  }
`;
