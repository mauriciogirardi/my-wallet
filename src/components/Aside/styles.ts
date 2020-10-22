import styled from 'styled-components';

export const Container = styled.aside`
  background-color: ${props => props.theme.colors.secondary};
  border-right: 1px solid ${props => props.theme.colors.gray};
  grid-area: AS;
  height: 100vh;
  overflow: hidden;
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;

  img {
    width: 200px;
  }
`;

export const MenuContainet = styled.nav`
  padding: 40px 0 0 30px;

  a {
    align-items: center;
    color: ${props => props.theme.colors.info};
    display: block;
    display: flex;
    font-size: 18px;
    text-decoration: none;
    transition: opacity 0.2s;
    letter-spacing: 1px;

    &:hover {
      opacity: 70%;
    }

    & + a {
      margin-top: 15px;
    }

    > svg {
      font-size: 22px;
      margin-right: 5px;
    }
  }
`;
