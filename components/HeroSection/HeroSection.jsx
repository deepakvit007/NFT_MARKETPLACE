import React, {useState, useEffect, useContext} from "react";
import Image from "next/image";

// internal import
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

// import from smart contract
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";


const HeroSection = () => {

  const { titleData } = useContext(NFTMarketplaceContext);

  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>{titleData} 🏞️</h1>
          <p>
            Discover a wide variety of exquisite NFTs across various domains.
            Mint your NFTs and sell them
          </p>
          <Button btnName="Explore Now"  />
        </div>

        <div className={Style.heroSection_box_right}>
          <Image
            src={images.lion}
            alt="Hero Section"
            width={470}
            height={470}
          />
              </div>
              
              
      </div>
    </div>
  );
};

export default HeroSection;
