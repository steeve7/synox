import React from 'react'
import Link from "next/link";
import { FaUser } from "react-icons/fa";

interface Prop {
  test: boolean;
}

export default function Button({test} : Prop) {
  return (
    <div className="flex items-center gap-4">
      {/*login button*/}
      <div
        className={`relative flex items-center gap-2 md:px-5 px-3 py-2 overflow-hidden group ${
          test ? "border border-black" : "border border-gray-800"
        }`}
      >
        <FaUser
          className={`md:text-[15px] text-[10px] relative z-10 group-hover:text-black transition-colors duration-500 ${
            test ? "text-balck" : "text-yellow-500"
          }`}
        />
        <Link
          href=""
          className={`font-roboto font-medium md:text-[15px] text-[10px] relative z-10 group-hover:text-black transition-colors duration-500
                ${test ? "text-black" : "text-white"}`}
        >
          Login
        </Link>
        <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></span>
      </div>
    </div>
  );
}
