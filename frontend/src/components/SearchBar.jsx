import { useNavigate } from "react-router-dom";

export default function SearchBar() {

const navigate = useNavigate(); 

  return (
<div className="mt-6 flex gap-3 justify-center">
  <button
    onClick={() => navigate("/products")}
    className="bg-yellow-500 text-black px-5 py-2 text-sm font-semibold hover:bg-yellow-400"
  >
    Explore Products
  </button>

  <button
    onClick={() => navigate("/contact")}
    className="border border-yellow-500 px-5 py-2 text-sm hover:bg-yellow-500 hover:text-black"
  >
    Get Quote
  </button>
</div>
  );
}