import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from  {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: 10px;
  width: 49%;
  height: 250px;
  margin: 20px 0;
  overflow: hidden;
  padding: 30px;

  animation: ${appearFromLeft} 1s;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1148px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const SideLeft = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 25px;
  }
`;

export const LegendContainer = styled.ul`
  margin-top: 25px;
  overflow-y: auto;
  direction: rtl;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.primary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

export const Legend = styled.li<ILegendProps>`
  direction: ltr;
  display: flex;
  align-items: center;
  margin-left: 0;

  > div {
    background-color: ${props => props.color};
    border-radius: 5px;
    margin-right: 8px;
    font-size: 17px;
    font-weight: bold;
    width: 60px;
    height: 30px;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
      width: 40px;
      font-size: 12px;
    }
  }

  span {
    font-weight: 500;

    @media (max-width: 600px) {
      font-size: 12px;
    }
  }

  & + li {
    margin-top: 10px;
  }
`;
