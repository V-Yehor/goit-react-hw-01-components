import { ListItem, ListDot } from './FriendListItem.styled';

export const FriendListItem = ({ friendItem: { isOnline, avatar, name } }) => {
  return (
    <ListItem>
      <ListDot $status={isOnline}></ListDot>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </ListItem>
  );
};
