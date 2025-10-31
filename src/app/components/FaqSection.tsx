"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "01",
    question: "What Are Group Tours with Tripzee?",
    answer:
      "Group tours with Tripzee are crafted travel experiences where like-minded people travel together with expert assistance.",
  },
  {
    id: "02",
    question: "What Makes Tripzee Holidays Different?",
    answer:
      "We offer curated itineraries, expert guidance, and unique social experiences.",
  },
  {
    id: "03",
    question: "How do I Sign Up For A Trip With Tripzee?",
    answer:
      "You can visit our website, explore upcoming trips, and register through the contact page.",
  },
  {
    id: "04",
    question: "Is Traveling With Tripzee Safe For Solo Travelers?",
    answer:
      "Absolutely! We ensure safety, group engagement, and support throughout the trip.",
  },
  {
    id: "05",
    question: "I’m a Solo Traveler - Can I Join Your Trips?",
    answer:
      "Yes! Most of our travelers are solo travelers. You’ll make friends real quick.",
  },
  {
    id: "06",
    question: "Can Trip-Zee Help Organize A Private Trip?",
    answer:
      "Yes, we offer custom itineraries for private groups and corporate groups.",
  },
  {
    id: "07",
    question: "Do Your Package Include Flights?",
    answer:
      "Packages usually exclude flights, but we can assist you with the best flight options.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full flex bg-white max-container justify-center py-8">
      <div className="w-full max-w-5xl bg-[#FFFCED] rounded-3xl py-10 px-6 md:px-10 shadow-sm">
        <h2 className="text-center text-black text-3xl font-extrabold mb-10">
          FAQ&apos;s
        </h2>

        <Accordion type="single" collapsible className="w-full ">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-xl border border-transparent bg-transparent  "
            >
              <AccordionTrigger className="flex items-center">
                <div className="flex items-center gap-6 text-lg font-semibold w-full">
                  <span className=" text-black font-bold">{faq.id}</span>
                  <span className="text-black text-lg ">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <div className="w-full my-2">
                <div className="h-px hidden sm:block w-full bg-linear-to-r from-transparent via-black to-transparent"></div>


              </div>

              <AccordionContent className="ml-[60px] text-neutral-600 text-sm leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
