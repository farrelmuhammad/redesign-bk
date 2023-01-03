import React from "react";

const Content = () => {
  return (
    <>
      <section className="flex flex-col mt-18 py-5 bg-[#FFF1CB]">
        <div className="container mx-auto mb-4">
          <div className="flex justify-center text-center mb-4">
            <h3 className="text-3xl capitalize font-flame text-[#8b542f] drop-shadow-lg font-semibold">
              Our Menus
            </h3>
          </div>
        </div>

        <div "flex w-full items-center flex justify-center items-center py-1 px-6">
          <div>
            <div "max-w-xs h-64 flex flex-col justify-between bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                <img 
                src="https://media-order.bkdelivery.co.id/thumb/group_photo/2022/12/19/2qgxwdgb6tcabhtfg52wa6_product_list.jpg"
                alt=""
                "w-20 h-[20px] object-cover"
                />
                <h4
                  tabindex="0"
                  "focus:outline-none text-gray-800 font-bold mb-3"
                >
                  13 things to work on
                </h4>
                <p
                  tabindex="0"
                  "focus:outline-none text-gray-800 text-sm"
                >
                  Probabo, inquit, sic agam, ut labore et voluptatem sequi
                  nesciunt, neque porro quisquam est, quid malum, sensu
                  iudicari, sed ut alterum.
                </p>
              </div>
              <div>
                <div "flex items-center justify-between text-gray-800">
                  <p
                    tabindex="0"
                    "focus:outline-none text-sm font-semibold"
                  >
                    March 28, 2020
                  </p>
                  <div "w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/single_card_with_title_and_description-svg1.svg"
                      alt="icon"
                    />
                  </div>
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
