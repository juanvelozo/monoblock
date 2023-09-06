"use client"

import { AnimatePresence,motion } from "framer-motion";

export default function CategoryTag({tags}:{tags?: String[]}){
    return <AnimatePresence>
    <div className="p-4 space-y-2">
      <motion.div className="gap-2 flex w-full flex-wrap items-center overflow-hidden">
        {tags?.map((el, index) => (
          <motion.div
            // transition={{ bounce: false }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            key={index}
            className="bg-red-600 text-white rounded-lg flex items-center justify-between"
          >
            <span className="font-semibold px-2 text-sm select-none">
              {el}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </AnimatePresence>
}