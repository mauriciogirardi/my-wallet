import styled from 'styled-components';

interface IContainerProps {
  color: string;
}

export const Container = styled.div<IContainerProps>`
  background-color: ${props => props.color};
  border-radius: 10px;
  padding: 30px;
  min-height: 200px;
  width: 32%;
  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  z-index: 1000;

  > img {
    position: absolute;
    height: 110%;
    top: -10px;
    right: -25px;
    object-fit: cover;
    opacity: 30%;
    z-index: auto;
  }

  > div {
    span {
      font-size: 28px;
      font-weight: 500;
      color: #fff;
      z-index: 1000;
    }
    h1 {
      color: #fff;
    }
  }

  > small {
    color: #fff;
    z-index: 1000;
  }
`;
