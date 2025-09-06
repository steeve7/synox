import React from 'react'
import Button from '../HomeLayout/Button';


interface Money {
    number: string;
    image: string;
    title: string;
    desc: string;
}

const monies: Money[] = [
  {
    number: "/01",
    image: "/images/icon_pen.svg",
    title: "Register and Create Your Account",
    desc: "Start your journey by registering for an account and effortlessly creating it.",
  },
  {
    number: "/02",
    image: "/images/icon_web_design.svg",
    title: "Effortlessly Manage Your Virtual Cards",
    desc: "Easily manage your virtual cards with our platform. Customize, track, and stay secure.",
  },
  {
    number: "/03",
    image: "/images/icon_pen.svg",
    title: "ATM Withdrawals and Online Banking",
    desc: "Easily withdraw cash from ATMs and conveniently manage your banking needs online.",
  },
];

export default function Moneycontent() {

  return (
    <div className="flex flex-row justify-center items-center rounded-2xl w-[70%]">
      {monies.map((moni, i) => (
        <div key={i} className="border border-yellow-400">
          <div className="flex flex-col justify-center items-center gap-8 py-10 px-5 h-[400px]">
            <span className="text-white font-medium font-Euclid text-[20px]">
              {moni.number}
            </span>
            <img src={moni.image} alt="withdraw options" className="w-14" />
            <p className="text-white font-bol font-Euclid text-[20px]">
              {moni.title}
            </p>
            <p className="text-white font-medium font-Poppins text-[13px]">
              {moni.desc}
            </p>
          </div>
        </div>    
      ))}
       <div className="flex flex-col border border-yellow-400 bg-yellow-500 py-8 px-5 h-[403px]">
        <div className="flex flex-col justify-center items-center text-center gap-10">
          <h2 className="text-black font-bold font-Euclid text-[25px]">The Start of Today Begins Now</h2>
           <p className="text-black font-medium font-Poppins text-[20px]">
            Today marks the inception of a new journey, starting at this very moment.
          </p>
          <Button variant='white'/>
        </div>
        </div>
    </div>
  );
}
