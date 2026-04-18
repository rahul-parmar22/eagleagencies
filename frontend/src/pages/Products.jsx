import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


export default function ProductsPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  

  const products = [
    {
      name: "Angle Grinder",
      img: "https://images.unsplash.com/photo-1604147706283-8c4c5d1c1c52",
      desc: "High performance cutting tool",
      category: "Power Tool",
    },
    {
      name: "Drill Machine",
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
      desc: "Precision drilling for all surfaces",
      category: "Industrial Tool",
    },
    {
      name: "Hydraulic Jack",
      img: "https://images.unsplash.com/photo-1598257006458-087169a1f08d",
      desc: "Heavy duty lifting solution",
      category: "Heavy Duty",
    },
    {
      name: "Tool Kit Set",
      img: "https://images.unsplash.com/photo-1581147036324-c1c3c5b81f63",
      desc: "All-in-one essential toolkit",
      category: "Tool Kit",
    },
    {
      name: "Welding Machine",
      img: "https://images.unsplash.com/photo-1581090700227-1e8a4d6a4f09",
      desc: "Strong and reliable welding",
      category: "Industrial",
    },
    {
      name: "Hammer Drill",
      img: "https://images.unsplash.com/photo-1606800052052-a08af7148866",
      desc: "Powerful impact drilling",
      category: "Power Tool",
    },
  ];

  // 🔍 FILTER
  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-black text-white min-h-screen mt-12 sm:mt-16 ">

      {/* 🧾 HEADING */}
      <div className="text-center py-10 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">
          Our Products
        </h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Explore our wide range of industrial tools
        </p>

        {/* 🔍 SEARCH BAR */}
        <div className="mt-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 sm:p-3 text-sm bg-black border border-yellow-500 text-white outline-none rounded-md"       />
        </div>
      </div>

      {/* 🛒 GRID */}
     <div className="max-w-7xl mx-auto px-3 pb-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.length > 0 ? (
          filtered.map((item, i) => (
            <motion.div 
              key={i}
initial={{ opacity: 0, y: 15 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-black border border-yellow-500 rounded-lg overflow-hidden transition duration-300 relative"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.name}
               className="h-40 sm:h-44 md:h-48 w-full object-cover"
              />

              {/* CONTENT */}
              <div className="p-2 sm:p-3">
 <h3 className="text-xs sm:text-base font-semibold leading-tight">{item.name}</h3>

<p className="text-gray-400 text-[10px] sm:text-xs mt-1 leading-snug">
  {item.desc}
</p>

                {/* FEATURES */}
                <ul className="text-xs text-gray-300 mt-3 space-y-1">
                  <li>✔ High Performance</li>
                  <li>✔ Durable Build</li>
                  <li>✔ Easy to Use</li>
                </ul>

                {/* CATEGORY */}
<span className="inline-block mt-2 text-[9px] bg-yellow-500 text-black px-1 py-[2px] rounded">
  {item.category}
</span>
                {/* BUTTON */}
                <button
                  onClick={() => navigate("/contact", { state: item })}
                className="mt-2 w-full bg-yellow-500 text-black py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold hover:bg-yellow-400 rounded"   >
                  Get Quote
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No products found 😔
          </p>
        )}

      </div>
    </div>
  );
}