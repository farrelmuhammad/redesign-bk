import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex text-center bg-[#421708] px-4 py-8 justify-center">
        {/* <p className="text-sm text-white">
          Copyright 2021 • All Rights Reserved LuxSpace by BuildWith Angga
        </p> */}
        <div "container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" "flex items-center">
            <img
              "h-20 w-auto mr-3 sm:h-20"
              // className="hidden drop-shadow-2xl mt-8 h-20 w-auto lg:block"
              src="https://bkdelivery.co.id/static/website/img/logo_2022.38d01a7c7dd3.png"
              alt="Burger King Delivery"
            />
            {/* <span "self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span> */}
          </a>
          <div "flex md:order-2">
            <button
              type="button"
              "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
            {/* <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              "inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span "sr-only">Open main menu</span>
              <svg
                "w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button> */}
          </div>
          <div
            "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul "flex flex-col p-4 gap-20 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <a
                  href="#"
                  "block py-2 pl-3 pr-4 font-flame text-white rounded hover:bg-gray-100 md:hover:bg-transparent hover:underline"
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  "block py-2 pl-3 pr-4 font-flame text-white rounded hover:bg-gray-100 md:hover:bg-transparent hover:underline"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  "block py-2 pl-3 pr-4 font-flame text-white rounded hover:bg-gray-100 md:hover:bg-transparent hover:underline"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href="#"
                  "block py-2 pl-3 pr-4 font-flame text-white rounded hover:bg-gray-100 md:hover:bg-transparent hover:underline"
                >
                  Menu
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
