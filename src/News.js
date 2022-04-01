import React from "react";

function News() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <h1 className=" text-center font-bold text-3xl  mx-5 p-6 lg:text-5xl lg:py-14">
          In The News
        </h1>
      </div>
      <div className="absolute hidden lg:flex bg-slate-300 ml-96 h-cd w-3/4 -z-10"></div>
      <div className="flex flex-col mx-0 lg:mx-24 px-12 space-y-7">
        {/* news1 */}
        <div className="flex flex-col lg:flex-row space-x-0 pt-0 lg:space-x-6 lg:pt-3">
          <img src="news1.png" alt=""></img>
          <div className="flex flex-col space-y-2">
            <p className="text-lg lg:text-xl">Press Release</p>
            <h1 className="font-bold text-xl lg:text-2xl">
              XDC Foundation, in alliance with LeewayHertz, has launched the XDC
              Observatory dApp
            </h1>
            <p className="text-lg lg:text-xl">
              XDC Foundation, in collaboration with LeewayHertz, has launched a
              newly designed detailed network explorer, the XDC Observatory.
            </p>
            <button
              type="button"
              className="w-32 p-1 bg-blue-600 text-white text-xl"
            >
              Read More
            </button>
          </div>
        </div>
        {/* news2 */}
        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-6">
          <img src="news2.png" alt=""></img>
          <div className="flex flex-col space-y-2">
            <p className="text-lg lg:text-xl">Press Release</p>
            <h1 className="font-bold text-xl lg:text-2xl">
              LeewayHertz and Polygon announce a strategic partnership to
              synergize expertise in blockchain development
            </h1>
            <p className="text-lg lg:text-xl">
              LeewayHertz and Polygon announce a partnership to work for
              strategic improvements in the Polygon ecosystem by bringing
              together their deep skills in Blockchain framework and protocol
              development.
            </p>
            <button
              type="button"
              className="w-32 p-1 bg-blue-600 text-white text-xl"
            >
              Read More
            </button>
          </div>
        </div>
        {/* news3 */}
        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-6">
          <img className="w-full lg:w-1/2" src="news3.png" alt=""></img>
          <div className="flex flex-col space-y-2">
            <p className="text-lg lg:text-xl">Press Release</p>
            <h1 className="font-bold text-xl lg:text-2xl">
              LeewayHertz sets to bring transformation with NFT development
              services
            </h1>
            <p className="text-lg lg:text-xl">
              LeewayHertz has recently launched NFT development services to
              provide innovative solutions to the industry and meet the
              constantly rising demands for NFTs
            </p>
            <button
              type="button"
              className="w-32 p-1 bg-blue-600 text-white text-xl"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Awards */}
      <div className="flex flex-wrap justify-center">
        <h1 className=" text-center font-bold text-3xl  mx-5 p-6 lg:text-5xl lg:py-14">
          Awards & Recognition
        </h1>
      </div>
      <div className="flex flex-col space-x-0 lg:space-x-32 mx-28 lg:mx-32 lg:flex-row ">
        <img className="w-52 " src="award1.png" alt=""></img>
        <img className="w-52 " src="award2.png" alt=""></img>
        <img className="w-52 " src="award3.png" alt=""></img>
        <img className="w-52 " src="award4.png" alt=""></img>
      </div>

      {/* get started today */}
      <div className="flex flex-wrap justify-center">
        <h1 className=" text-center font-bold text-3xl  mx-5 p-6 lg:text-5xl lg:py-24">
          Get started today
        </h1>
      </div>
      <div className="px-20 lg:px-32">
        <div className="flex flex-col space-y-11 lg:space-y-0 gap-x-0 lg:flex-row lg:gap-x-16">
          {/* 1 */}
          <div className="flex flex-col space-y-2">
            <i className="text-8xl text-blue-600 fa-solid fa-address-book"></i>
            <h1 className="text-xl font-semibold">1.Contact Us</h1>
            <p className="text-lg">
              Fill the contact form protected by NDA, book a calendar and
              schedule a Zoom Meeting with our experts.
            </p>
          </div>
          {/* 2 */}
          <div className="flex flex-col space-y-2">
            <i className="text-8xl text-blue-600 fa-solid fa-user-plus"></i>
            <h1 className="text-xl font-semibold">2. Get a Consultation</h1>
            <p className="text-lg">
              Get on a call with our team to know the feasibility of your
              project idea.
            </p>
          </div>
          {/* 3 */}
          <div className="flex flex-col space-y-2">
            <i className="text-8xl text-blue-600 fa-solid fa-file-circle-check"></i>
            <h1 className="text-xl font-semibold">3. Get a Cost Estimate</h1>
            <p className="text-lg">
              Get on a call with our team to know the feasibility of your
              project idea.
            </p>
          </div>
          {/* 4 */}
          <div className="flex flex-col space-y-2">
            <i className="text-8xl text-blue-600 fa-solid fa-rocket"></i>
            <h1 className="text-xl font-semibold">4. Project Kickoff</h1>
            <p className="text-lg">
              Once the project is signed, we bring together a team from a range
              of disciplines to kick start your project.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
