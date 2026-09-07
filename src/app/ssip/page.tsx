// "use client";

// import styles from "./ssip.module.css";

// const categoryA = [
//   {
//     id: 1,
//     student: "Shardhesh (4th Year, CSE)",
//     title: "Gradify",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 2,
//     student: "Aditya Kumar (4th Year, CSE)",
//     title:
//       "Dare xAI an Automation Startup focused on building various AI products",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 3,
//     student: "Kandarp Vaidya (Alumni, ECE)",
//     title: "Solar Integrated Smart Umbrellas",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 4,
//     student: "Rishabh Jain (Alumni, CSE)",
//     title: "Stockingo",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 5,
//     student: "Arya Trivedi (4th Year, CSE)",
//     title: "Wi-Fi Positioning System (WPS) called NaviFi",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 6,
//     student: "Harsh Zadafiya (3rd Year, CSE)",
//     title: "BlackBookEDU.ai",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 7,
//     student: "Abhinav Prakash (2nd Year, ECE)",
//     title:
//       "Bridging Aspirants and Achievers – A Transparent Peer-to-Peer Mentorship Platform",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 8,
//     student: "K. Shankar (4th Year, CSE)",
//     title: "Smart Waste Ecosystem",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 9,
//     student: "Devansh Kushwah (4th Year, CSE)",
//     title:
//       "ShadowVerse: AI-Driven World-Building and Intelligent Workflow Automation Platform",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 10,
//     student: "Mitul Hadiya (3rd Year, ECE)",
//     title: "Designing a integrated flight controller.",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 11,
//     student: "Gurtej Singh (2nd Year, ECE)",
//     title: "Colony-Intelligent Swarm Drone System",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 12,
//     student: "Dhananjay Kumar (3rd Year, ECE)",
//     title: "Voice assisted drone systems",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 13,
//     student: "Tanmay Jain (3rd Year, ECE)",
//     title: "Campusflow",
//     remark: "Provisionally selected after verification of documents.",
//   },
// ];

// const categoryB = [
//   {
//     id: 14,
//     student: "Rakesh Kumar Nayak (1st Year M.Tech, CSE)",
//     title: "Agriteck",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
//   {
//     id: 15,
//     student: "Vivek Baya (3rd Year, CSE)",
//     title: "Proposed Solution (SkillSwap)",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
//   {
//     id: 16,
//     student: "Borra Moneeshwar (2nd Year, ECE)",
//     title: "Road Protection Device",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
//   {
//     id: 17,
//     student: "Nityam & Nikhil (2nd Year, CSE)",
//     title: "MineSafe: Rock Fall Early Warning",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
//   {
//     id: 18,
//     student: "Election Pabin (1st Year, ECE)",
//     title: "Global Skill passport",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
//   {
//     id: 19,
//     student: "Yogesh Nade (4th Year, CSE)",
//     title: "Agronomic Crops Price Prediction using ML",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
//   {
//     id: 20,
//     student: "Sarthak Pardesi (4th Year, ECE)",
//     title: "CartMitra",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
//   {
//     id: 21,
//     student: "Musini Hanish (1st Year, CSE)",
//     title: "IoT-Based Smart Garbage Bin",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
//   {
//     id: 22,
//     student: "Aditya Rathi (1st Year, ECE)",
//     title: "An app/portal that increases environmental awareness",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
//   {
//     id: 23,
//     student: "Diksha Golechha (1st Year, ECE)",
//     title: "Integrated Drone Security System",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
//   {
//     id: 24,
//     student: "Divya Patel (2nd Year, ECE)",
//     title: "Smart Waste Segregation Dustbin",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
// ];

// export default function SsipPage() {
//   return (
//     <div className={styles.page}>
//       <div className={styles.container}>
//         <section className={styles.hero}>
//           <p className={styles.eyebrow}>SSIP</p>
//           <h1 className={styles.heroTitle}>Student Startup and Innovation Policy</h1>
//           <p className={styles.heroSubtitle}>
//             SSIP empowers student innovators by supporting early-stage ideas and
//             prototypes that can translate into impactful startups, products, and
//             research-driven ventures.
//           </p>
//           <div className={styles.metaGrid}>
//             <div className={styles.metaCard}>
//               <span className={styles.metaLabel}>Institute</span>
//               <span className={styles.metaValue}>
//                 Indian Institute of Information Technology, Surat
//               </span>
//             </div>
//             <div className={styles.metaCard}>
//               <span className={styles.metaLabel}>Campus</span>
//               <span className={styles.metaValue}>
//                 Kholvad Campus, Kamrej, Surat-394190 Gujarat, India
//               </span>
//             </div>
//             <div className={styles.metaCard}>
//               <span className={styles.metaLabel}>Document</span>
//               <span className={styles.metaValue}>
//                 List of proposals selected under SSIP
//               </span>
//             </div>
//           </div>
//         </section>

//         <section className={styles.section}>
//           <h2 className={styles.sectionTitle}>Overview</h2>
//           <p className={styles.sectionText}>
//             The Student Startup and Innovation Policy (SSIP) encourages innovation,
//             entrepreneurship, and research by providing structured support to student
//             teams. This page highlights proposals selected under SSIP at IIIT Surat.
//           </p>
//           <div className={styles.notice}>
//             <p>
//               Note: The serial numbers are for reference only and do not represent the
//               order of merit.
//             </p>
//           </div>
//         </section>

//         <section className={styles.section}>
//           <h2 className={styles.sectionTitle}>Category A</h2>
//           <div className={styles.proposalGrid}>
//             {categoryA.map((item) => (
//               <div key={item.id} className={styles.proposalCard}>
//                 <div className={styles.proposalHeader}>
//                   <span className={styles.proposalId}>#{item.id}</span>
//                   <span className={styles.proposalStudent}>{item.student}</span>
//                 </div>
//                 <p className={styles.proposalTitle}>{item.title}</p>
//                 <p className={styles.proposalRemark}>{item.remark}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className={styles.processSection} aria-labelledby="ssip-process-title">
//           <p className={styles.eyebrow}>From proposal to progress</p>
//           <h2 id="ssip-process-title" className={styles.sectionTitle}>A structured path for student innovation</h2>
//           <div className={styles.processRow}>
//             <article><span>01</span><strong>Proposal</strong><p>Student innovators present a problem, an idea and its potential application.</p></article>
//             <article><span>02</span><strong>Verification</strong><p>Provisionally selected proposals move through the required document checks.</p></article>
//             <article><span>03</span><strong>Prototype</strong><p>Ideas that need more evidence can advance through a feasible model, proof of concept or prototype.</p></article>
//           </div>
//         </section>

//         <section className={styles.section}>
//           <h2 className={styles.sectionTitle}>Category B</h2>
//           <div className={styles.proposalGrid}>
//             {categoryB.map((item) => (
//               <div key={item.id} className={styles.proposalCard}>
//                 <div className={styles.proposalHeader}>
//                   <span className={styles.proposalId}>#{item.id}</span>
//                   <span className={styles.proposalStudent}>{item.student}</span>
//                 </div>
//                 <p className={styles.proposalTitle}>{item.title}</p>
//                 <p className={styles.proposalRemark}>{item.remark}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }









// "use client";

// import { FaArrowRight } from "react-icons/fa";
// import styles from "./ssip.module.css";

// const categoryA = [
//   {
//     id: 1,
//     student: "Shardhesh (4th Year, CSE)",
//     title: "Gradify",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 2,
//     student: "Aditya Kumar (4th Year, CSE)",
//     title:
//       "Dare xAI an Automation Startup focused on building various AI products",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 3,
//     student: "Kandarp Vaidya (Alumni, ECE)",
//     title: "Solar Integrated Smart Umbrellas",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 4,
//     student: "Rishabh Jain (Alumni, CSE)",
//     title: "Stockingo",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 5,
//     student: "Arya Trivedi (4th Year, CSE)",
//     title: "Wi-Fi Positioning System (WPS) called NaviFi",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 6,
//     student: "Harsh Zadafiya (3rd Year, CSE)",
//     title: "BlackBookEDU.ai",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 7,
//     student: "Abhinav Prakash (2nd Year, ECE)",
//     title:
//       "Bridging Aspirants and Achievers – A Transparent Peer-to-Peer Mentorship Platform",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 8,
//     student: "K. Shankar (4th Year, CSE)",
//     title: "Smart Waste Ecosystem",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 9,
//     student: "Devansh Kushwah (4th Year, CSE)",
//     title:
//       "ShadowVerse: AI-Driven World-Building and Intelligent Workflow Automation Platform",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 10,
//     student: "Mitul Hadiya (3rd Year, ECE)",
//     title: "Designing a integrated flight controller.",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 11,
//     student: "Gurtej Singh (2nd Year, ECE)",
//     title: "Colony-Intelligent Swarm Drone System",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 12,
//     student: "Dhananjay Kumar (3rd Year, ECE)",
//     title: "Voice assisted drone systems",
//     remark: "Provisionally selected after verification of documents.",
//   },
//   {
//     id: 13,
//     student: "Tanmay Jain (3rd Year, ECE)",
//     title: "Campusflow",
//     remark: "Provisionally selected after verification of documents.",
//   },
// ];

// const categoryB = [
//   {
//     id: 14,
//     student: "Rakesh Kumar Nayak (1st Year M.Tech, CSE)",
//     title: "Agriteck",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
//   {
//     id: 15,
//     student: "Vivek Baya (3rd Year, CSE)",
//     title: "Proposed Solution (SkillSwap)",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
//   {
//     id: 16,
//     student: "Borra Moneeshwar (2nd Year, ECE)",
//     title: "Road Protection Device",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
//   {
//     id: 17,
//     student: "Nityam & Nikhil (2nd Year, CSE)",
//     title: "MineSafe: Rock Fall Early Warning",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
//   {
//     id: 18,
//     student: "Election Pabin (1st Year, ECE)",
//     title: "Global Skill passport",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
//   {
//     id: 19,
//     student: "Yogesh Nade (4th Year, CSE)",
//     title: "Agronomic Crops Price Prediction using ML",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
//   {
//     id: 20,
//     student: "Sarthak Pardesi (4th Year, ECE)",
//     title: "CartMitra",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
//   {
//     id: 21,
//     student: "Musini Hanish (1st Year, CSE)",
//     title: "IoT-Based Smart Garbage Bin",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
//   {
//     id: 22,
//     student: "Aditya Rathi (1st Year, ECE)",
//     title: "An app/portal that increases environmental awareness",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
//   {
//     id: 23,
//     student: "Diksha Golechha (1st Year, ECE)",
//     title: "Integrated Drone Security System",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
//   {
//     id: 24,
//     student: "Divya Patel (2nd Year, ECE)",
//     title: "Smart Waste Segregation Dustbin",
//     remark:
//       "Can be considered subject to the presentation of a feasible model/POC/prototype.",
//   },
// ];

// export default function SsipPage() {
//   return (
//     <div className={styles.page}>
//       <div className={styles.container}>
//         <section className={styles.hero}>
//           <p className={styles.eyebrow}>SSIP</p>
//           <h1 className={styles.heroTitle}>Student Startup and Innovation Policy</h1>
//           <p className={styles.heroSubtitle}>
//             SSIP empowers student innovators by supporting early-stage ideas and
//             prototypes that can translate into impactful startups, products, and
//             research-driven ventures.
//           </p>

//           <div className={styles.heroActions}>
//             <a
//               href="https://portal.ecelliiitsurat.in/ssip"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={styles.heroCta}
//             >
//               Submit a proposal <FaArrowRight aria-hidden="true" />
//             </a>
//             <span className={styles.heroActionsNote}>Opens the official SSIP portal</span>
//           </div>

//           <div className={styles.metaGrid}>
//             <div className={styles.metaCard}>
//               <span className={styles.metaLabel}>Institute</span>
//               <span className={styles.metaValue}>
//                 Indian Institute of Information Technology, Surat
//               </span>
//             </div>
//             <div className={styles.metaCard}>
//               <span className={styles.metaLabel}>Campus</span>
//               <span className={styles.metaValue}>
//                 Kholvad Campus, Kamrej, Surat-394190 Gujarat, India
//               </span>
//             </div>
//             <div className={styles.metaCard}>
//               <span className={styles.metaLabel}>Document</span>
//               <span className={styles.metaValue}>
//                 List of proposals selected under SSIP
//               </span>
//             </div>
//           </div>
//         </section>

//         <section className={styles.section}>
//           <h2 className={styles.sectionTitle}>Overview</h2>
//           <p className={styles.sectionText}>
//             The Student Startup and Innovation Policy (SSIP) encourages innovation,
//             entrepreneurship, and research by providing structured support to student
//             teams. This page highlights proposals selected under SSIP at IIIT Surat.
//           </p>
//           <div className={styles.notice}>
//             <p>
//               Note: The serial numbers are for reference only and do not represent the
//               order of merit.
//             </p>
//           </div>
//         </section>

//         <section className={styles.section} data-category="a">
//           <h2 className={styles.sectionTitle}>Category A</h2>
//           <div className={styles.proposalGrid}>
//             {categoryA.map((item) => (
//               <div key={item.id} className={styles.proposalCard}>
//                 <div className={styles.proposalHeader}>
//                   <span className={styles.proposalId}>#{item.id}</span>
//                   <span className={styles.proposalStudent}>{item.student}</span>
//                 </div>
//                 <p className={styles.proposalTitle}>{item.title}</p>
//                 <p className={styles.proposalRemark}>{item.remark}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className={styles.processSection} aria-labelledby="ssip-process-title">
//           <p className={styles.eyebrow}>From proposal to progress</p>
//           <h2 id="ssip-process-title" className={styles.sectionTitle}>A structured path for student innovation</h2>
//           <div className={styles.processRow}>
//             <article><span>01</span><strong>Proposal</strong><p>Student innovators present a problem, an idea and its potential application.</p></article>
//             <article><span>02</span><strong>Verification</strong><p>Provisionally selected proposals move through the required document checks.</p></article>
//             <article><span>03</span><strong>Prototype</strong><p>Ideas that need more evidence can advance through a feasible model, proof of concept or prototype.</p></article>
//           </div>
//         </section>

//         <section className={styles.section} data-category="b">
//           <h2 className={styles.sectionTitle}>Category B</h2>
//           <div className={styles.proposalGrid}>
//             {categoryB.map((item) => (
//               <div key={item.id} className={styles.proposalCard}>
//                 <div className={styles.proposalHeader}>
//                   <span className={styles.proposalId}>#{item.id}</span>
//                   <span className={styles.proposalStudent}>{item.student}</span>
//                 </div>
//                 <p className={styles.proposalTitle}>{item.title}</p>
//                 <p className={styles.proposalRemark}>{item.remark}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import styles from "./ssip.module.css";

const categoryA = [
  {
    id: 1,
    student: "Shardhesh (4th Year, CSE)",
    title: "Gradify",
    remark: "Provisionally selected after verification of documents.",
  },
  {
    id: 2,
    student: "Aditya Kumar (4th Year, CSE)",
    title:
      "Dare xAI an Automation Startup focused on building various AI products",
    remark: "Provisionally selected after verification of documents.",
  },
  {
    id: 3,
    student: "Kandarp Vaidya (Alumni, ECE)",
    title: "Solar Integrated Smart Umbrellas",
    remark: "Provisionally selected after verification of documents.",
  },
  {
    id: 4,
    student: "Rishabh Jain (Alumni, CSE)",
    title: "Stockingo",
    remark: "Provisionally selected after verification of documents.",
  },
  {
    id: 5,
    student: "Arya Trivedi (4th Year, CSE)",
    title: "Wi-Fi Positioning System (WPS) called NaviFi",
    remark: "Provisionally selected after verification of documents.",
  },
  {
    id: 6,
    student: "Harsh Zadafiya (3rd Year, CSE)",
    title: "BlackBookEDU.ai",
    remark: "Provisionally selected after verification of documents.",
  },
  {
    id: 7,
    student: "Abhinav Prakash (2nd Year, ECE)",
    title:
      "Bridging Aspirants and Achievers – A Transparent Peer-to-Peer Mentorship Platform",
    remark: "Provisionally selected after verification of documents.",
  },
  {
    id: 8,
    student: "K. Shankar (4th Year, CSE)",
    title: "Smart Waste Ecosystem",
    remark: "Provisionally selected after verification of documents.",
  },
  {
    id: 9,
    student: "Devansh Kushwah (4th Year, CSE)",
    title:
      "ShadowVerse: AI-Driven World-Building and Intelligent Workflow Automation Platform",
    remark: "Provisionally selected after verification of documents.",
  },
  {
    id: 10,
    student: "Mitul Hadiya (3rd Year, ECE)",
    title: "Designing a integrated flight controller.",
    remark: "Provisionally selected after verification of documents.",
  },
  {
    id: 11,
    student: "Gurtej Singh (2nd Year, ECE)",
    title: "Colony-Intelligent Swarm Drone System",
    remark: "Provisionally selected after verification of documents.",
  },
  {
    id: 12,
    student: "Dhananjay Kumar (3rd Year, ECE)",
    title: "Voice assisted drone systems",
    remark: "Provisionally selected after verification of documents.",
  },
  {
    id: 13,
    student: "Tanmay Jain (3rd Year, ECE)",
    title: "Campusflow",
    remark: "Provisionally selected after verification of documents.",
  },
];

const categoryB = [
  {
    id: 14,
    student: "Rakesh Kumar Nayak (1st Year M.Tech, CSE)",
    title: "Agriteck",
    remark:
      "Can be considered subject to the presentation of a feasible model/POC/prototype.",
  },
  {
    id: 15,
    student: "Vivek Baya (3rd Year, CSE)",
    title: "Proposed Solution (SkillSwap)",
    remark:
      "Can be considered subject to the presentation of a feasible model/POC/prototype.",
  },
  {
    id: 16,
    student: "Borra Moneeshwar (2nd Year, ECE)",
    title: "Road Protection Device",
    remark:
      "Can be considered subject to the presentation of a feasible model/POC/prototype.",
  },
  {
    id: 17,
    student: "Nityam & Nikhil (2nd Year, CSE)",
    title: "MineSafe: Rock Fall Early Warning",
    remark:
      "Can be considered subject to the presentation of a feasible model/POC/prototype.",
  },
  {
    id: 18,
    student: "Election Pabin (1st Year, ECE)",
    title: "Global Skill passport",
    remark:
      "Can be considered subject to the presentation of a feasible model/POC/prototype.",
  },
  {
    id: 19,
    student: "Yogesh Nade (4th Year, CSE)",
    title: "Agronomic Crops Price Prediction using ML",
    remark:
      "Can be considered subject to the presentation of a feasible model/POC/prototype.",
  },
  {
    id: 20,
    student: "Sarthak Pardesi (4th Year, ECE)",
    title: "CartMitra",
    remark:
      "Can be considered subject to the presentation of a feasible model/POC/prototype.",
  },
  {
    id: 21,
    student: "Musini Hanish (1st Year, CSE)",
    title: "IoT-Based Smart Garbage Bin",
    remark:
      "Can be considered subject to the presentation of a feasible model/POC/prototype.",
  },
  {
    id: 22,
    student: "Aditya Rathi (1st Year, ECE)",
    title: "An app/portal that increases environmental awareness",
    remark:
      "Can be considered subject to the presentation of a feasible model/POC/prototype.",
  },
  {
    id: 23,
    student: "Diksha Golechha (1st Year, ECE)",
    title: "Integrated Drone Security System",
    remark:
      "Can be considered subject to the presentation of a feasible model/POC/prototype.",
  },
  {
    id: 24,
    student: "Divya Patel (2nd Year, ECE)",
    title: "Smart Waste Segregation Dustbin",
    remark:
      "Can be considered subject to the presentation of a feasible model/POC/prototype.",
  },
];

export default function SsipPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>SSIP</p>
            <h1 className={styles.heroTitle}>Student Startup and Innovation Policy</h1>
            <p className={styles.heroSubtitle}>
              SSIP empowers student innovators by supporting early-stage ideas and
              prototypes that can translate into impactful startups, products, and
              research-driven ventures.
            </p>

            <div className={styles.heroActions}>
              <a
                href="https://portal.ecelliiitsurat.in/ssip"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroCta}
              >
                Submit a proposal <FaArrowRight aria-hidden="true" />
              </a>
              <span className={styles.heroActionsNote}>Opens the official SSIP portal</span>
            </div>
          </div>

          <div className={styles.heroStamp} aria-hidden="true">
            <svg className={styles.stampRingSvg} viewBox="0 0 200 200" fill="none">
              <path
                id="ringPath"
                className={styles.ringPass1}
                d="M34,84 C28,54 52,26 90,22 C130,18 168,34 178,68 C188,104 172,146 134,166 C96,186 50,178 30,144 C14,116 18,96 34,84 C36,80 30,90 34,84"
                strokeLinecap="round"
              />
              <use href="#ringPath" className={styles.ringPass2} transform="rotate(3 100 100)" />
              <circle className={styles.inkDot} cx="18" cy="122" r="3" />
              <circle className={styles.inkDot} cx="152" cy="8" r="2" />
              <circle className={styles.inkDot} cx="186" cy="152" r="2.5" />
            </svg>

            <div className={styles.stampPlate}>
              <Image
                src="/ssip-logo.svg"
                alt=""
                fill
                sizes="(max-width: 900px) 260px, 380px"
                className={styles.stampPlateImg}
              />
            </div>

            <span className={styles.stampTag}>E-Cell &middot; IIIT Surat</span>
          </div>

          <div className={styles.metaGrid}>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Institute</span>
              <span className={styles.metaValue}>
                Indian Institute of Information Technology, Surat
              </span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Campus</span>
              <span className={styles.metaValue}>
                Kholvad Campus, Kamrej, Surat-394190 Gujarat, India
              </span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Document</span>
              <span className={styles.metaValue}>
                List of proposals selected under SSIP
              </span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.sectionText}>
            The Student Startup and Innovation Policy (SSIP) encourages innovation,
            entrepreneurship, and research by providing structured support to student
            teams. This page highlights proposals selected under SSIP at IIIT Surat.
          </p>
          <div className={styles.notice}>
            <p>
              Note: The serial numbers are for reference only and do not represent the
              order of merit.
            </p>
          </div>
        </section>

        <section className={styles.section} data-category="a">
          <h2 className={styles.sectionTitle}>Category A</h2>
          <div className={styles.proposalGrid}>
            {categoryA.map((item) => (
              <div key={item.id} className={styles.proposalCard}>
                <div className={styles.proposalHeader}>
                  <span className={styles.proposalId}>#{item.id}</span>
                  <span className={styles.proposalStudent}>{item.student}</span>
                </div>
                <p className={styles.proposalTitle}>{item.title}</p>
                <p className={styles.proposalRemark}>{item.remark}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.processSection} aria-labelledby="ssip-process-title">
          <p className={styles.eyebrow}>From proposal to progress</p>
          <h2 id="ssip-process-title" className={styles.sectionTitle}>A structured path for student innovation</h2>
          <div className={styles.processRow}>
            <article><span>01</span><strong>Proposal</strong><p>Student innovators present a problem, an idea and its potential application.</p></article>
            <article><span>02</span><strong>Verification</strong><p>Provisionally selected proposals move through the required document checks.</p></article>
            <article><span>03</span><strong>Prototype</strong><p>Ideas that need more evidence can advance through a feasible model, proof of concept or prototype.</p></article>
          </div>
        </section>

        <section className={styles.section} data-category="b">
          <h2 className={styles.sectionTitle}>Category B</h2>
          <div className={styles.proposalGrid}>
            {categoryB.map((item) => (
              <div key={item.id} className={styles.proposalCard}>
                <div className={styles.proposalHeader}>
                  <span className={styles.proposalId}>#{item.id}</span>
                  <span className={styles.proposalStudent}>{item.student}</span>
                </div>
                <p className={styles.proposalTitle}>{item.title}</p>
                <p className={styles.proposalRemark}>{item.remark}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}