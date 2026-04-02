"use client";
import { useEffect, useState } from "react";
import styles from "./home.module.css";

const heroSlides = [
  "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageslider/voteofthanks.png",
  "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageslider/IPLAUCTION.png",
  "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageslider/alpeshsirsession.png",
  "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageslider/certificatedistribution.png",
  "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageslider/corporatecrime.png",
  "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageslider/youthparliament.png",
  "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageslider/amulvisit.png",
  "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageslider/iprsession.png",
];

const heroBoxes = [
  {
    image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/homepageeventsinbanner/coreeventsblock.svg",
    href: "/events",
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* DESKTOP VIEW */}
      {!isMobile && (
        <section className={styles.heroDesktop}>
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
                Welcome to Ruminate — The Entrepreneurship Cell of IIIT Surat
              </p>

              <p className={styles.heroDescription}>
                Empowering the next generation of innovators, entrepreneurs, and leaders. Join us in transforming ideas into impact through mentorship, events, and community.
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
      )}

      {/* MOBILE VIEW */}
      {isMobile && (
        <section className={styles.heroMobile}>
          <div className={styles.heroMobileBackground}>
            <div
              className={styles.heroMobileBackgroundTrack}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {heroSlides.map((image, index) => (
                <div
                  className={styles.heroMobileBackgroundSlide}
                  key={index}
                >
                  <img
                    src={image}
                    alt=""
                    className={styles.heroMobileBackgroundImage}
                  />
                </div>
              ))}
            </div>
            <div className={styles.heroMobileOverlay}></div>
          </div>

          <div className={styles.heroMobileContent}>
            <div className={`${styles.heroMobileText} ${isVisible ? styles.fadeInUp : ""}`}>
              <h1 className={styles.heroMobileTitle}>
                Foster The <span className={styles.heroMobileSpark}>Spark</span>
              </h1>

              <p className={styles.heroMobileSubtitle}>
                Welcome to Ruminate
              </p>

              <p className={styles.heroMobileDescription}>
                Empowering innovators and leaders through mentorship, events, and community.
              </p>
            </div>
          </div>

          <section className={styles.heroMobileBoxesStrip} aria-label="Featured events">
            <div className={styles.heroMobileBoxesStripInner}>
              {heroBoxes.map((item, index) => (
                <a
                  className={styles.heroMobileBox}
                  href={item.href}
                  key={`strip-${item.image}-${index}`}
                >
                  <img src={item.image} alt={`Featured event ${index + 1}`} />
                </a>
              ))}
            </div>
          </section>
        </section>
      )}

      {/* DESKTOP BOXES STRIP */}
      {!isMobile && (
        <section className={styles.heroBoxesStrip} aria-label="Featured events">
          <div className={styles.heroBoxesStripInner}>
            {heroBoxes.map((item, index) => (
              <a
                className={styles.heroBox}
                href={item.href}
                key={`strip-${item.image}-${index}`}
              >
                <img src={item.image} alt={`Featured event ${index + 1}`} />
              </a>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
