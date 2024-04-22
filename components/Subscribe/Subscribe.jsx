import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";

// internal import
import Style from "./Subscribe.module.css";
import images from "../../img";

const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>Always Remain Updated</h2>
          <p>
            Be a part of our exclusive community and get regular updates on NFTs
            and more
          </p>
          <div className={Style.subscribe_box_left_box}>
            <span>01</span>
            <small>Get more discount</small>
          </div>
          <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>Get premium contents</small>
          </div>
          <div className={Style.subscribe_box_left_input}>
            <input type="email" placeholder="Enter your email" />
            <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
          </div>
        </div>

        <div className={Style.subscribe_box_right}>
          <Image
            className={Style.subscribe_box_right_img}
            src={images.lion}
            alt="get update"
            height={350}
            width={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
