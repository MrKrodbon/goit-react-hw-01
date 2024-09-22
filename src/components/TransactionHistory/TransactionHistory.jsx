import styles from "./TransactionHistory.module.css";
import clsx from "clsx";

function TransactionHistory({ transactions }) {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tHead}>Type</th>
            <th className={styles.tHead}>Amount</th>
            <th className={styles.tHead}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ id, type, currency, amount }, index) => (
            <tr
              key={id}
              className={clsx({
                [styles.tRaw]: true,
                [styles.tRawColored]: index % 2 === 1,
              })}
            >
              <td className={styles.tData}>{type}</td>
              <td className={styles.tData}>{amount}</td>
              <td className={styles.tData}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TransactionHistory;
