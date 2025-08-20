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
  setOpenScrolledMenu
} from "@/redux/HeaderSlice";
import { RootState, useAppDispatch } from "@/redux/store";
import Button from "./Button";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";


export default function Header() {
  const dispatch = useAppDispatch();
  const { scrolling, test, open, openScrolledMenu } = useSelector(
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
          <Menu variant="white"/>
          <div className="lg:flex items-center gap-4 md:mt-0 mt-2 hidden">
            <Button test={test} variant="transparent" />
          </div>

          <MobileMenu
            open={open}
            setOpen={setOpen}
            test={test}
            dispatch={dispatch}
            variant="white"
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
          <Menu variant="transparent"/>
          {/*login button*/}
          <div className="lg:flex items-center gap-4 md:mt-0 mt-2 hidden">
            <Button test={test} variant="white" />
          </div>
          <MobileMenu
            open={open}
            setOpen={setOpen}
            test={test}
            dispatch={dispatch}
            variant="transparent"
          />
        </div>
      </div>
    </header>
  );
}
