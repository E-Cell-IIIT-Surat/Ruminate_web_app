import Link from "next/link";
import styles from "./vibrantgujarat2026.module.css";

const highlights = [
  { label: "Visit Date", value: "May 1, 2026" },
  { label: "Students Registered", value: "28 students" },
  { label: "Groups", value: "4 mixed groups of juniors and seniors" },
  { label: "Coverage", value: "Inauguration, exhibitions, seminars, and cultural exposure" },
];

const internationalGuests = ["Rwanda", "Ukraine", "Singapore"];

const exhibitionThemes = [
  "Innovation",
  "Technology",
  "Growth",
  "Manufacturing",
  "Diamonds",
  "Textiles",
];

const seminarTopics = ["Startup ecosystem", "Nuclear power", "Natural gas", "GIFT City"];

export default function VibrantGujarat2026Page() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Event Report</p>
            <h1 className={styles.title}>Vibrant Gujarat Summit 2026</h1>
            <p className={styles.subtitle}>
              On May 1, 2026, 28 students from Ruminate visited the Vibrant Gujarat
              Summit and explored its exhibitions, seminars, and global business
              conversations through a well-coordinated group visit.
            </p>
            <div className={styles.heroActions}>
              <Link href="/events" className={styles.backLink}>
                Back to Events
              </Link>
            </div>
          </div>

          <div className={styles.heroCard}>
            <h2 className={styles.cardTitle}>At a Glance</h2>
            <div className={styles.metaGrid}>
              {highlights.map((item) => (
                <div key={item.label} className={styles.metaCard}>
                  <p className={styles.metaLabel}>{item.label}</p>
                  <p className={styles.metaValue}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Overview</p>
          <h2 className={styles.sectionTitle}>A collaborative summit experience</h2>
        </div>
        <p className={styles.sectionText}>
          We were divided into 4 groups, each consisting of juniors and seniors, so
          that we could explore different parts of the summit separately and make the
          most of the visit. This structure helped us cover more sessions, exhibitions,
          and networking spaces while sharing our learnings with one another.
        </p>
        <p className={styles.sectionText}>
          The entire experience gave us a close look at how large summits connect
          policy, industry, entrepreneurship, and global partnerships. From the opening
          ceremony to the startup-focused discussions, the visit offered valuable
          exposure to innovation, growth, and the wider business ecosystem of Gujarat.
        </p>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Section 1</p>
          <h2 className={styles.sectionTitle}>Inauguration and global perspective</h2>
        </div>
        <p className={styles.sectionText}>
          The inauguration was led by Bhupendra Patel, Hon&apos;ble Chief Minister of
          Gujarat, along with Harsh Sanghavi. We also listened to a few foreign guests
          who described how India is an important partner to their countries across many
          dimensions of trade, collaboration, and future growth.
        </p>
        <p className={styles.sectionText}>
          Delegates from {internationalGuests.join(", ")} highlighted how Gujarat and
          Surat are contributing strongly to this ecosystem through manufacturing,
          diamonds, textiles, and international business relationships. These talks
          showed us how regional growth is tied to global confidence and long-term
          investment.
        </p>
        <aside className={styles.insightCard}>
          <span className={styles.insightLabel}>Observed at the summit</span>
          <strong>Regional strength earns global confidence.</strong>
          <p>Manufacturing, textiles, diamonds and international partnerships were presented as connected parts of Gujarat&apos;s growth story.</p>
        </aside>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Section 2</p>
          <h2 className={styles.sectionTitle}>Exhibitions and startup interactions</h2>
        </div>
        <p className={styles.sectionText}>
          After the opening sessions, we explored the exhibitions and interacted with
          various young startup founders. There were three exhibition halls, and each of
          them had something different to teach us about innovation, technology, growth,
          and the future direction of industry.
        </p>
        <p className={styles.sectionText}>
          Walking through the exhibition spaces helped us understand how ideas are
          presented at scale, how founders communicate value, and how large ecosystems
          bring startups, institutions, and investors together under one roof.
        </p>
        <div className={styles.chipRow}>
          {exhibitionThemes.map((theme) => (
            <span key={theme} className={styles.chip}>
              {theme}
            </span>
          ))}
        </div>
        <aside className={styles.insightCard}>
          <span className={styles.insightLabel}>Founder takeaway</span>
          <strong>Clarity makes innovation visible.</strong>
          <p>The exhibition halls showed how effectively founders must communicate the problem, product and value of an idea at scale.</p>
        </aside>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Section 3</p>
          <h2 className={styles.sectionTitle}>Seminars and learning sessions</h2>
        </div>
        <p className={styles.sectionText}>
          We attended seminars on different topics such as the startup ecosystem,
          nuclear power, natural gas, and GIFT City. Each session gave us a different
          lens on how innovation, infrastructure, policy, and capital work together in
          building a strong economy.
        </p>
        <p className={styles.sectionText}>
          It was an awesome experience attending the startup seminar in particular,
          because it connected directly with our own interests in entrepreneurship and
          showed how founders, enablers, and institutions shape new ventures.
        </p>
        <div className={styles.topicList}>
          {seminarTopics.map((topic) => (
            <div key={topic} className={styles.topicCard}>
              {topic}
            </div>
          ))}
        </div>
        <aside className={styles.insightCard}>
          <span className={styles.insightLabel}>Learning across systems</span>
          <strong>Startups do not grow in isolation.</strong>
          <p>The sessions connected entrepreneurship with infrastructure, policy, energy and access to capital.</p>
        </aside>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Reflection</p>
          <h2 className={styles.sectionTitle}>Culture, heritage, and modern technology</h2>
        </div>
        <p className={styles.sectionText}>
          Beyond business and innovation, the summit also gave us cultural exposure to
          Gujarat through exhibits and presentations that reflected the state&apos;s rich
          heritage. At the same time, the modern technologies on display showed how
          tradition and progress can be presented together in a powerful way.
        </p>
        <p className={styles.sectionText}>
          Overall, the visit was a memorable and enriching experience for the entire
          group. It helped us understand entrepreneurship not just as startup building,
          but as a combination of policy, culture, global partnerships, and industrial
          growth.
        </p>
      </section>

    </div>
  );
}
