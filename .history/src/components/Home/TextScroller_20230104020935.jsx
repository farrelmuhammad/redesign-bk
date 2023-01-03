import { Emoji } from "emoji-picker-react";
import React from "react";

const TextScroller = () => {
  return (
    <>
      <div className="mx-auto max-w-auto h-20 sm:px-6 lg:px-8 bg-[#421708]">
        <div className="relative flex h-20 items-center justify-between mx-auto">
          <h3 className="text-3xl capitalize font-flame text-white drop-shadow-lg font-semibold">
            Welcome To BK Delivery
          </h3>
          <Emoji unified="1f60d" size="40" />
          <h3 className="text-3xl capitalize font-flame text-white drop-shadow-lg font-semibold">
            Welcome To Favourite Burger
          </h3>
          <Emoji unified="1f60d" size="40" />
          <h3 className="text-3xl capitalize font-flame text-white drop-shadow-lg font-semibold">
            Welcome To Favourite Burger
          </h3>
        </div>
      </div>
    </>
  );
};

export default TextScroller;
