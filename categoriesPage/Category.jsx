import React, {useState} from "react";

// internal import
import Style from "./Category.module.css";
import { NFTCardTwo } from "../collectionPage/collectionIndex";
import { Title } from "../components/componentsindex";

const Category = ({ nfts, categories }) => {
  const fillTempArray = (collection) => {
    let TempArray = [];
    nfts.map((el) => {
      if (el.collection == collection) {
        TempArray.push(el);
      }
    });
    return TempArray;
  };

  return (
    <div className={Style.categories}>
      <br />

      {categories.map((el, i) => (
        <div key={i + 1}>
          <Title heading={el} />
          <NFTCardTwo NFTData={fillTempArray(el)} />
        </div>
      ))}
    </div>
  );
};

export default Category;
