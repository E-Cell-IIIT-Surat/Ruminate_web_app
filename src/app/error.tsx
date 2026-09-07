"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="status-page">
      <p className="status-page__code">Oops</p>
      <h1>Something interrupted the flow.</h1>
      <p>Your data is still safe. Try this page again or return home.</p>
      <div className="status-page__actions"><button type="button" onClick={reset}>Try again</button><Link href="/">Return home</Link></div>
    </section>
  );
}
