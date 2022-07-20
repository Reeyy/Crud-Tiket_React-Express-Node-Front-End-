import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="mx-auto container lg:mt-60 mt-10 px-4 lg:px-0">
        <div className="lg:flex justify-center">
          <div className="lg:w-2/5">
            <div className="border-2 border-black px-4 py-4 lg:py-10 lg:px-10 bottom-0 my-8 block lg:hidden">
              <div className="flex flex-col">
                <div className="lg:text-4xl text-2xl text-gray-900 leading-9 font-bold f-f-d-s pb-6 text-left">
                  Hi There !
                </div>
                <div className="lg:text-2xl text-base tracking-tight f-f-l text-gray-700 lg:leading-8">
                  Welcome To Tiket Bus <b className="text-gray-900">AKAP</b>
                </div>
                <button className="text-base md:text-xl lg:text-2xl  lg:leading-5 f-f-l underline text-left font-bold focus:outline-none text-black-color mt-4 md:mt-6 lg:mt-8">
                  Click here To get Started
                </button>
              </div>
            </div>
            <div className="w-full">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1594825223369-381029794758?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
                alt="img"
              />
            </div>
            <div className="border-2 border-black px-4 py-10 lg:px-10 bottom-0 mt-8 hidden lg:block">
              <div className="flex flex-col">
                <div className="text-xl md:text-2xl lg:text-4xl text-gray-800 leading-9 f-f-d-s pb-6 text-left">
                  Hi There !
                </div>
                <div className="text-base md:text-xl lg:text-2xl tracking-tight f-f-l text-gray-700 leading-8">
                  Welcome To Tiket Bus <b className="text-gray-900">AKAP</b>
                </div>
                <Link
                  to="/about"
                  className="text-base md:text-xl lg:text-2xl hover:text-gray-600 lg:leading-5 f-f-l text-left font-bold focus:outline-none text-black-color mt-4 md:mt-6 lg:mt-8"
                >
                  Click here To get Started  👉
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 lg:pl-8">
            <div className="xl:h-2/5 lg:mt-0 mt-8">
              <img
                className="w-full h-full bg-cover bg-center object-cover"
                src="https://images.unsplash.com/photo-1607512060958-423166921a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80 "
                alt="img2"
              />
            </div>
            <div className="w-full mt-8">
              <img
                className="w-full bg-cover bg-center"
                src="https://images.unsplash.com/photo-1518412424119-845e50d2835f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="img3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
