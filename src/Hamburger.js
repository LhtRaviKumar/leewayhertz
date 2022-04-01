import React from "react";

function Hamburger() {
  return (
    <>
      <ul className=" font-medium text-lg py-1 px-2 space-y-4">
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Industries</li>
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
    </>
  );
}

export default Hamburger;
