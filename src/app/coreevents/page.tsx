"use client";

import { useMemo, useState } from "react";
import styles from "./coreevents.module.css";

type TrackId = "all" | "industrial" | "discussions" | "workshops" | "local" | "founder";
type EventTrack = Exclude<TrackId, "all">;

const categories: Array<{
  id: TrackId;
  label: string;
  short: string;
  description: string;
}> = [
  {
    id: "all",
    label: "All Events",
    short: "ALL",
    description: "Every core experience across the program in one view.",
  },
  {
    id: "industrial",
    label: "Industrial Visits",
    short: "IV",
    description: "Factory floors, supply chains, and operations leaders.",
  },
  {
    id: "discussions",
    label: "Group Discussions",
    short: "GD",
    description: "Peer-led debates, teardown sessions, and shared playbooks.",
  },
  {
    id: "workshops",
    label: "Workshops",
    short: "WS",
    description: "Hands-on sprints that build real skills and prototypes.",
  },
  {
    id: "local",
    label: "Local Visits",
    short: "LV",
    description: "Explore nearby innovation hubs and community builders.",
  },
  {
    id: "founder",
    label: "Founder Meetings",
    short: "FM",
    description: "Close-up time with founders, operators, and advisors.",
  },
];

const trackLabels: Record<EventTrack, string> = {
  industrial: "Industrial Visit",
  discussions: "Group Discussion",
  workshops: "Workshop",
  local: "Local Visit",
  founder: "Founder Meeting",
};

const events: Array<{
  id: string;
  track: EventTrack;
  title: string;
  summary: string;
  date: string;
  sortDate: string;
  location: string;
  host: string;
  status: string;
  action: string;
}> = [
  {
    id: "industrial-1",
    track: "industrial",
    title: "Amul Dairy Visit (Anand, Gujarat)",
    summary: "Go behind the scenes of the largest dairy cooperative, learning about their unique supply chain and operations model.",
    date: "2nd of November, 2025",
    sortDate: "2025-11-02",
    location: "Amul Dairy Plant, Anand",
    host: "Amul Operations Team",
    status: "On-site",
    action: "150+ Students",
  },
  // {
  //   id: "industrial-2",
  //   track: "industrial",
  //   title: "Supply Chain Control Room",
  //   summary: "Trace inventory decisions and real-time logistics planning.",
  //   date: "Week 5",
  //   location: "Harbor Logistics",
  //   host: "Supply Chain Lead",
  //   status: "On-site",
  //   action: "Register interest",
  // },
  //   {
  //   id: "industrial-3",
  //   track: "industrial",
  //   title: "Supply Chain Control Room",
  //   summary: "Trace inventory decisions and real-time logistics planning.",
  //   date: "Week 5",
  //   location: "Harbor Logistics",
  //   host: "Supply Chain Lead",
  //   status: "On-site",
  //   action: "Register interest",
  // },
  // {
  //   id: "discussions-1",
  //   track: "discussions",
  //   title: "Market Fit Roundtable",
  //   summary: "Debate traction signals with peers and seasoned advisors.",
  //   date: "Bi-weekly",
  //   location: "Founder Lounge",
  //   host: "Community Team",
  //   status: "Discussion",
  //   action: "Add to calendar",
  // },
  {
    id: "discussions-2",
    track: "discussions",
    title: "AI driving the Entrepreneurship",
    summary: "Break down real pricing pivots from cohort startups.",
    date: "16th of October, 2025",
    sortDate: "2025-10-16",
    location: "CSE LAB 3",
    host: "Ruminate",
    status: "Discussed",
    action: "For Ruminate members",
  },
  // {
  //   id: "workshops-1",
  //   track: "workshops",
  //   title: "Rapid Prototyping Lab",
  //   summary: "Build, test, and iterate in a guided maker sprint.",
  //   date: "Every Friday",
  //   location: "Innovation Studio",
  //   host: "Product Guild",
  //   status: "Hands-on",
  //   action: "Reserve a bench",
  // },
  // {
  //   id: "workshops-2",
  //   track: "workshops",
  //   title: "Storytelling for Demo Day",
  //   summary: "Craft a pitch story with live feedback from mentors.",
  //   date: "Week 6",
  //   location: "Pitch Theatre",
  //   host: "Narrative Team",
  //   status: "Workshop",
  //   action: "Submit deck",
  // },
  // {
  //   id: "local-1",
  //   track: "local",
  //   title: "Innovation District Walk",
  //   summary: "Visit labs, studios, and startups shaping the city.",
  //   date: "Monthly",
  //   location: "City Loop",
  //   host: "Local Partners",
  //   status: "Visit",
  //   action: "Join the walk",
  // },
  // {
  //   id: "local-2",
  //   track: "local",
  //   title: "Community Impact Tour",
  //   summary: "Meet local operators building resilient communities.",
  //   date: "Week 4",
  //   location: "Community Hub",
  //   host: "Impact Team",
  //   status: "Visit",
  //   action: "Volunteer slot",
  // },
  {
    id: "founder-1",
    track: "founder",
    title: "Sunny Kabrawala- Star Labs",
    summary: "Discuss the journey of building Star Labs, a startup focused on space technology, and gain insights into the challenges and triumphs of entrepreneurship in a cutting-edge industry.",
    date: "11th of January, 2026",
    sortDate: "2026-01-11",
    location: "Adajan",
    host: "Sunny Kabrawala",
    status: "",
    action: "Core team meet",
  },
  // {
  //   id: "founder-2",
  //   track: "founder",
  //   title: "Investor + Founder Office Hours",
  //   summary: "Short, focused sessions to pressure-test your roadmap.",
  //   date: "Week 7",
  //   location: "Mentor Pods",
  //   host: "Advisory Council",
  //   status: "Office hours",
  //   action: "Book a slot",
  // },
];

const trackCounts = events.reduce(
  (acc, event) => {
    acc[event.track] = (acc[event.track] ?? 0) + 1;
    return acc;
  },
  {
    all: events.length,
    industrial: 0,
    discussions: 0,
    workshops: 0,
    local: 0,
    founder: 0,
  } as Record<TrackId, number>,
);

const totalLocations = new Set(events.map((event) => event.location)).size;
const spotlightEvents = events.slice(0, 3);
const updates = spotlightEvents.map((event) => ({
  ...event,
  link: "#",
  updateDate: "",
}));

const getSortableDate = (value?: string) => {
  if (!value) return null;
  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp) ? null : timestamp;
};

const updatesSorted = [...updates].sort((a, b) => {
  const aDate = getSortableDate(a.updateDate || a.sortDate || a.date);
  const bDate = getSortableDate(b.updateDate || b.sortDate || b.date);
  if (aDate === null && bDate === null) return 0;
  if (aDate === null) return 1;
  if (bDate === null) return -1;
  return bDate - aDate;
});

export default function CoreEventsPage() {
  const [activeTrack, setActiveTrack] = useState<TrackId>("all");

  const activeCategory = useMemo(
    () => categories.find((category) => category.id === activeTrack) ?? categories[0],
    [activeTrack],
  );

  const visibleEvents = useMemo(
    () => (activeTrack === "all" ? events : events.filter((event) => event.track === activeTrack)),
    [activeTrack],
  );

  const activeLocations = useMemo(
    () => new Set(visibleEvents.map((event) => event.location)).size,
    [visibleEvents],
  );

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Core Events</p>
            <h1 className={styles.heroTitle}>Build with founders. Learn by doing.</h1>
            <p className={styles.heroSubtitle}>
              A curated calendar of immersive visits, hands-on workshops, and founder
              conversations. Tap a track to focus the schedule on what matters most to you.
            </p>
            <div className={styles.heroMeta}>
              <div className={styles.metaCard}>
                <span className={styles.metaValue}>{events.length}</span>
                <span className={styles.metaLabel}>Core experiences</span>
              </div>
              <div className={styles.metaCard}>
                <span className={styles.metaValue}>{categories.length - 1}</span>
                <span className={styles.metaLabel}>Tracks to explore</span>
              </div>
              <div className={styles.metaCard}>
                <span className={styles.metaValue}>{totalLocations}</span>
                <span className={styles.metaLabel}>Locations covered</span>
              </div>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <div className={styles.heroPanelHeader}>
              <div>
                <p className={styles.heroPanelKicker}>Updates</p>
                <h2 className={styles.heroPanelTitle}>Notification Center</h2>
                <p className={styles.heroPanelSubtitle}>
                  Latest forms, confirmations, and schedule drops for the cohort.
                </p>
              </div>
              <span className={styles.heroPanelCount}>{updatesSorted.length} new</span>
            </div>
            <div className={styles.heroPanelList}>
              {updatesSorted.map((event) => (
                <a
                  key={event.id}
                  className={styles.heroMiniCard}
                  href={event.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.trackBadge} data-track={event.track}>
                    {trackLabels[event.track]}
                  </span>
                  <p className={styles.heroMiniTitle}>{event.title}</p>
                  <p className={styles.heroMiniMeta}>{event.summary}</p>
                  <p className={styles.heroMiniMeta}>
                    {event.date} · {event.location}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.categoryRow} role="tablist" aria-label="Core event categories">
          {categories.map((category) => {
            const isActive = category.id === activeTrack;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="events-panel"
                className={`${styles.categoryButton} ${isActive ? styles.categoryButtonActive : ""}`}
                onClick={() => setActiveTrack(category.id)}
              >
                <span className={styles.categoryIcon}>{category.short}</span>
                <span className={styles.categoryLabel}>{category.label}</span>
                <span className={styles.categoryCount}>{trackCounts[category.id]} experiences</span>
              </button>
            );
          })}
        </div>

        <div className={styles.categorySpotlight}>
          <div>
            <p className={styles.categoryKicker}>Now showing</p>
            <h2 className={styles.categoryTitle}>{activeCategory.label}</h2>
            <p className={styles.categoryDescription}>{activeCategory.description}</p>
          </div>
          <div className={styles.categoryMetrics}>
            <div className={styles.metricCard}>
              <span className={styles.metricValue}>{visibleEvents.length}</span>
              <span className={styles.metricLabel}>Experiences</span>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricValue}>{activeLocations}</span>
              <span className={styles.metricLabel}>Locations</span>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricValue}>
                {activeTrack === "all" ? "All tracks" : trackLabels[activeTrack as EventTrack]}
              </span>
              <span className={styles.metricLabel}>Current focus</span>
            </div>
          </div>
        </div>

        <div className={styles.eventsSection} id="events-panel" role="tabpanel">
          <div className={styles.eventsHeader}>
            <div>
              <p className={styles.eventsKicker}>Schedule</p>
              <h2 className={styles.eventsTitle}>Events in this track</h2>
            </div>
            <span className={styles.eventsCount}>{visibleEvents.length} items</span>
          </div>

          <div className={styles.eventsGrid}>
            {visibleEvents.map((event) => (
              <article key={event.id} className={styles.eventCard}>
                <div className={styles.eventHeader}>
                  <span className={styles.trackBadge} data-track={event.track}>
                    {trackLabels[event.track]}
                  </span>
                  <span className={styles.eventStatus}>{event.status}</span>
                </div>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.eventSummary}>{event.summary}</p>
                <div className={styles.eventMeta}>
                  <span>{event.date}</span>
                  <span>{event.location}</span>
                </div>
                <div className={styles.eventFooter}>
                  <span className={styles.eventHost}>{event.host}</span>
                  <span className={styles.eventAction}>{event.action}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
