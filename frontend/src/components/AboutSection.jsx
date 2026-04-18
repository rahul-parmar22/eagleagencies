export default function AboutSection() {
  return (
    <div className="w-full bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT - VIDEO */}
        <div className="w-full">
          <video
            src="/your-video.mp4" // apna video path
            controls
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            About Our Company
          </h2>

          <p className="text-gray-700 mb-4 text-sm md:text-base">
            It is our strong belief that a team of employees is the main driving force of any organization. Therefore, we have deployed a team of well-trained professionals to ensure trading, supplying, exporting and distributing our range of Precision Machine Vices, Rotary Milling Table and Stud Tighteners.
          </p>

          {/* Points */}
          <ul className="space-y-2 mb-5">
            <li className="flex items-center gap-2 text-sm md:text-base">
              <span className="text-yellow-500">✔</span>
              Exporter and Wholesale Distributor
            </li>
            <li className="flex items-center gap-2 text-sm md:text-base">
              <span className="text-yellow-500">✔</span>
              Individual - Proprietor
            </li>
            <li className="flex items-center gap-2 text-sm md:text-base">
              <span className="text-yellow-500">✔</span>
              GSTIN - 24AEDPS1339F1ZQ
            </li>
          </ul>

          {/* Button */}
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            About Us
          </button>
        </div>

      </div>
    </div>
  );
}