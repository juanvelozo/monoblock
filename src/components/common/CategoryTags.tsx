"use client"

import { AnimatePresence,motion } from "framer-motion";

export default function CategoryTag({tags}:{tags?: String[]}){
    return <AnimatePresence>
    <motion.div className="space-y-2 flex-end">
      <div className="gap-2 flex flex-row-reverse w-full flex-wrap items-center overflow-hidden">
        {tags?.map((el, index) => (
          <motion.div
            // transition={{ bounce: false }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            key={index}
            className="bg-gray-100 text-white rounded-lg flex items-center justify-between"
          >
            <span className="font-semibold px-2 text-black text-sm select-none">
              {el}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </AnimatePresence>
}