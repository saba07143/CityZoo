import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import {
  FaPaw,
  FaTicketAlt,
  FaHeart,
  FaTimes
} from 'react-icons/fa';

const eventSlides = [
  {
    id: 1,
    title: "Penguin Feeding Show",
    highlight: "Live Performance",
    description: "Watch adorable penguins being fed by our zookeepers. Fun for all ages!",
    date: "Sep 15, 2025",
    bgImage: "https://zoo-drab.vercel.app/assets/penguin3-LBck_zmS.avif",
  },
  {
    id: 2,
    title: "Lion Roar Experience",
    highlight: "Close-Up Adventure",
    description: "Get close to the King of the Jungle in a safe, thrilling environment.",
    date: "Sep 20, 2025",
    bgImage: "https://zoo-drab.vercel.app/assets/lion-6qcLvwC7.jpg",
  },
  {
    id: 3,
    title: "Giraffe Meet & Greet",
    highlight: "Family Fun",
    description: "Feed and interact with our friendly giraffes. A perfect photo opportunity!",
    date: "Sep 25, 2025",
    bgImage: "https://zoo-drab.vercel.app/assets/giraffe-DjlexebT.jpg",
  },
  {
    id: 4,
    title: "Zoo Funfair & Carnival",
    highlight: "Stalls, Rides & Games",
    description: "A full-day festival with food stalls, rides, live music, and clowns!",
    date: "Oct 5, 2025",
    bgImage: "https://zoo-drab.vercel.app/assets/funfair-BnyDAhJa.jpg",
  }
];

export default function EventsHero() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // EmailJS form reference
  const form = useRef();

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % eventSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Send booking email
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
          alert('Ticket booking successful!');

          // Close modal
          setIsModalOpen(false);

          // Reset form
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Booking failed. Please try again.');
        }
      );
  };

  return (
    <div className="w-full bg-white text-white font-sans">

      {/* HERO SLIDER */}

      <div className="relative h-[85vh] min-h-[500px] w-full overflow-hidden">

        {eventSlides.map((slide, index) => (

          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 z-10'
                : 'opacity-0 z-0'
            }`}
          >

            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative h-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center">

              <h1 className="text-[40px] font-extrabold mb-3">
                {slide.title}{' '}
                <span className="text-green-500">
                  {slide.highlight}
                </span>
              </h1>

              <p className="text-gray-200 text-[20px] max-w-2xl mb-4">
                {slide.description}
              </p>

              <div className="text-[22px] text-amber-400 font-bold px-4 py-1.5 rounded-md mb-6 shadow-md inline-block">
                {slide.date}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-green-900 to-amber-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2.5 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Tickets
                </button>

                <Link
                  to="/contact"
                  className="border-2 border-white hover:bg-white hover:text-black text-white font-semibold px-6 py-2.5 rounded-full transition duration-300"
                >
                  Contact Us
                </Link>

              </div>

            </div>
          </div>

        ))}

        {/* Carousel Dots */}

        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">

          {eventSlides.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-gradient-to-r from-green-900 to-amber-400'
                  : 'w-3 bg-gradient-to-r from-green-900/30 to-amber-400/40'
              }`}
            />

          ))}

        </div>

      </div>


      {/* UPCOMING EVENT */}

      <div
        className="h-[80vh] mt-12 relative py-16 px-6 bg-cover bg-center border-t border-gray-800"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200')"
        }}
      >

        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative max-w-4xl mx-auto text-center z-10">

          <span className="bg-yellow-400 text-green-900 font-bold text-[16px] uppercase px-3.5 py-1.5 rounded-full inline-block mb-3">
            Upcoming Event
          </span>

          <h2 className="text-[34px] font-extrabold mb-2 ">
            Zoo Funfair & Carnival{' '}
            <span className="text-amber-400">
              2025
            </span>
          </h2>

          <p className="text-gray-300 mb-8 max-w-2xl mx-auto ">
            Join us for a full day of fun rides, animal shows, food stalls,
            and live performances!
          </p>

          {/* Timer */}

          <div className="grid grid-cols-4 gap-3 max-w-md mx-auto mb-8">

            {[
              { label: 'DAYS', value: '0' },
              { label: 'HOURS', value: '0' },
              { label: 'MINUTES', value: '0' },
              { label: 'SECONDS', value: '0' }
            ].map((unit, idx) => (

              <div
                key={idx}
                className="bg-white/10  backdrop-blur-md rounded-lg p-3 border border-white/20"
              >

                <div className="text-2xl md:text-3xl font-bold text-yellow-400">
                  {unit.value}
                </div>

                <div className="text-[10px] md:text-xs font-semibold tracking-wider text-gray-300">
                  {unit.label}
                </div>

              </div>

            ))}

          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-500 hover:bg-yellow-500 mt-8 text-green-900 font-bold px-8 py-3 rounded-full transition duration-300 shadow-xl"
          >
            Get Tickets Now
          </button>

        </div>

      </div>


      {/* TICKET BOOKING MODAL */}

      {isModalOpen && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative">

            {/* Close */}

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 text-2xl"
            >
              <FaTimes />
            </button>


            {/* Heading */}

            <div className="text-center mb-6 space-y-2">

              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaPaw className="text-[#2E7D32] text-3xl" />
              </div>

              <h3 className="text-3xl font-bold text-green-900">
                Book Your Tickets
              </h3>

              <p className="text-gray-400 text-base font-medium">
                Experience a day full of adventure and wildlife at City Zoo
              </p>

            </div>


            {/* BOOKING FORM */}

            <form
              ref={form}
              className="space-y-4"
              onSubmit={sendEmail}
            >

              {/* Full Name */}

              <div>

                <label className="block text-green-900 font-semibold mb-1 text-base">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-lg"
                  required
                />

              </div>


              {/* Email */}

              <div>

                <label className="block text-green-900 font-semibold mb-1 text-base">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-lg"
                  required
                />

              </div>


              {/* Tickets + Date */}

              <div className="grid grid-cols-2 gap-4">

                <div>

                  <label className="block text-green-900 font-semibold mb-1 text-base">
                    Tickets
                  </label>

                  <input
                    type="number"
                    name="tickets"
                    placeholder="e.g. 2"
                    min="1"
                    className="w-full px-4 py-3 rounded-xl text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-lg"
                    required
                  />

                </div>


                <div>

                  <label className="block text-green-900 font-semibold mb-1 text-base">
                    Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    className="w-full px-4 py-3 rounded-xl text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-lg"
                    required
                  />

                </div>

              </div>


              {/* Submit */}

              <button
                type="submit"
                className="w-full bg-[#1B5E20] hover:bg-[#144718] text-white py-4 rounded-xl text-xl font-semibold mt-4 shadow-lg transition-all"
              >
                Confirm Purchase
              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}
