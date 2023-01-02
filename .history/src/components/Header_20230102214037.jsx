import React from "react";

const Header = () => {
  return (
    <>
      <div className="banner my-8 mx-4 md:mx-0">
        <div className="flex gap-4 w-full items-center justify-center">
          <div className="md:w-1/6 md:h-[224px] bg-[#B6D4A8] rounded-l rounded-[20px]"></div>
          <img
            src="https://images.unsplash.com/photo-1616481390073-8b2b2e1b2b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            className="flex-initial w-full max-h-[288px] object-fill"
            alt=""
          />
          <div className="md:w-1/6 md:h-[224px] bg-purple-1 rounded-r rounded-[20px]"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
