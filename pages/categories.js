import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";

// internal Import
import Category from "../categoriesPage/Category";
import Style from "../styles/categories.module.css";

// import from the smart contract
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
import { Loader, Title } from "../components/componentsindex";
import images from "../img/index";

const categories = () => {
  const { fetchNFTs } = useContext(NFTMarketplaceContext);

  const [nfts, setNfts] = useState([]);
  const [categoriesArray, setCategoriesArray] = useState([]);
  

  useEffect(() => {
    try {
      fetchNFTs().then((items) => {
        setNfts(items.reverse());
      });
    } catch (error) {
      console.log("Please reload the browser"); // setError("Please reload the browser", error);
    }
  }, []);

  useEffect(() => {
    nfts.map((el) => {
      if (!categoriesArray.includes(el.collection)) {
        categoriesArray.push(el.collection);
      }
    });
  }, [nfts]);

  

  return (
    <div className={Style.categories}>
      <Title
        heading="Explore the Categories"
        paragraph="View the variety of NFTs as per the Categories"
      />

      {categoriesArray.length == 0 ? (
        <Loader />
      ) : (
  <Category nfts={nfts} categories={categoriesArray} />
          
      )}
    </div>
  );
};

export default categories;
