import React from 'react'
import Button from './Button';
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { AppDispatch } from '@/redux/store';
import { setOpen } from '@/redux/HeaderSlice';
import { useDispatch } from "react-redux";

interface Menu {
  id: string;
  label: string;
}

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

interface Props {
  open: boolean;
  setOpen: typeof setOpen; // action creator from slice
  test: boolean;
  dispatch: AppDispatch; //  no need for AnyAction
  variant: "white" | "transparent";
}

export default function MobileMenu({open, test, variant, dispatch}: Props) {
    // const dispatch = useDispatch<AppDispatch>();
    
  return (
    <div className="lg:hidden relative z-10 md:mt-0 mt-2">
      {open ? (
        <MdClose
          className={`md:text-[40px] text-[24px] relative z-[60] ${
            variant === "white" ? "text-white" : "text-black"
          }`}
          onClick={() => dispatch(setOpen(false))}
        />
      ) : (
        <RiMenu3Fill
          className={`md:text-[40px] text-[24px] relative z-[60] ${
            variant === "white" ? "text-white" : "text-black"
          }`}
          onClick={() => dispatch(setOpen(true))}
        />
      )}
      {open && (
        <div
          className="flex justify-start items-start flex-col text-end gap-4 bg-white p-[2rem] 
                absolute md:top-[40px] top-[30px] right-0 mt-[1rem] md:min-w-[400px] z-50 min-w-[300px] rounded-[5px] scale-up-center animate-slide-down"
        >
          {mobileMenus.map((menu) => (
            <Link
              key={menu.id}
              href={menu.id}
              className="font-Euclid font-medium"
            >
              {menu.label}
            </Link>
          ))}
          <Button test={test} variant="white" />
        </div>
      )}
    </div>
  );
}
