import React, { useState } from 'react';
import { 
  FaMapMarkedAlt, 
  FaMapMarkerAlt, 
  FaDirections, 
  FaCopy, 
  FaCheck, 
  FaCar, 
  FaBus, 
  FaPaw
} from 'react-icons/fa';

const Location = () => {
  const [copied, setCopied] = useState(false);

  const zooAddress = "123 Wildlife Avenue, Melbourne, VIC 3000";

  const handleCopy = () => {
    navigator.clipboard.writeText(zooAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-[#e3faead9] py-16 px-4 sm:px-8 lg:px-16 text-gray-800 font-sans">
      <div className=' w-[6%] '>
        <FaPaw className='text-[60px] text-green-200/70'/>
      </div>
      {/* 1. Header Area */}
      <div className="text-center max-w-2xl mx-auto mb-10" data-aos="fade-up">
        {/* Badge */}
        <div className='flex justify-center gap-4 items-center ml-14  h-[15vh] w-[80%] flex-row'>
          <div className='h-[6px] w-[24%] mb-3.5 bg-gradient-to-r from-[#e3faead9] to-green-700'></div>
        <div className="inline-flex items-center gap-2 bg-[#c6ecd3] text-[#1e532b] px-5 py-2 rounded-full text-[16px] font-bold uppercase tracking-wider mb-4">
          <FaMapMarkedAlt className="text-[24px]" />
          <span>ZOO LOCATION</span>
        </div>
          <div className='h-[6px] w-[24%] mb-3.5 bg-gradient-to-r from-green-700 to-[#e3faead9]'></div>

        </div>

        {/* Title */}
        <h2 className="text-[37px] mt-2 font-serif font-bold text-green-900 mb-4">
          Visit Our Wildlife Sanctuary
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-[20px]  font-normal">
          Explore a world of wildlife! Our zoo is open year-round and located in the heart of the city. Come with your family and enjoy the amazing animals, nature trails, and fun activities.
        </p>
      </div>

      {/* 2. Map & Floating Card Wrapper */}
      <div className="max-w-5xl mx-auto" data-aos="zoom-in">
        <div className="relative bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Embedded Google Map */}
          <div className="w-full h-[380px] sm:h-[450px]">
            {/* <iframe
              title="Melbourne Zoo Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2521418529163!2d144.9489723752291!3d-37.784130332343985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65cd0db468a97%3A0xb61fde84306fc38a!2sMelbourne%20Zoo!5e0!3m2!1sen!2s!4v1788519671990!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe> */}
            <iframe 
            title='Melbourne Zoo Google Map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2521418529163!2d144.9489723752291!3d-37.784130332343985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65cd0db468a97%3A0xb61fde84306fc38a!2sMelbourne%20Zoo!5e0!3m2!1sen!2s!4v1788519671990!5m2!1sen!2s" 
            className='w-full h-full border-0' 
            allowFullScreen="" 
            loading="lazy" >
            </iframe>
          </div>

          {/* Floating Address Card */}
          <div className="p-4 sm:p-6 bg-white border-t border-gray-100">
            <div className="bg-[#f9fbf9] p-5 rounded-2xl border border-gray-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
              
              {/* Left Address Details */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full mt-3 bg-[#1e532b] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-[20px]">Wildlife Zoo Park</h3>
                  <div className='flex flex-row justify-center gap-2.5 -ml-1'>
                  <div className='h-[1.5vh] w-[1.5vh] bg-green-700 rounded-[50%] mt-2.5'></div>
                  <p className="text-[15px] text-gray-600 mt-1">123 Wildlife Avenue   </p>
                  </div>

                  <div className='flex flex-row justify-center gap-2.5'>
                  <div className='h-[1.5vh] w-[1.5vh] bg-green-700 rounded-[50%] mt-2.5'></div>
                  <p className="text-[15px] text-gray-600 mt-1">Melbourne, VIC 3000</p>
                  </div>

                </div>
              </div>

              {/* Right Action Buttons */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                {/* Get Directions Button */}
                <a
                  href="https://maps.google.com/?q=Melbourne+Zoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#1e532b]  hover:-translate-y-1 hover:bg-[#163f20] text-white text-xs sm:text-sm font-semibold py-3.5 px-5 rounded-xl transition-all duration-200 shadow-sm"
                >
                  <FaDirections className="text-base text-yellow-400" />
                  <span>Get Directions</span>
                </a>

                {/* Copy Address Button */}
                <button
                  onClick={handleCopy}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white group hover:-translate-y-1 hover:bg-green-900 hover:text-white text-gray-800 text-xs sm:text-sm font-semibold py-3.5 px-5 rounded-xl border border-gray-300 transition-all duration-200"
                >
                  {copied ? <FaCheck className="text-green-600" /> : <FaCopy className="text-gray-600 group-hover:text-amber-400 " />}
                  <span>{copied ? 'Copied!' : 'Copy Address'}</span>
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* 3. Bottom Transport Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          
          {/* By Car */}
          <div 
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          duration="500"
          className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex items-start gap-4 hover:-translate-y-1 transition transition-0.5s hover:border-green-300 border-1">
            <div className="p-3 rounded-xl text-green-800">
              <FaCar className="text-[27px]" />
            </div>
            <div>
              <h4 className="font-bold text-[20px] text-gray-900">By Car</h4>
              <p className="text-[18px] text-gray-600 mt-1 leading-relaxed">
                Free parking available. Follow signs to Zoo parking area.
              </p>
            </div>
          </div>

          {/* Public Transport */}
          <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          duration="500"
           className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex items-start gap-4 hover:-translate-y-1 transition transition-0.5s hover:border-green-300 border-1">
            <div className="p-3 rounded-xl  text-green-800 ">
              <FaBus className=" text-[27px]" />
            </div>
            <div>
              <h4 className="font-bold text-[20px] text-gray-900">Public Transport</h4>
              <p className="text-[18px] text-gray-600 mt-1 leading-relaxed">
                Bus routes 505 and 506 stop right outside the zoo entrance.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Location;