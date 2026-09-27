import React from 'react';
import {
  FaPaw,
  FaCompass,
  FaCalendarAlt,
  FaAward,
  FaUsers,
} from 'react-icons/fa';
import { MdOutlinePets } from 'react-icons/md';

const Welcome = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-fixed flex flex-col justify-between pt-16 pb-8 px-6 text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('https://zoo-drab.vercel.app/contact/hero1.jpeg')",
      }}
    >

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#1B4533]/60 z-0"></div>


      {/* Top-Left Corner Paw Icon */}
      <div
        data-aos="fade-down-right"
        data-aos-delay="200"
        className="absolute top-8 left-6 z-10 text-yellow-400 opacity-90 animate-pulse"
      >
        <FaPaw className="text-4xl md:text-5xl drop-shadow-lg" />
      </div>


      {/* Bottom-Right Corner Paw Icon */}
      <div
        data-aos="fade-up-left"
        data-aos-delay="200"
        className="absolute bottom-24 right-6 z-10 text-yellow-400 opacity-90 animate-pulse"
      >
        <FaPaw className="text-4xl md:text-5xl drop-shadow-lg" />
      </div>


      {/* Center Content Section */}
      <div className="relative z-10 max-w-4xl mx-auto text-center  ">

        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide mb-9 drop-shadow-md font-serif"
        >
          Welcome to Wildlife Zoo
        </h1>

        <div className='h-[1.1vh] w-[20%] bg-green-950 rounded-2xl ml-[40%] mb-7'></div>

        {/* Subtitle Paragraph */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-white text-base font-semibold sm:text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed mb-4 font-light text-[24px]"
        >
          Discover exotic animals, learn about conservation, and experience
          the beauty of wildlife up close.
        </p>


        {/* Highlight Tagline */}
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-green-300 font-semibold text-lg md:text-xl flex items-center justify-center gap-2 mb-8 bg-green-300/10 w-[32%] px-0.5 py-2 rounded-[5px] ml-[34%] mt-7"
        >
          Adventure awaits you!
          <FaPaw className="inline text-base text-amber-400 " size={24} />
        </p>


        {/* Action Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex flex-wrap items-center justify-center gap-5"
        >

          {/* Explore Animal Button */}
          <button
            className="flex items-center gap-2 bg-[#1e532b] hover:bg-[#163f20] text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg mt-[3%]"
          >
            <FaCompass className="text-lg" />
            <span>Explore Animal</span>
          </button>


          {/* Plan Your Visit Button */}
          <button
            className="flex items-center gap-2 bg-transparent border-2 border-white hover:backdrop-blur hover:text-white text-white px-6 py-3.5 rounded-lg font-medium transition-all mt-[3%] duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaCalendarAlt className="text-base" />
            <span>Plan Your Visit</span>
          </button>

        </div>

      </div>


      {/* Bottom Statistics Counter Bar */}
<div className="flex flex-row gap-6 w-[80%] h-[23vh] relative z-10 p-6 ml-[12%] mt-[6%]">

  {/* Animal Species */}
  <div
    data-aos="fade-up"
    data-aos-delay="1200"
    className="flex-1 bg-black/40 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-green-900 hover:to-yellow-700"
  >
    <div className="flex items-start justify-center gap-2">

      <MdOutlinePets className="text-yellow-400 text-3xl sm:text-4xl" />

      <div className="text-left flex flex-row gap-4 justify-center items-center">
        <h3 className="text-2xl font-bold text-yellow-400 ">
          200+
        </h3>

        <p className="text-[15] text-gray-300 uppercase font-semibold">
          Animal Species
        </p>
      </div>

    </div>
  </div>


  {/* Conservation Programs */}
  <div
    data-aos="fade-up"
    data-aos-delay="1500"
    className="flex-1 bg-black/40 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-green-900 hover:to-yellow-700"
  >
    <div className="flex items-center justify-center gap-3">

      <FaAward className="text-yellow-400 text-3xl sm:text-4xl" />

      <div className="text-left  flex justify-center flex-row gap-3">
        <h3 className="text-2xl font-bold text-yellow-400 mt-2">
          50+
        </h3>

        <p className="text-[15] font-semibold text-center text-gray-300 uppercase ">
          Conservation Programs
        </p>
      </div>

    </div>
  </div>


  {/* Visitors */}
  <div
    data-aos="fade-up"
    data-aos-delay="800"
    className="flex-1 bg-black/40 backdrop-blur-md hover:bg-gradient-to-r hover:from-green-900 hover:to-yellow-700 rounded-xl p-4 sm:p-6 text-center border border-white/10 flex items-center justify-center"
  >
    <div className="flex items-center justify-center gap-3">

      <FaUsers className="text-yellow-400 text-3xl sm:text-4xl" />

      <div className="text-left flex justify-center flex-row gap-3">
        <h3 className="text-2xl font-bold text-yellow-400">
          1M+
        </h3>

        <p className="text-[15] text-gray-300 uppercase font-semibold mt-1.5">
          Visitors Yearly
        </p>
      </div>

    </div>
  </div>

</div>


    </div>
  );
};

export default Welcome;