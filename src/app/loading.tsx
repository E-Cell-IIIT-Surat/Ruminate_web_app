import Image from "next/image";

export default function Loading() {
  return (
    <div className="ruminate-loader" role="status" aria-label="Loading Ruminate">
      <div className="ruminate-loader__mark"><span /><Image src="/brand-mark.webp" alt="" width={96} height={145} priority /></div>
      <strong>Ruminate</strong>
      <small>Igniting the next idea</small>
    </div>
  );
}
