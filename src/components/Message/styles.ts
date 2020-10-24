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
        /* -moz-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1); */
      }
    }

    p {
      width: 300px;
    }
  }

  span {
    font-weight: 500;
  }
`;
