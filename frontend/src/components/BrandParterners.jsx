const brands = [
  "/brands/harsh.png",
  "/brands/stanley.png",
  "/brands/dewalt.png",
  "/brands/nicon.png",
  "/brands/torque.png",
  "/brands/python.png",
  "/brands/kristeel.png",
  "/brands/3m.png",
  "/brands/groz.png",
  "/brands/magicut.png",
  "/brands/cb.png",
  "/brands/taparia.png",
];

export default function BrandPartners() {
  return (
    <div className="bg-gray-100 py-12 px-4">
      
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Our Brand Partners
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        
        {brands.map((logo, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg flex items-center justify-center p-4 hover:shadow-xl transition duration-300"
          >
            <img
              src={logo}
              alt="brand"
              className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}

      </div>
    </div>
  );
}