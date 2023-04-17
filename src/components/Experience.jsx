import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";

import MongoDB from "../assets/portfolio/MongoDB-logo.jpg";

import tailwind from "../assets/tailwind.png";

const Experience = () => {
   const techs = [
      {
         id: 1,
         src: html,
         title: "HTML",
         style: "shadow-orange-500",
      },
      {
         id: 2,
         src: css,
         title: "CSS",
         style: "shadow-blue-500",
      },
      {
         id: 3,
         src: javascript,
         title: "JAVASCRIPT",
         style: "shadow-yellow-500",
      },
      {
         id: 4,
         src: reactImage,
         title: "REACT",
         style: "shadow-blue-600",
      },

      {
         id: 7,
         src: MongoDB,
         title: "MONGODB",
         style: "shadow-gray-400",
      },
      {
         id: 8,
         src: tailwind,
         title: "TAILWIND",
         style: "shadow-sky-400",
      },
   ];

   return (
      <div
         name="experience"
         className="bg-gradient-to-b from-gray-800 to-black w-full  md:py-[10rem]  py-[6rem]">
         <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
            <div>
               <p className="text-4xl font-bold border-b-4 border-gray-400 p-2 inline">
                  Experience
               </p>
               <p className="py-6">Technologies I Have Worked </p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
               {techs.map(({ id, src, title, style }) => (
                  <div
                     key={id}
                     className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                     <img src={src} alt="" className="w-20 mx-auto p-1" />
                     <p className="mt-10">{title}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Experience;
