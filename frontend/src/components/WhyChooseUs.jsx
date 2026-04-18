import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const tools = [
    { title: "Hand Tools", desc: "Precision built durable tools" },
    { title: "Garage Tools", desc: "Heavy duty workshop tools" },
    { title: "Power Tools", desc: "High performance machines" },
    { title: "Industrial Tools", desc: "Professional grade equipment" },
  ];

  const features = [
    "Best Rated Services",
    "High Effective Time",
    "Fastly Services",
    "Secure & Safe",
    "Best Work Result",
    "All Types of Tools",
  ];

  return (
    <section className="w-full bg-[#0f0f0f] text-white py-16 px-4">

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-yellow-400 text-sm uppercase tracking-widest">
            Why Choice Us
          </h2>

          <h1 className="text-2xl md:text-4xl font-bold mt-2">
            The Best Manufacturer & Supplier of All Kinds of Tool
          </h1>

          <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
            At HJ Enterprise, we take pride in being a leading manufacturer and supplier
            of hand tools, garage tools, power tools, and industrial equipment.
          </p>
        </motion.div>

        {/* TOP TOOLS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-14">

          {tools.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] border border-yellow-500/30 p-5 rounded-lg hover:scale-105 transition"
            >
              <h3 className="text-lg font-semibold text-yellow-400">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}

        </div>

        {/* BOTTOM FEATURES */}
       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
             className="flex items-start gap-2 bg-[#151515] p-3 sm:p-5 rounded-lg border border-gray-800 hover:border-yellow-500/50 transition"
            >
              <span className="text-yellow-400 text-xl">✔</span>
              <p className="text-gray-300 text-sm md:text-base">{item}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}