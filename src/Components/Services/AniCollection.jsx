import React, { useState } from 'react';
import { useCart } from './CartContext';

import {
  FaInfoCircle,
  FaChevronDown,
  FaShoppingCart,
  FaCheckCircle,
} from 'react-icons/fa';

import camelImg from '../../assets/camle-CEspPtDm.jpeg';
import deerImg from '../../assets/dears-B3q2YiZG.jpeg';
import ostrichImg from '../../assets/ostrichlarge-C6MSnh8w.jpeg';
import sheepImg from '../../assets/sheeps-dSL2MMEN.jpeg';
import wildAnimalImg from '../../assets/animal-BGE1ugSx.jpeg';

const animals = [
  {
    id: 1,
    name: 'Dear',
    category: 'Mammal',
    price: 3000,
    image: camelImg,
    description: 'Strong animal used in farming and milk production.',
    details: {
      Habitat: 'Wetlands',
      Diet: 'Herbivore',
      'Special Feature': 'Stores fat in hump',
      Use: 'Milk & Farming',

    },
  },
  {
    id: 2,
    name: 'Camel',
    category: 'Mammal',
    price: 2500,
    image: deerImg,
    description: 'Desert survivor known for endurance and strength.',
    details: {
      Habitat: 'Deserts',
      Diet: 'Herbivore',
      Behavior: 'Stores fat in hump',
      Use: 'Transport & Farming',
    },
  },
  {
    id: 3,
    name: 'Ostrich',
    category: 'Bird',
    price: 2200,
    image: ostrichImg,
    description: "World's largest bird, cannot fly but runs fast.",
    details: {
      Habitat: 'Grasslands',
      Diet: 'Omnivore',
      Speed: 'Up to 70 km/h',
      Feature: 'Largest eggs',
    },
  },
  {
    id: 4,
    name: 'Wild Animal',
    category: 'Mammal',
    price: 2000,
    image: wildAnimalImg,
    description: 'General wildlife species for display.',
    details: {
      Habitat: 'Mixed',
      Diet: 'Depends',
      Use: 'Exhibition',
      Note: 'Varies by species',
    },
  },
  {
    id: 5,
    name: 'Deer',
    category: 'Mammal',
    price: 1800,
    image: sheepImg,
    description: 'Graceful and fast herbivore found in forests.',
    details: {
      Habitat: 'Forests',
      Diet: 'Herbivore',
      Special: 'Antlers(males)',
      Behavior: 'Fast Runner',
    },
  },
  {
    id: 6,
    name: 'Dear',
    category: 'Mammal',
    price: 1500,
    image: deerImg,
    description: 'Strong farm animal used for plowing.',
    details: {
      Habitat: 'Farms',
      Diet: 'Herbivore',
      Use: 'Agriculture',
      Strength: 'High endurance',
    },
  },
  {
    id: 7,
    name: 'Sheep',
    category: 'Mammal',
    price: 900,
    image: deerImg,
    description: 'Soft wool-producing animal.',
    details: {
      Habitat: 'Farms',
      Diet: 'Herbivore',
      Use: 'Wool & Meat',
      Skill: 'Calm',
    },
  },
  {
    id: 8,
    name: 'Dear',
    category: 'Mammal',
    price: 800,
    image: deerImg,
    description: 'Agile climber, useful for milk and meat.',
    details: {
      Habitat: 'Mountains',
      Diet: 'Herbivore',
      Use: 'Milk and meet',
      Skill: 'Climbing',
    },
  },
];

const AnimalCollection = () => {
  const { addToCart } = useCart();

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  // Add to Cart button
  const [addedId, setAddedId] = useState(null);

  const filteredAnimals = animals.filter((animal) => {
    const searchMatch = animal.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === 'All' || animal.category === category;

    return searchMatch && categoryMatch;
  });

  const handleCardClick = (animal) => {
    setSelectedAnimal(animal);

    // Existing functionality kept same
    addToCart(animal);
  };

  // Add to Cart button
  const handleAddToCart = (e, animal) => {
    e.stopPropagation();

    addToCart(animal);

    setAddedId(animal.id);

    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  };

  return (
    <section className="bg-gray-300/70 min-h-screen py-10 px-6 font-sans">
      <div className="max-w-[1320px] mx-auto">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row mt-7 sm:items-center justify-between gap-4 mb-8">

          {/* Heading */}
          <h2 className="text-[40px] font-bold text-green-950 tracking-tight">
            Animal Collection
          </h2>

          {/* Search + Filter */}
          <div className="flex items-center gap-3 w-full sm:w-auto">

            {/* Search */}
            <div className="relative w-full sm:w-[260px]">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full
                  h-10
                  px-3
                  border
                  border-gray-600
                  rounded-md
                  text-sm
                  text-gray-800
                  placeholder-gray-400
                  outline-none
                  focus:border-gray-500
                  shadow-sm
                  
                "
              />
            </div>

            {/* Category */}
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="
                  appearance-none
                  w-[100px]
                  h-10
                  pl-2
                  pr-8
                  border
                  border-gray-600
                  rounded-md
                  text-[15px]
                  text-gray-700
                  outline-none
                  cursor-pointer
                  shadow-sm
                "
              >
                <option value="All">All</option>
                <option value="Mammal">Mammal</option>
                <option value="Bird">Bird</option>
              </select>

              <FaChevronDown
                className="
                  absolute
                  right-3.5
                  top-5
                  -translate-y-1/2
                  text-gray-500
                  pointer-events-none
                  text-xs
                "
              />
            </div>

          </div>
        </div>

        {/* ================= CARDS ================= */}
        {filteredAnimals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group">

            {filteredAnimals.map((animal) => (
              <div
                key={animal.id}
                onClick={() => handleCardClick(animal)}
                className="
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  border
                  border-gray-200
                  shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                  hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                  transition-all
                  duration-700
                  cursor-pointer
                  flex
                  flex-col
                  hover:-translate-y-2
                  hover:scale-101
                "
              >

                {/* Image */}
                <div className="w-full h-[220px] overflow-hidden bg-gray-100">
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      hover:scale-105
                      transition-transform
                      duration-500
                    "
                  />
                </div>

                {/* Card Content */}
                <div className="px-5 py-2 flex flex-col justify-between flex-grow">

                  <div>
                    {/* Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {animal.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed min-h-[30px] ">
                      {animal.description}
                    </p>
                  </div>

                  {/* Price + Info Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[17px] font-semibold text-gray-800">
                      ${animal.price}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedAnimal(animal);
                      }}
                      className="text-gray-700 hover:text-black transition-colors"
                      title="Information"
                    >
                      <FaInfoCircle className="text-lg" />
                    </button>
                  </div>

                  {/* ADD TO CART BUTTON  */}
                  <button
                    type="button"
                    onClick={(e) => handleAddToCart(e, animal)}
                    className="
                      w-full
                      mt-4
                      bg-[#1e532b]
                      hover:bg-[#163f20]
                      text-white
                      py-2.5
                      rounded-md
                      text-sm
                      font-medium
                      flex
                      items-center
                      justify-center
                      gap-2
                      transition-colors
                      mb-3
                    "
                  >
                    {addedId == animal.id ? (
                      <>
                        <FaCheckCircle />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <FaShoppingCart />
                        Add to Cart
                      </>
                    )}
                  </button>

                </div>
              </div>
            ))}

          </div>
        ) : (
          /* NO RESULT  */
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-gray-600">
              No animals found
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Try a different search or category.
            </p>
          </div>
        )}

      </div>

      {/* INFO MODAL  */}
      {selectedAnimal && (
        <div
          className="
            fixed
            inset-0
            z-[2000]
            bg-black/50
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-4
          "
          onClick={() => setSelectedAnimal(null)}
        >
          <div
            className="
              bg-white
              w-full
              max-w-[500px]
              rounded-xl
              overflow-hidden
              shadow-2xl
              animate-in
              fade-in
              zoom-in-95
              duration-200
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Image */}
            <div className="w-full h-[240px] bg-gray-100">
              <img
                src={selectedAnimal.image}
                alt={selectedAnimal.name}
                className="w-[100%] h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-green-900 mb-2">
                {selectedAnimal.name}
              </h2>

              <p className="text-sm text-gray-600 mb-2">
                {selectedAnimal.description}
              </p>

              {/* Details List */}
              {selectedAnimal.details && (
                <div className="space-y-1.5 border-t border-gray-100 pt-3 mb-6">
                  {Object.entries(selectedAnimal.details).map(([key, val]) => (
                    <p key={key} className="text-xs sm:text-sm text-green-950 font-mono">
                      <span className=" text-green-950 font-mono text-[16px]">
                        {key}:
                      </span>{' '}
                      {val}
                    </p>
                  ))}
                </div>
              )}

              {/* Red Close Button */}
              <button
                type="button"
                onClick={() => setSelectedAnimal(null)}
                className="
                  bg-[#cc1111]
                  hover:bg-[#aa0a0a]
                  text-white
                  px-6
                  py-2
                  rounded
                  text-sm
                  font-medium
                  transition-colors
                  shadow-sm
                "
              >
                Close
              </button>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default AnimalCollection;

