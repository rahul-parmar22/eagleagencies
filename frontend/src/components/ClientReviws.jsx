import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientReviews() {
  const reviews = [
    {
      name: "Shailesh Patel",
      text: "Very good service provider for Stanley & Dewalt tools. Wide variety available and knowledgeable staff.",
    },
    {
      name: "Harshad Patel",
      text: "Best company and good service. Must visit again for all types of tools.",
    },
    {
      name: "Saroj Malla",
      text: "Excellent communication and one stop solution for industrial needs. Highly cooperative team.",
    },
    {
      name: "Nilesh Shah",
      text: "Great vision and mission. Best industrial tool supplier with excellent service.",
    },
    {
      name: "Ashok Sharma",
      text: "Very good engineering tools shop with technical guidance. Must visit for engineers.",
    },
    {
      name: "Umesh Swami",
      text: "Best shop for hand tools and power tools. Excellent knowledge and support.",
    },
  ];

  const [index, setIndex] = useState(0);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#0b0b0b] text-white py-16 px-4">

      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-yellow-400 uppercase tracking-widest text-sm">
          Client Reviews
        </h2>
        <p className="text-gray-400 mt-3 text-sm md:text-base">
          With our main focus on client requirements, we provide quality industrial tools and services.
        </p>
      </div>

      {/* REVIEW BOX */}
      <div className="relative max-w-3xl mx-auto h-[220px]">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1a1a1a] border border-yellow-500/30 p-6 rounded-xl shadow-lg absolute w-full"
          >
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              "{reviews[index].text}"
            </p>

            <h4 className="text-yellow-400 mt-4 font-semibold">
              - {reviews[index].name}
            </h4>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === index ? "bg-yellow-400 scale-125" : "bg-gray-600"
            }`}
          />
        ))}
      </div>

    </section>
  );
}