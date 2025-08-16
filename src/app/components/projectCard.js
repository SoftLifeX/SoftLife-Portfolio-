import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ item, index, setModal }) {
  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setModal({
      active: true,
      index,
      cardRect: rect,
    });
  };

  const handleMouseLeave = () => {
    setModal((prev) => ({ ...prev, active: false }));
  };

  return (
    <div
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative" }}
    >
      <Link href={item.href} target="_blank">
        <Image src={item.img} alt={item.title} width={400} height={250} />
      </Link>
    </div>
  );
}
