import React from "react";

const Category = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-1/2 lg:w-1/4">
            <div className="bg-[#B6D4A8] rounded-[20px] h-[224px] flex items-center justify-center">
              <img
                src="https://bkdelivery.co.id/media/category_image/2021/10/13/1.jpg"
                alt=""
                className="w-[80%] object-contain"
              />
              <p className="text-white text-sm">Makanan</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
