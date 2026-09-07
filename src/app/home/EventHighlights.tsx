"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./home.module.css";

const events = [
  { image: "/home/IPLAUCTION.webp", title: "IPL Auction" },
  { image: "/home/alpeshsirsession.webp", title: "Expert speaker session" },
  { image: "/home/certificatedistribution.webp", title: "Certificate distribution" },
  { image: "/home/corporatecrime.webp", title: "Corporate Crime challenge" },
  { image: "/home/youthparliament.webp", title: "Youth Parliament" },
  { image: "/home/amulvisit.webp", title: "Amul industry visit" },
  { image: "/home/iprsession.webp", title: "IPR awareness session" },
  { image: "/home/hero-lcp.webp", title: "Ruminate community" },
];

function Row({ items, reverse = false }: { items: typeof events; reverse?: boolean }) {
  return (
    <div className={styles.highlightsRow}>
      <div className={`${styles.highlightsTrack} ${reverse ? styles.highlightsTrackReverse : ""}`}>
        {[0, 1].map((group) => (
          <div className={styles.highlightsGroup} key={group} aria-hidden={group === 1}>
            {items.map((event) => (
              <figure className={styles.highlightCard} key={`${group}-${event.image}`}>
                <Image src={event.image} alt={event.title} className={styles.highlightImage} fill loading="lazy" sizes="(max-width: 620px) 74vw, (max-width: 1100px) 38vw, 330px" quality={72} />
                <figcaption>{event.title}</figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EventHighlights() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setMounted(true); observer.disconnect(); }
    }, { rootMargin: "420px 0px" });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.eventsSection} aria-labelledby="events-highlight-title">
      <div className={styles.eventsTitleBlock}>
        <div className={styles.eventsLine} />
        <div><p className={styles.sectionEyebrow}>Moments in motion</p><h2 id="events-highlight-title" className={styles.eventsHeading}>Events <span className={styles.orangeText}>Highlights</span></h2></div>
        <div className={styles.eventsLine} />
      </div>
      {mounted ? <div className={styles.highlightsWrapper}><Row items={events.slice(0, 4)} /><Row items={events.slice(4)} reverse /></div> : <div className={styles.highlightsSkeleton} aria-hidden="true"><span /><span /><span /></div>}
    </section>
  );
}
