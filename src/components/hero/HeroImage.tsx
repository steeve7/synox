'use client'
import React from 'react'
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <>
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
    </>
  );
}
