import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

// Internal import
import Style from "./Footer.module.css";
import images from "../../img";
import { Discover, HelpCenter } from "../NavBar/index";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image src={images.logo} alt="Footer logo" height={70} width={100} />
          <p>
            A large scale digital marketplace for the enthusiasts and collectors
            for NFTs(Non-Fungible Tokens). Dive in right away for first hand
            experience of the new era.
          </p>
          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>

        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>

        <div className={Style.subscribe}>
        <h3>Subscribe</h3>
        

        <div className={Style.subscribe_box}>
          <input type="email" placeholder="Enter your email *" />
          <RiSendPlaneFill className={Style.subscribe_box_send} />
        </div>

        <div className={Style.subscribe_box_info}>
        <p>Become a prominent part of this fresh
        and promising community. Subscribe to our newsletter for regular fresh contents.</p>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
