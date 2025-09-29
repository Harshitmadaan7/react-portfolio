// File: client/src/Services.jsx
// Student: Harshit Madaan
// StudentID: 301493954
// Date: 2025-09-25
// Purpose: Services offered

import React from 'react';

const services = [
  { title: "Web Development", desc: "React + Vite frontends, REST APIs." },
  { title: "Full-Stack Projects", desc: "Backend using Flask / Node + frontend." },
  { title: "General Programming & Tutoring", desc: "C#, Java, Python basics." }
];

export default function Services(){
  return (
    <div className="page">
  <h1>Services</h1>
  <div className="services-grid">
    <div className="service-card">
      <h3>Web Development</h3>
      <p>Modern responsive websites</p>
    </div>
    <div className="service-card">
      <h3>Mobile Apps</h3>
      <p>Cross-platform mobile solutions</p>
    </div>
    <div className="service-card">
      <h3>Cloud Integration</h3>
      <p>Deploy & scale with cloud services</p>
    </div>
  </div>
</div>

  );
}
