"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
});

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: "What is Stage?",
    answer: "A canvas editor for creating visual designs. Add images, text, and backgrounds, then export your work.",
  },
  {
    question: "Do I need an account?",
    answer: "Yes. Sign up with Google to access the editor. It's free and takes seconds.",
  },
  {
    question: "Is it free?",
    answer: "Yes. Create unlimited designs and export without restrictions.",
  },
  {
    question: "What formats can I export?",
    answer: "PNG (with transparency) or JPG. Adjust quality settings for JPG exports.",
  },
  {
    question: "Can I change the canvas size?",
    answer: "Yes. Choose presets for social media or set custom dimensions.",
  },
  {
    question: "What image formats are supported?",
    answer: "PNG, JPG, JPEG, and WEBP. Max file size is 10MB.",
  },
];

export function FAQ({ title = "Frequently Asked Questions", faqs = defaultFAQs }: FAQProps) {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 ${instrumentSerif.className}`}>
          {title}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
              <AccordionTrigger className="text-left text-base sm:text-sm font-semibold py-4 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

