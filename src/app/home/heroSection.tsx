"use client";
import { useEffect, useState } from "react";
import styles from "./home.module.css";

const heroSlides = [
  "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageslider/KTBIMG.png",
  "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageslider/amulvisit.png",
  "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageslider/iprsession.png",
];

const heroBoxes = [
  {
    image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageeventsinbanner/coreeventsblock.svg",
    href: "/coreevents",
  },
  {
    image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageeventsinbanner/esummitblock.svg",
    href: "/esummit",
  },
  {
    image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageeventsinbanner/ktbblock.svg",
    href: "/ktb",
  },
  {
    image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageeventsinbanner/ssipblock.svg",
    href: "/ssip",
  },
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

        <div className={styles.heroBoxes}>
          {heroBoxes.map((item, index) => (
            <a
              className={styles.heroBox}
              href={item.href}
              key={`${item.image}-${index}`}
            >
              <img src={item.image} alt={`Hero box ${index + 1}`} />
            </a>
          ))}
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
