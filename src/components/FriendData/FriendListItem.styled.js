import { styled } from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
`;

export const ListDot = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.$status === true) {
      return 'green';
    }
    return 'red';
  }};
`;
