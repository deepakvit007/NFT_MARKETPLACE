import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";

// internal import
import Style from "./BigNFTSlider.module.css";
import images from "../../img";
import Button from "../Button/Button";



const BigNFTSlider = ({sliderData}) => {
  const [idNumber, setIdNumber] = useState(0);
  // const sliderData = [
  
  //   {
  //     title: "First NFT",
  //     id: 1,
  //     name: "Prajwal Luitel",
  //     collection: "GYM",
  //     price: "00000456 ETH",
  //     like: 243,
  //     image: images.user1,
  //     nftImage: images.nft_image_1,
  //     time: {
  //       days: 27,
  //       hours: 10,
  //       minutes: 34,
  //       seconds: 11,
  //     },
  //   },

  //   {
  //     title: "Another NFT",
  //     id: 2,
  //     name: "Samridhi Parajuli",
  //     collection: "Home",
  //     price: "00000953 ETH",
  //     like: 243,
  //     image: images.user2,
  //     nftImage: images.nft_image_2,
  //     time: {
  //       days: 27,
  //       hours: 10,
  //       minutes: 34,
  //       seconds: 11,
  //     },
  //   },

  //   {
  //     title: "Third NFT",
  //     id: 3,
  //     name: "Aayush Parajuli",
  //     collection: "Home",
  //     price: "00000953 ETH",
  //     like: 243,
  //     image: images.user3,
  //     nftImage: images.nft_image_3,
  //     time: {
  //       days: 27,
  //       hours: 10,
  //       minutes: 34,
  //       seconds: 11,
  //     },
  //   },
  //   {
  //     title: "So many NFTs",
  //     id: 4,
  //     name: "Prajwal Luitel",
  //     collection: "Home",
  //     price: "00000953 ETH",
  //     like: 243,
  //     image: images.user4,
  //     nftImage: images.nft_image_1,
  //     time: {
  //       days: 27,
  //       hours: 10,
  //       minutes: 34,
  //       seconds: 11,
  //     },
  //   },
  // ];

  // Increment function
  
  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  //   Decrement function
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
          <h2>{sliderData[idNumber].name}</h2>
          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              <Image
                className={Style.bigNFTSlider_box_left_creator_profile_img}
                src={images.user1}
                alt="profile image"
                width={50}
                height={50}
              />
              <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].owner.slice(0,18)}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire
                className={Style.bigNFTSlider_box_left_creator_collection_icon}
              />

              <div
                className={Style.bigNFTSlider_box_left_creator_collection_info}
              >
                <p>Collection</p>
                <h4>{ sliderData[idNumber].collection }</h4>
              </div>
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_bidding}>
            <div className={Style.bigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price} ETH <span> ~${ Math.round(sliderData[idNumber].price*1700) }</span>
              </p>
            </div>

            <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
              <b> <span>Description</span></b>
            </p>

            <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
              <span>{ sliderData[idNumber].description }</span>
            </p>

            

            <div className={Style.bigNFTSlider_box_left_button}>
              <Link href = {{pathname: "/NFT-details", query:sliderData[idNumber]}}>
              <Button btnName="View Now" handleClick={() => {}} />
              </Link>
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLine
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
            <Image
              src={sliderData[idNumber].image}
              alt="NFT IMAGE"
                          className={Style.bigNFTSlider_box_right_box_img}      
                          width={600} height={650}
            />

            <div className={Style.bigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>32</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSlider;
