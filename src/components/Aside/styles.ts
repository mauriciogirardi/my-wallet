import styled from 'styled-components';

export const Container = styled.aside`
  grid-area: AS;
  background-color: ${props => props.theme.colors.secondary};
  border-right: 1px solid ${props => props.theme.colors.gray};
  height: 100vh;
  overflow: hidden;
`;

export const Header = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
  }
`;

export const MenuContainet = styled.nav`
  padding: 40px 0 0 30px;

  a {
    color: ${props => props.theme.colors.info};
    font-size: 18px;
    text-decoration: none;
    letter-spacing: 1px;
    display: block;

    display: flex;
    align-items: center;

    transition: opacity 0.2s;

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
