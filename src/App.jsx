import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./UserData.json";
import friends from "./friends.json";
import transactions from "./transactionsHistory.json";

import "./App.css";

function App() {
  return (
    <>
      <Profile
        name={userData.userName}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friendsList={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
