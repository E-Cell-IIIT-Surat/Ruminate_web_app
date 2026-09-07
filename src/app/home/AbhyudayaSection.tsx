import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaChartLine, FaLightbulb, FaUsers } from "react-icons/fa";
import styles from "./home.module.css";

const benefits = [
  { icon: FaLightbulb, label: "Share your idea on portal" },
  { icon: FaUsers, label: "Learn with mentors" },
  { icon: FaChartLine, label: "Explore support" },
];

export default function AbhyudayaSection() {
  return (
    <section className={styles.abhyudayaSection} aria-labelledby="abhyudaya-title">
      <div className={styles.abhyudayaGlow} aria-hidden="true" />
      <div className={styles.abhyudayaInner}>
        <div className={styles.abhyudayaVisual}>
          <div className={styles.abhyudayaPosterFrame}>
            <Image
              src="/events/abhyudaya/poster.png"
              alt="UDHBHAV event poster"
              width={1024}
              height={1536}
              sizes="(max-width: 720px) 68vw, 340px"
              unoptimized
            />
          </div>
          <span className={styles.abhyudayaDate}>Every month · 1st</span>
        </div>

        <div className={styles.abhyudayaContent}>
          <p className={styles.abhyudayaEyebrow}>A new Ruminate initiative</p>
          <h2 id="abhyudaya-title">UDHBHAV</h2>
          <p className={styles.abhyudayaTagline}>Ideate <span>•</span> Innovate <span>•</span> Elevate</p>
          <p className={styles.abhyudayaDescription}>
            Bring a promising idea to the table, refine it with expert mentorship and explore opportunities for funding, SSIP support and meaningful growth.
          </p>
          <div className={styles.abhyudayaBenefits}>
            {benefits.map(({ icon: Icon, label }) => (
              <span key={label}><Icon aria-hidden="true" />{label}</span>
            ))}
          </div>
          <div className={styles.abhyudayaActions}>
            <Link href="/events/abhyudaya" className={styles.abhyudayaPrimary}>
              Explore UDHBHAV <FaArrowRight aria-hidden="true" />
            </Link>
            <a href="https://portal.ecelliiitsurat.in" target="_blank" rel="noopener noreferrer" className={styles.abhyudayaSecondary}>
              Visit the portal <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
