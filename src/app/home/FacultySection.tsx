// components/FacultySection.tsx
"use client";
import { useState } from "react";
import styles from "./home.module.css";
import Image from "next/image";

interface Faculty {
  name: string;
  title: string;
  img: string;
  message: string;
}

const facultyData: Faculty[] = [
  {
    name: "Dr. Rajeev Shorey",
    title: "Director, IIIT Surat",
    img: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Faculties/rajeevsir.png",
    message:
      "At IIIT Surat’s Ruminate Club, we believe that every idea holds the potential to spark a revolution...",
  },
  {
    name: "Dr. Nishad G. Deshpande",
    title: "Faculty Advisor, Ruminate Club",
    img: "https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/Faculties/NishadDeshpandeSir.jpg",
    message:
      "Ruminate empowers students to challenge limits and think beyond convention...",
  },
];

export default function FacultySection() {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  return (
    <section className={styles.faculty}>
      <h2 className={styles.facultyHeading}>
        <span className={styles.whiteText}>From</span>
        <span className={styles.orangeText}> Faculty </span>
        <span className={styles.whiteText}>Desk</span>
      </h2>

      {!selectedFaculty ? (
        <div className={styles.facultyGrid}>
          {facultyData.map((fac, idx) => (
            <div key={idx} className={styles.facultyCardMini} onClick={() => setSelectedFaculty(fac)}>
              <Image src={fac.img} alt={fac.name} className={styles.facultyImageMini} width={320} height={360} sizes="220px" unoptimized />
              <p className={styles.facultyNameMini}>{fac.name}</p>
              <p className={styles.facultyTitleMini}>{fac.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.facultyExpanded}>
          <div className={styles.facultyMainCard}>
            <div className={styles.imageBlock}>
              <Image src={selectedFaculty.img} alt={selectedFaculty.name} className={styles.mainImage} width={520} height={600} sizes="(max-width: 768px) 80vw, 420px" unoptimized />
              <div className={styles.imageCaption}>
                <p className={styles.facultyName}>{selectedFaculty.name}</p>
                <p className={styles.facultyTitle}>{selectedFaculty.title}</p>
              </div>
            </div>
            <div className={styles.facultyTextBlock}>
              <p className={styles.facultyMessage}>{selectedFaculty.message}</p>
            </div>
          </div>
          <div className={styles.thumbnailSidebar}>
            {facultyData.map((fac, idx) => (
              <Image
                key={idx}
                src={fac.img}
                alt={fac.name}
                className={styles.thumbnail}
                width={120}
                height={120}
                sizes="80px"
                unoptimized
                onClick={() => setSelectedFaculty(fac)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
