import Image from "next/image";
import { FaLightbulb, FaChalkboardTeacher, FaCoins, FaStamp } from "react-icons/fa";
import styles from "./abhyudaya.module.css";

const journey = [
  {
    tab: "01",
    title: "Share your idea",
    text: "Bring the problem you want to solve and the change you're trying to make. That's the whole entry bar.",
    Icon: FaLightbulb,
  },
  {
    tab: "02",
    title: "Get mentorship",
    text: "Sit with mentors who've built things before. Leave with a sharper plan, not just encouragement.",
    Icon: FaChalkboardTeacher,
  },
  {
    tab: "03",
    title: "Get funded",
    text: "Strong ideas move toward direct funding, SSIP support, and the right people in the ecosystem.",
    Icon: FaCoins,
  },
];

function Underline() {
  return (
    <svg className={styles.headlineMark} viewBox="0 0 420 28" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M3 17 C 50 5, 95 24, 140 12 S 225 3, 270 15 S 355 6, 417 16"
        fill="none"
        stroke="var(--marker)"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChipArrow({ vertical = false }: { vertical?: boolean }) {
  return (
    <svg
      className={`${styles.tagArrow} ${vertical ? styles.tagArrowVert : ""}`}
      viewBox="0 0 60 32"
      aria-hidden="true"
    >
      <path d="M3 16 C 16 4, 32 4, 46 14" fill="none" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="0.5 7" />
      <path d="M39 7 L49 14 L38 21" fill="none" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Connector() {
  return (
    <svg className={styles.connector} viewBox="0 0 80 40" aria-hidden="true">
      <path d="M4 22 C 22 4, 44 4, 64 18" fill="none" stroke="var(--marker)" strokeWidth="2.6" strokeLinecap="round" strokeDasharray="0.5 8" />
      <path d="M54 8 L67 18 L55 28" fill="none" stroke="var(--marker)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AbhyudayaPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <span className={styles.tape}>Ruminate · E-Cell IIIT Surat presents</span>

            <div className={styles.headlineWrap}>
              <h1 className={styles.headline}>UDHBHAV</h1>
              <Underline />
            </div>

            <div className={styles.tagRow}>
              <span className={styles.tagChip} data-i="1">Ideate</span>
              <ChipArrow />
              <span className={styles.tagChip} data-i="2">Innovate</span>
              <ChipArrow />
              <span className={styles.tagChip} data-i="3">Elevate</span>
            </div>

            <p className={styles.heroLead}>
              A recurring launchpad for student innovators to shape raw ideas
              through mentorship — and find a path toward funding and SSIP
              support along the way.
            </p>

            <div className={styles.heroActions}>
              <a
                href="https://portal.ecelliiitsurat.in/udbhav"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.stampButton}
              >
                Visit the portal
              </a>
              <a href="#how-it-works" className={styles.inkLink}>
                See how it works
              </a>
            </div>

            <p className={styles.quote}>
              &ldquo;By effort, things are accomplished, not by mere wishes.&rdquo;
            </p>
          </div>

          <div className={styles.heroArt} aria-hidden="true">
            <div className={styles.noteCard}>
              <span className={`${styles.tapeCorner} ${styles.tapeTL}`} />
              <span className={`${styles.tapeCorner} ${styles.tapeTR}`} />
              <svg viewBox="0 0 200 200" className={styles.doodle}>
                <path d="M100 30 C 60 30 40 60 40 92 c 0 26 16 40 24 52 h 72 c 8 -12 24 -26 24 -52 0 -32 -20 -62 -60 -62 Z"
                  fill="none" stroke="var(--ink)" strokeWidth="3.5" strokeLinejoin="round" />
                <path d="M78 178 h44 M82 190 h36" stroke="var(--ink)" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M100 18 v14 M46 40 l10 10 M154 40 l-10 10 M24 92 h14 M162 92 h14"
                  stroke="var(--marker)" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
              <span className={styles.noteLabel}>genesis, uprising — an idea, arriving</span>
            </div>
            <span className={styles.pin} data-c="marker" />
          </div>
        </div>
      </section>

      <div>
        <section className={styles.aboutSection}>
          <div className={styles.sectionInner}>
            <span className={styles.tab}>what is UDHBHAV</span>
            <div className={styles.aboutGrid}>
              <p className={styles.aboutLead}>
                UDHBHAV is Ruminate&apos;s recurring idea-to-impact initiative —
                built to help student ideas <span className={styles.highlight}>move forward, not just sit in a notebook</span>.
              </p>
              <div className={styles.aboutCopy}>
                <p>
                  The first step is simple: write down the problem you care
                  about and the solution you&apos;re picturing. From there,
                  Ruminate helps promising ideas get sharper through direct
                  feedback and mentorship.
                </p>
                <p>
                  As an idea matures, its team can find the support it
                  actually needs — technical, business, network, funding, or
                  a way into the Student Startup and Innovation Policy
                  ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.journeySection} id="how-it-works">
          <div className={styles.sectionInner}>
            <span className={styles.tab}>how it works</span>
            <h2 className={styles.journeyHeading}>From first thought to forward motion</h2>

            <div className={styles.journeyTrack}>
              {journey.map((step, i) => (
                <div className={styles.journeyItem} key={step.tab}>
                  <article className={styles.journeyCard} data-i={i + 1}>
                    <span className={styles.pin} data-c={i === 1 ? "teal" : "marker"} />
                    <div className={styles.cardTop}>
                      <span className={styles.cardTab}>{step.tab}</span>
                      <step.Icon className={styles.cardIcon} aria-hidden="true" />
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                  {i < journey.length - 1 && <Connector />}
                </div>
              ))}
            </div>
          </div>
        </section>

      <section className={styles.monthlySection}>
  <div className={styles.monthlyCard}>
    <div className={styles.stampBadge}>
      <FaStamp className={styles.stampIcon} aria-hidden="true" />
      <span>1st of every month</span>
    </div>
    <span className={styles.monthlyDivider} aria-hidden="true" />
    <p className={styles.monthlyNote}>
      One day. <strong>Countless possibilities.</strong>
    </p>
  </div>
</section>

        <section className={styles.posterSection}>
          <div className={styles.posterInner}>
            <div className={styles.posterCopy}>
              <span className={styles.tab}>at a glance</span>
              <h2>Meet UDHBHAV</h2>
              <p>
                The official announcement poster — the event journey, the
                monthly release, and the idea behind it, in one page.
              </p>
              <a
                href="https://portal.ecelliiitsurat.in/udbhav"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.inkLink}
              >
                Open the portal
              </a>
            </div>

            <figure className={styles.posterFrame}>
              <span className={`${styles.tapeCorner} ${styles.tapeTL}`} />
              <span className={`${styles.tapeCorner} ${styles.tapeTR}`} />
              <Image
                src="/events/abhyudaya/poster.png"
                alt="UDHBHAV poster: share your idea, get mentorship and explore funding"
                width={1024}
                height={1536}
                sizes="(max-width: 700px) 92vw, 430px"
                quality={82}
              />
              <figcaption>pinned up by Ruminate — E-Cell IIIT Surat</figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={styles.finalCtaInner}>
            <p className={styles.finalNote}>Your idea today. Tomorrow&apos;s impact.</p>
            <h2>Be the change.</h2>
            <a
              href="https://portal.ecelliiitsurat.in/udbhav"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.stampButton} ${styles.stampButtonLight}`}
            >
              Visit the portal
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}