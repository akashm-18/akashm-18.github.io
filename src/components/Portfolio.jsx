import React from "react";

import FoodApp from "../assets/portfolio/foodapp logo.jpg";
import GymLogo from "../assets/portfolio/gym logo new.jpg";

const Portfolio = () => {
   const portfolios = [
      {
         id: 1,
         src: FoodApp,
         href: "https://github.com/Akashmurugan10/foodapp",
      },

      {
         id: 2,
         src: GymLogo,
         href: "https://github.com/Akashmurugan10/foodapp",
      },
   ];

   return (
      <div
         name="portfolio"
         className="w-full  bg-gradient-to-b from-black to-gray-800 text-white  md:py-[7rem] py-[6rem]">
         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
               <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                  Portfolio
               </p>
               <p className="py-6 ">
                  Here My Works ! Keep in Touch For More Projects{" "}
               </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0">
               {portfolios.map(({ id, src, href }) => (
                  <div
                     key={id}
                     className="shadow-md shadow-gray-600 rounded-lg">
                     <img
                        src={src}
                        alt=""
                        className="rounded-md duration-200 hover:scale-105"
                     />
                     <div className="flex items-center justify-center ">
                        <a href={href} target="_blank">
                           <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                              Code
                           </button>
                        </a>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Portfolio;
