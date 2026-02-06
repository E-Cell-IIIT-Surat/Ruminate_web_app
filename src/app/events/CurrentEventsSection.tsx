"use client";

import React from "react";
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
},
{
  title: "SPEAKER’S SESSION",
  description:
    "Interactive talks by entrepreneurs and industry leaders, aligned with E-Cell’s mission to inspire, mentor, and expose students to real startup journeys.",
  date: "February 13, 2026",
  image:
    "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/live%20events%20banner/speakersessiondisp.png",
},
{
  title: "BRANDATHON",
  description:
    "A fast-paced branding challenge where participants create and pitch brand strategies, reflecting E-Cell’s focus on marketing, storytelling, and market positioning.",
  date: "February 9, 2026",
  image:
    "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/live%20events%20banner/brandathondisp.png",
},
{
  title: "IPL AUCTION",
  description:
    "A strategic bidding and team-building simulation that enhances decision-making, valuation, and risk analysis—key entrepreneurial competencies nurtured by E-Cell.",
  date: "February 13, 2026",
  image:
    "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/live%20events%20banner/iplauctiondisp.png",
},
{
  title: "YOUTH PARLIAMENT",
  description:
    "A structured debate platform encouraging leadership, policy awareness, and articulation, supporting E-Cell’s aim to develop confident, socially aware leaders.",
  date: "February 14, 2026",
  image:
    "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/live%20events%20banner/youthparliamentdisp.png",
},
{
  title: "BUZZIFY",
  description:
    "A digital marketing and virality-focused challenge that highlights content creation and audience engagement, aligning with E-Cell’s focus on modern growth strategies.",
  date: "February 11, 2026",
  image:
    "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/live%20events%20banner/buzzifydisp.png",
},


];

export default function CurrentEvents() {
  return (
    <section className={styles.currentEventsSection}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionHeading}>
          <span className={styles.orange}>Current</span> Events
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
                <a href={event.link} className={styles.eventButton}>
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
