import React from 'react'
import Image from 'next/image';
import AboutOne from "../../../public/Images/about_image_1.webp";
import AboutTwo from "../../../public/Images/about_image_2.webp";
import AboutThree from "../../../public/Images/about_image_3.webp";
import Aboutfour from "../../../public/Images/avatar_image_4.webp";
import Aboutfive from "../../../public/Images/avatar_image_5.webp";
import Aboutsix from "../../../public/Images/avatar_image_6.webp";


export default function AboutTeams() {
  return (
    <>
      <div className="flex flex-col lg:w-1/2 w-full justify-center items-center gap-4">
        {/*first two image*/}
        <div className="flex flex-row justify-center items-center gap-4">
          <Image
            src={AboutOne}
            alt="about_image"
            className="md:w-48 w-36 rounded-xl mt-16"
          />
          <Image
            src={AboutTwo}
            alt="about_image"
            className="md:w-48 w-36 rounded-xl "
          />
          <Image
            src={AboutThree}
            alt="about_image"
            className="md:w-48 w-36 mt-16 rounded-xl lg:hidden md:flex hidden"
          />
        </div>
        {/*second three image*/}
        <div className="flex flex-row lg:ml-[13rem] md:-ml-3 ml-[10rem] md:-mt-5">
          <Image
            src={Aboutfour}
            alt="avatar_image"
            className="w-12 rounded-full border-2 border-white"
          />
          <Image
            src={Aboutfive}
            alt="avatar_image"
            className="w-12 rounded-full border-2 border-white -ml-4"
          />
          <Image
            src={Aboutsix}
            alt="avatar_image"
            className="w-12 rounded-full border-2 border-white -ml-4"
          />
          <p className="text-white font-roboto font-bold flex justify-center items-center md:w-12 w-[3.5rem] bg-black border-2 border-white -ml-4 rounded-full h-12">
            9k+
          </p>
        </div>
        {/*last image*/}
        <Image
          src={AboutThree}
          alt="about_image"
          className="md:w-48 w-36 rounded-xl lg:flex md:hidden flex"
        />
      </div>
    </>
  );
}
