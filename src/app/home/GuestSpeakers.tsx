"use client";
import { useEffect, useRef } from "react";
import styles from "./home.module.css";

const speakers = [
  {
    img: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Speakers%20till%20now/striver.png",
    name: "Raj Vikramaditya",
    linkedin: "https://www.linkedin.com/in/rajstriver/",
    position: "Founder-TUF (Take you Forward)"
  },
  {
    img: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Speakers%20till%20now/isverdholakiya.png",
    name: "Ishver Dholakiya",
    linkedin: "https://www.linkedin.com/in/capt-ishver-dholakiya/",
    position: "Founder-Goldi Solar"
  },
  {
    img: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Speakers%20till%20now/alpeshsir.jpg",
    name: "Alpesh Vaghasiya",
    linkedin: "https://www.linkedin.com/in/alpeshvaghasiya/",
    position: "Founder & CEO, Superworks"
  },
  {
    img: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Speakers%20till%20now/adityakarnik.jpg",
    name: "Dr Aditya Karnik",
    linkedin: "https://www.linkedin.com/in/aditya-karnik-167734/",
    position: "Advisor/Consultant - AI/ML/DS"
  },
  {
    img: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Speakers%20till%20now/ANISHGANDHISIR.png",
    name: "Dr Anish Gandhi",
    linkedin: "https://www.linkedin.com/in/dr-anish-gandhi-b3529316/",
    position: "Registered Patent Agent & IPR Consultant"
  },
  {
    img: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Speakers%20till%20now/Pranjal%20Kamra.jpg",
    name: "Pranjal Kamra",
    linkedin: "https://www.linkedin.com/in/pranjal-kamra-365355a0",
    position: "Finance Coach"
  },
  {
    img: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Speakers%20till%20now/drsudesh.jpg",
    name: "Dr. Thakur Sudesh",
    linkedin: "https://www.linkedin.com/in/dr-thakur-skr-1399744a/",
    position: "Public Speaker and Author"
  },
  {
    img: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Speakers%20till%20now/oshi.webp",
    name: "Oshi Kumari",
    linkedin: "https://www.linkedin.com/in/oshi-kumari/",
    position: "Founder-Inside FPV"
  },
  {
    img: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Speakers%20till%20now/Ekta%20mam.webp",
    name: "Ekta Arora",
    linkedin: "https://www.linkedin.com/in/ektaarora3501/",
    position: "Founder-KasperTech"
  },
  {
    img: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Speakers%20till%20now/IMG_4208.JPG",
    name: "Sunny Kabrawala",
    linkedin: "https://www.linkedin.com/in/sunny-kabrawala-238194132/",
    position: "Founder-Star Labs"
  },
  {
    img: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Speakers%20till%20now/Krishna%20Sir.webp",
    name: "Krishna Ojha",
    linkedin: "https://www.linkedin.com/in/krishnaojha02/",
    position: "Founder-KasperTech"
  },
  {
    img: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Testimonials/NikhilVyas.jpeg",
    name: "Nikhil Vyas",
    linkedin: "https://www.linkedin.com/in/nikhil-vyas-4a1a81148/",
    position: "Founder-Vysion Technologies"
  },
];

export default function GuestSpeakers() {
  const mid = Math.ceil(speakers.length / 2);
  const row1 = speakers.slice(0, mid);
  const row2 = speakers.slice(mid);

  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const SpeakerCard = ({ speaker }: { speaker: typeof speakers[0] }) => (
    <div className={styles.speakerCardMobile}>
      <a
        href={speaker.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.speakerLink}
      >
        <div className={styles.speakerImageWrapper}>
          <img
            src={speaker.img}
            alt={speaker.name}
            className={styles.speakerImage}
          />
        </div>
      </a>
      <p className={styles.speakerName}>{speaker.name}</p>
      {speaker.position ? (
        <p className={styles.speakerRole}>{speaker.position}</p>
      ) : null}
    </div>
  );

  // Auto-scroll Row 1 (right)
  useEffect(() => {
    const el = row1Ref.current;
    if (!el) return;

    let speed = 0.5;
    let isScrolling = true;
    const totalWidth = el.scrollWidth / 2;

    const scroll = () => {
      if (!isScrolling) {
        requestAnimationFrame(scroll);
        return;
      }

      el.scrollLeft += speed;

      if (el.scrollLeft >= totalWidth) {
        el.scrollLeft -= totalWidth;
      }

      requestAnimationFrame(scroll);
    };

    // Pause on touch
    const handleTouchStart = () => {
      isScrolling = false;
    };

    const handleTouchEnd = () => {
      isScrolling = true;
    };

    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchend", handleTouchEnd);

    scroll();

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Auto-scroll Row 2 (left)
  useEffect(() => {
    const el = row2Ref.current;
    if (!el) return;

    let speed = 0.5;
    let isScrolling = true;
    const totalWidth = el.scrollWidth / 2;

    const scroll = () => {
      if (!isScrolling) {
        requestAnimationFrame(scroll);
        return;
      }

      el.scrollLeft -= speed;

      if (el.scrollLeft <= 0) {
        el.scrollLeft += totalWidth;
      }

      requestAnimationFrame(scroll);
    };

    // Pause on touch
    const handleTouchStart = () => {
      isScrolling = false;
    };

    const handleTouchEnd = () => {
      isScrolling = true;
    };

    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchend", handleTouchEnd);

    scroll();

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.eventsTitleBlock}>
        <div className={styles.eventsLine}></div>
        <h2 className={styles.eventsHeading}>
          Guest and <span className={styles.orangeText}>Speakers</span>
        </h2>
        <div className={styles.eventsLine}></div>
      </div>

      {/* Desktop Grid */}
      <div className={styles.speakerGrid}>
        {speakers.map((speaker, idx) => (
          <div key={idx} className={styles.speakerCard}>
            <a
              href={speaker.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.speakerLink}
            >
              <div className={styles.speakerImageWrapper}>
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className={styles.speakerImage}
                />
              </div>
            </a>
            <p className={styles.speakerName}>{speaker.name}</p>
            {speaker.position ? (
              <p className={styles.speakerRole}>{speaker.position}</p>
            ) : null}
          </div>
        ))}
      </div>

      {/* Mobile Auto-Sliding Rows */}
      <div className={styles.speakerMobileContainer}>
        {/* Row 1 - Slides Right */}
        <div className={styles.sliderWrapper} ref={row1Ref}>
          <div className={styles.track}>
            {[...row1, ...row1].map((speaker, idx) => (
              <div key={idx} className={styles.cardWrapper}>
                <SpeakerCard speaker={speaker} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Slides Left */}
        <div className={styles.sliderWrapper} ref={row2Ref}>
          <div className={styles.track}>
            {[...row2, ...row2].map((speaker, idx) => (
              <div key={idx} className={styles.cardWrapper}>
                <SpeakerCard speaker={speaker} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
