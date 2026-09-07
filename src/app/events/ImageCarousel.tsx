"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./events.module.css";

const slides = [
  {
    image: "/home/certificatedistribution.webp",
    title: "E-Summit 2026",
    description: "Bringing together young entrepreneurs and industry experts through various workshops, empowering young innovators.",
  },
  {
    image: "/home/iprsession.webp",
    title: "SSIP",
    description: "SSIP (Student Startup and Innovation Policy) Gujarat is a state-wide initiative promoting student-led innovation, entrepreneurship, and problem-solving across educational institutions.",
  },
  {
    image: "/home/hero-lcp.webp",
    title: "KTB",
    description: "An opportunity to learn and analyze about the multiple businesses in the city, and learn about the business directly from the entrepreneurs.",
  }
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds for better UX

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className={styles.carouselWrapper}>
      <div
        className={styles.carouselTrack}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className={styles.carouselSlide} key={index}>
            <Image
              src={slide.image}
              alt={slide.title}
              className={styles.slideImage}
              width={1600}
              height={900}
              sizes="100vw"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              quality={76}
            />
            <div className={styles.caption}>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className={styles.dotsContainer}>
        {slides.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => handleDotClick(index)}
            className={`${styles.dot} ${current === index ? styles.active : ""
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
