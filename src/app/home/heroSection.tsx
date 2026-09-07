// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { FaArrowRight, FaCalendarAlt, FaChartLine, FaFire, FaLightbulb, FaRocket } from "react-icons/fa";
// import styles from "./home.module.css";
// import EcosystemTicker from "./EcosystemTicker";

// const heroSlides = [
//   { src: "/home/hero-lcp.webp", alt: "Ruminate community celebrating an event" },
//   { src: "/home/IPLAUCTION.webp", alt: "IPL Auction entrepreneurship event" },
//   { src: "/home/alpeshsirsession.webp", alt: "Ruminate expert speaker session" },
//   { src: "/home/certificatedistribution.webp", alt: "Certificate distribution at Ruminate" },
//   { src: "/home/corporatecrime.webp", alt: "Corporate Crime competition" },
//   { src: "/home/youthparliament.webp", alt: "Youth Parliament event" },
//   { src: "/home/amulvisit.webp", alt: "Student industry visit" },
//   { src: "/home/iprsession.webp", alt: "Intellectual property rights session" },
// ];

// const heroBoxes = [
//   { icon: FaCalendarAlt, href: "/events", label: "Core events", note: "Learn in the room" },
//   { icon: FaRocket, href: "/esummit", label: "E-Summit", note: "Meet the ecosystem" },
//   { icon: FaLightbulb, href: "/ktb", label: "Know the Business", note: "Think like a builder" },
//   { icon: FaChartLine, href: "/ssip", label: "SSIP", note: "Move ideas forward" },
//   { icon: FaFire, href: "/events/abhyudaya", label: "UDHBHAV", note: "Turn ideas into impact" },
// ];

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
//     const interval = window.setInterval(
//       () => setCurrentSlide((current) => (current + 1) % heroSlides.length),
//       7000,
//     );
//     return () => window.clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <section className={styles.heroDesktop} aria-labelledby="home-hero-title">
//         <div className={styles.heroBackground}>
//           <div className={styles.heroBackgroundSlide} key={heroSlides[currentSlide].src}>
//             <Image
//               src={heroSlides[currentSlide].src}
//               alt={heroSlides[currentSlide].alt}
//               fill
//               className={styles.heroBackgroundImage}
//               sizes="100vw"
//               priority={currentSlide === 0}
//               loading={currentSlide === 0 ? "eager" : "lazy"}
//               quality={76}
//             />
//           </div>
//           <div className={styles.heroOverlay} />
//           <div className={styles.heroGrid} aria-hidden="true" />
//           <div className={styles.heroGlow} aria-hidden="true" />
//         </div>

//         <div className={styles.heroContent}>
//           <div className={styles.heroText}>
//             <p className={styles.heroKicker}><span /> Ruminate · E-Cell IIIT Surat</p>
//             <h1 id="home-hero-title" className={styles.heroTitle}>
//               Where ideas ignite.<br /><span className={styles.heroSpark}>Where founders begin.</span>
//             </h1>
//             <p className={styles.heroDescription}>
//               A student-led entrepreneurship ecosystem for people ready to question,
//               build, collaborate and turn ambition into action.
//             </p>
//             <div className={styles.heroActions}>
//               <Link href="/events" className={styles.heroPrimary}>Explore the ecosystem <FaArrowRight aria-hidden="true" /></Link>
//               <a href="https://portal.ecelliiitsurat.in/udbhav" target="_blank" rel="noopener noreferrer" className={styles.heroSecondary}>Visit the portal</a>
//             </div>
//             <div className={styles.heroSignature}>
//               <span>Foster the spark.</span>
//               <span>IIIT Surat · Gujarat</span>
//             </div>
//           </div>

//           <div className={styles.heroRail}>
//             <span className={styles.heroRailLabel}>Ruminate in action</span>
//             <div className={styles.heroDots} aria-label="Choose a hero slide">
//               {heroSlides.map((slide, index) => (
//                 <button
//                   type="button"
//                   key={slide.src}
//                   className={index === currentSlide ? styles.heroDotActive : ""}
//                   onClick={() => setCurrentSlide(index)}
//                   aria-label={`Show highlight ${index + 1}`}
//                   aria-current={index === currentSlide ? "true" : undefined}
//                 />
//               ))}
//             </div>
//             <span className={styles.heroCounter}>{String(currentSlide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}</span>
//           </div>
//         </div>
//       </section>

//       <EcosystemTicker />

//       <section className={styles.heroBoxesStrip} aria-label="Featured programs">
//         <div className={styles.heroBoxesStripInner}>
//           {heroBoxes.map((item) => (
//             <Link className={styles.heroBox} href={item.href} key={item.href}>
//               <span className={styles.heroBoxIconWrap}><item.icon className={styles.heroBoxIcon} aria-hidden="true" /></span>
//               <span><span className={styles.heroBoxLabel}>{item.label}</span><small>{item.note}</small></span>
//               <FaArrowRight className={styles.heroBoxArrow} aria-hidden="true" />
//             </Link>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }







"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaCalendarAlt, FaChartLine, FaFire, FaLightbulb, FaRocket } from "react-icons/fa";
import styles from "./HeroSection.module.css";
import EcosystemTicker from "./EcosystemTicker";

const heroSlides = [
  { src: "/home/hero-lcp.webp", alt: "Ruminate community celebrating an event" },
  { src: "/home/IPLAUCTION.webp", alt: "IPL Auction entrepreneurship event" },
  { src: "/home/alpeshsirsession.webp", alt: "Ruminate expert speaker session" },
  { src: "/home/certificatedistribution.webp", alt: "Certificate distribution at Ruminate" },
  { src: "/home/corporatecrime.webp", alt: "Corporate Crime competition" },
  { src: "/home/youthparliament.webp", alt: "Youth Parliament event" },
  { src: "/home/amulvisit.webp", alt: "Student industry visit" },
  { src: "/home/iprsession.webp", alt: "Intellectual property rights session" },
];

const heroBoxes = [
  { icon: FaCalendarAlt, href: "/events", label: "Core events", note: "Learn in the room" },
  { icon: FaRocket, href: "/esummit", label: "E-Summit", note: "Meet the ecosystem" },
  { icon: FaLightbulb, href: "/ktb", label: "Know the Business", note: "Think like a builder" },
  { icon: FaChartLine, href: "/ssip", label: "SSIP", note: "Move ideas forward" },
  { icon: FaFire, href: "/events/abhyudaya", label: "UDHBHAV", note: "Turn ideas into impact" },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(
      () => setCurrentSlide((current) => (current + 1) % heroSlides.length),
      7000,
    );
    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <section className={styles.heroDesktop} aria-labelledby="home-hero-title">
        <div className={styles.heroBackground}>
          <div className={styles.heroBackgroundSlide} key={heroSlides[currentSlide].src}>
            <Image
              src={heroSlides[currentSlide].src}
              alt={heroSlides[currentSlide].alt}
              fill
              className={styles.heroBackgroundImage}
              sizes="100vw"
              priority={currentSlide === 0}
              loading={currentSlide === 0 ? "eager" : "lazy"}
              quality={76}
            />
          </div>
          <div className={styles.heroOverlay} />
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.heroGlow} aria-hidden="true" />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.heroKicker}><span /> Ruminate · E-Cell IIIT Surat</p>
            <h1 id="home-hero-title" className={styles.heroTitle}>
              Where ideas ignite.<br /><span className={styles.heroSpark}>Where founders begin.</span>
            </h1>
            <p className={styles.heroDescription}>
              A student-led entrepreneurship ecosystem for people ready to question,
              build, collaborate and turn ambition into action.
            </p>
            <div className={styles.heroActions}>
              <Link href="/events" className={styles.heroPrimary}>Explore the Events <FaArrowRight aria-hidden="true" /></Link>
              <a href="https://portal.ecelliiitsurat.in" target="_blank" rel="noopener noreferrer" className={styles.heroSecondary}>Visit the portal</a>
            </div>
            <div className={styles.heroSignature}>
              <span>#fosterthespark</span>
              <span>IIIT Surat · Gujarat</span>
            </div>
          </div>

          <div className={styles.heroRail}>
            <span className={styles.heroRailLabel}>Ruminate in action</span>
            <div className={styles.heroDots} aria-label="Choose a hero slide">
              {heroSlides.map((slide, index) => (
                <button
                  type="button"
                  key={slide.src}
                  className={index === currentSlide ? styles.heroDotActive : ""}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Show highlight ${index + 1}`}
                  aria-current={index === currentSlide ? "true" : undefined}
                />
              ))}
            </div>
            <span className={styles.heroCounter}>{String(currentSlide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}</span>
          </div>
        </div>
      </section>

      <EcosystemTicker />

      <section className={styles.heroBoxesStrip} aria-label="Featured programs">
        <div className={styles.heroBoxesStripInner}>
          {heroBoxes.map((item) => (
            <Link className={styles.heroBox} href={item.href} key={item.href}>
              <span className={styles.heroBoxIconWrap}><item.icon className={styles.heroBoxIcon} aria-hidden="true" /></span>
              <span><span className={styles.heroBoxLabel}>{item.label}</span><small>{item.note}</small></span>
              <FaArrowRight className={styles.heroBoxArrow} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}