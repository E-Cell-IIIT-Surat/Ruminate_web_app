"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function NavigationFeedback() {
  const pathname = usePathname();
  const [pending, setPending] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setPending(false);
    if (timeout.current) clearTimeout(timeout.current);
  }, [pathname]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest("a[href]") as HTMLAnchorElement | null;
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
      const target = new URL(link.href, window.location.href);
      if (target.origin !== window.location.origin || `${target.pathname}${target.search}` === `${window.location.pathname}${window.location.search}`) return;
      setPending(true);
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setPending(false), 8000);
    }
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  return (
    <div className={`route-feedback ${pending ? "route-feedback--visible" : ""}`} role="status" aria-live="polite" aria-label={pending ? "Opening page" : undefined}>
      <span />
    </div>
  );
}
