"use client";

import React from "react";
import Link from "next/link";
import styles from "./events.module.css";

interface CurrentEvent {
  title: string;
  description: string;
  date: string;
  image: string;
  link?: string;
}

const currentEvents: CurrentEvent[] = [
{
  title: "CORPORATE CRIME",
  description:
    "Join us for the flagship event of Ruminate, featuring speaker sessions, workshops, and networking opportunities.",
  date: "February 12, 2026",
  image:
    "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/live%20events%20banner/corporatecrimedisp.png",
  link: "https://corporate-crime-jund.vercel.app/login",
},
{
  title: "STOCKMANIA",
  description:
    "A real-time stock market simulation that builds financial literacy and investment mindset—core skills E-Cell promotes for startup founders and future investors.",
  date: "February 11-13, 2026",
  image:
    "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/live%20events%20banner/stockmaniadisp.png",
  link: "https://unstop.com/p/stock-mania-spring-fiesta-indian-institute-of-information-technology-iiit-surat-1636178?lb=OXTB9nom&utm_medium=Share&utm_source=WhatsApp",
},
{
  title: "SPEAKER’S SESSION",
  description:
    "Interactive talks by entrepreneurs and industry leaders, aligned with E-Cell’s mission to inspire, mentor, and expose students to real startup journeys.",
  date: "February 13, 2026",
  image:
    "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/live%20events%20banner/speakersessiondisp.png",
  link: "#",
},
{
  title: "BRANDATHON",
  description:
    "A fast-paced branding challenge where participants create and pitch brand strategies, reflecting E-Cell’s focus on marketing, storytelling, and market positioning.",
  date: "February 9, 2026",
  image:
    "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/live%20events%20banner/brandathondisp.png",
  link: "https://unstop.com/competitions/brandathon-spring-fiesta-indian-institute-of-information-technology-iiit-surat-1633686?lb=OXTB9nom&utm_medium=Share&utm_source=WhatsApp",
},
{
  title: "IPL AUCTION",
  description:
    "A strategic bidding and team-building simulation that enhances decision-making, valuation, and risk analysis—key entrepreneurial competencies nurtured by E-Cell.",
  date: "February 13, 2026",
  image:
    "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/live%20events%20banner/iplauctiondisp.png",
  link: "https://unstop.com/competitions/ipl-auction-spring-fiesta-indian-institute-of-information-technology-iiit-surat-1634476?lb=OXTB9nom&utm_medium=Share&utm_source=WhatsApp",
},
{
  title: "YOUTH PARLIAMENT",
  description:
    "A structured debate platform encouraging leadership, policy awareness, and articulation, supporting E-Cell’s aim to develop confident, socially aware leaders.",
  date: "February 14, 2026",
  image:
    "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/live%20events%20banner/youthparliamentdisp.png",
  link: "https://forms.gle/meWChQf9TT8RwXc68",
},
{
  title: "BUZZIFY",
  description:
    "A digital marketing and virality-focused challenge that highlights content creation and audience engagement, aligning with E-Cell’s focus on modern growth strategies.",
  date: "February 11, 2026",
  image:
    "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/live%20events%20banner/buzzifydisp.png",
  link: "https://unstop.com/competitions/buzzify-spring-fiesta-indian-institute-of-information-technology-iiit-surat-1634359?lb=OXTB9nom&utm_medium=Share&utm_source=WhatsApp",
},


];

export default function CurrentEvents() {
  return (
    <section className={styles.currentEventsSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.currentEventsNotice}>
          <h2 className={styles.sectionHeading}>
            <span className={styles.orange}>Current</span> Events
          </h2>
          <p className={styles.currentEventsText}>No live events for now.</p>
        </div>

        <h2 className={styles.sectionHeading}>
          <span className={styles.orange}>Past</span> Events
        </h2>

        <div className={styles.currentEventsGrid}>
          {currentEvents.map((event, index) => (
            <div key={index} className={styles.currentEventCard}>
              <div className={styles.currentEventImageWrapper}>
                <img src={event.image} alt={event.title} />
              </div>

              <div className={styles.currentEventContent}>
                <h4>{event.title}</h4>
                <p className={styles.eventDate}>{event.date}</p>
                <Link href="/esummit" className={styles.eventButton}>
                  View Report
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
