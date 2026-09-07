"use client";

import styles from "./esummit.module.css";

const coordinators = [
  "Aman Kumar",
  "Vivek Baya",
  "Bhavik Songara",
  "Himanshu Shekhar",
  "Pratik Avhad",
  "Mitul Hadiya",
  "Vasu Goti",
  "Jagat Swaroop Tarra",
  "Ganesh V. Tilekar",
];

const volunteers = [
  "Aakash Kumar",
  "Abhinay Gunda",
  "Divya Patel",
  "Harsh Chauhan",
  "Jaisiddh Sejani",
  "Jeels Hapani",
  "Nikhil Pandey",
  "Nityam Dave",
  "Parth Gupta",
  "Sunny Kumar",
  "Tirth Rabadiya",
  "Uday Hapaliya",
  "Yogesh Khinchi",
  "Yagnik Bhingaradiya",
];

const guestSpeakers = [
  "Alpesh Vaghasiya — Founder of Superworks (Speaker Session)",
  "Kashyap Shah — Team i-Hub Ahmedabad",
];

const facultyCoordinators = ["Dr. Nishad G Deshpande"];

const brandathonJudges = ["Mr. Kashyap Shah", "Mr. Bikash Patra", "Mr. Manish Rai"];

const youthParliamentPanel = ["Dr. Manish Rai", "Dr. Vijay Patel", "Dr. Khamosh Yadav"];

const youthParliamentAwards = [
  "Best Speaker",
  "Best Parliamentarian",
  "Best Researcher",
  "Best Opposition Speaker",
];

const brandathonWinners = [
  { label: "Winner", value: "Skinsense" },
  { label: "Runner-Up", value: "Sustains" },
  { label: "Second Runner-Up", value: "StratX" },
];

const photoBoxes = [
  "Opening Ceremony",
  "IPL Auction",
  "Corporate Crime",
  "Brandathon",
  "Speaker Session",
  "Youth Parliament",
  "Stockmania",
  "Buzzify",
];

export default function ESummitPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.eyebrow}>E-Summit 2026</p>
            <h1 className={styles.heroTitle}>Ideas meet<br />execution.</h1>
            <p className={styles.heroSubtitle}>
              Organized by E-Cell Ruminate, IIIT Surat under Spring Fiesta 2026. A
              flagship summit that celebrates entrepreneurship, innovation, and leadership
              across campus.
            </p>
            <div className={styles.heroHighlights}>
              <div className={styles.highlightCard}>
                <p className={styles.highlightLabel}>Dates</p>
                <p className={styles.highlightValue}>February 11–14, 2026</p>
              </div>
              <div className={styles.highlightCard}>
                <p className={styles.highlightLabel}>Venue</p>
                <p className={styles.highlightValue}>
                  Indian Institute of Information Technology, Surat
                </p>
              </div>
              <div className={styles.highlightCard}>
                <p className={styles.highlightLabel}>Festival</p>
                <p className={styles.highlightValue}>Spring Fiesta 2026</p>
              </div>
            </div>
          </div>
          <div className={styles.heroCard}>
            <h2 className={styles.cardTitle}>At a Glance</h2>
            <div className={styles.metaList}>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Organizer</span>
                <span className={styles.metaValue}>E-Cell Ruminate, IIIT Surat</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Focus</span>
                <span className={styles.metaValue}>Entrepreneurship & Innovation</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Audience</span>
                <span className={styles.metaValue}>Students across disciplines</span>
              </div>
              <div className={styles.metaRow}>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <p className={styles.sectionText}>
          E-Summit is the annual flagship event organized by E-Cell Ruminate of IIIT
          Surat, dedicated to fostering entrepreneurship, innovation, and leadership among
          students from diverse academic backgrounds. The summit serves as a dynamic
          platform where young minds come together to exchange ideas, explore business
          opportunities, and develop practical skills required in the modern professional
          world.
        </p>
        <p className={styles.sectionText}>
          E-Cell Ruminate is committed to nurturing the entrepreneurial culture through
          well-structured events, mentorship programs, and meaningful networking
          opportunities. It actively works towards creating an environment that
          encourages creativity, calculated risk-taking, and solution-oriented thinking.
        </p>
      </section>

      <section className={styles.sectionAlt}>
        <h2 className={styles.sectionTitle}>Organizing Team</h2>
        <div className={styles.gridTwo}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Event Coordinators</h3>
            <div className={styles.chipGrid}>
              {coordinators.map((name) => (
                <span key={name} className={styles.chip}>
                  {name}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Key Volunteers</h3>
            <div className={styles.chipGrid}>
              {volunteers.map((name) => (
                <span key={name} className={styles.chip}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.gridTwo}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Guest Speakers & Judges</h3>
            <div className={styles.chipGrid}>
              {guestSpeakers.map((name) => (
                <span key={name} className={styles.chip}>
                  {name}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Faculty Coordinator</h3>
            <div className={styles.chipGrid}>
              {facultyCoordinators.map((name) => (
                <span key={name} className={styles.chip}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Winners</h2>
        <div className={styles.winnerGrid}>
          <div className={styles.winnerCard}>
            <h3 className={styles.cardTitle}>Brandathon</h3>
            {brandathonWinners.map((winner) => (
              <div key={winner.label} className={styles.metaRow}>
                <span className={styles.metaLabel}>{winner.label}</span>
                <span className={styles.metaValue}>{winner.value}</span>
              </div>
            ))}
          </div>
          <div className={styles.winnerCard}>
            <h3 className={styles.cardTitle}>IPL Auction</h3>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>1st</span>
              <span className={styles.metaValue}>Lucknow Super Gaints — TDP</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>2nd</span>
              <span className={styles.metaValue}>Rajasthan Royals — Carnage</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>3rd</span>
              <span className={styles.metaValue}>Punjab Kings — Risers</span>
            </div>
          </div>

          <div className={styles.winnerCard}>
            <h3 className={styles.cardTitle}>Buzzify</h3>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>1st</span>
              <span className={styles.metaValue}>Yuvraj Dhingra</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>2nd</span>
              <span className={styles.metaValue}>Rohan kaushik </span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>2nd</span>
              <span className={styles.metaValue}>Hanish</span>
            </div>
          </div>


          <div className={styles.winnerCard}>
            <h3 className={styles.cardTitle}>Corporate Crime</h3>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>1st</span>
              <span className={styles.metaValue}>Mystery Incorporated</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>2nd</span>
              <span className={styles.metaValue}>Shadow Detective</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>3rd</span>
              <span className={styles.metaValue}>Special 26</span>
            </div>
          </div>
          <div className={styles.winnerCard}>
            <h3 className={styles.cardTitle}>Stockmania</h3>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>1st</span>
              <span className={styles.metaValue}>Pravesh Agarwal</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>2nd</span>
              <span className={styles.metaValue}>Shivam Kumar</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>3rd</span>
              <span className={styles.metaValue}>DIYORA LAKSH VIJAYBHAI</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <h2 className={styles.sectionTitle}>Event Highlights</h2>
        <div className={styles.eventGrid}>
          <article className={styles.eventCard}>
            <div className={styles.eventHeader}>
              <h3>IPL Auction Simulation</h3>
              <p className={styles.eventTag}>13 February 2026 · CSE Lab 1</p>
            </div>
            <div className={styles.metaList}>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Coordinators</span>
                <span className={styles.metaValue}>
                  Mitul Hadiya, Jeels Hapani, Uday Hapaliya, Tirth Ribadiya
                </span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Teams</span>
                <span className={styles.metaValue}>9 Teams · 61 Registrations</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Time</span>
                <span className={styles.metaValue}>12:30PM to 4:00PM</span>
              </div>
            </div>
            <p className={styles.sectionText}>
              The IPL Auction Simulation immersed students in the high-stakes world of
              sports management. Participants acted as team owners, managed budgets,
              evaluated players, and built their dream squads through live bidding.
            </p>
            <div className={styles.subSection}>
              <h4>Structure</h4>
              <p>Round 1: Online quiz; top 9 teams qualified (7 IIIT Surat + 2 external).</p>
              <p>
                Round 2: Live auction with a budget of ₹110 crores per team and a player
                pool covering batsmen, bowlers, all-rounders, and wicketkeepers.
              </p>
            </div>
          </article>

          <article className={styles.eventCard}>
            <div className={styles.eventHeader}>
              <h3>Corporate Crime</h3>
              <p className={styles.eventTag}>12 February 2026 · IIIT Surat</p>
            </div>
            <div className={styles.metaList}>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Coordinators</span>
                <span className={styles.metaValue}>
                  Jagat Swaroop Tarra, Aman Kumar, Harsh Chauhan, Abhinay Gunda
                </span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Teams</span>
                <span className={styles.metaValue}>92 Teams</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Time</span>
                <span className={styles.metaValue}>10:30AM to 12:30PM</span>
              </div>
            </div>
            <p className={styles.sectionText}>
              A campus-wide clue-solving challenge where top teams analyzed a detailed
              murder mystery. Teams demonstrated observation skills, coordination, and
              forensic deduction under time pressure.
            </p>
            <div className={styles.subSection}>
              <h4>Key Takeaways</h4>
              <ul className={styles.list}>
                <li>Sharpened logical reasoning and observation skills.</li>
                <li>Improved team coordination under pressure.</li>
                <li>Basics of forensic analysis and deduction.</li>
                <li>Stronger communication during interrogations.</li>
              </ul>
            </div>
          </article>

          <article className={styles.eventCard}>
            <div className={styles.eventHeader}>
              <h3>Brandathon</h3>
              <p className={styles.eventTag}>14 February 2026 · Online (Google Meet)</p>
            </div>
            <div className={styles.metaList}>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Coordinators</span>
                <span className={styles.metaValue}>
                  Bhavik Songara, Nityam Dave, Nikhil Pandey
                </span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Time</span>
                <span className={styles.metaValue}>1:00 PM – 5:00 PM</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Participation</span>
                <span className={styles.metaValue}>218 Registrations · 13 Finalists</span>
              </div>
            </div>
            <p className={styles.sectionText}>
              Brandathon promoted innovation, strategic thinking, and entrepreneurial
              problem-solving through three competitive rounds.
            </p>
            <div className={styles.subSection}>
              <h4>Round Structure</h4>
              <p>Round 1: Problem Statement, Idea & Proposed Solution.</p>
              <p>Round 2: PPT Screening with market research and branding strategy.</p>
              <p>Round 3: Final pitching and Q&amp;A with expert judges.</p>
            </div>
            <div className={styles.subSection}>
              <h4>Judges</h4>
              <div className={styles.chipGrid}>
                {brandathonJudges.map((judge) => (
                  <span key={judge} className={styles.chip}>
                    {judge}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.subSection}>
              <h4>Key Outcomes</h4>
              <ul className={styles.list}>
                <li>Encouraged innovative thinking and entrepreneurial confidence.</li>
                <li>Provided real-world pitching exposure.</li>
                <li>Strengthened business strategy understanding.</li>
                <li>Created networking opportunities with expert judges.</li>
              </ul>
            </div>
          </article>

          <article className={styles.eventCard}>
            <div className={styles.eventHeader}>
              <h3>Speaker Session: From Coding to Creating</h3>
              <p className={styles.eventTag}>13 February 2026 · IIIT Surat</p>
            </div>
            <div className={styles.metaList}>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Speaker</span>
                <span className={styles.metaValue}>Alpesh Vaghasiya</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Coordinators</span>
                <span className={styles.metaValue}>Nityam Dave, Sunny Kumar</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Time</span>
                <span className={styles.metaValue}>6:00 PM – 7:00 PM</span>
              </div>
            </div>
            <p className={styles.sectionText}>
              The session highlighted how strong coding fundamentals can evolve into
              entrepreneurial journeys. It included a welcome address by Dr. Nishad
              Deshpande and felicitation by Dr. Kaustubh Dhondge.
            </p>
            <div className={styles.subSection}>
              <h4>Key Takeaways</h4>
              <ul className={styles.list}>
                <li>Balancing jobs and entrepreneurship requires discipline.</li>
                <li>Game development offers creative career pathways.</li>
                <li>Personal branding supports long-term career growth.</li>
                <li>Success demands constant upskilling and adaptability.</li>
                <li>Time management is vital for side hustles.</li>
              </ul>
            </div>
          </article>

          <article className={styles.eventCard}>
            <div className={styles.eventHeader}>
              <h3>Youth Parliament: Innovation with Tradition</h3>
              <p className={styles.eventTag}>14 February 2026 · CSE Lab 1</p>
            </div>
            <div className={styles.metaList}>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Coordinators</span>
                <span className={styles.metaValue}>Aman Kumar, Vivek Baya, Sunny Kumar</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Time</span>
                <span className={styles.metaValue}>10:00 AM – 1:00 PM</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Participants</span>
                <span className={styles.metaValue}>160+ Participants</span>
              </div>
            </div>
            <p className={styles.sectionText}>
              A Lok Sabha simulation that strengthened leadership and public speaking
              skills through structured debate and parliamentary protocols.
            </p>
            <div className={styles.subSection}>
              <h4>Discussion Agendas</h4>
              <div className={styles.chipGrid}>
                <span className={styles.chip}>Infrastructure Development</span>
                <span className={styles.chip}>Education Reform</span>
                <span className={styles.chip}>Environmental Pollution & Sustainable Growth</span>
              </div>
            </div>
            <div className={styles.subSection}>
              <h4>Evaluation Panel</h4>
              <div className={styles.chipGrid}>
                {youthParliamentPanel.map((judge) => (
                  <span key={judge} className={styles.chip}>
                    {judge}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.subSection}>
              <h4>Awards & Recognition</h4>
              <div className={styles.chipGrid}>
                {youthParliamentAwards.map((award) => (
                  <span key={award} className={styles.chip}>
                    {award}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <article className={styles.eventCard}>
            <div className={styles.eventHeader}>
              <h3>Stockmania</h3>
              <p className={styles.eventTag}>11–13 February 2026 · Stockgro</p>
            </div>
            <div className={styles.metaList}>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Coordinators</span>
                <span className={styles.metaValue}>
                  Vasu Goti, Yagnik Bhingaradiya, Jaisiddh Sejani
                </span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Participants</span>
                <span className={styles.metaValue}>160+ Participants</span>
              </div>
            </div>
            <div className={styles.subSection}>
              <h4>Guidelines</h4>
              <ul className={styles.list}>
                <li>Trading conducted on Stockgro with a virtual portfolio of ₹10 lakh.</li>
                <li>Trading allowed only during official market hours.</li>
                <li>Fair trading practices were mandatory; unfair means led to disqualification.</li>
                <li>Rankings based on final portfolio value and returns.</li>
              </ul>
            </div>
            <div className={styles.subSection}>
              <h4>Flow</h4>
              <ul className={styles.list}>
                <li>Registration phase before event start date.</li>
                <li>Orientation session on platform usage and rules.</li>
                <li>Trading phase from 11–13 February 2026.</li>
                <li>Evaluation based on final portfolio values after market close.</li>
              </ul>
            </div>
            <div className={styles.subSection}>
              <h4>Key Takeaways</h4>
              <ul className={styles.list}>
                <li>Practical exposure to stock market trading.</li>
                <li>Improved understanding of market trends and risk management.</li>
                <li>Learned portfolio diversification strategies.</li>
                <li>Enhanced financial literacy and analytical thinking.</li>
              </ul>
            </div>
          </article>

          <article className={styles.eventCard}>
            <div className={styles.eventHeader}>
              <h3>Buzzify</h3>
              <p className={styles.eventTag}>Online</p>
            </div>
            <div className={styles.metaList}>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Coordinators</span>
                <span className={styles.metaValue}>Vasu Goti, Divya Patel</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Date</span>
                <span className={styles.metaValue}>11–15 February 2026</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Participants</span>
                <span className={styles.metaValue}>15 Participants</span>
              </div>
            </div>
            <p className={styles.sectionText}>
              Buzzify was an online reel-creation event focused on digital marketing of
              products and brands.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Photograph Gallery</h2>
        <p className={styles.sectionText}>
          
        </p>
        <div className={styles.photoGrid}>
          {photoBoxes.map((label) => (
            <div key={label} className={styles.photoBox}>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
