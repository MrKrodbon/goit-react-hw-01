import FriendListItem from "../FriendListItem/FrinedListItem";
import styles from "../FriendList/FriendList.module.css";

function FriendList({ friendsList }) {
  return (
    <ul className={styles.friendList}>
      {friendsList.map((friend) => {
        return (
          <li key={friend.id} className={styles.li}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;
