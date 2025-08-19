"use client";
import React, { useEffect } from "react";
import Logo from "../Logo";
import Link from "next/link";
import Hero_blackLogo from "../Hero_blackLogo";
import { useSelector } from "react-redux";
import {
  setScrolling,
  setOpen,
  setTest,
} from "@/redux/HeaderSlice";
import { RootState, useAppDispatch } from "@/redux/store";
import Button from "./Button";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

interface Menu {
  id: string;
  label: string;
  submenu?: Menu[];
}

const menus: Menu[] = [
  { id: "/", label: "Home" },
  { id: "/about", label: "About Us" },
  { id: "/service", label: "Service" },
  { id: "/pricing", label: "Pricing" },
  {
    id: "#",
    label: "All Pages",
    submenu: [
      { id: "/about", label: "About Us" },
      { id: "/service", label: "Service" },
      { id: "/pricing", label: "Pricing" },
      { id: "/mission", label: "Mission" },
      { id: "/faq", label: "FAQ" },
      { id: "/contact", label: "Contact" },
      { id: "/careers", label: "Career" },
      { id: "/track", label: "Track" },
    ],
  },
];

const mobileMenus: Menu[] = [
  { id: "/", label: "Home" },
  { id: "/about", label: "About Us" },
  { id: "/service", label: "Services" },
  { id: "/pricing", label: "Pricing" },
  { id: "/mission", label: "Mission" },
  { id: "/faq", label: "FAQ" },
  { id: "/contact", label: "Contact" },
  { id: "/careers", label: "Career" },
  { id: "/track", label: "Track" },
];


export default function Header() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { scrolling, test, open } = useSelector(
    (state: RootState) => state.header
  );

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
              <div key={menu.label} className="relative group">
                <Link
                  href={menu.id}
                  className={`font-medium font-Euclid xl:px-3 py-2 ${
                    pathname === menu.id ? "text-yellow-500" : "text-white"
                  } hover:text-yellow-500`}
                >
                  {menu.label}
                </Link>
                {menu.submenu && (
                  <div className="absolute w-[400px] grid grid-cols-3 top-full left-0 mt-7 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                    {menu.submenu.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={subItem.id}
                        className="block px-5 py-2 text-black hover:text-yellow-500 font-Euclid"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="lg:flex items-center gap-4 md:mt-0 mt-2 hidden">
            <Button test={test} />
          </div>

          <MobileMenu
            open={open}
            setOpen={setOpen}
            mobileMenus={mobileMenus}
            test={test}
            dispatch={dispatch}
          />
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
              <div key={menu.label} className="relative group">
                <Link
                  href={menu.id}
                  className={`font-medium font-Euclid xl:px-3 py-2 ${
                    pathname === menu.id ? "text-yellow-500" : "text-black"
                  } hover:text-yellow-500`}
                >
                  {menu.label}
                </Link>
                {menu.submenu && (
                  <div className="absolute w-[400px] grid grid-cols-3 top-full left-0 mt-7 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                    {menu.submenu.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={subItem.id}
                        className="block px-5 py-2 text-black hover:text-yellow-500 font-Euclid"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/*login button*/}
          <div className="lg:flex items-center gap-4 md:mt-0 mt-2 hidden">
            <Button test={test} />
          </div>
          <MobileMenu
            open={open}
            setOpen={setOpen}
            mobileMenus={mobileMenus}
            test={test}
            dispatch={dispatch}
          />
        </div>
      </div>
    </header>
  );
}
