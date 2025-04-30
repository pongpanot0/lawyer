import { useState } from "react";
import { ChevronDown, ChevronUp, Pencil } from "lucide-react"; // ใช้ไอคอนจาก lucide-react
const SmallAccordion = ({ title, children, button, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" rounded-xl border-gray-100 border mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center p-2 text-left  ${
          isOpen ? "bg-gray-50 border-b-gray-100" : "bg-white"
        } hover:bg-gray-50 transition`}
      >
        <span className="text-lg font-light">{title}</span>
        {isOpen ? (
          <Pencil className="w-5 h-5" onClick={onClick} />
        ) : (
          <ChevronUp className="w-5 h-5" />
        )}
      </button>
      {isOpen && (
        <div>
          <div className="px-4 pb-4 text-gray-700 animate-fade-in">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallAccordion;
