"use client";
import styles from './home.module.css';

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle}>
              About <span className={styles.orangeText}>Ruminate</span>
            </h2>
            <p className={styles.aboutDescription}>
              A club driven by many young business minded students to foster a culture of entrepreneurship at campus of IIIT Surat, Not only promoting the entrepreneurship culture, the club also encourages the youth to develop the interpersonal and leadership skills which help them to ace in any field or department they are interested in, helps in fostering the curiosity, collaboration and creativity.
            </p>
          </div>

          <div className={styles.aboutMedia}>
            <img
              src="/RUMINATEFRONT.png"
              alt="Ruminate community"
              className={styles.aboutMediaImage}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
