import React from "react";
function Technologies() {
  return (
    <>
      <div>
        <h1 className=" font-bold flex py-3 px-10 text-3xl lg:px-40 lg:justify-center lg:text-center lg:py-8 lg:font-semibold lg:text-4xl ">
          Transforming Business Ecosystems with Emerging Technologies
        </h1>
        <p className="font-light flex px-10 text-xl lg:px-40 lg:font-normal">
          Over the last 10 years, we have consulted, designed and developed 100+
          digital products for startups, small-medium companies and enterprises.
          Our award-winning products are now used by millions of consumers.
        </p>
        <div className="py-4 gap-5 flex flex-col px-10 text-black lg:hidden">
          <div className="flex">
            <i className="text-3xl fa-regular fa-circle-right"></i>
            <p className=" text-2xl font-semibold px-4">Blockchain</p>
          </div>
          <div className="flex">
            <i className="text-3xl fa-regular fa-circle-right"></i>
            <p className=" text-2xl font-semibold px-4">Software Development</p>
          </div>
          <div className="flex">
            <i className="text-3xl fa-regular fa-circle-right"></i>
            <p className=" text-2xl font-semibold px-4">Internet of Things</p>
          </div>
          <div className="flex">
            <i className="text-3xl fa-regular fa-circle-right"></i>
            <p className=" text-2xl font-semibold px-4">Software Consulting</p>
          </div>
          <div className="flex">
            <i className="text-3xl fa-regular fa-circle-right"></i>
            <p className=" text-2xl font-semibold px-4">
              Artificial Intelligence
            </p>
          </div>
          <div className="flex">
            <i className="text-3xl fa-regular fa-circle-right"></i>
            <p className=" text-2xl font-semibold px-4">design</p>
          </div>
          <div className="flex">
            <button
              type="button"
              className="bg-blue-600 text-white  py-1 px-2 md:px-5  text-2xl"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden">
        <img src="clients.png" alt=""></img>
      </div>
      {/* large screen boxex */}
      <div className="hidden lg:flex lg:p-5 lg:flex-wrap">
        <div className="px-16 cursor-pointer w-1/3 hover:border-2 hover:shadow-xl">
          <img className="w-32 " src="blockchain.png" alt=""></img>
          <h1 className="font-bold text-lg">Blockchain</h1>
          <p className="font-semibold py-4">
            By implementing blockchain, we automate a variety of business
            processes, from secure customer data exchange to transparent supply
            chain management and asset digitization
          </p>
        </div>

        <div className="px-16 cursor-pointer w-1/3 hover:border-2 hover:shadow-xl">
          <img className="w-32 " src="blockchain.png" alt=""></img>
          <h1 className="font-bold text-lg">Software Developments</h1>
          <p className="font-semibold py-4">
            By implementing blockchain, we automate a variety of business
            processes, from secure customer data exchange to transparent supply
            chain management and asset digitization
          </p>
        </div>

        <div className="px-16 cursor-pointer w-1/3 hover:border-2 hover:shadow-xl">
          <img className="w-32 " src="blockchain.png" alt=""></img>
          <h1 className="font-bold text-lg">Internet of Things</h1>
          <p className="font-semibold py-4">
            By implementing blockchain, we automate a variety of business
            processes, from secure customer data exchange to transparent supply
            chain management and asset digitization
          </p>
        </div>

        <div className="px-16 cursor-pointer w-1/3 hover:border-2 hover:shadow-xl">
          <img className="w-32 " src="blockchain.png" alt=""></img>
          <h1 className="font-bold text-lg">Software Consulting</h1>
          <p className="font-semibold py-4">
            By implementing blockchain, we automate a variety of business
            processes, from secure customer data exchange to transparent supply
            chain management and asset digitization
          </p>
        </div>

        <div className="px-16 cursor-pointer w-1/3 hover:border-2 hover:shadow-xl">
          <img className="w-32 " src="blockchain.png" alt=""></img>
          <h1 className="font-bold text-lg">Artificial Intelligence</h1>
          <p className="font-semibold py-4">
            By implementing blockchain, we automate a variety of business
            processes, from secure customer data exchange to transparent supply
            chain management and asset digitization
          </p>
        </div>

        <div className="px-16 cursor-pointer w-1/3 hover:border-2 hover:shadow-xl">
          <img className="w-32 " src="blockchain.png" alt=""></img>
          <h1 className="font-bold text-lg">design</h1>
          <p className="font-semibold py-4">
            By implementing blockchain, we automate a variety of business
            processes, from secure customer data exchange to transparent supply
            chain management and asset digitization
          </p>
        </div>
      </div>

      <img
        className="hidden lg:flex lg:py-8"
        src="graphclients.png"
        alt=""
      ></img>
    </>
  );
}
export default Technologies;
