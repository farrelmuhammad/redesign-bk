import React from "react";

const Header = () => {
  return (
    <>
      <div className="banner my-8 mx-4 md:mx-0">
        <div className="flex gap-4 w-full items-center justify-center">
          <div className="md:w-1/6 md:h-[224px] bg-[#B6D4A8] rounded-l rounded-[20px]">
            <img
              src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
              className="flex-initial w-full max-h-[288px] object-fill rounded-[20px]"
              alt=""
            />
          </div>
          <img
            src="https://bkdelivery.co.id/media/slider_image/2022/12/31/jgosprwu5pzweryadmni4e.jpg"
            className="flex-initial w-full max-h-[288px] object-fill rounded-[20px]"
            alt=""
          />
          <div className="md:w-1/6 md:h-[224px] bg-[#B6D4A8] rounded-r rounded-[20px]"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
