"use client";
import styles from "./home.module.css";

const events = [
  { id: 1, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/Frame%2012.png", title: "Event 1" },
  { id: 2, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/Frame%2013.png", title: "Event 2" },
  { id: 3, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/Frame%2014.png", title: "Event 3" },
  { id: 4, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/Frame%2015.png", title: "Event 4" },
  { id: 5, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/Frame%2020.png", title: "Event 5" },
  { id: 6, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/Frame%2021.png", title: "Event 6" },
  { id: 7, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/Frame%2022.png", title: "Event 7" },
  { id: 8, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/Frame%2023.png", title: "Event 8" },
  { id: 9, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/Frame%2024.png", title: "Event 9" },
  { id: 10, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/Frame%2025.png", title: "Event 10" },
  { id: 11, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/Frame%2026.png", title: "Event 11" },
  { id: 12, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/Frame%2027.png", title: "Event 12" }
];


export default function EventHighlights() {
  console.log("Rendering Events Highlights........");
  return (

    <section className={styles.eventsSection}>
      <div className={styles.eventsTitleBlock}>
        <div className={styles.eventsLine}></div>
        <h2 className={styles.eventsHeading}>
          Events <span className={styles.orangeText}>Highlights</span>
        </h2>
        <div className={styles.eventsLine}></div>
      </div>

      <div className={styles.eventsGrid}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <div className={styles.eventImageWrapper}>
              <img
                src={event.image}
                alt={event.title}
                className={styles.eventImage}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
