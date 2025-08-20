import React from 'react'

export default function ArchieveColumns() {
  return (
    <>
      <div className="flex lg:flex-row flex-col justify-center items-center w-full py-10 gap-10">
        {/* Left Column */}
        <div className="flex flex-col gap-10">
          <div className="relative flex items-center justify-center py-10 px-5 lg:h-[250px] md:h-[150px] xl:w-[360px] lg:w-[300px] w-full rounded-2xl shadow-xl overflow-hidden">
            {/* Background Image */}
            <img
              src="/images/funfact_bg_1.svg"
              alt="card background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Content */}
            <div className="relative flex flex-col items-start px-5">
              <h2 className="text-[#1c1c1e] xl:text-[50px] text-[35px] font-bold font-Euclid">
                80%
              </h2>
              <p className="text-[#1c1c1e] text-[18px] font-medium font-Poppins">
                Users primarily access their accounts via mobile for convenient
                banking.
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-center py-10 px-5 lg:h-[250px] md:h-[150px] xl:w-[360px] lg:w-[300px] w-full rounded-2xl shadow-xl overflow-hidden">
            {/* Background Image */}
            <img
              src="/images/funfact_bg_2.svg"
              alt="card background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Content */}
            <div className="relative flex flex-col items-start px-5">
              <h2 className="text-[#1c1c1e] xl:text-[50px] text-[35px] font-bold font-Euclid">
                300k+
              </h2>
              <p className="text-[#1c1c1e] text-[18px] font-medium font-Poppins">
                Gain access to a vast global network of over 300k+ partner ATMs
                located worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Center Image Section */}
        <div className="relative flex flex-col justify-start items-center bg-black xl:mx-5 px-5 xl:h-[500px] lg:h-[450px] md:h-[700px] h-[400px] w-full rounded-2xl shadow-xl overflow-hidden">
          {/* Shape image as background */}
          <img
            src="/images/shape_line.svg"
            alt="shape"
            className="absolute inset-0 w-full h-full object-contain"
          />

          {/* Card image + button stacked on top */}
          <div className="relative flex flex-col items-center py-5">
            {/* Card image */}
            <img
              src="/images/transactions_card_image.webp"
              alt="arch_image"
              className="xl:w-[300px] lg:w-[250px] md:w-[700px] w-[550px] h-auto rounded-xl shadow-lg"
            />

            {/* Button */}
            <button className="lg:px-6 lg:py-3 md:py-8 md:px-10 py-3 px-6 lg:mt-48 md:mt-24 mt-14 bg-yellow-400 font-bold font-Euclid text-[18px] text-black rounded-md shadow-md hover:bg-yellow-600">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-10">
          <div className="relative flex items-center justify-center py-10 px-5 lg:h-[250px] md:h-[150px] xl:w-[360px] lg:w-[300px] w-full rounded-2xl shadow-xl overflow-hidden">
            {/* Background Image */}
            <img
              src="/images/funfact_bg_3.svg"
              alt="card background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Content */}
            <div className="relative flex flex-col items-start px-5">
              <h2 className="text-[#1c1c1e] xl:text-[50px] text-[35px] font-bold font-Euclid">
                900k+
              </h2>
              <p className="text-[#1c1c1e] text-[18px] font-medium font-Poppins">
                Wings quickly gained popularity among youth, attracting over
                990k+ customers in first year.
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center py-10 px-5 lg:h-[250px] md:h-[150px] xl:w-[360px] lg:w-[300px] w-full rounded-2xl shadow-xl overflow-hidden">
            {/* Background Image */}
            <img
              src="/images/funfact_bg_4.svg"
              alt="card background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Content */}
            <div className="relative flex flex-col items-start px-5">
              <h2 className="text-[#1c1c1e] xl:text-[50px] text-[35px] font-bold font-Euclid">
                60%
              </h2>
              <p className="text-[#1c1c1e] text-[18px] font-medium font-Poppins">
                Users enjoy 60% faster transaction processing times compared to
                traditional banks, providing them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
