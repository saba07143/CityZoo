import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import {
  FaPaw,
  FaTicketAlt,
  FaChevronLeft,
  FaChevronRight,
  FaInfoCircle,
  FaTimes,
} from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const swiperRef = useRef(null);
  const form = useRef();

  const slides = [
    {
      title: 'Discover the Wild at City Zoo',
      description:
        'From roaring tigers to playful monkeys, explore the beauty and diversity of wildlife up close.',
    },
    {
      title: 'An Adventure Beyond Imagination',
      description:
        'Stroll through lush habitats, encounter exotic animals, and learn about their fascinating worlds.',
    },
    {
      title: 'Join Our Mission for Nature',
      description:
        'Be part of conservation efforts that protect endangered species while creating lasting memories.',
    },
  ];

  // EmailJS Function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wxot13c',
        'template_c7484et',
        form.current,
        {
          publicKey: 'yyktCNDG8lVdCYiDB',
        }
      )
      .then(
        () => {
          alert('Ticket booking request sent successfully!');
          setIsModalOpen(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className="min-h-screen  font-sans text-gray-800 relative">

      {/* HERO SECTION */}
      <section className="relative h-[100%] flex items-center justify-center overflow-hidden">

        {/* TIGER VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="./src/assets/tigervid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-white/15 "></div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.realIndex);
          }}
          className="slide-slider relative z-20 w-full min-h-[88vh]"
        >

          {/* SLIDES */}
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="!flex items-center justify-center"
            >

              {/* TEXT CONTENT */}
              <div className="max-w-6xl mx-auto mt-35 text-center px-6 space-y-6">

                {/* HEADING */}
                <h1 className="text-[60px] font-bold leading-tight bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                  {slide.title}
                </h1>

                {/* DESCRIPTION */}
                <p className="text-lg md:text-[22px] text-gray-100 max-w-3xl mx-auto leading-relaxed">
                  {slide.description}
                </p>

                {/* BUTTONS */}
                <div className="flex flex-wrap justify-center gap-5 pt-6">

                  {/* BUY TICKETS BUTTON */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-green-900 hover:bg-green-950 text-white px-5 py-3.5 rounded-xl text-[17px] font-semibold flex items-center gap-3 shadow-xl transform active:scale-95 transition-all"
                  >
                    <FaTicketAlt className="text-2xl" />
                    <span>Buy Tickets</span>
                  </button>

                  {/* EXPLORE MORE BUTTON */}
                  <Link
                    to="/about"
                    className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-4 py-3 rounded-xl text-[17px] font-bold flex items-center gap-3 shadow-xl transform active:scale-95 transition-all"
                  >
                    <FaInfoCircle className="text-2xl" />
                    <span>Explore More</span>
                  </Link>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

        {/* LEFT BUTTON */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full flex items-center justify-center text-2xl shadow-lg transition-all focus:outline-none"
        >
          <FaChevronLeft />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full flex items-center justify-center text-2xl shadow-lg transition-all focus:outline-none"
        >
          <FaChevronRight />
        </button>

        {/* DOT PAGINATION */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">

          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                swiperRef.current?.slideToLoop(index);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'w-8 bg-gradient-to-r from-green-800 to-amber-400'
                  : 'w-2.5 bg-gradient-to-r from-green-800/50 to-amber-400/50'
              }`}
            />
          ))}

        </div>

      </section>

      {/* BOOK TICKETS MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 text-2xl"
            >
              <FaTimes />
            </button>

            {/* MODAL HEADER */}
            <div className="text-center mb-6 space-y-2">

              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaPaw className="text-[#2E7D32] text-3xl" />
              </div>

              <h3 className="text-2xl font-extrabold text-gray-900">
                Book Your Tickets
              </h3>

              <p className="text-gray-600 text-sm font-medium">
                Experience a day full of adventure and wildlife at City Zoo
              </p>

            </div>

            {/* BOOKING FORM */}
            <form
              ref={form}
              className="space-y-4"
              onSubmit={sendEmail}
            >

              {/* NAME */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1 text-sm">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-base"
                  required
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1 text-sm">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-base"
                  required
                />
              </div>

              {/* TICKETS AND DATE */}
              <div className="grid grid-cols-2 gap-4">

                {/* TICKETS */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-sm">
                    Tickets
                  </label>

                  <input
                    type="number"
                    name="tickets"
                    placeholder="e.g. 2"
                    min="1"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-base"
                    required
                  />
                </div>

                {/* DATE */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1 text-sm">
                    Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-base"
                    required
                  />
                </div>

              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full bg-[#1B5E20] hover:bg-[#144718] text-white py-3 rounded-xl text-base font-bold mt-4 shadow-lg transition-all"
              >
                Confirm Purchase
              </button>

            </form>

          </div>

        </div>
      )}

    </div>
  );
};

export default Hero;