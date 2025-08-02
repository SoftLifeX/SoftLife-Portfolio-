'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { smoother } from './smoother';

export default function ScrollToTopOnRouteChange() {
  const pathname = usePathname();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      if (smoother) {
        smoother.scrollTo(0, true); // smooth scroll to top
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      prevPathRef.current = pathname;
    }
  }, [pathname]);

  return null;
}
