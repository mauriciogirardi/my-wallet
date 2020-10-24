import styled from 'styled-components';

export const Container = styled.div`
  select {
    padding: 8px 10px;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.inputBackground};
    color: ${props => props.theme.colors.white};
  }
`;
