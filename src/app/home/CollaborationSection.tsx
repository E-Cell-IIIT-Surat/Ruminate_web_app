"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./home.module.css";

const collaborators = [
  { name: "StockGro", src: "/home/collaborations/stockgro.webp" },
  { name: "Finshots", src: "/home/collaborations/finshots.webp" },
  { name: "Suman Book Store", src: "/home/collaborations/suman-book-store.webp" },
  { name: "KasperTech", src: "/home/collaborations/kaspertech.webp" },
  { name:"darexAI" , src:"/home/collaborations/darexai.png"}
];

export default function CollaborationSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: "120px 0px", threshold: 0.12 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.collabSection} aria-labelledby="collaboration-title">
      <div className={styles.collabTitleBlock}>
        <p className={styles.sectionEyebrow}>Built together</p>
        <h2 id="collaboration-title" className={styles.collabHeading}>Our collaborations</h2>
        <p className={styles.collabIntro}>Partners who help ideas move beyond the classroom.</p>
      </div>
      <div className={styles.collabMarquee}>
        <div className={`${styles.collabTrack} ${visible ? styles.collabTrackRunning : ""}`}>
          {[0, 1].map((group) => (
            <div className={styles.collabGroup} key={group} aria-hidden={group === 1}>
              {collaborators.map((brand) => (
                <article className={styles.collabCard} key={brand.name}>
                  <Image
                    className={styles.collabLogo}
                    src={brand.src}
                    alt={`${brand.name} logo`}
                    width={547}
                    height={280}
                    sizes="(max-width: 600px) 240px, 330px"
                    loading="lazy"
                  />
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
