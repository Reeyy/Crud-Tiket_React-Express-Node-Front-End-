import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="py-16">
        <div className="xl:container xl:mx-auto  px-4 flex flex-col md:items-center justify-between md:flex-row">
          <div className="mb-8 lg:mb-0 xl:w-1/3 md:w-1/2 w-full lg:pr-0 md:pr-4 pr-0">
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold  text-gray-800  pr-16 lg:pr-0">
              Who we are
            </h1>
            <p className="mt-4 text-base leading-normal text-gray-600 lg:w-10/12 w-full xl:w-96 xl:pr-0 lg:pr-16 pr-0 ">
              Perusahaan Umum AKAP adalah Perushaan yang bergerak di bidang
              transportasi darat.
            </p>
            <Link to="/list">
              <span className="w-24 mt-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-indigo-600 hover:bg-indigo-900 rounded text-base font-medium leading-none text-center text-white">
                Tiket
                <svg
                className="z-40"
                width={12}
                height={8}
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
              </svg>  
              </span>
              
            </Link>
  
          </div>
          <div className="md:w-1/2">
            <div className="sm:flex justify-between w-full h-auto">
              <div className="h-48 md:h-64 lg:h-72 sm:block hidden rounded relative">
                <img
                  className="rounded inset-0 sm:w-72 w-full h-full object-cover object-top xl:object-center"
                  src="https://images.unsplash.com/photo-1589395241612-86d52ec4b9f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="bus"
                />
                <div className="px-6 py-4 bg-white absolute rounded-tr left-0 bottom-0">
                  <h5 className="text-base leading-none text-gray-800 mb-2">
                    Ekonomi
                  </h5>
                  <p className="text-base font-semibold leading-none text-gray-600">
                    <b>Rp.</b>200.000
                  </p>
                </div>
              </div>
              <div className="h-48 md:h-64 lg:h-72 rounded sm:block hidden relative sm:ml-6 sm:mt-0 mt-4">
                <img
                  className=" rounded inset-0 w-full  h-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1610290621034-3e4754ada6ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="bus"
                />

                <div className="px-6 py-4 bg-white absolute rounded-tr left-0 bottom-0">
                  <h5 className="text-base leading-none text-gray-800 mb-2">
                    Bisnis
                  </h5>
                  <p className="text-base font-semibold leading-none text-gray-600">
                    <b>Rp.</b>300.000
                  </p>
                </div>
              </div>
            </div>
            <div className="h-48 md:h-64 lg:h-72 sm:block hidden rounded relative mt-6">
              <img
                className="absolute rounded inset-0 w-full h-full object-cover object-center"
                src="https://images.unsplash.com/photo-1601369177733-4e7ab43fcab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="bus"
              />
              <div className="px-6 py-4 bg-white absolute rounded-tr left-0 bottom-0">
                <h5 className="text-base leading-none text-gray-800 mb-2">
                  Eksekutif
                </h5>
                <p className="text-base font-semibold leading-none text-gray-600">
                  <b>Rp.</b>400.000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
