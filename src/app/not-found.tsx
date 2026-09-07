import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="status-page">
      <div className="status-page__glow" />
      <Image src="/brand-mark.webp" alt="Ruminate" width={80} height={121} />
      <p className="status-page__code">404</p>
      <h1>This spark wandered off.</h1>
      <p>The page may have moved, or the address may be incorrect.</p>
      <div className="status-page__actions"><Link href="/">Return home</Link><Link href="/events">Explore events</Link></div>
    </section>
  );
}
