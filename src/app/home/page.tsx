// app/components/HomePage.tsx
import HeroSection from "./heroSection";
import CardsSection from "./CardsSection";
import CollaborationSection from "./CollaborationSection";
import AbhyudayaSection from "./AbhyudayaSection";
import styles from "./home.module.css";
import GuestSpeakers from "./GuestSpeakers";
import ContactUs from "./ContactUs";
import EventHighlights from "./EventHighlights";
import AboutSection from "./AboutSection";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <div className={styles.content}>
        <AboutSection />
        <CardsSection />
        <AbhyudayaSection />
        <CollaborationSection />
        <EventHighlights />
        <GuestSpeakers />
        <ContactUs />
      </div>
    </div>
  );
}