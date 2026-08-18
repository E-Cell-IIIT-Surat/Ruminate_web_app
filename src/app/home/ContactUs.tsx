"use client";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";

const members = [
  {
    name: "Nityam Dave",
    role: "Secretary",
    image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Our%20Team/Nityam%20Dave%20%201.png",
  },
  {
    name: "Sunny Kumar",
    role: "Joint Secretary",
    image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Our%20Team/sunny.png",
  },
  {
    name: "Yogesh Khinchi",
    role: "Tech Head",
    image: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Our%20Team/yogesh%20khinchi%201.png",
  },
];

export default function ContactUs() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.eventsTitleBlock}>
        <div className={styles.eventsLine}></div>
        <h2 className={styles.eventsHeading}>
          Contact <span className={styles.orangeText}>Us</span>
        </h2>
        <div className={styles.eventsLine}></div>
      </div>

      <div className={styles.contactGrid}>
        {members.map((member, idx) => (
          <div key={idx} className={styles.memberCard}>
            <div className={styles.memberImageWrapper}>
              <Image
                src={member.image}
                alt={member.name}
                width={120}
                height={120}
                className={styles.memberImage}
              />
            </div>
            <p className={styles.memberRole}>{member.role}</p>
            <p className={styles.memberName}>{member.name}</p>
          </div>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <Link href="/team">
          <button className={styles.meetButton}>MEET OUR TEAM</button>
        </Link>
      </div>

      <blockquote className={styles.quote}>
        <p>
          “ Want to build, explore or lead, Ruminate is in the campus to help you concretize your ideas and shape up your creativity, learn to lead the team and build a network of like minded pupils. ”
        </p>
        <footer>— Team Ruminate</footer>
      </blockquote>
    </section>
  );
}
