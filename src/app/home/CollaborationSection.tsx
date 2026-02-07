"use client";
import { useEffect, useRef } from "react";
import styles from "./home.module.css";

const COLLAB_IMAGES = [
  { src: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/COLLABS/Frame%202610542.png", alt: "StockGro" },
  { src: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/COLLABS/Frame%202610543.png", alt: "Finshots" },
  { src: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/COLLABS/Frame%202610544.png", alt: "Suman Book Store" },
  { src: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/COLLABS/Frame%202610545.png", alt: "KasperTech" },
];

export default function CollaborationSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const userInteracting = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleUserInteract = () => {
      userInteracting.current = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        userInteracting.current = false;
      }, 2500);
    };

    el.addEventListener("wheel", handleUserInteract, { passive: true });
    el.addEventListener("touchstart", handleUserInteract, { passive: true });
    el.addEventListener("touchmove", handleUserInteract, { passive: true });
    el.addEventListener("mousedown", handleUserInteract);

    const scrollSpeed = 1;
    const halfWidth = () => el.scrollWidth / 2;

    const autoScroll = () => {
      if (userInteracting.current) {
        rafRef.current = requestAnimationFrame(autoScroll);
        return;
      }
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) {
        rafRef.current = requestAnimationFrame(autoScroll);
        return;
      }
      el.scrollLeft += scrollSpeed;
      if (el.scrollLeft >= halfWidth()) {
        el.scrollLeft = 0;
      }
      rafRef.current = requestAnimationFrame(autoScroll);
    };

    const startScroll = () => {
      rafRef.current = requestAnimationFrame(autoScroll);
    };

    if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
      requestAnimationFrame(() => {
        requestAnimationFrame(startScroll);
      });
    } else {
      startScroll();
    }

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => {
            if (el.scrollLeft >= halfWidth()) el.scrollLeft = 0;
          })
        : null;
    resizeObserver?.observe(el);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      resizeObserver?.disconnect();
      el.removeEventListener("wheel", handleUserInteract);
      el.removeEventListener("touchstart", handleUserInteract);
      el.removeEventListener("touchmove", handleUserInteract);
      el.removeEventListener("mousedown", handleUserInteract);
    };
  }, []);

  return (
    <section className={styles.collabSection}>
      <div className={styles.collabTitleBlock}>
        <h2 className={styles.collabHeading}>Collaboration</h2>
      </div>
      <div className={styles.collabScrollWrapper}>
        <div className={styles.collabScroll} ref={scrollRef}>
          {[...COLLAB_IMAGES, ...COLLAB_IMAGES].map((item, idx) => (
            <img key={idx} src={item.src} alt={item.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
