import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import FloatingContact from "../components/FloatingContact";

export default function AboutPage() {

      const location = useLocation();


  return (
    <div className="bg-black text-white min-h-screen mt-12 sm:mt-16">

      {/* 🔥 HERO */}
    <div className="text-center py-12 sm:py-20 px-4 border-b border-yellow-500/30">
         <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400"
        >
          About Our Company
        </motion.h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          We deliver high-quality industrial tools, machinery and solutions with
          trust, speed and reliability.
        </p>
      </div>

      {/* 🏢 ABOUT SECTION */}
    <div className="max-w-6xl mx-auto px-4 py-10 sm:py-16 grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4">
            Who We Are
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-6">
            We are a trusted supplier of industrial tools and machinery with
            years of experience in the field. Our mission is to provide durable,
            reliable and affordable solutions for all industries.
          </p>

          <p className="text-gray-400 mt-4 text-sm">
            We focus on long-term relationships, not just sales.
          </p>
        </motion.div>

        {/* BOX */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
         className="border border-yellow-500 p-4 sm:p-6 rounded-lg bg-black/50"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">
            Why Choose Us
          </h3>

         <ul className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
            <li>✔ Premium Quality Products</li>
            <li>✔ Trusted Industrial Suppliers</li>
            <li>✔ Fast Delivery System</li>
            <li>✔ Affordable Pricing</li>
            <li>✔ 24/7 Support</li>
          </ul>
        </motion.div>

      </div>

      {/* 📊 STATS */}
    <div className="bg-black/60 border-y border-yellow-500/30 py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {[
            { num: "25+", label: "Years Experience" },
            { num: "2000+", label: "Products" },
            { num: "500+", label: "Clients" },
            { num: "100%", label: "Trust" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">      {item.num}
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">{item.label}</p>
            </motion.div>
          ))}

        </div>
      </div>

      {/* 👷 TEAM SECTION */}
   <div className="max-w-6xl mx-auto px-4 py-12 sm:py-20 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6 sm:mb-10">     Our Team
        </h2>

       <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {["Engineer", "Sales Expert", "Support Team"].map((role, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
          className="border border-yellow-500 p-4 sm:p-6 rounded-lg bg-black/40"
            >
<div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto bg-yellow-500 rounded-full mb-3 sm:mb-4"></div>
              <h3 className="text-base sm:text-lg font-semibold">{role}</h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">
                Dedicated professional ensuring best service.
              </p>
            </motion.div>
          ))}

        </div>

      </div>

      {/* 🚀 CTA */}
      <div className="text-center py-16 border-t border-yellow-500/30">
        <h2 className="text-xl sm:text-2xl font-bold text-yellow-400">
          Ready to work with us?
        </h2>

       <button className="mt-6 bg-yellow-500 text-black px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold hover:bg-yellow-400 transition rounded-md">
    <Link to="/products">    Explore Products</Link>
        </button>
      </div>
      {location.pathname === "/about" && <FloatingContact />}
    </div>
  );
}