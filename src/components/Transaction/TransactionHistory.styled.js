import { styled } from 'styled-components';

export const Table = styled.table`
  margin: 40px auto;
  width: 600px;
  text-align: center;
  box-shadow: 2px 2px 5px 5px grey;
`;

export const TableHead = styled.thead`
  background-color: aqua;
  color: white;
  height: 30px;
`;

export const TableHeadItem = styled.th`
  text-transform: uppercase;
`;

export const TableBodyRow = styled.tr`
  height: 30px;

  :first-child {
    text-transform: capitalize;
  }

  :nth-child(odd) {
    background-color: lightgray;
  }
`;
