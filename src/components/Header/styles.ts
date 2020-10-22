import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  display: flex;
  padding: 0 30px;
  justify-content: space-between;
  grid-area: HD;
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
