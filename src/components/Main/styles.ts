import styled from 'styled-components';

export const Container = styled.main`
  grid-area: CT;
  padding: 30px 100px;
  width: 100%;

  height: calc(100vh - 70px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.secondary};
  }
`;
