import { Rate } from "antd";
import React from "react";
import supabase from "../utils/clients";

const Content = () => {
  
  return (
    <>
      <section className="flex flex-col mt-20 py-5 bg-[#FFF1CB]">
        <div className="container mx-auto mb-4">
          <div className="flex justify-center text-center mb-4">
            <h3 className="text-3xl capitalize font-flame text-[#8b542f] drop-shadow-lg font-semibold">
              Our Menus
            </h3>
          </div>
        </div>

        <div class="grid lg:grid-cols-3 sm:gap-3 sm:grid-cols-2 w-10/12 mx-auto justify-center items-center py-1 px-6">
          <div class="max-w-xs h-[300px] flex flex-col justify-between bg-white drop-shadow-xl rounded-lg border border-gray-400 mb-6 mx-auto py-5 px-4">
            <div>
              <img
                src="https://media-order.bkdelivery.co.id/thumb/group_photo/2022/12/19/2qgxwdgb6tcabhtfg52wa6_product_list.jpg"
                alt=""
                class="w-[300px] h-[200px] object-cover"
              />
              <h4
                tabindex="0"
                class="focus:outline-none text-[#8B542F] text-xl font-flame"
              >
                13 things to work on
              </h4>
            </div>
            <div>
              <div class="flex items-center justify-between text-gray-800">
                {/* <p
                  tabindex="0"
                  class="focus:outline-none text-sm font-semibold"
                >
                  Rating
                </p> */}
                <Rate allowHalf defaultValue={2.5} />
                <div class="flex items-center justify-center">
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2 bg-[#ED7801] text-white font-extrabold tracking-wide text-xs leading-tight uppercase rounded shadow-md hover:bg-[#faaf18] hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="max-w-xs h-[300px] flex flex-col justify-between drop-shadow-xl bg-white rounded-lg border border-gray-400 mb-6 mx-auto py-5 px-4">
            <div>
              <img
                src="https://media-order.bkdelivery.co.id/thumb/group_photo/2021/6/21/jujfhu7hzaj7kzrbaqmrhf_product_list.png"
                alt=""
                class="w-[300px] h-[200px] object-cover"
              />
              <h4
                tabindex="0"
                class="focus:outline-none text-[#8B542F] text-xl font-flame"
              >
                13 things to work on
              </h4>
            </div>
            <div>
              <div class="flex items-center justify-between text-gray-800">
                {/* <p
                  tabindex="0"
                  class="focus:outline-none text-sm font-semibold"
                >
                  Rating
                </p> */}
                <Rate allowHalf defaultValue={2.5} />
                <div class="flex items-center justify-center">
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2 bg-[#ED7801] text-white font-extrabold tracking-wide text-xs leading-tight uppercase rounded shadow-md hover:bg-[#faaf18] hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="max-w-xs h-[300px] flex flex-col justify-between drop-shadow-xl bg-white rounded-lg border border-gray-400 mb-6 mx-auto py-5 px-4">
            <div>
              <img
                src="https://media-order.bkdelivery.co.id/thumb/group_photo/2022/12/19/2qgxwdgb6tcabhtfg52wa6_product_list.jpg"
                alt=""
                class="w-[300px] h-[200px] object-cover"
              />
              <h4
                tabindex="0"
                class="focus:outline-none text-[#8B542F] text-xl font-flame"
              >
                13 things to work on
              </h4>
            </div>
            <div>
              <div class="flex items-center justify-between text-gray-800">
                {/* <p
                  tabindex="0"
                  class="focus:outline-none text-sm font-semibold"
                >
                  Rating
                </p> */}
                <Rate allowHalf defaultValue={2.5} />
                <div class="flex items-center justify-center">
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2 bg-[#ED7801] text-white font-extrabold tracking-wide text-xs leading-tight uppercase rounded shadow-md hover:bg-[#faaf18] hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="max-w-xs h-[300px] flex flex-col justify-between drop-shadow-xl bg-white rounded-lg border border-gray-400 mb-6 mx-auto py-5 px-4">
            <div>
              <img
                src="https://media-order.bkdelivery.co.id/thumb/group_photo/2022/12/19/2qgxwdgb6tcabhtfg52wa6_product_list.jpg"
                alt=""
                class="w-[300px] h-[200px] object-cover"
              />
              <h4
                tabindex="0"
                class="focus:outline-none text-[#8B542F] text-xl font-flame"
              >
                13 things to work on
              </h4>
            </div>
            <div>
              <div class="flex items-center justify-between text-gray-800">
                {/* <p
                  tabindex="0"
                  class="focus:outline-none text-sm font-semibold"
                >
                  Rating
                </p> */}
                <Rate allowHalf defaultValue={2.5} />
                <div class="flex items-center justify-center">
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2 bg-[#ED7801] text-white font-extrabold tracking-wide text-xs leading-tight uppercase rounded shadow-md hover:bg-[#faaf18] hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="max-w-xs h-[300px] flex flex-col justify-between drop-shadow-xl bg-white rounded-lg border border-gray-400 mb-6 mx-auto py-5 px-4">
            <div>
              <img
                src="https://media-order.bkdelivery.co.id/thumb/group_photo/2022/12/19/2qgxwdgb6tcabhtfg52wa6_product_list.jpg"
                alt=""
                class="w-[300px] h-[200px] object-cover"
              />
              <h4
                tabindex="0"
                class="focus:outline-none text-[#8B542F] text-xl font-flame"
              >
                13 things to work on
              </h4>
            </div>
            <div>
              <div class="flex items-center justify-between text-gray-800">
                {/* <p
                  tabindex="0"
                  class="focus:outline-none text-sm font-semibold"
                >
                  Rating
                </p> */}
                <Rate allowHalf defaultValue={2.5} />
                <div class="flex items-center justify-center">
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2 bg-[#ED7801] text-white font-extrabold tracking-wide text-xs leading-tight uppercase rounded shadow-md hover:bg-[#faaf18] hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="max-w-xs h-[300px] flex flex-col justify-between drop-shadow-xl bg-white rounded-lg border border-gray-400 mb-6 mx-auto py-5 px-4">
            <div>
              <img
                src="https://media-order.bkdelivery.co.id/thumb/group_photo/2022/12/19/2qgxwdgb6tcabhtfg52wa6_product_list.jpg"
                alt=""
                class="w-[300px] h-[200px] object-cover"
              />
              <h4
                tabindex="0"
                class="focus:outline-none text-[#8B542F] text-xl font-flame"
              >
                13 things to work on
              </h4>
            </div>
            <div>
              <div class="flex items-center justify-between text-gray-800">
                {/* <p
                  tabindex="0"
                  class="focus:outline-none text-sm font-semibold"
                >
                  Rating
                </p> */}
                <Rate allowHalf defaultValue={2.5} />
                <div class="flex items-center justify-center">
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2 bg-[#ED7801] text-white font-extrabold tracking-wide text-xs leading-tight uppercase rounded shadow-md hover:bg-[#faaf18] hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
