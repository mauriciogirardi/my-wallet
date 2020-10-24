import styled from 'styled-components';

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  background-color: ${props => props.theme.colors.tertiary};
  width: 49%;
  height: 260px;
  padding: 30px;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px 0;

  display: flex;
  justify-content: space-between;
`;

export const SideLeft = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  margin-left: 10px;

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
  }

  span {
    font-size: 14px;
  }

  & + li {
    margin-top: 10px;
  }
`;
