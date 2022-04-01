import React, { useState } from "react";

function Work() {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <h1 className=" text-center font-bold text-3xl mx-5 p-6 lg:text-5xl lg:py-14">
          Our Work
        </h1>
      </div>
      {/* work1 slide */}
      <div className=" flex flex-col-reverse lg:flex-row px-11 lg:px-28 gap-x-16 py-6">
        <div className="flex flex-1 flex-col items-start text-left">
          <h1 className="text-lg font-semibold text-white bg-slate-900 px-2">
            LOGISTICS WEB PLATFORM DEVELOPMENT
          </h1>
          <p className="text-xl lg:text-2xl font-semibold my-4   ">
            TraceRx: A Global Pharma Supply Chain Solution for International Aid
            Distribution
          </p>
          <p className="text-lg font-normal my-4 ">
            LeewayHertz has successfully built a web-based application on
            blockchain for TraceRx. TraceRx is a Platform for Tracing the
            Shipment of Drugs. It allows the UNO to trace the distribution of
            free drugs and identify inefficiency and losses.
          </p>
          <button
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            type="button"
            className="bg-blue-600 text-white  my-6 py-2 px-3 text-2xl"
          >
            See our work
            {isShown && <i class="py-1 fa-solid fa-arrow-right"></i>}
          </button>
        </div>
        <div className="relative">
          <div className="flex flex-1 justify-center ">
            <img className="" src="work1.webp" alt="" />
          </div>
        </div>
      </div>
      {/* work2 slide */}
      <div className=" flex flex-col lg:flex-row px-11 lg:px-28 gap-x-16 py-6">
        <div className="relative">
          <div className="flex flex-1 justify-center ">
            <img className="" src="work2.png" alt="" />
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start text-left">
          <h1 className="text-lg font-semibold text-white bg-slate-900 px-2">
            TELEMEDICINE APP
          </h1>
          <p className="text-xl lg:text-2xl font-semibold my-4   ">
            Telemedicine Platform For Hospitals and Clinics
          </p>
          <p className="text-lg font-normal my-4 ">
            We have built a secure and scalable Telemedicine App that allows
            Doctors and Patients to Communicate via Video, Voice and Text.
            Hospitals and Clinics can use our ready-to-deploy telemedicine app
            to generate more consulting for patients and doctors. It is not a
            marketplace, instead, it will be your private app for your clinic or
            healthcare institute.
          </p>
          <button
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            type="button"
            className="bg-blue-600 text-white  my-6 py-2 px-3 text-2xl"
          >
            {isShown && <i class="fa-solid fa-arrow-left"></i>}
            See our work
          </button>
        </div>
      </div>
      {/* work3 slide */}
      <div className=" flex flex-col-reverse lg:flex-row px-11 lg:px-28 gap-x-16 py-6">
        <div className="flex flex-1 flex-col items-start text-left">
          <h1 className="text-lg font-semibold text-white bg-slate-900 px-2">
            INTERNET OF THINGS DEVELOPMENT
          </h1>
          <p className="text-xl lg:text-2xl font-semibold my-4   ">
            Multi-Room Speaker Controls App
          </p>
          <p className="text-lg font-normal my-4 ">
            Riva is a powerful multi-room audio solution controlled by iOS and
            Android devices to stream multiple speakers without any acoustic
            latency. Our team of developers, designers and architects teamed up
            with the OEM and platform provider to offer a robust and scalable
            app experience. Riva speakers are Google and Apple certified and
            have won the CES awards.
          </p>
          <button
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            type="button"
            className="bg-blue-600 text-white  my-6 py-2 px-3 text-2xl"
          >
            See our work
            {isShown && <i class="py-1 fa-solid fa-arrow-right"></i>}
          </button>
        </div>
        <div className="relative">
          <div className="flex flex-1 justify-center ">
            <img className="" src="work3.png" alt="" />
          </div>
        </div>
      </div>
      {/* work4slide */}
      <div className=" flex flex-col lg:flex-row px-11 lg:px-28 gap-x-16 py-6">
        <div className="relative">
          <div className="flex flex-1 justify-center ">
            <img className="" src="work4.png" alt="" />
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start text-left">
          <h1 className="text-lg font-semibold text-white bg-slate-900 px-2">
            ONLINE AUCTION PLATFORM
          </h1>
          <p className="text-xl lg:text-2xl font-semibold my-4   ">
            Collectors Xchange
          </p>
          <p className="text-lg font-normal my-4 ">
            We developed a comprehensive web auction platform, Android and iOS
            apps to render portability into the auction process. The platforms
            are fully optimized for web, mobile, and search engines. The
            platform connects buyers and sellers to bid, sell and exchange their
            luxury collectibles. Users can access real-time information about
            auctions, bid from anywhere, save on commissions and eliminate
            unnecessary travel expenses.
          </p>
          <button
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            type="button"
            className="bg-blue-600 text-white  my-6 py-2 px-3 text-2xl"
          >
            {isShown && <i class="fa-solid fa-arrow-left"></i>}
            See our work
          </button>
        </div>
      </div>
      {/* work5 slide */}
      <div className=" flex flex-col-reverse lg:flex-row px-11 lg:px-28 gap-x-16 py-6 ">
        <div className="flex flex-1 flex-col items-start text-left">
          <h1 className="text-lg font-semibold text-white bg-slate-900 px-2">
            BLOCKCHAIN DEVELOPMENT
          </h1>
          <p className="text-xl lg:text-2xl font-semibold my-4   ">
            Monetary System on the Blockchain
          </p>
          <p className="text-lg font-normal my-4 ">
            We built a comprehensive monetary system on the blockchain that
            facilitates the storage and trading of digital currencies into a
            wide range of crypto and fiat pairs across the globe, all from one
            simple interface. We helped our client redesign the user interfaces
            of their website, create the node monitoring dashboard, update the
            stellar core version, and provide maintenance services to ensure
            that the platform is up and always running.
          </p>
          <button
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            type="button"
            className="bg-blue-600 text-white  my-6 py-2 px-3 text-2xl"
          >
            See our work
            {isShown && <i class="py-1 fa-solid fa-arrow-right"></i>}
          </button>
        </div>
        <div className="relative">
          <div className="flex flex-1 justify-center ">
            <img className="" src="work5.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
