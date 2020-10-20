import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    height: 100vh;
  }

  body,
  input,
  textarea,
  button {
    font: 16px 'Roboto', sans-serif;
    border: 0;
  }

  button {
    cursor: pointer;
  }
`;
