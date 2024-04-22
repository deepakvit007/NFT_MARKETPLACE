import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

// internal import
import Style from "./Error.module.css";
import images from "../../img";

// import from smart contract
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const Error = () => {
  const { error, setOpenError } = useContext(NFTMarketplaceContext);

  return (
    <div className={Style.Error} onClick={()=>setOpenError(false)} >
      <div className={Style.Error_box}>
        <div className={Style.Error_box_info}>
          <Image
            src={images.error}
            alt="error"
            width={100}
            height={100}
            className={Style.Error_box_info_img}
                  />
                  <p>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
