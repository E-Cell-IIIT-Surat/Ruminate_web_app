"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./global.css";
import "./team-premium.css";

interface Member {
  name: string;
  role: string;
  img: string;
  imgPositionY?: string;
}

const categories = [
  "Mentors",
  "Core Team 2026-2027",
];

export default function TeamPage() {
  const [team, setTeam] = useState<Member[]>([]);
  const [activeCategory, setActiveCategory] = useState("Mentors");
  const [loading, setLoading] = useState(true);
  const [alumniYear, setAlumniYear] = useState<string>("All");

  const extractYearFromRole = (role: string): string | null => {
    const match = role.match(/\b(?:YR\s*)?(\d{2}-\d{2})\b/i);
    return match ? match[1] : null;
  };

  useEffect(() => {
    const fetchTeam = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/team?category=${encodeURIComponent(activeCategory)}`);
        if (!res.ok) {
          throw new Error('Failed to fetch team data');
        }
        const data = await res.json();
        setTeam(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching team:", err);
        setTeam([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, [activeCategory]);

  useEffect(() => {
    if (activeCategory !== "Alumni") {
      setAlumniYear("All");
    }
  }, [activeCategory]);

  const isAlumni = activeCategory === "Alumni";
  const alumniYears =
    isAlumni && team.length > 0
      ? Array.from(
          new Set(
            team
              .map((member) => extractYearFromRole(member.role))
              .filter((year): year is string => Boolean(year))
          )
        ).sort()
      : [];

  const displayedTeam =
    isAlumni && alumniYear !== "All"
      ? team.filter((member) => extractYearFromRole(member.role) === alumniYear)
      : team;

  return (
    <main className="team-main">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-left">
          <p className="page-eyebrow">The people behind the momentum</p>
          <h1 className="hero-text">
            Together as a <span className="highlight-gradient">team,</span> we dream <span className="highlight-gradient">bigger ,</span> work harder, and achieve the <span className="highlight-gradient">impossible</span>.
          </h1>
          <p className="hero-description">
            Meet the passionate individuals who make Ruminate&apos;s vision a reality.
            From experienced faculty mentors to dedicated student leaders, our team
            brings together diverse expertise and unwavering commitment to fostering
            entrepreneurial excellence.
          </p>
        </div>

       <div className="hero-right">
  <div className="image-layer">
    <div className="back-layer"></div>
    <Image
      className="front-image"
      src="https://pub-d9e37e07152c4e608d951985e3cf2832.r2.dev/teams.jpg"
      alt="Team Photo"
      width={1300}
      height={900}
      sizes="(max-width: 788px) 100vw, 66vw"
      priority
      quality={78}
      unoptimized
      onError={(event) => {
        if (event.currentTarget.dataset.fallbackApplied) return;
        event.currentTarget.dataset.fallbackApplied = "true";
        event.currentTarget.removeAttribute("srcset");
        event.currentTarget.src = "/home/hero-lcp.webp";
      }}
    />
    <div className="hero-badge">
      <strong>E-Cell</strong>
      <span>IIIT Surat</span>
    </div>
  </div>
</div>
      </section>

      {/* Category Navigation */}
      <div className="category-nav">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-button ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Team Display */}
      <section className="team">
        <h2>{activeCategory}</h2>

        {loading ? (
          <div className="team-skeleton" aria-label="Loading team members">
            {Array.from({ length: 8 }, (_, index) => <span key={index} />)}
          </div>
        ) : team.length === 0 ? (
          <div className="empty">
            <h3>No team members found</h3>
            <p>We&apos;re currently updating this section. Check back soon!</p>
          </div>
        ) : (
          <>
            {isAlumni && alumniYears.length > 0 && (
              <div className="alumni-filter">
                <label htmlFor="alumniYear">Filter by batch year:</label>
                <select
                  id="alumniYear"
                  value={alumniYear}
                  onChange={(e) => setAlumniYear(e.target.value)}
                >
                  <option value="All">All</option>
                  {alumniYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="team-grid">
              {displayedTeam.map((member, index) => (
               <div className="card" key={index}>
  <div className="card-inner">
    <div className="avatar-ring">
      <Image
        src={member.img}
        alt={member.name}
        width={200}
        height={200}
        sizes="160px"
        quality={80}
        unoptimized
        className="avatar-img"
        style={{ objectPosition: `50% ${member.imgPositionY ?? "50%"}` }}
        onError={(event) => {
          if (event.currentTarget.dataset.fallbackApplied) return;
          event.currentTarget.dataset.fallbackApplied = "true";
          event.currentTarget.removeAttribute("srcset");
          event.currentTarget.src = "/placeholder-event.webp";
        }}
      />
    </div>
    <div className="info">
      <p className="name">{member.name}</p>
      <p className="role">{member.role}</p>
    </div>
  </div>
</div>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
