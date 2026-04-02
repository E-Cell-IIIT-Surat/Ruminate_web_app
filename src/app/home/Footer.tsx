"use client";
import Link from "next/link";
import { useState } from "react"; // <-- ADD THIS
import styles from "./home.module.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // To show success/error

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // simple email validation on frontend
    if (!email.trim() || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // ============================================================
    // EMAIL SENDING FUNCTIONALITY - CURRENTLY DISABLED
    // ============================================================
    // To re-enable email sending:
    // 1. Uncomment the try-catch block below (lines 24-40)
    // 2. Make sure the /api/send-email endpoint is properly configured
    // 3. Remove or comment out the temporary success message below
    // ============================================================

    // TEMPORARY: Show success message without actually sending email
    setMessage("Thanks for subscribing!");
    setEmail(""); // reset field

    /* UNCOMMENT THIS BLOCK TO RE-ENABLE EMAIL SENDING:
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("Thanks for your message!");
        setEmail(""); // reset field
      } else {
        setMessage("Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error("Error sending email:", err);
      setMessage("An error occurred. Try again later.");
    }
    */
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <div className={styles.logoBlock}>
          <img src="/RUMINATEFRONT.png" alt="Ruminate Logo" className={styles.logo} />
          <h2 className={styles.logoText}>Ruminate</h2>
          <span className={styles.subText}>E-Cell IIIT Surat</span>
        </div>
      </div>

      {/* SOCIAL SECTION */}
      <div className={styles.column}>
        <h3 className={styles.socialHeading}>Social</h3>
        <ul className={styles.socialList}>
          <li>
            <a
              href="https://www.instagram.com/ecell_iiits/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaInstagram className={styles.icon} />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/ecell.iiits/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaFacebookF className={styles.icon} />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/e-cell-iiit-surat/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaLinkedinIn className={styles.icon} />
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>

      {/* USEFUL LINKS */}
      <div className={styles.column}>
        <h3 className={styles.heading}>Useful links</h3>
        <ul className={styles.linkList}>
          <li>
            <a
              href="https://iiitsurat.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              IIIT Surat
            </a>
          </li>
          <li>
            <a
              href="https://esummit.ecelliiitsurat.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              E-summit
            </a>
          </li>
          <li>
            <a
              href="https://teams.ecelliiitsurat.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ruminate Network
            </a>
          </li>
        </ul>
      </div>

      {/* SUBSCRIBE SECTION */}
      <div className={styles.column}>
        <h3 className={styles.heading}>Subscribe</h3>
        <p className={styles.subTextSmall}>
          Keep yourself updated. Subscribe to our newsletter
        </p>
        <form className={styles.subscribeForm} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className={styles.arrowBtn}>&rarr;</button>
        </form>
        {message && <p style={{ color: "orange", marginTop: "0.5rem" }}>{message}</p>}
      </div>
    </footer>
  );
}
