import {
  Table,
  TableHead,
  TableHeadItem,
  TableBodyRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </tr>
      </TableHead>
      <tbody>
        {items.map(item => {
          return (
            <TableBodyRow key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </TableBodyRow>
          );
        })}
      </tbody>
    </Table>
  );
};
