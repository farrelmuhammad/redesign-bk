import React from "react";

const Header = () => {
  return (
    <>
      <div className="banner my-8 mx-4 md:mx-0">
        <div className="flex gap-4 w-full items-center justify-center">
          {/* <div className="md:w-1/6 md:h-[224px] bg-[#B6D4A8] rounded-l rounded-[20px]">
          </div> */}
          <img
            src="https://bkdelivery.co.id/media/slider_image/2022/12/20/iuazeo3rf9k7o7mdjfcpul.jpg"
            className="md:w-1/6 md:h-[224px] bg-[#B6D4A8] rounded-l rounded-[20px]"
            alt=""
          />
          <img
            src="https://bkdelivery.co.id/media/slider_image/2022/12/31/jgosprwu5pzweryadmni4e.jpg"
            className="flex-initial w-full max-h-[288px] object-fill rounded-[20px]"
            alt=""
          />
          <img
            src="https://bkdelivery.co.id/media/slider_image/2022/12/20/iuazeo3rf9k7o7mdjfcpul.jpg"
            className="md:w-1/8 md:h-[224px] md:w-full bg-[#B6D4A8] rounded-r rounded-[20px]"
            alt=""
          />
          {/* <div className="md:w-1/6 md:h-[224px] bg-[#B6D4A8] rounded-r rounded-[20px]"></div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
