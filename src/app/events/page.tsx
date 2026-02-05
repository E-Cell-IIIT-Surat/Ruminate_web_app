import ImageCarousel from "./ImageCarousel";
import CurrentEvents from "./CurrentEventsSection";
import PastEvents from "./PastEventsSection";
import styles from "./events.module.css";
import Footer from "../home/Footer";

export default function EventsPage() {
  return (
    <div className={styles.eventsPage}>
      <ImageCarousel />
      <CurrentEvents />
      <PastEvents />
      <Footer />
    </div>
  );
}
