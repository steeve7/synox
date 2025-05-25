'use client'
import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Hero_shape from '../Hero_shape';
import { PiStarFourFill, PiStarFourBold } from "react-icons/pi";
import {motion} from 'framer-motion'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface company {
  image: string;
  image_size: string;
}

export default function Hero() {
  const companies: company[]  = [
    { image: "/images/client_logo_2.webp", image_size: "w-28" }, //kemper
    { image: "/images/client_logo_3.webp", image_size: "w-28" },//meetlife
    { image: "/images/client_logo_4.webp", image_size: "w-28" },// protective
    { image: "/images/client_logo_5.webp", image_size: "w-24" }, // hellmer
    { image: "/images/client_logo_6.webp", image_size: "w-28" }, // baloise
    { image: "/images/client_logo_7.webp", image_size: "w-20" }, //affirm
    { image: "/images/client_logo_8.webp", image_size: "w-[6.5rem]" },//airbnb
  ];

const settings = {
  infinite: true,
  speed: 5000, // Speed of scrolling (ms)
  slidesToShow: 5, // Adjust based on layout
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0, // No delay between slides
  cssEase: "linear", // Smooth scrolling
  pauseOnHover: false,
  arrows: false, // Hide arrows for a clean look
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

  return (
    <main className="relative flex flex-col justify-center w-full bg-zinc-950 overflow-hidden h-full min-h-screen">
      <div className="flex flex-col lg:flex-row w-full xl:h-[1150px] lg:h-[100px] md:h-[1200px] h-[1000px] min-h-screen">
        {/* Content Section */}
        <div className="relative z-10 flex flex-col lg:justify-start md:justify-center lg:items-start items-center gap-4 md:px-20 md:py-60 py-40 lg:w-1/2 md:w-full">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 60,
              duration: 1.2,
            }}
            viewport={{ once: true }}
            className="text-[14px] font-roboto font-bold text-[#d9ff43] bg-[#d9ff431a] bg-opacity-30 px-3 py-1 rounded-md"
          >
            All-In-One Banking For Everyone
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 60,
              duration: 1.2,
            }}
            viewport={{ once: true }}
            className="font-roboto font-bold xl:text-[50px] lg:text-[40px] lg:text-start text-center md:text-[60px] text-[40px] text-white"
          >
            The Premier Finto Online Banking
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 60,
              duration: 1.2,
            }}
            viewport={{ once: true }}
            className="font-roboto font-medium text-white xl:text-[18px] lg:px-0 px-5 lg:text-[15px] md:text-[20px] text-[13px] lg:text-start text-center"
          >
            Discover online banking with Synox. Experience unmatched security
            and efficiency for managing your finances.
          </motion.p>
          <div className="flex md:flex-row flex-col md:justify-center lg:justify-start items-center gap-6 lg:mt-14 mt-10 w-full">
            {/* Button Wrapper */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 60,
                duration: 1.4,
              }}
              viewport={{ once: true }}
              className="bg-[#d9ff43] xl:px-10 lg:px-2 px-3 py-5 rounded-lg"
            >
              <button className="text-black font-roboto font-bold xl:text-[20px] lg:text-[15px]">
                Get Started Free Now
              </button>
            </motion.div>

            {/* Review Section */}
            <div className="flex flex-col md:items-start items-center gap-2">
              <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 60,
                  duration: 1.4,
                }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-green-600"
              >
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <h2 className="text-white font-roboto font-bold md:ml-3">
                  4.8
                </h2>
              </motion.span>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 60,
                  duration: 1.4,
                }}
                viewport={{ once: true }}
                className="font-roboto font-bold text-white"
              >
                26 Reviews
              </motion.h1>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1.2,
          }}
          viewport={{ once: true }}
          className="w-1/2 relative lg:flex hidden mt-40 overflow-hidden"
        >
          <img
            src="/images/hero_hand_image.png"
            alt="hero_hand_image"
            className="xl:w-[600px] lg:w-[450px] absolute xl:mt-[18rem] mt-[17rem] right-0 z-10"
          />
          <img
            src="/images/card.png"
            alt="card_image"
            className="xl:w-[400px] lg:w-[300px] md:w-[320px] z-10 xl:mt-[6rem] lg:mt-[8rem] md:mt-[6rem] lg:right-[13rem] xl:right-[17rem] absolute slow-bounce"
          />
        </motion.div>

        {/* Floating Icons */}
        <span className="absolute right-10 top-[14rem] text-[30px] text-[#d9ff43] slow-spin">
          <PiStarFourFill />
        </span>
        <span className="absolute left-10 top-[33rem] text-[30px] text-[#d9ff43] slow-spin">
          <PiStarFourBold />
        </span>

        {/* Hero Shape & Company Logos */}
        <div className="w-full overflow-hidden absolute lg:top-[35rem] xl:top-[38rem] md:top-[46rem] top-[39rem]">
          <Hero_shape />
          <div className="md:px-20 flex flex-col lg:justify-start md:justify-center lg:items-start items-center lg:mt-0 md:mt-16 mt-10 gap-14">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 60,
                duration: 1.4,
              }}
              viewport={{ once: true }}
              className="uppercase text-[14px] font-roboto font-medium text-[#d9ff43] bg-[#d9ff431a] bg-opacity-30 px-3 py-1 rounded-md lg:w-[15rem] md:w-[14rem] text-center"
            >
              Some Several Companies
            </motion.h1>
            <div className="overflow-hidden w-full">
              <Slider {...settings} className="w-full">
                {companies.map(({ image, image_size }, i) => (
                  <div
                    key={i}
                    className="flex justify-center items-center flex-row gap-2"
                  >
                    <ul className="border border-gray-800 p-5 rounded-full xl:w-52 lg:w-60 md:w-48 w-40">
                      <li className="text-white text-center text-[30px] flex items-center justify-center">
                        <img
                          src={image}
                          alt="image_logo"
                          className={`${image_size}`}
                        />
                      </li>
                    </ul>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
