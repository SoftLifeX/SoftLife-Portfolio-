import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ item, index, setModal }) {
  return (
    <div className="project-card-wrapper" onMouseEnter={() => setModal({ active: true, index })} onMouseLeave={() => setModal({ active: false, index })}>
      <Link href={item.href} target="_blank" rel="noopener noreferrer">
        <Image src={item.img} alt={`${item.title}Img`} className="project-img" />
      </Link>
    </div>
  );
}
