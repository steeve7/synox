import React from 'react'
import IconDollar from '../IconDollar'
import IconMax from '../IconMax';

export default function About() {
  return (
    <main className="bg-gray-100 flex flex-col w-full md:mt-36 mt-28 py-28 lg:px-20 px-10">
      <div className="flex justify-center items-center lg:flex-row flex-col w-full">
        <div className="flex flex-col justify-start items-start lg:w-1/2 w-full lg:gap-4 md:gap-7 gap-5">
          <h2 className="bg-[#1c1c1e1a] text-[#1c1c1e] flex justify-center items-center px-3 py-2 font-roboto font-medium uppercase rounded-md w-28 text-[14px]">
            Who we are
          </h2>
          <h3 className="font-roboto font-bold md:text-[50px] text-[25px] lg:w-[80%] md:w-[80%] w-full text-[#1c1c1e] md:leading-[3.7rem]">
            Shaping Your Future with Online Banking
          </h3>
          <p className="font-roboto font-medium text-[#656565] text-[20px] lg:w-[80%] w-full">
            Embark on a journey towards a brighter financial future with our
            online banking services. From managing accounts to convenient bill
            payments, our platform is designed to empower.
          </p>
          <div className="flex md:flex-row flex-col justify-start items-start w-full lg:gap-4 md:gap-[10rem] gap-6 mt-5">
            <div className="flex flex-row gap-4 items-start">
              {/*Icon image*/}
              <span className="bg-[#1c1c1e] px-5 py-5 rounded-lg flex justify-center items-center self-start">
                <IconMax />
              </span>
              {/*Icon content*/}
              <div className="flex flex-col md:-mt-3 md:-space-y-2">
                <h2 className="font-roboto font-bold text-[#1c1c1e] md:text-[40px] text-[30px]">
                  9M+
                </h2>
                <p className="font-roboto font-medium text-[#656565] text-[18px] xl:w-1/2 leading-5">
                  Daily Transactions
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-start">
              <span className="bg-[#1c1c1e] px-5 py-5 rounded-lg flex justify-center items-center self-start">
                <IconDollar />
              </span>
              <div className="flex flex-col md:-mt-3 md:-space-y-2">
                <h2 className="font-roboto font-bold text-[#1c1c1e] md:text-[40px] text-[30px]">
                  +9%
                </h2>
                <p className="font-roboto font-medium text-[#656565] text-[18px] xl:w-1/2 leading-5">
                  Unlimited Cashback
                </p>
              </div>
            </div>
          </div>
        </div>
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
      </div>
      <div className='flex flex-col justify-center items-center mt-40 gap-4'>
        <h2 className="bg-[#1c1c1e1a] flex justify-center items-center text-[#1c1c1e] px-3 py-2 font-roboto font-medium uppercase rounded-md w-32 text-[14px]">
          meet our new
        </h2>
        <h3 className="font-roboto font-bold md:text-[50px] text-[20px] text-[#1c1c1e]">
          Physical Card for Your Pocket
        </h3>
        <img src="/images/about_video_image_1.webp" alt="image_video" className='rounded-2xl'/>
      </div>
    </main>
  );
}
