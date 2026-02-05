'use client';

import React from 'react';
import styles from './events.module.css';

interface CurrentEvent {
  title: string;
  description: string;
  date: string;
  image: string;
  link?: string;
}

const currentEvents: CurrentEvent[] = [
  {
    title: "E-Summit 2025",
    description: "Join us for the flagship event of Ruminate, featuring speaker sessions, workshops, and networking opportunities.",
    date: "March 15-17, 2025",
    image: "/some2.jpg",
    link:"https://corporate-crime-jund.vercel.app/login"
  },
  {
    title: "Startup Workshop",
    description: "Learn the basics of starting a business with hands-on workshops and expert guidance.",
    date: "April 5, 2025",
    image: "/some2.jpg"
  }
];

export default function CurrentEvents() {
  return (
    <section className={styles.currentEventsSection}>
      <h2 className={styles.sectionHeading}>
        <span className={styles.orange}>Current</span> Events
      </h2>

      <div className={styles.eventsGrid}>
        {currentEvents.map((event, index) => (
          <div
            key={index}
            className={`${styles.eventItem} ${index % 2 !== 0 ? styles.reverse : ''}`}
          >
            <div className={styles.textBlock}>
              <h4>{event.title}</h4>
              <p className={styles.eventDate}>{event.date}</p>
              {event.link && (
                <a href={event.link} className={styles.eventButton}>Register Now</a>
              )}
              <a href={event.link} className={styles.eventButton}>Register Now</a>
            </div>
            <div className={styles.imageBlock}>
              <img
                src={event.image}
                alt={event.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}