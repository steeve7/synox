import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
// import Pattern from '../../../public/Images/hero_pattern.svg'

export default function Footer() {
  return (
    <footer>
      <div
        className="flex flex-col justify-center items-center w-full bg-cover bg-center bg-no-repeat mt-20"
        style={{ backgroundImage: "url('/Images/hero_pattern.s')" }}
      >
        <div className="flex flex-col lg:justify-center justify-start items-start lg:items-center w-full py-10 px-10 bg-[#1e1e1e] border border-yellow-500 rounded-2xl">
          <div className="flex lg:flex-row flex-col lg:justify-center justify-start lg:items-center items-start xl:gap-20 gap-16">
            <div className="flex flex-row items-center gap-5">
              <MdOutlineMarkEmailRead className="text-white text-[45px] bg-[#ffffff1a] rounded-full px-3 py-3" />
              <div className="flex flex-col justify-start items-start gap-2">
                <h3 className="text-white font-medium font-Poppins text-[14px]">
                  Write to us
                </h3>
                <p className="text-white font-medium font-Poppins xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px]">
                  office@synos.com
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5">
              <LuPhoneCall className="text-white text-[45px] bg-[#ffffff1a] rounded-full px-3 py-3" />
              <div className="flex flex-col justify-start items-start gap-2">
                <h3 className="text-white font-medium font-Poppins text-[14px]">
                  Call Us (USA)
                </h3>
                <p className="text-white font-medium font-Poppins xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px]">
                  +(1) 1230 452 8597
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5">
              <HiOutlineLocationMarker className="text-white text-[45px] bg-[#ffffff1a] rounded-full px-3 py-3" />
              <div className="flex flex-col justify-start items-start gap-2">
                <h3 className="text-white font-medium font-Poppins text-[14px]">
                  Our Office
                </h3>
                <p className="text-white font-medium font-Poppins xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px]">
                  Waterloo, Park, Australia
                </p>
              </div>
            </div>
          </div>
          <hr className="bg-white/30 w-full h-[1px] mx-auto mt-[70px] mb-0 border-0" />
          <div className="flex lg:flex-row flex-col lg:justify-center justify-start lg:items-center items-start xl:gap-48 lg:gap-40 gap-20 py-10">
              <div className="flex flex-row gap-2 items-center justify-start">
                <Link
                  href=""
                  className="bg-blue-500 py-2 px-2 text-white font-medium font-Poppins text-[14px] rounded-lg"
                >
                  Facebook
                </Link>
                <Link
                  href=""
                  className="bg-blue-500 py-2 px-2 text-white font-medium font-Poppins text-[14px] rounded-lg"
                >
                  Twitter
                </Link>
              </div>
            <div className='flex md:flex-row flex-col items-center gap-24'>
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-medium font-Poppins text-[16px]">
                Solutions
              </h3>
              <Link
                href=""
                className="font-medium font-Popppins text-[20px] text-white hover:text-yellow-500 hover:underline"
              >
                Digital & Neobanking
              </Link>
              <Link
                href=""
                className="font-medium font-Popppins text-[20px] text-white hover:text-yellow-500 hover:underline"
              >
                B2B Payments
              </Link>
              <Link
                href=""
                className="font-medium font-Popppins text-[20px] text-white hover:text-yellow-500 hover:underline"
              >
                Growth & Activation
              </Link>
              <Link
                href=""
                className="font-medium font-Popppins text-[20px] text-white hover:text-yellow-500 hover:underline"
              >
                Cryptocurrency
              </Link>
              <Link
                href=""
                className="font-medium font-Popppins text-[20px] text-white hover:text-yellow-500 hover:underline"
              >
                Embedded Finance
              </Link>
              <Link
                href=""
                className="font-medium font-Popppins text-[20px] text-white hover:text-yellow-500 hover:underline"
              >
                Investing
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-medium font-Poppins text-[16px]">
                Products
              </h3>
              <Link
                href=""
                className="font-medium font-Popppins text-[20px] text-white hover:text-yellow-500 hover:underline"
              >
                Cards shorts
              </Link>
              <Link
                href=""
                className="font-medium font-Popppins text-[20px] text-white hover:text-yellow-500 hover:underline"
              >
                Deposits
              </Link>
              <Link
                href=""
                className="font-medium font-Popppins text-[20px] text-white hover:text-yellow-500 hover:underline"
              >
                Transfers
              </Link>
              <Link
                href=""
                className="font-medium font-Popppins text-[20px] text-white hover:text-yellow-500 hover:underline"
              >
                Credit & Lending
              </Link>
              <Link
                href=""
                className="font-medium font-Popppins text-[20px] text-white hover:text-yellow-500 hover:underline"
              >
                Data & Analytics
              </Link>
              <Link
                href=""
                className="font-medium font-Popppins text-[20px] text-white hover:text-yellow-500 hover:underline"
              >
                Risk & Compliance
              </Link>
            </div>
            </div>
            
          </div>
          <hr className="bg-white/30 w-full h-[1px] mx-auto mt-[70px] mb-0 border-0" />
          <div className="flex lg:flex-row flex-col justify-between items-start lg:items-center py-10 lg:gap-40 gap-10">
            {/* Left side - copyright */}
            <p className="text-white font-medium font-Poppins text-[16px]">
              Copyright © 2025 Synox, All rights reserved.
            </p>

            {/* Right side - terms & privacy */}
            <div className="flex md:flex-row flex-col md:items-center items-start gap-6">
              <Link
                href=""
                className="font-medium font-Poppins text-[16px] text-white hover:text-yellow-500 hover:underline"
              >
                Terms & Conditions
              </Link>

              {/* vertical divider */}
              <span className="h-6 w-[1px] bg-white/30 md:flex hidden"></span>

              <Link
                href=""
                className="font-medium font-Poppins text-[16px] text-white hover:text-yellow-500 hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
