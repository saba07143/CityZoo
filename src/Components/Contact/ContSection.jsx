import React from 'react';
import { 
  FaUser, 
  FaEnvelope, 
  FaList, 
  FaHeading, 
  FaPaperPlane, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaTicketAlt, 
  FaQuestionCircle,
  FaPaw,
  FaTelegramPlane
} from 'react-icons/fa';

const ContSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16 text-gray-800">
      
      {/* 1. Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
        <h2 className="text-5xl font-serif font-extrabold text-green-900 mb-7 tracking-wide">
          Contact Our Zoo Team
        </h2>
        <p className="text-black text-xl mt-3 font-serif">
          Have questions about tickets, animals, or events? Reach out and we'll be happy to help!
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-12 ">
        
        {/* 2. Left Side: Contact Form */}
        <div 
          className="lg:col-span-7 w-[94%] bg-white rounded-2xl shadow-sm border border-green-800/40 overflow-hidden"
          data-aos="fade-right"
        >
          {/* Form Dark Green Header */}
          <div className="bg-[#1e532b] text-white p-6 h-[20vh] w-[100%]">
            <h3 className="text-3xl font-bold flex items-center gap-4">
              <FaTelegramPlane className="text-yellow-400" size={30}/>
              Send us a Message
            </h3>
            <p className="text-[20] ml-3 text-green-200 mt-4">
              Our zookeepers reply as soon as possible
            </p>
          </div>

          {/* Form Body */}
          <form className="p-6 h-full space-y-5 bg-[#F0FDF4]" onSubmit={(e) => e.preventDefault()}>
            
            {/* Full Name */}
            <div className="relative group hover:-translate-y-1 transition transition-all hover:shadow-2xl rounded-2xl">
              <div className="absolute inset-y-0  left-0 pl-3.5 flex items-center pointer-events-none text-green-700">
                <FaUser size={20}  className='group-hover:text-amber-300 transform '/>
              </div>
              <input
                type="text"
                required
                placeholder="Your Full Name"
                className="w-full pl-14 pr-4 py-5 bg-[#F0FDF4] border border-gray-300 rounded-xl text-[14px] focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200"
              />
            </div>

            {/* Email Address */}
            <div className="relative group hover:-translate-y-1 transition transition-all hover:shadow-2xl rounded-2xl">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-green-700">
                <FaEnvelope size={20}  className='group-hover:text-amber-300 transform '/>
              </div>
              <input
                type="email"
                required
                placeholder="Your Email Address"
                className="w-full pl-14 pr-4 py-5 bg-[#F0FDF4] border border-gray-300 rounded-xl text-[14px] focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200"
              />
            </div>

            {/* Choose Topic Dropdown */}
            <div className="relative group hover:-translate-y-1 transition transition-all hover:shadow-2xl rounded-2xl">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-green-700">
                <FaList size={20}  className='group-hover:text-amber-300 transform '/>
              </div>
              <select
                required
                className="w-full pl-14 pr-4 py-5 bg-[#F0FDF4] border border-gray-300 rounded-xl text-[14px] text-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">Choose a Topic</option>
                <option value="tickets">Ticket Inquiries</option>
                <option value="events">Animal Events & Shows</option>
                <option value="group">School / Group Visit</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            {/* Subject */}
            <div className="relative group hover:-translate-y-1 transition transition-all hover:shadow-2xl rounded-2xl">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-green-700">
                <FaHeading size={20} className='group-hover:text-amber-300 transform '/>
              </div>
              <input
                type="text"
                required
                placeholder="Subject"
                className="w-full pl-14 pr-4 py-5 bg-[#F0FDF4] border border-green-200 rounded-xl text-[14px] focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200"
              />
            </div>

            {/* Message Box */}
            <div >
              <textarea
                rows="5"
                required
                placeholder="Your Message"
                className="w-full p-4 bg-[#F0FDF4] border border-green-200 rounded-xl text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200"
              ></textarea>
            </div>

            {/* Send Button */}
            <button
              type="submit"
              className="w-full mt-10 bg-[#1e532b] hover:bg-[#163f20] text-white py-3.5 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md group"
            >
              <FaPaperPlane className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span>Send Message</span>
              <FaPaw className="text-yellow-400 text-sm ml-1" />
            </button>

          </form>
        </div>

        {/* 3. Right Side: Info Cards & Quick Support */}
        <div className="lg:col-span-5 space-y-6" data-aos="fade-left">
          
          {/* Contact Info Main Card */}
          <div className="bg-[#F0FDF4] rounded-2xl p-6 border border-green-800/40 shadow-sm w-[100%]">
          {/* <div className=' border-b-2 border-green-800 rounded'> */}
            <h3 className="text-[24px] font-bold flex items-center gap-2 text-green-900 mb-5 ml-4">
              <FaMapMarkerAlt className="text-white  bg-green-900 h-[5vh] w-[5vh] rounded-[50%] p-2" size={25}/>
              Contact Information
            </h3>
            <div className='h-[1px] w-[95%] rounded-2xl bg-green-600 ml-3'></div>

            <div className="space-y-4 mt-7">
              {/* Email */}
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/60 hover:bg-green-100/80 hover:border-green-200 transition-all duration-200 flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#1e532b] text-white flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 group-hover:text-white transition-colors duration-200">
                  <FaEnvelope className="text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-[18px] text-gray-900">Email</h4>
                  <p className="text-[17px] font-medium text-green-700">info@wildlifezoo.org</p>
                  <span className="text-[16px] text-yellow-400">Replies within 24 hours</span>
                </div>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/60 hover:bg-green-100/80 hover:border-green-200 transition-all duration-200 flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#1e532b] text-white flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 group-hover:text-white transition-colors duration-200">
                  <FaPhoneAlt className="text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-[18px] text-gray-900">Phone</h4>
                  <p className="text-[17px] font-medium text-green-700">+123 456 7890</p>
                  <span className="text-[16px] text-amber-400">Call hours: 9AM - 5PM</span>
                </div>
              </div>

              {/* Visit Us */}
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/60 hover:bg-green-100/80 hover:border-green-200 transition-all duration-200 flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#1e532b] text-white flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 group-hover:text-white transition-colors duration-200">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-[18px] text-gray-900">Visit Us</h4>
                  <p className="text-[17px] font-medium text-green-700">Wildlife Zoo Park, Main City, Country</p>
                  <span className="text-[16px] text-amber-400">Open daily 9AM - 7PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Support Card */}
          <div className="bg-[#F0FDF4] rounded-2xl p-6 border border-green-800/40 shadow-sm hover:-translate-y-1">
            <h3 className="text-[22px] ml-3 font-bold flex items-center gap-2 text-green-900 mb-4">
              <FaQuestionCircle className="text-white  bg-green-900 h-[5vh] w-[5vh] rounded-[50%] p-2" size={25} />
              Quick Support
            </h3>
            <div className='h-[1px] w-[95%] rounded-2xl bg-green-600 ml-3'></div>

            <div className="space-y-3 mt-4">
              {/* Download Tickets */}
              <div className="p-3.5 rounded-xl border border-gray-100 bg-gray-50/60 group hover:bg-green-500/10 hover:border-green-200 transition-all duration-200 flex items-center gap-3 cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-[#1e532b] text-white flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 group-hover:text-white transition-colors duration-200">
                  <FaTicketAlt className="text-sm"/>
                </div>
                <div>
                  <h4 className="font-semibold text-[17px] text-gray-900 group-hover:text-amber-400">Download Tickets</h4>
                  <p className="text-[15px] text-green-700 font-semibold">Access your zoo tickets</p>
                </div>
              </div>

              {/* Visit FAQs */}
              <div className="p-3.5 rounded-xl border group border-gray-100 bg-gray-50/60 hover:bg-green-500/10 hover:border-green-200 group transition-all duration-200 flex items-center gap-3 cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-[#1e532b] text-white flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 group-hover:text-white transition-colors duration-200">
                  <FaQuestionCircle  className="text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-[17px] text-gray-900 group-hover:text-amber-400">Visit FAQs</h4>
                  <p className="text-[15px] text-green-700 font-semibold">Find answers about zoo timings & events</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContSection;