import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ item, index, setModal }) {
  return (
    <div
      className="project-card"
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
    >
      <Link href={item.href} target="_blank" className="image-wrapper">
        <Image
          src={item.img}
          alt={`${item.title} Image`}
          className="image"
        />
      </Link>
    </div>
  );
}
