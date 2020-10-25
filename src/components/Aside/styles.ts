import styled from 'styled-components';

interface IContainerProps {
  menuIsOpen: boolean;
}

export const Container = styled.aside<IContainerProps>`
  background-color: ${props => props.theme.colors.secondary};
  border-right: 1px solid ${props => props.theme.colors.gray};
  grid-area: AS;
  height: 100vh;
  position: relative;

  @media (max-width: 600px) {
    border-right: none;
    z-index: 1000;
    position: absolute;
    top: 70px;
    left: 0;
    width: ${props => (props.menuIsOpen ? '100%' : '0px')};
    height: calc(100vh - 70px);
  }
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;

  img {
    width: 200px;

    @media (max-width: 600px) {
      display: none;
    }
  }

  @media (max-width: 600px) {
    justify-content: start;
    padding-left: 30px;
  }
`;

export const ToggleMenuMobile = styled.button`
  display: none;

  @media (max-width: 600px) {
    display: block;
    position: absolute;
    top: -60px;
    left: 30px;
    width: 50px;
    height: 50px;
    border-radius: 5px;

    background: ${props => props.theme.colors.inputBackground};
    color: ${props => props.theme.colors.white};

    svg {
      font-size: 25px;
    }
  }
`;

export const MenuContainer = styled.nav<IContainerProps>`
  padding: 40px 0 0 30px;

  a {
    align-items: center;
    color: ${props => props.theme.colors.colorMenu};
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

    @media (max-width: 600px) {
      margin-left: ${props => (props.menuIsOpen ? '0' : '-300px')};
    }
  }

  > button {
    color: ${props => props.theme.colors.colorMenu};
    background: transparent;
    display: flex;
    align-items: center;
    margin-top: 15px;
    font-size: 18px;
    letter-spacing: 1px;
    transition: opacity 0.2s;

    > svg {
      font-size: 22px;
      margin-right: 5px;
    }

    &:hover {
      opacity: 70%;
    }

    @media (max-width: 600px) {
      margin-left: ${props => (props.menuIsOpen ? '0' : '-300px')};
    }
  }
`;
