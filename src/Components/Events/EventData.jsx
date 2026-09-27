import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaTimes, FaPaw } from "react-icons/fa";

// Sample event data
const eventsData = [
  {
    id: 1,
    title: "Penguin Feeding Show",
    category: "Shows",
    subCategory: "Live Performance",
    date: "Sep 15, 2025",
    duration: "2 hours",
    description:
      "Watch adorable penguins being fed by our zookeepers. Fun for all ages!",
    image:
      "./src/assets/penguin3-LBck_zmS.avif",
  },
  {
    id: 2,
    title: "Lion Roar Experience",
    category: "Animal Encounters",
    subCategory: "Close-Up Adventure",
    date: "Sep 20, 2025",
    duration: "2 hours",
    description:
      "Get close to the King of the Jungle in a safe, thrilling environment.",
    image:
      "./src/assets/lion-6qcLvwC7.jpg",
  },
  {
    id: 3,
    title: "Giraffe Meet & Greet",
    category: "Animal Encounters",
    subCategory: "Family Fun",
    date: "Sep 25, 2025",
    duration: "2 hours",
    description:
      "Feed and interact with our friendly giraffes. A perfect photo opportunity!",
    image:
      "./src/assets/giraffe-DjlexebT.jpg",
  },
  {
    id: 4,
    title: "Aviary Bird Watching",
    category: "Animal Encounters",
    subCategory: "Al Khor Park",
    date: "Oct 10, 2025",
    duration: "2 hours",
    description:
      "Explore an expansive aviary featuring peacocks, lovebirds, flamingos, parrots, and geese—a birdwatcher's paradise!",
    image:
      "./src/assets/birdWatching-0JHo3_11.webp",
  },
  {
    id: 5,
    title: "Panda House Visit",
    category: "Animal Encounters",
    subCategory: "Special Exhibit",
    date: "Oct 25, 2025",
    duration: "2 hours",
    description:
      "Meet Suhail & Thuraya, Qatar's first giant pandas at Al Khor—an exclusive and unforgettable experience.",
    image:
      "./src/assets/panda-DMdhQmON.webp",
  },
  {
    id: 6,
    title: "Zoo Funfair & Carnival",
    category: "Carnivals",
    subCategory: "Stalls, Rides & Games",
    date: "Oct 5, 2025",
    duration: "2 hours",
    description:
      "A full-day festival with food stalls, rides, live music, and clowns!",
    image:
      "./src/assets/funfair-BnyDAhJa.jpg",
  },
  {
    id: 7,
    title: "Miniature Train Ride",
    category: "Carnivals",
    subCategory: "Family Fun",
    date: "Oct 12, 2025",
    duration: "2 hours",
    description:
      "Ride through beautiful green landscapes of Al Khor Park & Zoo on a charming mini train—perfect for families.",
    image:
      "./src/assets/train-C300RmBj.jpg",
  },
  {
    id: 8,
    title: "Zoo Museum Tour",
    category: "Carnivals",
    subCategory: "Educational Exhibit",
    date: "Oct 15, 2025",
    duration: "2 hours",
    description:
      "Tour the on-site museum at Al Khor Park to learn about local wildlife, conservation efforts, and the region's ecosystem.",
    image:
      "./src/assets/visit (2)-CDnFgpYy.jpeg",
  },
  {
    id: 9,
    title: "Baladna Farm Adventure",
    category: "Carnivals",
    subCategory: "Animal Farm Experience",
    date: "Oct 20, 2025",
    duration: "2 hours",
    description:
      "Visit Baladna Park to meet cows, emus, wallabies, peacocks, and enjoy activities like ziplining, go-karts, and archery.",
    image:
      "./src/assets/baladna-CIcvieim.jpg",
  },
];

export default function EventsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form reference
  const form = useRef();

  const categories = ["All", "Shows", "Animal Encounters", "Carnivals"];

  // Filter events
  const filteredEvents =
    selectedCategory === "All"
      ? eventsData
      : eventsData.filter(
          (item) => item.category === selectedCategory
        );

  // Open ticket modal
  const openTicketModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  // EmailJS function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wxot13c",
        "template_c7484et",
        form.current,
        {
          publicKey: "yyktCNDG8lVdCYiDB",
        }
      )
      .then(
        () => {
          alert("Ticket booking successful!");

          form.current.reset();
          setIsModalOpen(false);
          setSelectedEvent(null);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Booking failed. Please try again.");
        }
      );
  };

  return (
    <section className="bg-gray-100 min-h-screen py-12 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                selectedCategory === cat
                  ? "bg-green-900 text-white border-green-900 shadow-md"
                  : "bg-white text-green-800 border-green-600 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Heading */}
        <h2 className="text-[40px] font-bold text-center text-green-900 mb-10">
          Our{" "}
          <span className="text-amber-500">
            Exciting Events
          </span>
        </h2>

        {/* Events Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between border border-gray-100"
            >

              <div>

                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden bg-gray-700">

                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />

                  {/* Category */}
                  <span className="absolute top-3 right-3 bg-green-900 text-amber-400 text-[12px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {event.category}
                  </span>

                  {/* Date */}
                  <span className="absolute bottom-3 left-3 text-yellow-500 font-bold text-[14px] px-3 py-1">
                    {event.date}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6">

                  <h3 className="text-[24px] font-bold text-green-800 mb-1">
                    {event.title}
                  </h3>

                  <p className="text-[15px] text-green-500 font-medium mb-2">
                    {event.subCategory}
                  </p>

                  <p className="text-gray-500 text-[17px] line-clamp-3 leading-relaxed">
                    {event.description}
                  </p>

                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-gray-100 mt-auto">

                {/* Get Tickets */}
                <button
                  onClick={() => openTicketModal(event)}
                  className="bg-gradient-to-r from-green-800 to-amber-400 hover:bg-green-800 text-white font-semibold px-4 py-2 rounded-[19px] text-[15px] flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  Get Tickets <span>→</span>
                </button>

                {/* Duration */}
                <div className="flex items-center text-gray-400 text-[14px] font-medium">

                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  {event.duration}

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* ================= TICKET BOOKING MODAL ================= */}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative">

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 text-2xl"
            >
              <FaTimes />
            </button>

            {/* Modal Heading */}
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

              {/* Selected Event */}
              {selectedEvent && (
                <p className="text-green-700 font-bold text-lg pt-2">
                  {selectedEvent.title}
                </p>
              )}

            </div>

            {/* ================= FORM ================= */}

            <form
              ref={form}
              className="space-y-4"
              onSubmit={sendEmail}
            >

              {/* Event hidden input */}
              <input
                type="hidden"
                name="event"
                value={selectedEvent?.title || ""}
              />

              {/* Name */}
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

                {/* Tickets */}
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

                {/* Date */}
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

    </section>
  );
}