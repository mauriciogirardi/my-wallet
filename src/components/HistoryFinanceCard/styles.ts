import styled from 'styled-components';

interface ITagProps {
  tagColor: string;
}

export const Container = styled.li`
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: 10px;
  cursor: pointer;
  list-style: none;
  width: 100%;
  padding: 10px 30px;
  position: relative;
  transition: all 0.3s;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + li {
    margin-top: 10px;
  }

  div {
    display: flex;
    flex-direction: column;

    span {
      font-weight: 500;
      font-size: 17px;
    }
  }

  h3 {
    flex: 1;
    text-align: right;
  }

  &:hover {
    opacity: 90%;
    transform: translateX(10px);
  }
`;
export const Tag = styled.div<ITagProps>`
  background-color: ${props => props.tagColor};
  border-radius: 10px 0 0 10px;
  height: 100%;
  width: 10px;
  position: absolute;
  top: 0;
  left: 0;
`;
