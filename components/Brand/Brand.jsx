import React from "react";
import Image from "next/image";
import {useRouter} from "next/router";

//INTERNAL IMPORT
import Style from "./Brand.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex.js";

const Brand = () => {

  const router = useRouter();

  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
          <Image src={images.logo} alt="brand logo" width={100} height={70} />
          <h1>Explore the World of Crypto with FlameOn</h1>
          <p>An epitome of creative community ! </p>

          <div className={Style.Brand_box_left_btn}>
            <Button btnName="Create" handleClick={ ()=> router.push("/uploadNFT")} />
            <Button btnName="Discover" handleClick={()=> router.push("/searchPage")} />
          </div>
        </div>
        <div className={Style.Brand_box_right}>
          <Image src={images.crypto} alt="brand logo" width={430} height={370}  />
        </div>
      </div>
    </div>
  );
};

export default Brand;