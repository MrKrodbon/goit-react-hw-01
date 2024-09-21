import styles from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <>
      <div className={styles.userWrapper}>
        <div>
          <img src={image} alt="User avatar" className={styles.img} />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.statsItem}>
            <span>Followers</span>
            <span className={styles.statsContent}>{stats.followers}</span>
          </li>
          <li className={styles.statsItem}>
            <span>Views</span>
            <span className={styles.statsContent}>{stats.views}</span>
          </li>
          <li className={styles.statsItem}>
            <span>Likes</span>
            <span className={styles.statsContent}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Profile;
