import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "9106019531"; // apna number daal (country code ke saath)

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300"
    >
      <FaWhatsapp className="text-xl" />
      
      {/* Text hide on very small screens */}
      <span className="hidden sm:block text-sm font-medium">
        Contact Us
      </span>
    </a>
  );
}