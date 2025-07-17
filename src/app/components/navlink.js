'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const NavLink = ({ link }) => {
  const pathname = usePathname();
  const isActive = pathname === link.url;

  const ref = useRef(null);
  const [pillPosition, setPillPosition] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Detect screen width to disable pill on mobile
  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Set pill position when active
  useEffect(() => {
    if (!ref.current || windowWidth < 768) return;
    if (isActive) {
      const el = ref.current;
      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

      setPillPosition({
        left: rect.left + scrollLeft,
        top: rect.top + scrollTop,
        width: rect.width,
        height: rect.height,
      });
    }
  }, [isActive, windowWidth]);

  // Track pill intersection to highlight link on hover
  useEffect(() => {
    if (typeof window === 'undefined' || windowWidth < 768) return;

    const el = ref.current;
    const pill = document.querySelector('.pill');

    if (!el || !pill) return;

    const checkIntersection = () => {
      const elRect = el.getBoundingClientRect();
      const pillRect = pill.getBoundingClientRect();

      const intersects =
        pillRect.left < elRect.right &&
        pillRect.right > elRect.left &&
        pillRect.top < elRect.bottom &&
        pillRect.bottom > elRect.top;

      setIsIntersecting(intersects);
    };

    const observer = new MutationObserver(checkIntersection);
    observer.observe(pill, { attributes: true, attributeFilter: ['style'] });

    const interval = setInterval(checkIntersection, 10); // fluid feel

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [windowWidth]);

  return (
    <>
      <Link
        ref={ref}
        href={link.url}
        className={`navlink ${isIntersecting ? 'intersecting' : ''} ${isActive ? 'active' : ''}`}
      >
        {link.title}
      </Link>

      {/* Desktop pill only */}
      {isActive && windowWidth >= 768 && (
        <motion.div
          className="pill"
          layoutId="pill"
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          initial={false}
          animate={pillPosition}
          style={{
            position: 'absolute',
            borderRadius: '999px',
            backgroundColor: 'var(--highlight-color)',
            zIndex: -1,
            top: pillPosition.top,
            left: pillPosition.left,
            width: pillPosition.width,
            height: pillPosition.height,
          }}
        />
      )}
    </>
  );
};

export default NavLink;
