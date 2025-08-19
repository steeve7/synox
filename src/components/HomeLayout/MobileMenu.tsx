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

interface Props {
  open: boolean;
  setOpen: typeof setOpen; // action creator from slice
  test: boolean;
  mobileMenus: Menu[];
  dispatch: AppDispatch; //  no need for AnyAction
}

export default function MobileMenu({open, mobileMenus, test}: Props) {
    const dispatch = useDispatch<AppDispatch>();
    
  return (
    <div className="lg:hidden relative z-10 md:mt-3 mt-7">
      {open ? (
        <MdClose
          className="md:text-[40px] text-[24px] text-white"
          onClick={() => dispatch(setOpen(false))}
        />
      ) : (
        <RiMenu3Fill
          className="md:text-[40px] text-[24px] text-white"
          onClick={() => dispatch(setOpen(true))}
        />
      )}
      {open && (
        <div
          className="flex justify-start items-start flex-col text-end gap-4 bg-white p-[2rem] 
                absolute md:top-[40px] top-[30px] right-0 mt-[1rem] md:min-w-[400px] min-w-[300px] rounded-[5px] scale-up-center animate-slide-down"
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
          <Button test={test} />
        </div>
      )}
    </div>
  );
}
