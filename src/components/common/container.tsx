"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Container({ children }: IContainerProps) {
  return (
    <AnimatePresence mode="wait" presenceAffectsLayout>
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -150 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
interface IContainerProps {
  children: JSX.Element;
}
