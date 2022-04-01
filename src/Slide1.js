import React, { useState } from "react";

export default function Slide1() {
  const [isShown, setIsShown] = useState(false);
  return (
    <section className="relative">
      <div className=" bg-gray-900 flex md:flex-row  items-center text-white flex-col lg:items-start">
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className=" text-3xl m-8 font-semibold md:text-4xl lg:text-5xl text-center md:m-4 lg:text-left lg:mt-28 lg:!ml-28 ">
            We build innovative solutions using emerging technologies.
          </h2>
          <p className=" text-lg text-center  mx-6  lg:text-left lg:mx-4 lg:text-3xl lg:ml-28 ">
            A software development company for startups and enterprises.
          </p>
          <div className="flex justify-center flex-wrap mt-6 lg: lg:mt-11 ">
            <button
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              type="button"
              className="flex justify-center bg-blue-600 text-white text-xl  p-2 px-24 lg:px-5 lg:text-2xl lg:ml-28   "
            >
              Get in touch
              {isShown && <i class="py-1 fa-solid fa-arrow-right"></i>}
            </button>
          </div>
        </div>
        <div className="flex justify-center flex-1 md:mt-5 lg:mb-0">
          <img
            className="pt-4 w-96 px-11 sm:w-3/4 sm:h-3/4 md:w-full md:h-1/4 md:p-0 lg:px-24"
            src="machine.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
// const el = document.getElementById("bun");
// const hidden = document.getElementById("arrow");

// el.addEventListener("mouseover", function handleMouseOver() {
//   hidden.style.display = "block";
//   // el.style.padding = "0rem";
// });

// // //  Show hidden arrow on hover

// //  (optionally) Hide DIV on mouse out
// el.addEventListener("mouseout", function handleMouseOut() {
//   hidden.style.display = "none";
//   // el.style.padding = "2rem";
// });

// const hidden = document.getElementById("arrow");
// function MouseOver(hidden) {
//   hidden.style.display = "block";
// }
// function MouseOut(hidden) {
//   hidden.style.display = "none";
// }
