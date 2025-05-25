import React from 'react'

interface Achievement {
    title: string;
    desc: string;
    image?: string;
    button?: string;
}

export default function Achievement() {

   const Achievements: Achievement[] = [
     {
       title: "80%",
       desc: "Users primarily access their accounts via mobile for with convenient banking on the go.",
       image: "",
       button: "",
     },
     {
       title: "",
       desc: "",
       image: "/images/transactions_card_image.webp",
       button: "Learn More",
     },
     {
       title: "990K+",
       desc: "Wings quickly gained popularity among youth, attracting over 990k+ customers in first year.",
       image: "",
       button: "",
     },
     {
       title: "300K+",
       desc: "Gain access to a vast global network of over 300k+ partner ATMs located worldwide.",
       image: "",
       button: "",
     },
     {
       title: "60%",
       desc: "Users enjoy 60% faster transaction processing times compared to traditional banks, providing them.",
       image: "",
       button: "",
     },
   ]; 
   
  return (
    <main className="py-28 lg:px-20 bg-gray-100 w-full">
      <div className="flex flex-row justify-between items-center w-full gap-10">
        <div className="flex flex-col justify-start items-start w-1/2 gap-4 -mt-10 self-start">
          <h1 className="bg-[#1c1c1e1a] flex justify-center items-center text-[#1c1c1e] px-3 py-2 font-roboto font-medium uppercase rounded-md w-40 text-[14px]">
            Our Achievements
          </h1>
          <h3 className="font-roboto font-bold md:text-[50px] text-[20px] text-[#1c1c1e] lg:w-[80%] w-full">
            Shaping Your Future with Online Banking
          </h3>
        </div>
        <div className="w-1/2">
          <p className="font-roboto font-medium text-[#656565] text-[20px] lg:w-[80%] w-full">
            With our comprehensive banking solution, you'll find that one card
            is truly enough. Our all-in-one card combines the functionality of
            multiple cards into a single, convenient solution, clutter and
            simplifying your wallet.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-full">
        {Achievements.map(({ title, desc, image, button }, i) => (
          <div key={i} className={`flex flex-col bg-gray-300 px-5 py-5 ${
            i < 3 ? "w-[40%]" : "w-[40%]"
          }`}>
            {title && <h2 className='font-roboto font-bold text-[40px] text-[#1c1c1e]'>{title}</h2>}
            {desc && <p className='font-roboto font-medium text-[#656565] text-[20px]'>{desc}</p>}
            {image && <img src={image} alt="arch_image" className="w-20" />}
            {button && <button>{button}</button>}
          </div>
        ))}
      </div>
    </main>
  );
}
