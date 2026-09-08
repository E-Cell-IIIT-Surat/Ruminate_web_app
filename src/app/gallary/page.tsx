// "use client";

// import { useState, useEffect, useCallback, useMemo, useRef } from "react";
// import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
// import Image from "next/image";
// import "./gallery.css";

// interface GalleryImage {
//   img: string;
//   event?: string;
//   year?: string;
// }

// interface GalleryCatalog {
//   images: GalleryImage[];
//   years: string[];
//   events: string[];
// }

// function isR2DevUrl(source: string) {
//   return /^https?:\/\/[^/]+\.r2\.dev(?:\/|$)/i.test(source);
// }

// export default function Gallery() {
//   const [photos, setPhotos] = useState<GalleryImage[]>([]);
//   const [year, setYear] = useState("All");
//   const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
//   const [activeImg, setActiveImg] = useState<string | null>(null);
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const closeButtonRef = useRef<HTMLButtonElement | null>(null);

//   const [years, setYears] = useState<string[]>(["All"]);
//   const [events, setEvents] = useState<string[]>(["All"]);

//   const visiblePhotos = useMemo(
//     () => selectedEvent
//       ? photos.filter((photo) => (photo.event || "Gallery") === selectedEvent)
//       : [],
//     [photos, selectedEvent],
//   );
//   const eventGroups = useMemo(
//     () => events
//       .filter((event) => event !== "All")
//       .map((event) => ({
//         event,
//         images: photos.filter((photo) => (photo.event || "Gallery") === event),
//       }))
//       .filter((group) => group.images.length > 0),
//     [events, photos],
//   );
//   const lightboxPhotos = useMemo(
//     () => selectedEvent ? visiblePhotos : photos,
//     [photos, selectedEvent, visiblePhotos],
//   );

//   useEffect(() => {
//     setLoading(true);
//     setError("");
//     const controller = new AbortController();
//     const baseUrl = `/api/gallary`;
//     const query: string[] = [];

//     query.push("catalog=1");
//     if (year !== "All") query.push(`year=${encodeURIComponent(year)}`);
//     const url = query.length ? `${baseUrl}?${query.join("&")}` : baseUrl;

//     fetch(url, { signal: controller.signal })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Failed to fetch gallery data');
//         }
//         return res.json();
//       })
//       .then((data: GalleryCatalog) => {
//         setPhotos(Array.isArray(data?.images) ? data.images : []);
//         setSelectedEvent(null);
//         if (Array.isArray(data?.years)) setYears(data.years);
//         if (Array.isArray(data?.events) && data.events.length > 0) setEvents(data.events);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof DOMException && err.name === "AbortError") return;
//         console.error("Fetch error:", err);
//         setPhotos([]);
//         setError("The gallery could not be loaded. Check your connection and try again.");
//         setLoading(false);
//       });
//     return () => controller.abort();
//   }, [year]);

//   const openImage = (img: string, index: number) => {
//     setActiveImg(img);
//     setActiveIndex(index);
//   };

//   const closeImage = useCallback(() => {
//     setActiveImg(null);
//   }, []);

//   const navigateImage = useCallback((direction: 'prev' | 'next') => {
//     if (lightboxPhotos.length === 0) return;

//     let newIndex = activeIndex;
//     if (direction === 'prev') {
//       newIndex = activeIndex > 0 ? activeIndex - 1 : lightboxPhotos.length - 1;
//     } else {
//       newIndex = activeIndex < lightboxPhotos.length - 1 ? activeIndex + 1 : 0;
//     }

//     setActiveIndex(newIndex);
//     setActiveImg(lightboxPhotos[newIndex].img);
//   }, [activeIndex, lightboxPhotos]);

//   useEffect(() => {
//     const handleKeyPress = (e: KeyboardEvent) => {
//       if (!activeImg) return;

//       if (e.key === 'Escape') {
//         closeImage();
//       } else if (e.key === 'ArrowLeft') {
//         navigateImage('prev');
//       } else if (e.key === 'ArrowRight') {
//         navigateImage('next');
//       }
//     };

//     window.addEventListener('keydown', handleKeyPress);
//     return () => window.removeEventListener('keydown', handleKeyPress);
//   }, [activeImg, closeImage, navigateImage]);

//   useEffect(() => {
//     if (!activeImg) return;
//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     closeButtonRef.current?.focus();
//     return () => { document.body.style.overflow = previousOverflow; };
//   }, [activeImg]);

//   return (
//     <div className="gallery-container">
//       <section className="gallery-main" aria-labelledby="gallery-title">
//         <div className="gallery-heading"><span>Inside Ruminate</span><h1 id="gallery-title">Photo Stream</h1><p>The moments we capture become memories we never forget.</p></div>

//         <div className="filters">
//           <div className="dropdown-group">
//             <label>Sort By Year</label>
//             <select value={year} onChange={(e) => setYear(e.target.value)}>
//               {years.map((yr) => (
//                 <option key={yr} value={yr}>
//                   {yr}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <p className="filter-hint">{eventGroups.length} event{eventGroups.length === 1 ? "" : "s"} available</p>
//         </div>

//         {/* Image grid */}
//         {loading ? (
//           <div className="gallery-skeleton" aria-label="Loading gallery"><span /><span /><span /><span /></div>
//         ) : error ? (
//           <div className="no-images"><h3>Gallery unavailable</h3><p>{error}</p></div>
//         ) : !selectedEvent && eventGroups.length > 0 ? (
//           <div className="event-grid" aria-label="Gallery events">
//             {eventGroups.map((group) => (
//               <button
//                 type="button"
//                 key={group.event}
//                 className="event-card"
//                 onClick={() => {
//                   setSelectedEvent(group.event);
//                   setActiveImg(null);
//                   setActiveIndex(0);
//                 }}
//                 aria-label={`Open ${group.event} gallery with ${group.images.length} photos`}
//               >
//                 <span className="event-card-image">
//                   <Image
//                     src={group.images[0].img}
//                     alt=""
//                     fill
//                     sizes="(max-width: 600px) 94vw, (max-width: 880px) 45vw, 360px"
//                     loading="lazy"
//                     unoptimized={isR2DevUrl(group.images[0].img)}
//                   />
//                 </span>
//                 <span className="event-card-content">
//                   <strong>{group.event}</strong>
//                   <span>{group.images.length} photo{group.images.length === 1 ? "" : "s"}</span>
//                   <span className="event-card-arrow" aria-hidden="true">View gallery →</span>
//                 </span>
//               </button>
//             ))}
//           </div>
//         ) : selectedEvent && visiblePhotos.length > 0 ? (
//           <>
//             <div className="gallery-subheading">
//               <button type="button" className="back-to-events" onClick={() => setSelectedEvent(null)}>
//                 ← All events
//               </button>
//               <h2>{selectedEvent}</h2>
//               <p>{visiblePhotos.length} photo{visiblePhotos.length === 1 ? "" : "s"}</p>
//             </div>
//             <div className="photo-grid">
//             {visiblePhotos.map((photo, idx) => (
//               <button
//                 type="button"
//                 key={`${photo.img}-${idx}`}
//                 className="photo-card"
//                 onClick={() => openImage(photo.img, idx)}
//                 aria-label={`Enlarge ${photo.event || "gallery"} photo ${idx + 1}`}
//               >
//                 <Image
//                   src={photo.img}
//                   alt={`${photo.event || "Ruminate"} — photo ${idx + 1}`}
//                   fill
//                   sizes="(max-width: 600px) 94vw, (max-width: 1000px) 45vw, 340px"
//                   quality={72}
//                   loading="lazy"
//                   unoptimized={isR2DevUrl(photo.img)}
//                 />
//                 <span className="photo-label">Enlarge image</span>
//               </button>
//             ))}
//             </div>
//           </>
//         ) : !selectedEvent && photos.length > 0 ? (
//           <div className="photo-grid">
//             {photos.map((photo, idx) => (
//               <button
//                 type="button"
//                 key={`${photo.img}-${idx}`}
//                 className="photo-card"
//                 onClick={() => openImage(photo.img, idx)}
//                 aria-label={`Open ${photo.event || "gallery"} photo ${idx + 1}`}
//               >
//                 <Image
//                   src={photo.img}
//                   alt={`${photo.event || "Ruminate"} — photo ${idx + 1}`}
//                   fill
//                   sizes="(max-width: 600px) 94vw, (max-width: 1000px) 45vw, 340px"
//                   quality={72}
//                   loading="lazy"
//                   unoptimized={isR2DevUrl(photo.img)}
//                 />
//                 <span className="photo-label">{photo.event || "Ruminate"}</span>
//               </button>
//             ))}
//           </div>
//         ) : (
//           <div className="no-images">
//             <h3>No images found</h3>
//             <p>No images found for the selected filters. Try adjusting your search criteria.</p>
//           </div>
//         )}

//         {/* Enlarged view modal */}
//         {activeImg && (
//           <div className="gallery-overlay" onClick={closeImage} role="dialog" aria-modal="true" aria-label="Gallery image viewer">
//             <button
//               ref={closeButtonRef}
//               className="close-button"
//               onClick={closeImage}
//               aria-label="Close image"
//             >
//               <FaTimes />
//             </button>

//             <Image
//               className="enlarged"
//               src={activeImg}
//               alt={`Gallery ${activeIndex + 1}`}
//               fill
//               sizes="90vw"
//               quality={82}
//               unoptimized={isR2DevUrl(activeImg)}
//               onClick={(e) => e.stopPropagation()}
//             />

//             <button className="gallery-arrow gallery-arrow--left" type="button" onClick={(event) => { event.stopPropagation(); navigateImage("prev"); }} aria-label="Previous image"><FaChevronLeft /></button>
//             <button className="gallery-arrow gallery-arrow--right" type="button" onClick={(event) => { event.stopPropagation(); navigateImage("next"); }} aria-label="Next image"><FaChevronRight /></button>

//             <div className="image-counter">
//               {activeIndex + 1} of {lightboxPhotos.length}
//             </div>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }



















"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Image from "next/image";
import "./gallery.css";

interface GalleryImage {
  img: string;
  event?: string;
  year?: string;
}

interface GalleryCatalog {
  images: GalleryImage[];
  years: string[];
  events: string[];
}

function isR2DevUrl(source: string) {
  return /^https?:\/\/[^/]+\.r2\.dev(?:\/|$)/i.test(source);
}

export default function Gallery() {
  const [photos, setPhotos] = useState<GalleryImage[]>([]);
  const [year, setYear] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const [years, setYears] = useState<string[]>(["All"]);
  const [events, setEvents] = useState<string[]>(["All"]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const visiblePhotos = useMemo(
    () => selectedEvent
      ? photos.filter((photo) => (photo.event || "Gallery") === selectedEvent)
      : [],
    [photos, selectedEvent],
  );
  const eventGroups = useMemo(
    () => events
      .filter((event) => event !== "All")
      .map((event) => ({
        event,
        images: photos.filter((photo) => (photo.event || "Gallery") === event),
      }))
      .filter((group) => group.images.length > 0),
    [events, photos],
  );
  const lightboxPhotos = useMemo(
    () => selectedEvent ? visiblePhotos : photos,
    [photos, selectedEvent, visiblePhotos],
  );

  useEffect(() => {
    setLoading(true);
    setError("");
    const controller = new AbortController();
    const baseUrl = `/api/gallary`;
    const query: string[] = [];

    query.push("catalog=1");
    if (year !== "All") query.push(`year=${encodeURIComponent(year)}`);
    const url = query.length ? `${baseUrl}?${query.join("&")}` : baseUrl;

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch gallery data');
        }
        return res.json();
      })
      .then((data: GalleryCatalog) => {
        setPhotos(Array.isArray(data?.images) ? data.images : []);
        setSelectedEvent(null);
        if (Array.isArray(data?.years)) setYears(data.years);
        if (Array.isArray(data?.events) && data.events.length > 0) setEvents(data.events);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        console.error("Fetch error:", err);
        setPhotos([]);
        setError("The gallery could not be loaded. Check your connection and try again.");
        setLoading(false);
      });
    return () => controller.abort();
  }, [year]);

  const openImage = (img: string, index: number) => {
    setActiveImg(img);
    setActiveIndex(index);
  };

  const closeImage = useCallback(() => {
    setActiveImg(null);
  }, []);

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (lightboxPhotos.length === 0) return;

    let newIndex = activeIndex;
    if (direction === 'prev') {
      newIndex = activeIndex > 0 ? activeIndex - 1 : lightboxPhotos.length - 1;
    } else {
      newIndex = activeIndex < lightboxPhotos.length - 1 ? activeIndex + 1 : 0;
    }

    setActiveIndex(newIndex);
    setActiveImg(lightboxPhotos[newIndex].img);
  }, [activeIndex, lightboxPhotos]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!activeImg) return;

      if (e.key === 'Escape') {
        closeImage();
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeImg, closeImage, navigateImage]);

  useEffect(() => {
    if (!activeImg) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [activeImg]);

  const lightbox = activeImg && mounted ? (
    <div className="gallery-overlay" onClick={closeImage} role="dialog" aria-modal="true" aria-label="Gallery image viewer">
      <button
        ref={closeButtonRef}
        className="close-button"
        onClick={closeImage}
        aria-label="Close image"
      >
        <FaTimes />
      </button>

      <Image
        className="enlarged"
        src={activeImg}
        alt={`Gallery ${activeIndex + 1}`}
        fill
        sizes="90vw"
        quality={82}
        unoptimized={isR2DevUrl(activeImg)}
        onClick={(e) => e.stopPropagation()}
      />

      <button className="gallery-arrow gallery-arrow--left" type="button" onClick={(event) => { event.stopPropagation(); navigateImage("prev"); }} aria-label="Previous image"><FaChevronLeft /></button>
      <button className="gallery-arrow gallery-arrow--right" type="button" onClick={(event) => { event.stopPropagation(); navigateImage("next"); }} aria-label="Next image"><FaChevronRight /></button>

      <div className="image-counter">
        {activeIndex + 1} of {lightboxPhotos.length}
      </div>
    </div>
  ) : null;

  return (
    <div className="gallery-container">
      <section className="gallery-main" aria-labelledby="gallery-title">
        <div className="gallery-heading"><span>Inside Ruminate</span><h1 id="gallery-title">Photo Stream</h1><p>The moments we capture become memories we never forget.</p></div>

        <div className="filters">
          <div className="dropdown-group">
            <label>Sort By Year</label>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              {years.map((yr) => (
                <option key={yr} value={yr}>
                  {yr}
                </option>
              ))}
            </select>
          </div>
          <p className="filter-hint">{eventGroups.length} event{eventGroups.length === 1 ? "" : "s"} available</p>
        </div>

        {/* Image grid */}
        {loading ? (
          <div className="gallery-skeleton" aria-label="Loading gallery"><span /><span /><span /><span /></div>
        ) : error ? (
          <div className="no-images"><h3>Gallery unavailable</h3><p>{error}</p></div>
        ) : !selectedEvent && eventGroups.length > 0 ? (
          <div className="event-grid" aria-label="Gallery events">
            {eventGroups.map((group) => (
              <button
                type="button"
                key={group.event}
                className="event-card"
                onClick={() => {
                  setSelectedEvent(group.event);
                  setActiveImg(null);
                  setActiveIndex(0);
                }}
                aria-label={`Open ${group.event} gallery with ${group.images.length} photos`}
              >
                <span className="event-card-image">
                  <Image
                    src={group.images[0].img}
                    alt=""
                    fill
                    sizes="(max-width: 600px) 94vw, (max-width: 880px) 45vw, 360px"
                    loading="lazy"
                    unoptimized={isR2DevUrl(group.images[0].img)}
                  />
                </span>
                <span className="event-card-content">
                  <strong>{group.event}</strong>
                  <span>{group.images.length} photo{group.images.length === 1 ? "" : "s"}</span>
                  <span className="event-card-arrow" aria-hidden="true">View gallery →</span>
                </span>
              </button>
            ))}
          </div>
        ) : selectedEvent && visiblePhotos.length > 0 ? (
          <>
            <div className="gallery-subheading">
              <button type="button" className="back-to-events" onClick={() => setSelectedEvent(null)}>
                ← All events
              </button>
              <h2>{selectedEvent}</h2>
              <p>{visiblePhotos.length} photo{visiblePhotos.length === 1 ? "" : "s"}</p>
            </div>
            <div className="photo-grid">
            {visiblePhotos.map((photo, idx) => (
              <button
                type="button"
                key={`${photo.img}-${idx}`}
                className="photo-card"
                onClick={() => openImage(photo.img, idx)}
                aria-label={`Enlarge ${photo.event || "gallery"} photo ${idx + 1}`}
              >
                <Image
                  src={photo.img}
                  alt={`${photo.event || "Ruminate"} — photo ${idx + 1}`}
                  fill
                  sizes="(max-width: 600px) 94vw, (max-width: 1000px) 45vw, 340px"
                  quality={72}
                  loading="lazy"
                  unoptimized={isR2DevUrl(photo.img)}
                />
                <span className="photo-label">Enlarge image</span>
              </button>
            ))}
            </div>
          </>
        ) : !selectedEvent && photos.length > 0 ? (
          <div className="photo-grid">
            {photos.map((photo, idx) => (
              <button
                type="button"
                key={`${photo.img}-${idx}`}
                className="photo-card"
                onClick={() => openImage(photo.img, idx)}
                aria-label={`Open ${photo.event || "gallery"} photo ${idx + 1}`}
              >
                <Image
                  src={photo.img}
                  alt={`${photo.event || "Ruminate"} — photo ${idx + 1}`}
                  fill
                  sizes="(max-width: 600px) 94vw, (max-width: 1000px) 45vw, 340px"
                  quality={72}
                  loading="lazy"
                  unoptimized={isR2DevUrl(photo.img)}
                />
                <span className="photo-label">{photo.event || "Ruminate"}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="no-images">
            <h3>No images found</h3>
            <p>No images found for the selected filters. Try adjusting your search criteria.</p>
          </div>
        )}

        {/* Enlarged view modal — rendered through a portal so it's never affected
            by transform/filter/will-change on any ancestor */}
        {mounted && typeof document !== "undefined"
          ? createPortal(lightbox, document.body)
          : null}
      </section>
    </div>
  );
}