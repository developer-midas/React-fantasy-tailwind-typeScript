
import React from "react"

interface DropDownProps {
    items: string[]
}

const DropDown: React.FC<DropDownProps> = ({ items }) => {
  return (
    <div className="relative w-[283px]">
      <button className="w-[283px] h-[61px] bg-[#1D1D1D] text-white rounded flex items-center justify-between px-4">
        Select an Option
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="absolute w-full bg-[#1D1D1D] text-white mt-2 rounded shadow-lg z-10 hidden group-hover:block">
        <ul className="flex flex-col">
          {items.map((item) => (
            <li key={item} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DropDown;
