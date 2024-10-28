'use client';

import { useEffect, RefObject } from 'react';

type UseOutsideClickProps = {
  ref: RefObject<HTMLElement>;
  onClose: () => void;
};

export const useOutsideClick = ({ ref, onClose }: UseOutsideClickProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClose]);
};
