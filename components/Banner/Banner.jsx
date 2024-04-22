import React from "react";

// internal import
import Style from "./Banner.module.css";
import Link from "next/link";

const Banner = () => {

  return (
    <div className={Style.banner}>
      <div className={Style.banner_main_container}>
      <div
        className={Style.banner_container}
      >
        <div
          className={Style.banner_container_text}
              >
          <h1>
            Explore,
            Create 
            <br /> and Sell NFTs
          </h1>
          </div>
          <Link href="/searchPage">
            <button className={Style.banner_btn} id="banner_btn">
              Explore Now
            </button>
          </Link>
        </div>
        </div>
    </div>
  );
};

export default Banner;
