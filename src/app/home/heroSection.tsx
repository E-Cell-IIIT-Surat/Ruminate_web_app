"use client";
import { useEffect, useState } from "react";
import styles from "./home.module.css";

const heroSlides = [
  "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageslider/KTBIMG.png",
  "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageslider/amulvisit.png",
  "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageslider/iprsession.png",
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div
          className={styles.heroBackgroundTrack}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((image, index) => (
            <div className={styles.heroBackgroundSlide} key={index}>
              <img
                src={image}
                alt=""
                className={styles.heroBackgroundImage}
              />
            </div>
          ))}
        </div>
        <div className={styles.heroOverlay}></div>
      </div>

      <div className={styles.heroScroll}>
        <div className={styles.scrollIndicator}>
          <span></span>
        </div>
      </div>
    </section>
  );
}
