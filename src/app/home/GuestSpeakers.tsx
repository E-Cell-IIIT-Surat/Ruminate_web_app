"use client";
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
// replace with real images //Testimoies here
// const testimonies = [
//   {
//     text: `At IIIT Surat’s Ruminate Club, we believe that every idea holds the potential to spark a revolution. We’re a community of passionate thinkers and fearless doers who thrive on curiosity, collaboration, and creativity.`,
//     image: "/some2.jpg", // replace with actual
//     reverse: false,
//   },
//   {
//     text: `At IIIT Surat’s Ruminate Club, we believe that every idea holds the potential to spark a revolution. We’re a community of passionate thinkers and fearless doers who thrive on curiosity, collaboration, and creativity.`,
//     image: "/some2.jpg",
//     reverse: true,
//   },
// ];

export default function GuestSpeakers() {
  return (
    <section className={styles.section}>
      <div className={styles.eventsTitleBlock}>
        <div className={styles.eventsLine}></div>
        <h2 className={styles.eventsHeading}>
          Guest and <span className={styles.orangeText}>Speakers</span>
        </h2>
        <div className={styles.eventsLine}></div>
      </div>

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
      {/* {testimonies.map((item, index) => ( //uncomment this to show testimoniew
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
      ))} */}
    </section>
  );
}
