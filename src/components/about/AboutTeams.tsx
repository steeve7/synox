import React from 'react'

export default function AboutTeams() {
  return (
    <>
      <div className="flex flex-col lg:w-1/2 w-full justify-center items-center gap-4">
        {/*first two image*/}
        <div className="flex flex-row justify-center items-center gap-4">
          <img
            src="/images/about_image_1.webp"
            alt="about_image"
            className="md:w-48 w-36 rounded-xl mt-16"
          />
          <img
            src="/images/about_image_2.webp"
            alt="about_image"
            className="md:w-48 w-36 rounded-xl "
          />
          <img
            src="/images/about_image_3.webp"
            alt="about_image"
            className="md:w-48 w-36 mt-16 rounded-xl lg:hidden md:flex hidden"
          />
        </div>
        {/*second three image*/}
        <div className="flex flex-row lg:ml-[13rem] md:-ml-3 ml-[10rem] md:-mt-5">
          <img
            src="/images/avatar_image_4.webp"
            alt="avatar_image"
            className="w-12 rounded-full border-2 border-white"
          />
          <img
            src="/images/avatar_image_5.webp"
            alt="avatar_image"
            className="w-12 rounded-full border-2 border-white -ml-4"
          />
          <img
            src="/images/avatar_image_6.webp"
            alt="avatar_image"
            className="w-12 rounded-full border-2 border-white -ml-4"
          />
          <p className="text-white font-roboto font-bold flex justify-center items-center md:w-12 w-[3.5rem] bg-black border-2 border-white -ml-4 rounded-full h-12">
            9k+
          </p>
        </div>
        {/*last image*/}
        <img
          src="/images/about_image_3.webp"
          alt="about_image"
          className="md:w-48 w-36 rounded-xl lg:flex md:hidden flex"
        />
      </div>
    </>
  );
}
