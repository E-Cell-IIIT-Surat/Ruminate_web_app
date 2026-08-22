"use client";
import styles from "./home.module.css"; // make sure the path is correct

interface Startup {
  name: string;
  logo: string;
  link: string;
}

const startups: Startup[] = [
  {
    name: "Kaspertech",
    logo: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Alumni%20Startups/KasperTech.png",
    link: "https://www.thekaspertech.com/"
  },
  {
    name: "Vysion Tech",
    logo: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Alumni%20Startups/VysionTech.png",
    link: "https://www.linkedin.com/company/vysion-tech/?originalSubdomain=in"
  },
  {
    name : "DarexAI",
    logo : "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Alumni%20Startups/dare_xai_logo.jpg",
    link : "https://www.linkedin.com/company/dare-xai/"
  }
];

export default function AlumniSection() {
  return (
    <section className={styles.alumniSection}>
      <div className={styles.alumniTitleBlock}>
        <h2 className={styles.alumniHeading}>
          Alumni <span className={styles.orangeText}>Startups</span>
        </h2>
      </div>

      <div className={styles.alumniGrid}>
        {startups.map((startup, idx) => (
          <a
            key={idx}
            className={`${styles.alumniCard} ${styles.alumniCardLink}`}
            href={startup.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.alumniLogoBox}>
              <img
                src={startup.logo}
                alt={`${startup.name} Logo`}
                className={styles.alumniLogo}
              />
              <p className={styles.alumniName}>{startup.name}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
