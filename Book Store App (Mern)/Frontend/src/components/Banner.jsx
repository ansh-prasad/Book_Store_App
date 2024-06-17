import React from "react";
import banner from "../../public/Book.png";

export const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2x1 cintainer mx-auto md:px-20 px-4 flex md:flex-row my-20 d]">
        <div className="order-2 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcom Here To Learn Somtiong{" "}
              <span className="text-pink-500">New Everday!!!</span>
            </h1>

            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              et totam. Tempora amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!
            </p>

            <label className="input input-bordered flex items-center gap-2 ">
              Email
              <input
                type="text"
                className="grow"
                placeholder="daisy@site.com"
              />
            </label>
          </div>

          <button className="btn mt-6 btn-info">Submit</button>
        </div>

        <div className=" w-full md:w-1/2 px-2">
          <img src={banner} className="w-90 h-90" alt="" />
        </div>
      </div>
    </>
  );
};
