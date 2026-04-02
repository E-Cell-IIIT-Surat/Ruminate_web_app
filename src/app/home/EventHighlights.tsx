"use client";
import { useEffect, useRef, useState } from "react";
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
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const [isTouching, setIsTouching] = useState(false);

  // Split events into two halves
  const mid = Math.ceil(events.length / 2);
  const row1Events = events.slice(0, mid);
  const row2Events = events.slice(mid);

  // Duplicate for infinite scroll
  const row1Loop = [...row1Events, ...row1Events];
  const row2Loop = [...row2Events, ...row2Events];

  useEffect(() => {
    const el1 = row1Ref.current;
    const el2 = row2Ref.current;

    if (!el1 || !el2) return;

    const speed = 0.5;
    let animationId: number;

    const animate = () => {
      if (!isTouching) {
        // Row 1: scroll LEFT
        el1.scrollLeft += speed;
        if (el1.scrollLeft >= el1.scrollWidth / 2) {
          el1.scrollLeft -= el1.scrollWidth / 2;
        }

        // Row 2: scroll RIGHT
        el2.scrollLeft -= speed;
        if (el2.scrollLeft <= 0) {
          el2.scrollLeft += el2.scrollWidth / 2;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isTouching]);

  // Touch support
  useEffect(() => {
    const enableTouch = (el) => {
      if (!el) return;

      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;

      const handleTouchStart = (e) => {
        isDown = true;
        setIsTouching(true);
        startX = e.touches[0].pageX;
        scrollLeft = el.scrollLeft;
      };

      const handleTouchMove = (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX;
        const walk = (x - startX) * 1.5;
        el.scrollLeft = scrollLeft - walk;
      };

      const handleTouchEnd = () => {
        isDown = false;
        setIsTouching(false);
      };

      el.addEventListener("touchstart", handleTouchStart);
      el.addEventListener("touchmove", handleTouchMove);
      el.addEventListener("touchend", handleTouchEnd);

      return () => {
        el.removeEventListener("touchstart", handleTouchStart);
        el.removeEventListener("touchmove", handleTouchMove);
        el.removeEventListener("touchend", handleTouchEnd);
      };
    };

    const cleanup1 = enableTouch(row1Ref.current);
    const cleanup2 = enableTouch(row2Ref.current);

    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, []);

  return (
    <section className={styles.eventsSection}>
      <div className={styles.eventsTitleBlock}>
        <div className={styles.eventsLine}></div>
        <h2 className={styles.eventsHeading}>
          Events <span className={styles.orangeText}>Highlights</span>
        </h2>
        <div className={styles.eventsLine}></div>
      </div>

      <div className={styles.highlightsWrapper}>
        {/* Row 1: Scroll LEFT */}
        <div className={styles.highlightsRow} ref={row1Ref}>
          <div className={styles.highlightsTrack}>
            {row1Loop.map((event, index) => (
              <div key={`row1-${index}`} className={styles.highlightCard}>
                <img
                  src={event.image}
                  alt={event.title}
                  className={styles.highlightImage}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scroll RIGHT */}
        <div className={styles.highlightsRow} ref={row2Ref}>
          <div className={styles.highlightsTrack}>
            {row2Loop.map((event, index) => (
              <div key={`row2-${index}`} className={styles.highlightCard}>
                <img
                  src={event.image}
                  alt={event.title}
                  className={styles.highlightImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
