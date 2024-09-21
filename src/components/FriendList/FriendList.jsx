import FriendListItem from "../FriendListItem/FrinedListItem";

function FriendList({ friendsList }) {
  return (
    <ul>
      {friendsList.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
            ;
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;
