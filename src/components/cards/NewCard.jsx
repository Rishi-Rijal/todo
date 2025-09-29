import {FaPlus } from "react-icons/fa";

function NewCard() {
  return (
    <div className="group bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition cursor-pointer flex flex-col items-center justify-center min-h-[220px]">
        <div className="w-16 h-16 flex items-center justify-center bg-indigo-50 rounded-full group-hover:scale-105 transition">
          <FaPlus className="text-indigo-600 w-7 h-7" />
        </div>
        <p className="mt-3 text-gray-700 font-medium group-hover:text-indigo-700">
          Add New Todo
        </p>
      </div>
  )
}

export default NewCard