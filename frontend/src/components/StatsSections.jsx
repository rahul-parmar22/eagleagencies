import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Counter({ end, play }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!play) {
      setCount(0);
      return;
    }

    let start = 0;

    const interval = setInterval(() => {
      start += end / 50;

      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(interval);
  }, [play, end]);

  return <span>{count}</span>;
}

export default function StatsSection() {
  const ref = useRef();
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setPlay(true);
        } else {
          setPlay(false);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const stats = [
    { end: 500, label: "Products" },
    { end: 1200, label: "Users" },
    { end: 10, label: "Experience" },
    {end: 100, label: "Trust"}
  ];

  const cards = [
    {
      title: "About Us",
      desc: "We provide top-quality tools and industrial hardware to meet your needs.",
    },
    {
      title: "Team",
      desc: "Our technical support team is always ready to assist you.",
    },
    {
      title: "Vendor Base",
      desc: "We collaborate with trusted vendors for quality products.",
    },
  ];

  return (
    <div>


      {/* 🔥 PARALLAX COUNTER SECTION */}
     

      <div
  className="bg-fixed bg-cover bg-center py-10 md:py-32"
  style={{
    backgroundImage:
      "url('https://img.freepik.com/premium-photo/collection-various-tools-laid-out-black-background_14117-694215.jpg?w=360')",
  }}
>
  <div
    ref={ref}
    className="bg-black/60 py-10 grid grid-cols-2 md:grid-cols-3 gap-6 text-white text-center"
  >
    {stats.map((item, i) => (
      <div key={i}>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
          <Counter end={item.end} play={play} /> {i === 3? "%" : "+" }
        </h2>
        <p className="text-sm sm:text-base md:text-lg mt-2">
          {item.label}
        </p>
      </div>
    ))}
  </div>
</div>

      {/* 🔽 NORMAL CARDS SECTION (NO FIXED BG) */}
      <div className="bg-[#0b0b0b] py-10 px-4">
     <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
             className="border border-yellow-500 p-3 sm:p-6 bg-[#151515] rounded-lg text-white"
            >
             <h3 className="text-sm sm:text-lg font-bold mb-2">{card.title}</h3>
             <p className="text-xs sm:text-sm text-gray-300 mb-3">{card.desc}</p>
             <button className="bg-yellow-500 text-black px-3 py-1.5 text-xs sm:text-sm">        Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}