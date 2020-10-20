import styled from 'styled-components';

export const Container = styled.header`
  grid-area: HD;
  background-color: ${props => props.theme.colors.secondary};
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Profiel = styled.div`
  h2 {
    font-size: 20px;
    span {
      margin-right: 8px;
    }
  }

  h3 {
    font-weight: 400;
  }
`;
