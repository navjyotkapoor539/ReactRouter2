import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="mx-auto w-full max-w-8xl">
    <img className="w-full h-full object-cover relative" src="https://www.classcentral.com/report/wp-content/uploads/2022/10/React-JS-BCG-Banner.png" alt="" />
      <div className="absolute w-full h-full top-0 bottom-0">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          {/* <img
            className="w-96"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="image1"
          /> */}
        </div>
      </aside>

      <div className="grid  place-items-center sm:mt-20">
      </div>

      {/* <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Lorem Ipsum Yojo
      </h1> */}
      </div>
    </div>
  );
}
