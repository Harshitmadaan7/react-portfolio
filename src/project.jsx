// File: client/src/Projects.jsx
// Student: Harshit Madaan
// StudentID: 301493954
// Date: 2025-09-25
// Purpose: Projects showcase

import React from 'react';

const projects = [
  {
    title: "Sales Promotion Tracker",
    image: "/sales-promo.png",
    role: "Frontend + integration",
    description: "Built with Flask + React — tracks promotions and generates reports."
  },
  {
    title: "Tools Pro Website",
    image: "/tools-pro.png",
    role: "Full stack — WordPress setup & custom theme",
    description: "E-commerce style product catalogue, enquiry form and admin pages."
  },
  {
    title: "Table Generator",
    image: "/table-generator.png",
    role: "Full Stack",
    description: "Website to draw table, built with JS-DOM"
  }
];

export default function Projects(){
  return (
    <section>
      <h1>Highlighted Projects</h1>
      <div className="projects-grid">
        {projects.map((p, idx) => (
          <article key={idx} className="project-card">
            <img src={p.image} alt={`${p.title} screenshot`} className="project-img"/>
            <h3>{p.title}</h3>
            <p><strong>Role:</strong> {p.role}</p>
            <p>{p.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
