"use client";
import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import Hero_blackLogo from "../Hero_blackLogo";
import { useSelector } from "react-redux";
import { setScrolling, setOpen, setTest } from "@/redux/HeaderSlice";
import { RootState, useAppDispatch } from "@/redux/store";

interface Menu {
  id: string;
  label: string;
}

const menus: Menu[] = [
  { id: "/", label: "Home" },
  { id: "#about", label: "About Us" },
  { id: "#service", label: "Service" },
  { id: "#project", label: "Project" },
  { id: "#pricing", label: "Pricing" },
];

export default function Header() {
  const dispatch = useAppDispatch();
  const {scrolling, test, open} = useSelector((state:RootState) => state.header)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        dispatch(setScrolling(true));
        dispatch(setTest(true));
      } else {
        dispatch(setScrolling(false));
        dispatch(setTest(false));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  return (
    <header>
      {/* Transparent Header - Before Scroll */}
      <div
        className={`fixed w-full top-0 z-30 lg:h-24 h-[5.5rem] transition-all duration-500 ease-in-out ${
          scrolling
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <div className="flex justify-between py-10 md:px-20 px-10 bg-transparent">
          <Link href="/" className="mt-2">
            <Logo />
          </Link>
          <div className="gap-10 justify-center items-center hidden lg:flex">
            {menus.map((menu) => (
              <Link key={menu.id} href={menu.id} className="text-white font-medium">
                {menu.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {/*login button*/}
            <div
              className={`relative flex items-center gap-2 md:px-5 px-3 py-2 overflow-hidden group ${
                test ? "border border-black" : "border border-gray-800"}`}>
              <FaUser
                className={`md:text-[15px] text-[10px] relative z-10 group-hover:text-black transition-colors duration-500 ${
                  test ? "text-balck" : "text-yellow-500"}`} />
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
        </div>
      </div>

      {/* White Header - Slides In on Scroll */}
      <div
        className={`fixed w-full top-0 z-30 lg:h-20 h-[4.5rem] bg-white shadow-lg transition-transform duration-500 ease-in-out ${
          scrolling
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex justify-between lg:py-5 md:py-[1rem] py-5 md:px-20 px-10">
          <Link href="/" className="mt-2">
            <Hero_blackLogo />
          </Link>
          <div className="gap-10 justify-center items-center hidden lg:flex">
            {menus.map((menu) => (
              <Link key={menu.id} href={menu.id} className="text-black font-medium">
                {menu.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {/*login button*/}
            <div
              className={`relative flex items-center gap-2 md:px-5 px-3 py-2 overflow-hidden group ${
                test ? "border border-black" : "border border-gray-800"
              }`}
            >
              <FaUser
                className={`md:text-[15px] text-[10px] relative z-10 group-hover:text-white transition-colors duration-500 ${
                  test ? "text-balck" : "text-yellow-500"
                }`}
              />
              <Link
                href=""
                className={`font-roboto font-medium md:text-[15px] text-[10px] relative z-10 group-hover:text-white transition-colors duration-500
                ${test ? "text-black" : "text-white"}`}
              >
                Login
              </Link>
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></span>
            </div>
            <div className="lg:hidden relative z-10">
            {open ? (
              <MdClose
                className="md:text-[40px] text-[30px] text-black"
                onClick={() => dispatch(setOpen(false))}
              />
            ) : (
              <RiMenu3Fill
                className="md:text-[40px] text-[30px] text-black"
                onClick={() => dispatch(setOpen(true))}
              />
            )}
            {open && (
              <div
                className="flex justify-start items-start flex-col text-end gap-4 bg-white p-[2rem] 
                absolute md:top-[40px] top-[30px] right-0 mt-[1rem] md:min-w-[690px] min-w-[300px] rounded-[5px] scale-up-center animate-slide-down"
              >
                {menus.map((menu) => (
                  <Link
                    key={menu.id}
                    href={menu.id}
                    className="font-roboto font-medium"
                  >
                    {menu.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}
