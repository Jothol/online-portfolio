// components/FadeWrapper.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  keyId: string; // unique ID for each page transition
}

export default function FadeWrapper({ children, keyId }: Props) {
  return (
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
  );
}
