import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import { BsSearch, BsArrowRight } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./SearchBar.module.css";

const SearchBar = ({onHandleSearch, onClearSearch}) => {

  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);

  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    setSearch(router.query);
    setSearchItem(search);
  }, [router.isReady]);

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchItem), 1000);

    return () => clearTimeout(timer);
  }, [searchItem]);

  useEffect(() => {
    if (search) {
      onHandleSearch(search);
    } else {
      onClearSearch();
    }

  }, [search])
  

  return (
    <div className={Style.SearchBar}>
      <div className={Style.SearchBar_box}>
        <BsSearch className={Style.SearchBar_box_icon} />
        <input type="text" placeholder="Search NFTs"
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}/>
        <BsArrowRight className={Style.SearchBar_box_icon} />
      </div>
    </div>
  );
};

export default SearchBar;