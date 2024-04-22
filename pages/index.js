import React, {useState, useEffect, useContext} from "react";

// internal import
import Style from "../styles/index.module.css";
import {
  AudioLive,
  BigNFTSlider,
  Brand,
  Category,
  Collection,
  Filter,
  FollowerTab,
  Loader,
  NFTCard,
  Service,
  Slider,
  Subscribe,
  Title,
  Video,
  Banner
} from "../components/componentsindex";
import { getTopcreators } from "../TopCreators/TopCreators";

// importing from smart contract
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";


const Home = () => {

  const { checkIfWalletConnected, fetchNFTs } = useContext(NFTMarketplaceContext);

  useEffect(() => {
    checkIfWalletConnected();
  }, [])
  
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);


  // Creators list
  const creators = getTopcreators(nfts);


  useEffect(() => {
    try {
      fetchNFTs().then((items) => {
        setNfts(items.reverse());
        setNftsCopy(items);
      });
    } catch (error) {
      console.log("Please reload the browser"); // setError("Please reload the browser", error);
    }
  }, []);



  return (
    <div className={Style.homePage}>
      <Banner/>
      <Service />
      {nfts.length == 0 ? <Loader/> : <BigNFTSlider sliderData= {nfts} /> }
      <Title
      heading="Latest Audio Collection"
      paragraph="Have a look at our choice of NFTs. They're awesome."
      />
      <AudioLive />
      {creators.length ==0 ? <Loader/> : <FollowerTab TopCreator={creators} /> }
      <Slider/>
      <Collection/>
      <Title
      heading="Featured NFTs"
      paragraph="Have a look at our choice of NFTs. They're awesome."
      />
      <Filter />
      {nfts.length ==0 ? <Loader/> : <NFTCard NFTData={nfts} /> }
      
      <Title
      heading="Browse by Category"
      paragraph="View Various Categories of NFT data in the Marketplace"
      />
      <Category/>
      <Subscribe />
      <Brand />
      <Video/>
    </div>
  );
};

export default Home;
