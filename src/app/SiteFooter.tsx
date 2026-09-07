"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { FaArrowRight, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setState("error");
      setMessage("Enter a valid email address.");
      return;
    }
    setState("sending");
    setMessage("Subscribing…");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message || "Subscription is unavailable right now.");
      setEmail("");
      setState("success");
      setMessage("You’re on the update list.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Please try again later.");
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <section>
            <Link href="/" className={styles.brandLink} aria-label="Ruminate home">
              <Image src="/brand-mark.webp" alt="" width={96} height={145} className={styles.logo} sizes="46px" />
              <span><span className={styles.brandName}>Ruminate</span><span className={styles.brandTag}>E-Cell IIIT Surat</span></span>
            </Link>
            <p className={styles.brandCopy}>A student-led community turning curiosity into ideas, initiatives and entrepreneurial impact.</p>
            <a className={styles.contact} href="mailto:ruminate.ecell@iiitsurat.ac.in"><FaEnvelope aria-hidden="true" /> ruminate.ecell@iiitsurat.ac.in</a>
          </section>

          <section>
            <h2 className={styles.heading}>Explore</h2>
            <ul className={styles.links}>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/events/abhyudaya">UDHBHAV</Link></li>
              <li><Link href="/team">Our Team</Link></li>
              <li><Link href="/gallary">Gallery</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/ssip">SSIP</Link></li>
              <li><Link href="/esummit">E-Summit</Link></li>
            </ul>
          </section>

          <section>
            <h2 className={styles.heading}>Follow us</h2>
            <div className={styles.socials}>
              <a className={styles.social} href="https://www.instagram.com/ecell_iiits/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a className={styles.social} href="https://www.facebook.com/ecell.iiits/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a className={styles.social} href="https://www.linkedin.com/company/e-cell-iiit-surat/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </section>

          <section>
            <h2 className={styles.heading}>Stay updated</h2>
            <p className={styles.subscribeCopy}>Occasional event and opportunity updates—no noise.</p>
            <form className={styles.form} onSubmit={subscribe}>
              <label className="sr-only" htmlFor="footer-email">Email address</label>
              <input id="footer-email" className={styles.input} type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} />
              <button className={styles.submit} type="submit" disabled={state === "sending"} aria-label="Subscribe"><FaArrowRight aria-hidden="true" /></button>
            </form>
            <p className={styles.message} data-state={state} aria-live="polite">{message}</p>
          </section>
        </div>
        <div className={styles.bottom}><span>© {new Date().getFullYear()} Ruminate — E-Cell IIIT Surat</span><span>Ideate · Innovate · Elevate</span></div>
      </div>
    </footer>
  );
}
