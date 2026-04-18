import { useState } from "react";
import { useLocation } from "react-router-dom";
import FloatingContact from "../components/FloatingContact";

export default function ContactPage() {
  const { state } = useLocation();
  const location = useLocation();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    product: state?.name || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `
🛠️ *Tools Enquiry*

--------------------------------
👤 Name: ${form.name}
📞 Phone: ${form.phone}
📧 Email: ${form.email}
📦 Product: ${form.product}
📝 Message: ${form.message}
`;
    window.open(
      `https://wa.me/9106019531?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="bg-black text-white min-h-screen px-3 sm:px-4 py-8 sm:py-12 mt-12 sm:mt-16">
      {/* 🧾 TITLE */}
      <div className="text-center mb-10">
       <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">          Get a Quote
        </h2>
        <p className="text-gray-400 mt-1 text-xs sm:text-sm md:text-base">         Fill the form and we will contact you on WhatsApp
        </p>
      </div>

      {/* 📩 FORM */}
      <div className="max-w-3xl mx-auto">
<form
  onSubmit={handleSubmit}
  className="bg-black border border-yellow-500 rounded-lg p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-5"
>

          {/* NAME */}
          <div>
           <label className="text-xs sm:text-sm text-gray-300">Name</label>
            <input
              name="name"
              onChange={handleChange}
              placeholder="Enter your name"
               className="w-full mt-1 p-2 sm:p-3 text-sm bg-black border border-gray-700 focus:border-yellow-500 outline-none"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="text-xs sm:text-sm text-gray-300">Phone</label>
            <input
              name="phone"
              onChange={handleChange}
              placeholder="Enter your phone number"
               className="w-full mt-1 p-2 sm:p-3 text-sm bg-black border border-gray-700 focus:border-yellow-500 outline-none"    />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-xs sm:text-sm text-gray-300">Email</label>
            <input
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
            className="w-full mt-1 p-2 sm:p-3 text-sm bg-black border border-gray-700 focus:border-yellow-500 outline-none"         />
          </div>

          {/* PRODUCT (AUTO) */}
          <div>
            <label className="text-xs sm:text-sm text-gray-300">Product</label>
            <input
              value={form.product}
              readOnly
              className="w-full mt-1 p-2 sm:p-3 text-sm bg-black border border-gray-700 focus:border-yellow-500 outline-none"            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-xs sm:text-sm text-gray-300">Message</label>
            <textarea
              name="message"
              onChange={handleChange}
              rows="3"
              placeholder="Write your requirement..."
           className="w-full mt-1 p-2 sm:p-3 text-sm bg-black border border-gray-700 focus:border-yellow-500 outline-none"/>
          </div>

          {/* BUTTON */}
<button
  type="submit"
  className="w-full bg-yellow-500 text-black py-2 sm:py-3 text-sm font-semibold hover:bg-yellow-400 transition"
>
            Submit Request on WhatsApp
          </button>

        </form>
      </div>

      {location.pathname === "/contact" && <FloatingContact />}
    </div>
  );
}