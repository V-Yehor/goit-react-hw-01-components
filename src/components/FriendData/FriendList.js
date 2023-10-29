import { FriendListItem } from './FriendListItem';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return <FriendListItem friendItem={friend} key={friend.id} />;
      })}
    </List>
  );
};
