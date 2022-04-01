import React from "react";

function Customer() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <h1 className=" text-center font-bold text-3xl  mx-5 p-6 lg:text-5xl lg:py-14">
          What Our Customers Say
        </h1>
      </div>
      {/* Customer1 */}
      <div className=" flex flex-col lg:flex-row border-2 lg:border-0 my-4 mx-11 lg:mx-36 px-5 lg:px-11 gap-x-16 lg:gap-x-32 py-6">
        <div className="flex flex-1 flex-col items-start text-left font-light lg:font-normal">
          <p className="text-xl lg:text-lg  my-4 ">
            <i className="fa-solid fa-quote-left"></i>
            <br></br>I came to LeewayHertz because of their reputation in the
            software development space. When we expanded the project to
            incorporate blockchain not only did they not flinch, they got more
            enthused. They have been stellar at every step of the way working
            towards solutions that worked straight to the heart of the idea on a
            micro and macro sense. I have already recommended them many times
            and I will continue to do so. The members of LeewayHertz have always
            promptly returned my calls or emails irrespective of the time. I
            have found them to be consistently available and committed to
            addressing my needs.
            <i className="fa-solid fa-quote-right"></i>
          </p>
          <p className="text-2xl lg:text-3xl font-semibold my-3 ">
            Matthew Rosen{" "}
            <i className="text-blue-700 fa-brands fa-linkedin"></i>
          </p>
          <p className="text-base lg:text-lg m-1">CEO at Tracerx</p>
        </div>
        <div className="">
          <img className="h-full  lg:h-96" src="customer1.jpg" alt="" />
        </div>
      </div>
      {/* customer2 */}
      <div className=" flex flex-col-reverse lg:flex-row border-2 lg:border-0 my-4 mx-11 lg:mx-36 px-5 lg:px-11 gap-x-16 lg:gap-x-32 py-6">
        <div className="">
          <img className="h-full  lg:h-96" src="customer2.png" alt="" />
        </div>
        <div className="flex flex-1 flex-col items-start text-left font-light lg:font-normal">
          <p className="text-xl lg:text-lg  my-4 ">
            <i className="fa-solid fa-quote-left"></i>
            <br></br>To bring out the exceptional user experience of the
            speakers through a mobile app, we were looking for a tech company
            that understood our needs and suggested recommendations on top of
            that to create a clean mobile app. We exactly got that. Our
            association with LeewayHertz was extremely rewarding; we continue to
            work with LeewayHertz on more audio products.
            <i className="fa-solid fa-quote-right"></i>
          </p>
          <p className="text-2xl lg:text-3xl font-semibold my-3 ">
            Rikki Farr <i className=" fa-brands fa-imdb text-5xl"></i>
          </p>
          <p className="text-base lg:text-lg m-1">
            Chairman at Audio Design Experts
          </p>
        </div>
      </div>
      {/* customer3 */}
      <div className=" flex flex-col lg:flex-row border-2 lg:border-0 my-4 mx-11 lg:mx-36 px-5 lg:px-11 gap-x-16 lg:gap-x-32 py-6">
        <div className="flex flex-1 flex-col items-start text-left font-light lg:font-normal">
          <p className="text-xl lg:text-lg  my-4 ">
            <i className="fa-solid fa-quote-left"></i>
            <br></br>Well, working with LeewayHertz on our iCruise app was
            delightful. From the first meeting to the launch of the app, the
            development team was very forthcoming and active. They laid in front
            of us a very clear and realistic roadmap to ensure that everyone was
            on the same page. We started with an iPhone app, and now we have
            built apps on Android, iPad, Tablet, Kindle and the Web with
            LeewayHertz.
            <i className="fa-solid fa-quote-right"></i>
          </p>
          <p className="text-2xl lg:text-3xl font-semibold my-3 ">
            Uf Tukel <i className="text-blue-700 fa-brands fa-linkedin"></i>
          </p>
          <p className="text-base lg:text-xl m-1">CEO at iCruise.com, WMPH</p>
        </div>
        <div className="">
          <img className="h-full  lg:h-96" src="customer3.webp" alt="" />
        </div>
      </div>
      {/* Mentioned in */}
      <div className="flex flex-wrap justify-center">
        <h1 className=" text-center font-bold text-2xl  mx-5 p-6 lg:text-5xl lg:py-14">
          As Mentioned in
        </h1>
        <img src="mention.png" alt=""></img>
      </div>
    </>
  );
}

export default Customer;
