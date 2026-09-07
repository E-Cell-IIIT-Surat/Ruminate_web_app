"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import "./blogs.css";
import "./blogs-premium.css";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

const verifiedImages: Record<string, string> = {
  "1": "/home/certificatedistribution.webp",
  "2": "/home/hero-lcp.webp",
  "3": "/home/youthparliament.webp",
  "4": "/home/amulvisit.webp",
  "5": "/home/alpeshsirsession.webp",
};

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const router = useRouter();

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/blogs", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Unable to load articles");
        return res.json();
      })
      .then((data) => {
        setBlogs(Array.isArray(data) ? data : []);
        setStatus("ready");
      })
      .catch((error) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        console.error("Failed to fetch blogs:", error);
        setStatus("error");
      });
    return () => controller.abort();
  }, []);

  return (
    <div className="blogs-page">
      <header className="blogs-header">
        <p className="blogs-eyebrow">Ideas, field notes and experiences</p>
        <h1 className="blogs-title">Insights from<br /><span>inside Ruminate.</span></h1>
        <p className="blogs-subtitle">Stories from events, industry visits and the people shaping our entrepreneurial culture.</p>
      </header>

      {status === "loading" ? (
        <div className="blogs-skeleton" aria-label="Loading articles">
          {Array.from({ length: 5 }, (_, index) => <span key={index} />)}
        </div>
      ) : status === "error" ? (
        <div className="blogs-state"><h2>Stories are temporarily unavailable.</h2><p>Check your connection and try again in a moment.</p></div>
      ) : blogs.length === 0 ? (
        <div className="blogs-state"><h2>New stories are being written.</h2><p>There are no published articles yet.</p></div>
      ) : (
        <div className="blogs-grid">
          {blogs.map((blog, index) => (
            <article className={`blog-card ${index === 0 ? "blog-card--featured" : ""}`} key={blog.id}>
              <div className="blog-card-media">
                <Image src={verifiedImages[blog.id] || "/placeholder-event.webp"} alt={blog.title} className="blog-card-image" fill sizes={index === 0 ? "(max-width: 900px) 94vw, 58vw" : "(max-width: 768px) 94vw, 380px"} quality={74} priority={index === 0} />
              </div>
              <div className="blog-card-content">
                <span className="blog-card-index">{String(index + 1).padStart(2, "0")} · Field note</span>
                <h2 className="blog-card-title">{blog.title}</h2>
                <p className="blog-card-description">{blog.excerpt}</p>
                <button className="read-more-button" onClick={() => router.push(`/blogs/view?id=${blog.id}`)}>
                  Read the story <FaArrowRight aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
