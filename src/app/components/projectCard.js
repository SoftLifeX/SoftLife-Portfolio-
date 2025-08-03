"use client";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ item, index, setModal }) {
  return (
    <div
      className="card-wrapper"
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
    >
      <Link href={item.href} target="_blank" className="card-link">
        <Image src={item.img} alt={`${item.title} Image`} className="card-img" />
      </Link>
    </div>
  );
}
