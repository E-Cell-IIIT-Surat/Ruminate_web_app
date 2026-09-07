import styles from "./home.module.css";

const words = ["Entrepreneurship", "Innovation", "Leadership", "Startups", "Finance", "Networking"];

export default function EcosystemTicker() {
  return (
    <div className={styles.ecosystemTicker} aria-label="Ruminate focus areas">
      <div className={styles.ecosystemTickerTrack}>
        {[0, 1].map((group) => (
          <div className={styles.ecosystemTickerGroup} key={group} aria-hidden={group === 1}>
            {words.map((word) => <span key={`${group}-${word}`}>{word}<b>◆</b></span>)}
          </div>
        ))}
      </div>
    </div>
  );
}
