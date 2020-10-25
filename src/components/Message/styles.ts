import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from  {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: 10px;
  width: 49%;
  height: 250px;
  margin: 20px 0;
  overflow: hidden;
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  animation: ${appearFromLeft} 1s;

  header {
    h1 {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 50px;
      }
    }

    p {
      width: 300px;
    }
  }

  span {
    font-weight: 500;
  }

  @media (max-width: 1148px) {
    width: 100%;
  }
`;
