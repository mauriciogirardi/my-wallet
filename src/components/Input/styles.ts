import styled from 'styled-components';

export const Container = styled.div`
  & + div {
    margin-top: 5px;
  }

  input {
    padding: 0 15px;
    height: 40px;
    border-radius: 5px;
    margin-top: 5px;
    border: 2px solid ${props => props.theme.colors.inputBackground};
    background-color: ${props => props.theme.colors.inputBackground};
    color: ${props => props.theme.colors.white};
    width: 100%;

    &::placeholder {
      opacity: 60%;
      font-size: 18px;
    }
  }
`;
