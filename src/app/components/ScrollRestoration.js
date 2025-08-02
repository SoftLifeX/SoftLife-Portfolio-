'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { smoother } from './smoother';

export default function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    const saveScroll = () => {
      if (smoother) {
        sessionStorage.setItem(`scroll-pos:${pathname}`, smoother.scrollTop());
      }
    };

    window.addEventListener('beforeunload', saveScroll);
    window.addEventListener('pagehide', saveScroll);

    return () => {
      saveScroll();
      window.removeEventListener('beforeunload', saveScroll);
      window.removeEventListener('pagehide', saveScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const saved = sessionStorage.getItem(`scroll-pos:${pathname}`);
    if (saved && smoother) {
      setTimeout(() => {
        smoother.scrollTo(parseFloat(saved), false);
      }, 0);
    }
  }, [pathname]);

  return null;
}
