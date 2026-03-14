"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`divide-y divide-neutral-200 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="py-4">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between text-left font-sans font-semibold text-body-lg text-brand-navy hover:text-brand-orange transition-colors"
            aria-expanded={openIndex === index}
            aria-controls={`accordion-panel-${index}`}
          >
            <span className="pr-4">{item.question}</span>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                id={`accordion-panel-${index}`}
                role="region"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="pt-3 text-body text-neutral-600 leading-relaxed font-sans">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
