import React, { useState } from "react";
import Hamburger from "./Hamburger";

function Nav() {
  // hamBurger
  const [navbarOpen, setNavbarOpen] = useState(true);
  const toggleNavBar = () => {
    setNavbarOpen(!navbarOpen);
  };
  // product
  const [isShown, setIsShown] = useState(false);
  // service
  const [isShown2, setIsShown2] = useState(false);
  // Industries
  const [isShown3, setIsShown3] = useState(false);
  return (
    <>
      {/* navbar */}
      <nav className="lg:px-11 flex items-center py-1 lg:py-5">
        <div className="pt-2 px-5 w-52">
          <img src="logo.svg" alt="" />
        </div>
        <ul className=" hidden lg:flex flex-1 justify-end items-center gap-9  uppercase text-lg lg:text-xl">
          <li
            className="cursor-pointer"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            Products<i className="fa-solid fa-angle-down px-1"></i>
          </li>
          <li
            className="cursor-pointer"
            onMouseEnter={() => setIsShown2(true)}
            onMouseLeave={() => setIsShown2(false)}
          >
            Services<i className="fa-solid fa-angle-down px-1"></i>
          </li>
          <li
            className="cursor-pointer"
            onMouseEnter={() => setIsShown3(true)}
            onMouseLeave={() => setIsShown3(false)}
          >
            Industries<i className="fa-solid fa-angle-down px-1"></i>
          </li>
          <li className="cursor-pointer">Insights</li>
          <li className="cursor-pointer">Work</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Community</li>
          <button
            type="button"
            className="bg-blue-600 text-white  py-1 px-3 text-lg lg:text-xl  uppercase"
          >
            <a href="https://www.leewayhertz.com/contact-us/"> CONTACT US</a>
          </button>
        </ul>
        <div className="flex lg:hidden flex-1 justify-end p-2 ">
          <button onClick={toggleNavBar}>
            <i className="text-2xl fas fa-bars"></i>
          </button>
        </div>
      </nav>
      <div className="">{navbarOpen ? null : <Hamburger />}</div>

      {/* Products */}
      {isShown && (
        <div className="ml-24 absolute z-10 bg-white ">
          <div className="flex space-x-11 px-5 py-6">
            <div className="flex flex-col w-52 font-bold">
              <img src="product1.png" alt=" "></img>
              <h1>Ai Products</h1>
            </div>
            <div className="flex flex-col w-52 font-bold">
              <img src="product2.png" alt=" "></img>
              <h1>NFT MarketPlace</h1>
            </div>

            <div className="flex flex-col w-52 font-bold">
              <img src="product3.png" alt=" "></img>
              <h1>Decentralized Cloud Storage</h1>
            </div>

            <div className="flex flex-col w-52 font-bold">
              <img src="product4.png" alt=" "></img>
              <h1>NFT Gaming Marketplace</h1>
            </div>

            <div className="flex flex-col w-52 font-bold">
              <img src="product5.png" alt=" "></img>
              <h1>Oracle Implementation Solution</h1>
            </div>
          </div>
        </div>
      )}
      {/* services */}
      {isShown2 && (
        <div className="flex ml-24 absolute z-10 bg-white space-x-20 ">
          <div className="flex flex-col font-bold py-16 space-y-6 pl-4 ">
            <h1>
              Artificial Intelligence{" "}
              <i className="px-1 fa-solid fa-angle-right"></i>
            </h1>
            <h1>
              Blockchain<i className="px-1 fa-solid fa-angle-right"></i>
            </h1>
            <h1>
              Hire Developers
              <i className="px-1 fa-solid fa-angle-right"></i>
            </h1>
            <h1>
              Internet of Things (IoT)
              <i className="px-1 fa-solid fa-angle-right"></i>
            </h1>
            <h1>
              Software Consulting
              <i className="px-1 fa-solid fa-angle-right"></i>
            </h1>
            <h1>
              Software Development
              <i className="px-1 fa-solid fa-angle-right"></i>
            </h1>
          </div>
          {/* AI */}
          <div className="flex space-x-11 px-5 py-6">
            <div className="flex flex-col w-52 font-bold">
              <img src="ai1.png" alt=" "></img>
              <h1>Artificial Intelligence</h1>
            </div>

            <div className="flex flex-col w-52 font-bold">
              <img src="ai2.png" alt=" "></img>
              <h1>TensorFlow Development</h1>
            </div>

            <div className="flex flex-col w-52 font-bold">
              <img src="ai3.png" alt=" "></img>
              <h1>Computer Vision Development</h1>
            </div>

            <div className="flex flex-col w-52 font-bold">
              <img src="ai4.png" alt=" "></img>
              <h1>Machine Learning</h1>
            </div>
          </div>
        </div>
      )}
      {/* Industries */}
      {isShown3 && (
        <div className="ml-24 absolute hover:relative z-10 bg-white ">
          <div className="flex flex-col px-6">
            <div className="flex space-x-11 px-5 py-6">
              <div className="flex flex-col w-52 font-bold">
                <img src="in1.png" alt=" "></img>
                <h1>Consumer Electronics</h1>
              </div>

              <div className="flex flex-col w-52 font-bold">
                <img src="in2.png" alt=" "></img>
                <h1>Fintech</h1>
              </div>

              <div className="flex flex-col w-52 font-bold">
                <img src="in3.png" alt=" "></img>
                <h1>Healthcare</h1>
              </div>

              <div className="flex flex-col w-52 font-bold">
                <img src="in4.png" alt=" "></img>
                <h1>Insurance</h1>
              </div>

              <div className="flex flex-col w-52 font-bold">
                <img src="in5.png" alt=" "></img>
                <h1>Logistics</h1>
              </div>
            </div>

            <div className="flex space-x-11 px-5 py-6">
              <div className="flex flex-col w-52 font-bold">
                <img src="in6.png" alt=" "></img>
                <h1>On-Demand App Development</h1>
              </div>

              <div className="flex flex-col w-52 font-bold">
                <img src="in7.png" alt=" "></img>
                <h1>Manufacturing</h1>
              </div>

              <div className="flex flex-col w-52 font-bold">
                <img src="in8.jpg" alt=" "></img>
                <h1>Edtech</h1>
              </div>

              <div className="flex flex-col w-52 font-bold">
                <img src="in9.png" alt=" "></img>
                <h1>Startup</h1>
              </div>

              <div className="flex flex-col w-52 font-bold">
                <img src="in10.png" alt=" "></img>
                <h1>Travel</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Nav;
