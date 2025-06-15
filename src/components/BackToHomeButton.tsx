
import { useLocation, useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

const BackToHomeButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <button
      aria-label="Back to Home"
      onClick={() => navigate("/")}
      className="fixed left-4 bottom-4 p-3 rounded-full shadow-lg bg-[#070A52] text-white hover:bg-[#3a469a] transition z-50 flex items-center"
      style={{ boxShadow: "0 2px 14px rgba(7,10,82,0.09)" }}
    >
      <Home size={26} className="mr-1" />
      <span className="font-medium hidden sm:block">Back to Home</span>
    </button>
  );
};

export default BackToHomeButton;
