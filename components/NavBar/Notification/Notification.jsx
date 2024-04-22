import React from "react";
import Link from "next/link";
import Image from "next/image";

// Internal Import
import Style from "./Notification.module.css";
import images from "../../../img";

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image
            src={images.user1}
            alt="Profile Image"
            width={50}
            height={50}
          />
        </div>
        <div className={Style.notification_box_info}>
        <h4>Prajwal Luitel</h4>
        <p>Measure action your user . . .</p>
        <small>3 minutes</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  );
};

export default Notification;
