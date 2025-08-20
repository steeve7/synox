import React from 'react'
import { PiStarFourFill, PiStarFourBold } from "react-icons/pi";

export default function HeroIcon() {
  return (
    <>
       {/* Floating Icons */}
              <span className="absolute right-10 top-[14rem] text-[30px] text-[#d9ff43] slow-spin">
                <PiStarFourFill />
              </span>
              <span className="absolute left-10 top-[33rem] text-[30px] text-[#d9ff43] slow-spin">
                <PiStarFourBold />
              </span>
    </>
  )
}
