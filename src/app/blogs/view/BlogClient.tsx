"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import "./blognew.css";
import "./blognew-premium.css";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
}

export default function BlogClient() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/blogs?id=${id}`)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok || data.error) throw new Error(data.error || "Failed to load blog");
        setBlog(data);
      })
      .catch((err) => {
        console.error("Error loading blog:", err);
        setError(true);
      });
  }, [id]);

  const image = id ? ({ "1": "/home/certificatedistribution.webp", "2": "/home/hero-lcp.webp", "3": "/home/youthparliament.webp", "4": "/home/amulvisit.webp", "5": "/home/alpeshsirsession.webp" } as Record<string, string>)[id] : undefined;

  if (error) return <div className="blog-detail-state"><h1>This story could not be found.</h1><p>It may have moved or is temporarily unavailable.</p></div>;
  if (!blog) return <div className="blog-detail-skeleton" aria-label="Loading article"><span /><span /><span /></div>;

  return (
    <div className="blog-detail-wrapper">
      <div className="blog-heading-block">
        <p className="blog-detail-eyebrow">Ruminate journal</p>
      </div>

      <h1 className="blog-main-title">{blog.title}</h1>

      <div className="blog-image-wrapper">
        <Image
          src={image || "/placeholder-event.webp"}
          alt={blog.title}
          className="blog-image"
          width={5760}
          height={3240}
          sizes="(max-width: 900px) 94vw, 900px"
          quality={78}
        />
      </div>

      <div
        className="blog-body"
        dangerouslySetInnerHTML={{
          __html: blog.content.replace(/\n/g, "<br />"),
        }}
      />
    </div>
  );
}
