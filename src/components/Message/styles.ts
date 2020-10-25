import styled from 'styled-components';

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
