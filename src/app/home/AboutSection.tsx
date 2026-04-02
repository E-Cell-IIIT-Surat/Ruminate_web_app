"use client";
import styles from './home.module.css';

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>
              About <span className={styles.orangeText}>Ruminate</span>
            </h2>
            <p className={styles.aboutDescription}>
              Ruminate is the entrepreneurship cell of IIIT Surat, dedicated to fostering a vibrant culture of innovation and business thinking among students. We believe in empowering the next generation of entrepreneurs and leaders.
            </p>
            <p className={styles.aboutDescription}>
              Our mission is to inspire, educate, and support students in their entrepreneurial journey. Through workshops, mentorship, networking events, and real-world projects, we help students develop critical business acumen, leadership skills, and the confidence to turn their ideas into reality.
            </p>
            <p className={styles.aboutDescription}>
              We foster curiosity, collaboration, and creativity—creating an ecosystem where innovation thrives and dreams become ventures.
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
