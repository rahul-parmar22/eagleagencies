import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const images = [
  "https://image.slidesdocs.com/responsive-images/background/hardware-labor-day-tool-tools-board-powerpoint-background_48e819776e__960_540.jpg",
  "https://static.vecteezy.com/system/resources/thumbnails/072/309/143/small/diy-and-home-improvement-project-tools-background-hammer-wrench-pliers-screwdriver-drill-bits-nails-screws-and-clamp-on-white-surface-with-copy-space-photo.jpg",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      {/* Slider Wrapper */}
      <div
        className="flex h-full transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
        
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
        
       "Build Better with the Right Tools"
     
        </h1>

        <p className="text-gray-200 mb-6 text-sm md:text-lg">
          Premium hardware solutions for every project
        </p>

        {/* Search Bar */}
<SearchBar/>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-full ${
              i === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

    </div>
  );
}
