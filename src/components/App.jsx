import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendData/FriendList';
import { TransactionHistory } from './Transaction/TransactionHistory';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendData/friends.json';
import transactions from './Transaction/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </div>
  );
};
