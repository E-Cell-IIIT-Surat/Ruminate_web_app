"use client";
import styles from "./home.module.css";

const speakers = [
  {
    img: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Speakers%20till%20now/Ekta%20mam.webp",
    name: "Ekta Arora",
    linkedin: "https://www.linkedin.com/in/ektaarora3501/"
  },
  {
    img: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Speakers%20till%20now/IMG_4208.JPG",
    name: "Sunny Kabrawala",
    linkedin: "https://www.linkedin.com/in/sunny-kabrawala-238194132/"
  },
  {
    img: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Speakers%20till%20now/Krishna%20Sir.webp",
    name: "Krishna Ojha",
    linkedin: "https://www.linkedin.com/in/krishnaojha02/"
  },
  {
    img: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Speakers%20till%20now/Pranjal%20Kamra.jpg",
    name: "Pranjal Kamra",
    linkedin: "https://www.linkedin.com/in/pranjal-kamra-365355a0"
  },
  {
    img: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Speakers%20till%20now/oshi.webp",
    name: "Oshi Kumari",
    linkedin: "https://www.linkedin.com/in/oshi-kumari/"
  }
];

const additionalSpeakers = [
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    name: "Aisha Patel",
    linkedin: "https://linkedin.com/in/aisha-patel-121"
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    name: "Rohit Singh",
    linkedin: "https://linkedin.com/in/rohit-singh-234"
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    name: "Priya Verma",
    linkedin: "https://linkedin.com/in/priya-verma-567"
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    name: "Arjun Desai",
    linkedin: "https://linkedin.com/in/arjun-desai-890"
  },
  {
    img: "https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=400&h=400&fit=crop",
    name: "Neha Sharma",
    linkedin: "https://linkedin.com/in/neha-sharma-456"
  }
];
// replace with real images
const testimonies = [
  {
    text: `At IIIT Surat’s Ruminate Club, we believe that every idea holds the potential to spark a revolution. We’re a community of passionate thinkers and fearless doers who thrive on curiosity, collaboration, and creativity.`,
    image: "/some2.jpg", // replace with actual
    reverse: false,
  },
  {
    text: `At IIIT Surat’s Ruminate Club, we believe that every idea holds the potential to spark a revolution. We’re a community of passionate thinkers and fearless doers who thrive on curiosity, collaboration, and creativity.`,
    image: "/some2.jpg",
    reverse: true,
  },
];

export default function GuestSpeakers() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Guest and <span className={styles.orange}>Speakers</span>
      </h2>

      <div className={styles.speakerGrid}>
        {speakers.map((speaker, idx) => (
          <div key={idx} className={styles.speakerCard}>
            <a
              href={speaker.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.speakerLink}
            >
              <img
                src={speaker.img}
                alt={speaker.name}
                className={styles.speakerImage}
              />
            </a>
            <p className={styles.speakerName}>{speaker.name}</p>
          </div>
        ))}
      </div>

      <div className={styles.speakerGrid}>
        {additionalSpeakers.map((speaker, idx) => (
          <div key={idx} className={styles.speakerCard}>
            <a
              href={speaker.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.speakerLink}
            >
              <img
                src={speaker.img}
                alt={speaker.name}
                className={styles.speakerImage}
              />
            </a>
            <p className={styles.speakerName}>{speaker.name}</p>
          </div>
        ))}
      </div>

      {testimonies.map((item, index) => (
        <div
          key={index}
          className={`${styles.testimonyBlock} ${item.reverse ? styles.reverse : ""}`}
        >
          <div className={styles.textBlock}>
            <h4>Testimonies</h4>
            <p>{item.text}</p>
          </div>
          <div className={styles.imageBlock}>
            <img src={item.image} alt="Testimony" />
          </div>
        </div>
      ))}
    </section>
  );
}
