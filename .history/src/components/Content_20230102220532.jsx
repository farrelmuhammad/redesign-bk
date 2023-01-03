import React from "react";

const Content = () => {
  return (
    <>
      <section className="flex flex-col py-3">
        <div className="container mx-auto mb-4">
          <div className="flex justify-center text-center mb-4">
            <h3 className="text-3xl capitalize font-flame text-[#8b542f] font-semibold">
              Our Menus
            </h3>
          </div>
        </div>
        <div "flex justify-center">
          <div "rounded-lg shadow-lg bg-white max-w-sm max-h-[20px]">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                "rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                alt=""
              />
            </a>
            <div "p-6">
              <h5 "text-gray-900 text-xl font-medium mb-2">Card title</h5>
              <p "text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                " inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
