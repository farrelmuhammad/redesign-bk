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
        <div className="grid grid-rows-2 grid-cols-9 gap-4">
          <div
            className="relative col-span-9 row-span-1 md:col-span-4 card"
            style={{ height: "180px" }}
          >
            <div className="card-shadow rounded-xl">
              <img
                src="https://media-order.bkdelivery.co.id/thumb/group_photo/2022/12/19/2qgxwdgb6tcabhtfg52wa6_product_list.jpg"
                alt=""
                className="w-full h-full object-cover object-center overlay overflow-hidden rounded-xl"
              />
            </div>
            <div
              className="overlay left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-72"
            >
              <h5 className="text-lg font-semibold">Living Room</h5>
              <span className="">18.309 items</span>
            </div>
            <a href="details.html" className="stretched-link">
              {/* <!-- fake children --> */}
            </a>
          </div>
          <div
            className="relative col-span-9 row-span-1 md:col-span-2 md:row-span-2 card"
          >
            <div className="card-shadow rounded-xl">
              <img
                src="https://media-order.bkdelivery.co.id/thumb/group_photo/2022/12/19/2qgxwdgb6tcabhtfg52wa6_product_list.jpg"
                alt=""
                className="w-full h-full object-cover object-center overlay overflow-hidden rounded-xl"
              />
            </div>
            <div
              className="overlay right-0 left-0 top-0 bottom-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12"
            >
              <h5 className="text-lg font-semibold">Decoration</h5>
              <span className="">77.392 items</span>
            </div>
            <a href="details.html" className="stretched-link">
              {/* <!-- fake children --> */}
            </a>
          </div>
          <div
            className="relative col-span-9 row-span-1 md:col-span-3 md:row-span-2 card"
          >
            <div className="card-shadow rounded-xl">
              <img
                src="https://media-order.bkdelivery.co.id/thumb/group_photo/2022/12/19/2qgxwdgb6tcabhtfg52wa6_product_list.jpg"
                alt=""
                className="w-full h-full object-cover object-center overlay overflow-hidden rounded-xl"
              />
            </div>
            <div
              className="overlay right-0 left-0 top-0 bottom-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12"
            >
              <h5 className="text-lg font-semibold">Living Room</h5>
              <span className="">22.094 items</span>
            </div>
            <a href="details.html" className="stretched-link">
              {/* <!-- fake children --> */}
            </a>
          </div>
          <div className="relative col-span-9 row-span-1 md:col-span-4 card">
            <div className="card-shadow rounded-xl">
              <img
                src="https://media-order.bkdelivery.co.id/thumb/group_photo/2022/12/19/2qgxwdgb6tcabhtfg52wa6_product_list.jpg"
                alt=""
                className="w-full h-full object-cover object-center overlay overflow-hidden rounded-xl"
              />
            </div>
            <div
              className="overlay left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-72"
            >
              <h5 className="text-lg font-semibold">Children Room</h5>
              <span className="">837 items</span>
            </div>
            <a href="details.html" className="stretched-link">
              {/* <!-- fake children --> */}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
