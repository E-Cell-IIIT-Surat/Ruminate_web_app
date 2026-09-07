"use client";

import styles from "./ktb.module.css";
import Image from "next/image";

const objectives = [
  "To provide real-world exposure to students by connecting them with local entrepreneurs",
  "To help students understand practical business operations and working environments",
  "To enable analysis of real business models, revenue streams, and strategies",
  "To bridge the gap between theoretical academic knowledge and practical industry experience",
  "To develop research, observation, and analytical thinking skills",
  "To enhance communication and professional interaction abilities",
  "To improve presentation and business storytelling skills",
  "To encourage entrepreneurial mindset and innovation thinking",
  "To build market awareness and understanding of customer behavior",
];

const juryMembers = [
  "Dr. Kaustibh Dhongde",
  "Dr. Aditya Karnik",
  "Dr. Nishad G. Deshpande",
  "Dr. Sudeep Sharma",
  "Dr. Hemant S. Gokhlani",
  "Dr. Manish Rai",
  "Dr. Khamosh Yadav",
];

const judgingCriteria = [
  "Business Category Understanding",
  "Business Model Clarity",
  "Market Analysis Depth",
  "Marketing Strategy Understanding",
  "Additional Business Insights (Operations, Challenges, Growth Scope, etc.)",
  "Presentation Skills",
  "Overall Impact and Clarity",
];

const keyTakeaways = [
  "Helped students understand real business challenges",
  "Improved confidence in professional communication",
  "Encouraged entrepreneurial curiosity",
  "Provided networking exposure with local business owners",
];

const winners = [
  {
    rank: "1st",
    team: "The Sharks",
    business: "Manpasand Khana 2.0",
    members: ["Dhiwyansh Parmar", "Harsh Sen"],
  },
  {
    rank: "2nd",
    team: "Strategic Seekers",
    business: "Unisouk 2.0",
    members: ["Hanish Musin", "Nikhil Raj", "Lucky"],
  },
  {
    rank: "3rd",
    team: "Biz Catalyst",
    business: "Epiphany AI Tech Pvt. Ltd",
    members: ["Dhruv Yadav", "Aditya Rathi"],
  },
  {
    rank: "3rd",
    team: "Team Verve",
    business: "FrozBites",
    members: ["Anjali", "Himachandana", "Vyshnavi KP"],
  },
];

const day1Teams = [
  {
    name: "TEAM VERVE",
    members: [
      "Anjali — UG25ECE052 — 1st Year",
      "Vyshanvi KP — UG25CCS036 — 1st Year",
      "Hima Chandana — UG25CSE028 — 1st Year",
    ],
  },
  {
    name: "BIZ CATALYST",
    members: [
      "Dhruv Yadav — UG25ECE020 — 1st Year",
      "Aditya Rathi — UG25ECE005 — 1st Year",
    ],
  },
  {
    name: "BUSINESS MINDS",
    members: [
      "Aaditesh Parashar — UG25ECE001 — 1st Year",
      "Samarth Kargathia — UG25ECE061 — 1st Year",
      "Shivam Kumar — UG25ECE066 — 1st Year",
    ],
  },
  {
    name: "SHOEDOG",
    members: ["Manvi — UG25CAI017 — 1st Year"],
  },
  {
    name: "STRATEGIC SEEKERS",
    members: [
      "Hanish M — UG25CSE064 — 1st Year",
      "Nikhil — UG25CSE067 — 1st Year",
      "Lucky Kumar — UG25CSE057 — 1st Year",
    ],
  },
  {
    name: "THE SHARKS",
    members: [
      "Dhiwyansh Parmar — UG25CCS014 — 1st Year",
      "Harsh Sen — UG25CCS015 — 1st Year",
    ],
  },
];

const day2Teams = [
  {
    name: "TEAM SPARK",
    members: [
      "Parth Dobariya — UG25ECE022 — 1st Year",
      "Hiren Kachariya — UG25ECE033 — 1st Year",
      "Namya Shah — UG25ECE043 — 1st Year",
    ],
  },
  {
    name: "TEAM VISION (1st Year)",
    members: ["Shreedhar Joshi — UG25ECE068 — 1st Year"],
  },
  {
    name: "TECHNO VYAPARI (1st Year)",
    members: [
      "Deep Dobariya — UG25CSE032 — 1st Year",
      "Aayush Patel — UG25CSE002 — 1st Year",
      "Panth Rangholiya — UG25CSE093 — 1st Year",
    ],
  },
  {
    name: "TECHNOLITES",
    members: [
      "Maitreya Chauhan — UI24CS16 — 2nd Year",
      "Borra Moneshwar — UI24EC13 — 2nd Year",
      "Mallipudi Venkat Subash — UI24CS46 — 2nd Year",
    ],
  },
  {
    name: "VISION HUNTERS (2nd Year)",
    members: [
      "Divya Patel — UI24EC45 — 2nd Year",
      "Abhinay Gunda — UI24EC24 — 2nd Year",
      "Koushik Tangudu — UI24EC34 — 2nd Year",
    ],
  },
  {
    name: "TEAM BAKEHIVE (1st & 2nd Year)",
    members: [
      "Rishit Nagar — UI24EC57 — 2nd Year",
      "Pratibha — UG25CSE086 — 1st Year",
      "Priyanka Wadhwani — UG25CSE087 — 1st Year",
    ],
  },
];

export default function KtbPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.caseStamp}>
            <span>KTB · 2026</span>
            <strong>Case File</strong>
          </div>
          <p className={styles.eyebrow}>Know The Business</p>
          <h1 className={styles.heroTitle}>Know The Business</h1>
          <p className={styles.heroSubtitle}>
            A practical learning initiative where students interact directly with local
            entrepreneurs and present real business insights.
          </p>
          <div className={styles.metaGrid}>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Date</span>
              <span className={styles.metaValue}>9th of January to 3rd of February, 2026</span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Event</span>
              <span className={styles.metaValue}>Know the Business</span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Organized By</span>
              <span className={styles.metaValue}>E-Cell, IIIT Surat</span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Total Registrations</span>
              <span className={styles.metaValue}>23 Teams</span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.sectionText}>
            Know The Business (KTB) is a practical learning initiative where students step
            beyond classrooms to interact directly with local entrepreneurs and understand
            how real businesses operate. During this activity, students visit businesses,
            learn about their operations, revenue models, marketing strategies, and
            challenges, and gain first-hand exposure to real-world entrepreneurship. After
            collecting insights, students analyze and present the entrepreneur&apos;s business
            model in front of a jury panel, where they are evaluated on their
            understanding, analysis, and presentation skills. KTB aims to develop business
            awareness, practical knowledge, and entrepreneurial thinking among students.
          </p>

          <div className={styles.imageRow}>
            <figure className={styles.eventImage}>
              <Image
                src="/home/hero-lcp.webp"
                alt="Students presenting their business analysis during Know The Business"
                width={1600}
                height={900}
                sizes="(max-width: 768px) 94vw, 1100px"
                quality={76}
              />
              <figcaption>Learning beyond the classroom through observation, analysis and presentation.</figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Objectives of the Event</h2>
          <ul className={styles.checklist}>
            {objectives.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Jury Members</h2>
          <div className={styles.chipGrid}>
            {juryMembers.map((member) => (
              <span key={member} className={styles.chip}>
                {member}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Event Structure</h2>
          <p className={styles.sectionText}>
            The event was structured in a way, where teams visited local businesses,
            collected insights, performed analysis, and presented their findings before the
            jury panel. The final presentation was reviewed by the jury members on 2nd &amp;
            3rd of February. Teams were evaluated on multiple parameters including business
            understanding, market analysis, marketing strategy, and presentation skills.
          </p>

          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>Day 1 Highlights</h3>
            <p className={styles.sectionText}>
              The teams from the first year demonstrated strong enthusiasm and analytical
              depth while presenting their observations about the businesses they studied.
              The jury appreciated the practical insights and structured approach shown by
              participants.
            </p>
            <div className={styles.teamGrid} data-day="1">
              {day1Teams.map((team) => (
                <div key={team.name} className={styles.teamCard}>
                  <h4 className={styles.teamTitle}>{team.name}</h4>
                  <ul className={styles.teamMembers}>
                    {team.members.map((member) => (
                      <li key={member}>{member}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>Day 2 Highlights</h3>
            <p className={styles.sectionText}>
              The second day introduced a more diverse set of teams, including participation
              across different years of study. The evaluation criteria remained focused on
              business understanding and presentation quality, with an added emphasis on
              student academic diversity and cross-year collaboration.
            </p>
            <div className={styles.teamGrid} data-day="2">
              {day2Teams.map((team) => (
                <div key={team.name} className={styles.teamCard}>
                  <h4 className={styles.teamTitle}>{team.name}</h4>
                  <ul className={styles.teamMembers}>
                    {team.members.map((member) => (
                      <li key={member}>{member}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Judging Criteria</h2>
          <ul className={styles.rubricList}>
            {judgingCriteria.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Takeaways</h2>
          <ul className={styles.takeawayList}>
            {keyTakeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Winners</h2>
          <div className={styles.winnerGrid}>
            {winners.map((winner) => (
              <div
                key={`${winner.team}-${winner.rank}`}
                className={styles.winnerCard}
                data-tier={winner.rank === "1st" ? "1" : "2"}
              >
                <div className={styles.winnerHeader}>
                  <span className={styles.winnerRank}>{winner.rank}</span>
                  <span className={styles.winnerTeam}>{winner.team}</span>
                </div>
                <p className={styles.winnerBusiness}>{winner.business}</p>
                <ul className={styles.winnerMembers}>
                  {winner.members.map((member) => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Conclusion</h2>
          <p className={styles.sectionText}>
            Know The Business (KTB) proved to be a highly impactful experiential learning
            event. It enabled students to gain first-hand exposure to real-world business
            environments and apply academic concepts in practical scenarios. The
            participation, enthusiasm, and quality of analysis presented by students
            reflected the success of the event in achieving its learning and entrepreneurial
            development goals. KTB continues to stand as an important initiative in
            nurturing future business leaders, innovators, and entrepreneurs.
          </p>
        </section>
      </div>
    </div>
  );
}