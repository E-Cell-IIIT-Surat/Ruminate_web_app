"use client";
import styles from "./home.module.css";

const events = [
  { id: 1, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/AGC_20241008_145744337.jpg", title: "Event 1" },
  { id: 2, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/Copy%20of%200J3A6821.jpg", title: "Event 2" },
  { id: 3, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/Copy%20of%200J3A8218.JPG", title: "Event 3" },
  { id: 4, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/Copy%20of%200J3A8225.JPG", title: "Event 4" },
  { id: 5, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/Copy%20of%208A9A4583.JPG", title: "Event 5" },
  { id: 6, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/Copy%20of%208A9A4791.JPG", title: "Event 6" },
  { id: 7, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/Copy%20of%208A9A4879.JPG", title: "Event 7" },
  { id: 8, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/Copy%20of%20IMG_5071.JPG", title: "Event 8" },
  { id: 9, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/E-summit%28Speaker-session%29.JPG", title: "Event 9" },
  { id: 10, image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Event%20Highlights/ICCC_Visit.JPG", title: "Event 10" }
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
