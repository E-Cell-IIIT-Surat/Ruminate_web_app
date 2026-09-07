"use client";

import { useEffect, useState } from "react";

type Status = "offline" | "slow" | "online" | null;
type NetworkInformation = { effectiveType?: string; saveData?: boolean; addEventListener?: (type: string, cb: () => void) => void; removeEventListener?: (type: string, cb: () => void) => void };

export default function NetworkStatusToast() {
  const [status, setStatus] = useState<Status>(null);

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const check = () => {
      if (!navigator.onLine) return setStatus("offline");
      if (connection?.saveData || connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g") return setStatus("slow");
      if (status === "offline") {
        setStatus("online");
        timer = setTimeout(() => setStatus(null), 3500);
      } else setStatus(null);
    };
    const offline = () => setStatus("offline");
    const online = () => { setStatus("online"); timer = setTimeout(check, 2500); };
    check();
    window.addEventListener("offline", offline);
    window.addEventListener("online", online);
    connection?.addEventListener?.("change", check);
    return () => {
      window.removeEventListener("offline", offline);
      window.removeEventListener("online", online);
      connection?.removeEventListener?.("change", check);
      if (timer) clearTimeout(timer);
    };
  // status is intentionally read only to distinguish a reconnection.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!status) return null;
  const copy = status === "offline" ? "You’re offline. We’ll keep this page ready while you reconnect." : status === "slow" ? "Slow connection detected. Images will load only as you reach them." : "Back online.";
  return <div className={`network-toast network-toast--${status}`} role="status"><span aria-hidden="true" />{copy}<button type="button" onClick={() => setStatus(null)} aria-label="Dismiss network message">×</button></div>;
}
