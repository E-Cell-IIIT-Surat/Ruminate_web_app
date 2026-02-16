"use client";
import { useEffect, useState } from "react";
import styles from "./home.module.css";

const heroSlides = [
  "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageslider/KTBIMG.png",
  "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageslider/amulvisit.png",
  "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageslider/iprsession.png",
];

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
            <div
              className={styles.heroBackgroundSlide}
              key={index}
              style={{ backgroundImage: `url(${image})` }}
            >
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

      <div className={styles.heroContent}>
        <div className={`${styles.heroText} ${isVisible ? styles.fadeInUp : ""}`}>
          <h1 className={styles.heroTitle}>
            Foster The <span className={styles.heroSpark}>Spark</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Welcome to Ruminate &ndash; The E-Cell of IIIT Surat
          </p>

          <p className={styles.heroDescription}>
            We foster a culture of innovation, creativity, and entrepreneurial thinking &mdash; empowering students to explore, build, and lead.
          </p>
        </div>
      </div>

      <div className={styles.heroScroll}>
        <div className={styles.scrollIndicator}>
          <span></span>
        </div>
      </div>
    </section>
  );
}
