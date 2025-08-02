import React from "react";

export default function ProjectCard({ item, index, setModal }) {
  return (
    <div className="project-card-wrapper" onMouseEnter={() => setModal({ active: true, index })} onMouseLeave={() => setModal({ active: false, index })}>
      <a href={item.href} target="_blank" rel="noopener noreferrer">
        <img src={item.img} alt={`${item.title}Img`} className="project-img" />
      </a>
    </div>
  );
}
