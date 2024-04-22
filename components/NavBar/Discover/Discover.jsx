import React from 'react'
import Link from "next/link";

// internal import
import Style from "./Discover.module.css";


// Discover Navigation Menu
const Discover = () => {

  const discover = [
    {
      name: "Categories",
      link: "categories"
    },
    {
      name: "Search",
      link: "searchPage"
    },
    {
      name: "Author Profile",
      link: "author"
    },
    {
      name: "NFT Details",
      link: "NFT-details"
    },
    {
      name: "Account Setting",
      link: "account"
    },
    {
      name: "Connect Wallet",
      link: "connectWallet"
    },
    {
      name: "Blog",
      link: "blog"
    },
  ];
  
  return (
    <div>{
      discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))
    }
    </div>
  );
};

export default Discover