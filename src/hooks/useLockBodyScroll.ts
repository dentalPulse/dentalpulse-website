import { useEffect } from 'react';

/**
 * Custom hook to lock body & HTML scroll when a modal or drawer is open.
 * Restores original overflow styles upon close or unmount.
 */
export function useLockBodyScroll(isOpen: boolean = true) {
  useEffect(() => {
    if (!isOpen || typeof document === 'undefined') return;

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [isOpen]);
}
