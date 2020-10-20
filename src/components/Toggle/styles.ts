import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';

export const Containe = styled.div`
  max-width: 140px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ToggleLabel = styled.span``;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.info,
    offColor: theme.colors.gray,
  }),
)``;
