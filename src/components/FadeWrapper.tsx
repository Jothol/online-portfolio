'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  keyId: string;
}

export default function FadeWrapper({ children, keyId }: Props) {
  const [blockInput, setBlockInput] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const scrollThreshold = 100;

    if (!isMobile) return;

    if (window.scrollY > scrollThreshold) {
      setBlockInput(true); // Block input

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      // Give time for scroll animation before unblocking
      setTimeout(() => {
        setBlockInput(false);
      }, 400); // Sync with fade duration
    }
  }, [keyId]);

  return (
    <>
      {/* Fade content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={keyId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Input-blocking overlay */}
      {blockInput && (
        <div className="fixed inset-0 bg-transparent z-50 pointer-events-auto" />
      )}
    </>
  );
}
