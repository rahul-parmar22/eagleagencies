import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">

      {/* 📞 CALL */}
      <a
        href="tel:+919876543210"
        className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition"
      >
        <FaPhone size={16} />
      </a>

      {/* 💬 WHATSAPP */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
      >
        <FaWhatsapp size={16} />
      </a>

    </div>
  );
}