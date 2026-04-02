// app/components/HomePage.tsx
"use client";
import dynamic from "next/dynamic";
import HeroSection from "./heroSection";
import CardsSection from "./CardsSection";
import CollaborationSection from "./CollaborationSection";
import styles from "./home.module.css";
import GuestSpeakers from "./GuestSpeakers";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const EventHighlights = dynamic(() => import("./EventHighlights"), { ssr: false });

export default function HomePage() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <main className={styles.content}>
        <CardsSection />
        <CollaborationSection />
        <EventHighlights />
        <GuestSpeakers />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
