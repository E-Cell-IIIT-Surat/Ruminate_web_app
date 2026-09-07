import Image from "next/image";
import styles from "./home.module.css";

const speakers = [
  {
    img: "/home/people/striver.webp",
    name: "Raj Vikramaditya",
    linkedin: "https://www.linkedin.com/in/rajstriver/",
    position: "Founder-TUF (Take you Forward)"
  },
  {
    img: "/home/people/ishver-dholakiya.webp",
    name: "Ishver Dholakiya",
    linkedin: "https://www.linkedin.com/in/capt-ishver-dholakiya/",
    position: "Founder-Goldi Solar"
  },
  {
    img: "/home/people/alpesh-vaghasiya.webp",
    name: "Alpesh Vaghasiya",
    linkedin: "https://www.linkedin.com/in/alpeshvaghasiya/",
    position: "Founder & CEO, Superworks"
  },
  {
    img: "/home/people/aditya-karnik.webp",
    name: "Dr Aditya Karnik",
    linkedin: "https://www.linkedin.com/in/aditya-karnik-167734/",
    position: "Advisor/Consultant - AI/ML/DS"
  },
  {
    img: "/home/people/anish-gandhi.webp",
    name: "Dr Anish Gandhi",
    linkedin: "https://www.linkedin.com/in/dr-anish-gandhi-b3529316/",
    position: "Registered Patent Agent & IPR Consultant"
  },
  {
    img: "/home/people/pranjal-kamra.webp",
    name: "Pranjal Kamra",
    linkedin: "https://www.linkedin.com/in/pranjal-kamra-365355a0",
    position: "Finance Coach"
  },
  {
    img: "/home/people/thakur-sudesh.webp",
    name: "Dr. Thakur Sudesh",
    linkedin: "https://www.linkedin.com/in/dr-thakur-skr-1399744a/",
    position: "Public Speaker and Author"
  },
  {
    img: "/home/people/oshi-kumari.webp",
    name: "Oshi Kumari",
    linkedin: "https://www.linkedin.com/in/oshi-kumari/",
    position: "Founder-Inside FPV"
  },
  {
    img: "/home/people/ekta-arora.webp",
    name: "Ekta Arora",
    linkedin: "https://www.linkedin.com/in/ektaarora3501/",
    position: "Founder-KasperTech"
  },
  {
    img: "/home/people/sunny-kabrawala.webp",
    name: "Sunny Kabrawala",
    linkedin: "https://www.linkedin.com/in/sunny-kabrawala-238194132/",
    position: "Founder-Star Labs"
  },
  {
    img: "/home/people/krishna-ojha.webp",
    name: "Krishna Ojha",
    linkedin: "https://www.linkedin.com/in/krishnaojha02/",
    position: "Founder-KasperTech"
  },
  {
    img: "/home/people/nikhil-vyas.webp",
    name: "Nikhil Vyas",
    linkedin: "https://www.linkedin.com/in/nikhil-vyas-4a1a81148/",
    position: "Founder-Vysion Technologies"
  },
];

export default function GuestSpeakers() {
  const mid = Math.ceil(speakers.length / 2);
  const row1 = speakers.slice(0, mid);
  const row2 = speakers.slice(mid);

  const SpeakerCard = ({ speaker }: { speaker: typeof speakers[0] }) => (
    <div className={styles.speakerCardMobile}>
      <a
        href={speaker.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.speakerLink}
      >
        <div className={styles.speakerImageWrapper}>
          <Image
            src={speaker.img}
            alt={speaker.name}
            className={styles.speakerImage}
            width={360}
            height={360}
            sizes="(max-width: 768px) 220px, 280px"
            quality={76}
            loading="lazy"
          />
        </div>
      </a>
      <p className={styles.speakerName}>{speaker.name}</p>
      {speaker.position ? (
        <p className={styles.speakerRole}>{speaker.position}</p>
      ) : null}
    </div>
  );

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
                <Image
                  src={speaker.img}
                  alt={speaker.name}
                  className={styles.speakerImage}
                  width={360}
                  height={360}
                  sizes="(max-width: 768px) 220px, 280px"
                  quality={76}
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
        <div className={styles.sliderWrapper}>
          <div className={`${styles.track} ${styles.speakerTrackForward}`}>
            {[...row1, ...row1].map((speaker, idx) => (
              <div key={idx} className={styles.cardWrapper}>
                <SpeakerCard speaker={speaker} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Slides Left */}
        <div className={styles.sliderWrapper}>
          <div className={`${styles.track} ${styles.speakerTrackReverse}`}>
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
