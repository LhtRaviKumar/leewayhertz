import React from "react";

function Insights() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <h1 className=" text-center font-bold text-3xl mx-5 p-6 lg:text-5xl lg:py-14">
          Insights
        </h1>
      </div>
      <div className="flex flex-col py-4 px-6 space-y-6 lg:space-y-0 justify-center lg:flex-row lg:py-6 lg:px-36 lg:gap-x-16">
        <div className="flex flex-col w-full lg:w-1/3 ">
          <img src="insights1.png" alt=""></img>
          <h1 className=" font-bold text-2xl py-5">
            Metaverse Use Cases and Benefits
          </h1>
          <p className=" text-lg">
            Metaverse seems to be taking over the digital world with its
            extensive virtual environment and diverse use cases. Discover how
            this technology is relevant to you and the benefits it brings.
          </p>
        </div>

        <div className="flex flex-col w-full lg:w-1/3 ">
          <img src="insights2.png" alt=""></img>
          <h1 className=" font-bold text-2xl py-5">
            How can NFT Ticketing disrupt the ticketing industry?
          </h1>
          <p className="  text-lg">
            NFT Ticketing is set to completely transform the way event ticketing
            works by storing NFT-based tickets on the blockchain.
          </p>
        </div>

        <div className="flex flex-col w-full lg:w-1/3">
          <img src="insights3.png" alt=""></img>
          <h1 className=" font-bold text-2xl py-5">
            Step-by-step Guide on How to develop an NFT Marketplace Platform
          </h1>
          <p className=" text-lg">
            Here is a step-by-step tutorial on How to develop the NFT
            Marketplace Platform using the Flow blockchain platform and IPFS and
            what to consider when building it.
          </p>
        </div>
      </div>
    </>
  );
}

export default Insights;
