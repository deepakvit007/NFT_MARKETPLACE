import React from "react";
import Image from "next/image";

// local import
import Style from "./Service.module.css";
import images from "../../img";

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="filter and discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Explore</span>
          </p>
          <h3>Explore Community</h3>
          <p>Visit and explore the NFTs from various artists of our community. </p>
        </div>

        <div className={Style.service_box_item}>
          <Image
            src={images.service2}
            alt="filter and discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Link</span>
          </p>
          <h3>Link Your Wallet</h3>
          <p>Link Your Wallet in order to be able to buy and sell NFTs.</p>
        </div>

        <div className={Style.service_box_item}>
          <Image
            src={images.service3}
            alt="filter and discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Create</span>
          </p>
          <h3>Create your NFT</h3>
          <p>You are able to mint your NFTs and list them on the marketplace for others to explore. </p>
        </div>

        <div className={Style.service_box_item}>
          <Image
            src={images.service4}
            alt="filter and discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Trade</span>
          </p>
          <h3>Buy, Sell, Earn</h3>
          <p>Get involved in NFTs trading and generate considerable income.</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
