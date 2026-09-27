// import React from 'react';

// const HeroSection = () => {
//   return (
//     <div 
//       className="relative w-full h-[83vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"
//       style={{
//         backgroundImage: './src/assets/ostrich-kDXK7dfT.jpeg'
//       }}
//     >

//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Content Container */}
//       <div className="relative z-10 px-4 max-w-4xl mx-auto text-white">
//         {/* Main Heading */}
//         <h1 className="text-[70px] font-extrabold tracking-wide drop-shadow-md -mt-18">
//           Welcome to <span className="text-green-900">Wild Zoo</span>
//         </h1>

//         {/* Subheading */}
//         <p className="mt-4 text-lg md:text-2xl font-medium tracking-normal text-gray-100 drop-shadow">
//           Explore & Shop for Wildlife Adventures
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;






















import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-[83vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('./src/assets/ostrich-kDXK7dfT.jpeg')"
      }}
    >

      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content Container */}
      <div className="relative z-10 px-4 max-w-4xl mx-auto text-white">

        {/* Main Heading */}
        <h1 className="text-[70px] font-extrabold tracking-wide drop-shadow-md -mt-18">
          Welcome to <span className="text-green-600">Wild Zoo</span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-[35px]  text-gray-100 drop-shadow">
          Explore & Shop for Wildlife Adventures
        </p>

      </div>
    </div>
  );
};

export default HeroSection;