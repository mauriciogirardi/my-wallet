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

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

export const Filters = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;

  .actived {
    opacity: 100%;
  }

  > button {
    background-color: #4e41f0;
    border: 0;
    border-radius: 5px;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    opacity: 40%;
    padding: 5px 10px;
    transition: opacity 0.2s;

    & + button {
      margin-left: 25px;
      background-color: #e44c4e;
    }
  }
`;
export const Content = styled.div`
  margin-top: 40px;
  animation: ${appearFromLeft} 1s;
`;
