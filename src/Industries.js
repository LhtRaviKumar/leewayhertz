import React from "react";

function Industries() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <h1 className=" text-center font-bold text-3xl mx-5 p-6 lg:text-4xl lg:py-14">
          Redefining Industries with Software Development
        </h1>
      </div>
      <div className=" flex flex-wrap justify-center gap-x-20 lg:ml-36 px-11 lg:gap-x-20 gap-y-11">
        <div className="flex flex-col w-48">
          <i className="text-blue-700 text-6xl fa-regular fa-heart"></i>
          <h1 className="font-semibold text-2xl lg:font-normal lg:text-xl py-4">
            Heathcare
          </h1>
        </div>

        <div className="flex flex-col w-48">
          <i className="text-blue-700 text-6xl fa-brands fa-itch-io"></i>
          <h1 className=" font-semibold text-2xl lg:font-normal lg:text-xl py-4">
            FinTech
          </h1>
        </div>

        <div className="flex flex-col w-48">
          <i className="text-blue-700 text-6xl fa-brands fa-twitch"></i>
          <h1 className=" font-semibold text-2xl lg:font-normal lg:text-xl py-4">
            Edtech
          </h1>
        </div>

        <div className="flex flex-col w-48">
          <i className="text-blue-700 text-6xl fa-brands fa-docker"></i>
          <h1 className=" font-semibold text-2xl lg:font-normal lg:text-xl py-4">
            Logistics
          </h1>
        </div>

        <div className="flex flex-col w-48">
          <i className="text-blue-700 text-6xl fa-solid fa-warehouse"></i>
          <h1 className=" font-semibold text-2xl lg:font-normal lg:text-xl py-4">
            Manufacturing
          </h1>
        </div>

        <div className="flex flex-col w-48">
          <i className="text-blue-700 text-6xl fa-solid fa-cart-shopping"></i>
          <h1 className="font-semibold text-2xl lg:font-normal lg:text-xl py-4">
            Retail & E-Commerce
          </h1>
        </div>

        <div className="flex flex-col w-48">
          <i className="text-blue-700 text-6xl fa-solid fa-hourglass-start"></i>
          <h1 className=" font-semibold text-2xl lg:font-normal lg:text-xl py-4">
            Startup
          </h1>
        </div>

        <div className="flex flex-col w-48">
          <i className="text-blue-700 text-6xl fa-brands fa-app-store"></i>
          <h1 className=" font-semibold text-2xl lg:font-normal lg:text-xl py-4">
            On Demand Apps
          </h1>
        </div>
      </div>
    </>
  );
}

export default Industries;
