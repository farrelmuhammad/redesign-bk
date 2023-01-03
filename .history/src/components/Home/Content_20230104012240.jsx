import { Rate } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import supabase from "../../utils/supabase/clients";

const Content = ({ data, loading }) => {
  // console.log(data)
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
          {data.map((menu) => (
            <div
              class="max-w-xs h-[300px] flex flex-col justify-between bg-white drop-shadow-xl rounded-lg border border-gray-400 mb-6 mx-auto py-5 px-4"
              key={menu.id}
            >
              <div>
                <img
                  src={menu.image}
                  alt=""
                  class="w-[300px] h-[200px] object-cover"
                />
                <h4
                  tabindex="0"
                  class="focus:outline-none text-[#8B542F] text-xl font-flame"
                >
                  {menu.name}
                </h4>
              </div>
              <div>
                <div class="flex items-center justify-end mt-2 text-gray-800">
                  {/* <Rate allowHalf defaultValue={2.5} /> */}
                  <div class="flex items-center justify-end">
                    {/* <Link to={`/product/${menu.name}`}> */}
                    <Link to="/products">
                      <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className="inline-block px-6 py-2 bg-[#ED7801] text-white font-extrabold tracking-wide text-xs leading-tight uppercase rounded shadow-md hover:bg-[#faaf18] hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Order
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Content;
