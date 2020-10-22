import styled from 'styled-components';

export const Container = styled.div``;

export const Filters = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;

  .actived {
    opacity: 100%;
  }

  > button {
    background-color: ${props => props.theme.colors.success};
    border: 0;
    border-radius: 5px;
    color: ${props => props.theme.colors.white};
    font-size: 18px;
    font-weight: 500;
    opacity: 40%;
    padding: 5px 10px;
    transition: opacity 0.2s;

    & + button {
      margin-left: 25px;
      background-color: ${props => props.theme.colors.warning};
    }
  }
`;
export const Content = styled.div`
  margin-top: 40px;
`;
