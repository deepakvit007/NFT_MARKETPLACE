import React, { useState, useEffect, useContext } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import axios from "axios";
//import { create as ipfsHttpClient } from "ipfs-http-client";

// const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

// const projectId = "2MoUjkXVv6qyLwqNXYb2hmpmXtm";
// const projectSecretKey = "53701b0c59059258ce2318da98eb933c";
// const auth = `Basic ${Buffer.from(`${projectId}:${projectSecretKey}`).toString(
//   "base64" 
// )}`;

// const subdomain = "https://capstone-project.infura-ipfs.io";

// const client = ipfsHttpClient({
//   host: "ipfs.infura.io",
//   port: 5001,
//   protocol: "https",
//   headers: {
//     AccessControlAllowOrigin: true,
//     authorization: auth,
//   },
// });

// Internal import
import { NFTMarketplaceAddress, NFTMarketplaceABI } from "./constants";

// importing from the contracts
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
  );

// connecting with smart contract
const connectingWithSmartContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting with the contract");
  }
};

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = ({ children }) => {
  const titleData = "Create, Explore, and Sell NFTs";

  // using the state
  const [error, setError] = useState("");
  const [openError, setOpenError] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const router = useRouter();

  // function to check whether the wallet is connected to the application
  const checkIfWalletConnected = async () => {
    try {
      // this window.ethereum is automatically present in the browser if metamask is installed
      if (!window.ethereum) return setOpenError(true), setError("Install metamask wallet");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        setError("No account found");
        setOpenError(true);
      }
    } catch (error) {
      setError("Unable to connect to the wallet");
      setOpenError(true);
    }
  };
  useEffect(() => {
    checkIfWalletConnected();
  }, []);
  //   function for the button to connect to the wallet
  const connectWallet = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError("Install metamask wallet");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      setError("Error while connecting to the wallet");
      setOpenError(true);
    }
  };
 
  const uploadToIPFS = async (file) => {
    if (!file) {
      setError("No file provided");
      setOpenError(true);
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append("file", file);
  
      const response = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          headers: {
            pinata_api_key: "1367e32a20962aed706b",
            pinata_secret_api_key: "3f70cd122cca891da6f21ce50feaa43a097fd2b84ead6569de0607e1f93b7558",
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      const ImgHash = `https://ivory-defeated-unicorn-411.mypinata.cloud/ipfs/${response.data.IpfsHash}`;
      return ImgHash;
    } catch (error) {
      setError("Error uploading to Pinata");
      setOpenError(true);
    }
  };
  

  // create nft function
  const createNFT = async (name, price, image, description, collection, router) => {
    if (!name || !description || !price || !image || !collection)
      return setError("Data Is Missing"), setOpenError(true);

    const data = JSON.stringify({ name, description, image, collection });

    try {
      const response = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: data,
        headers: {
          pinata_api_key: "1367e32a20962aed706b",
          pinata_secret_api_key: "3f70cd122cca891da6f21ce50feaa43a097fd2b84ead6569de0607e1f93b7558",
          "Content-Type": "multipart/form-data",
        },
        });
        const url = `https://ivory-defeated-unicorn-411.mypinata.cloud/ipfs/${response.data.IpfsHash}`;

      await createSale(url, price);
      router.push("/searchPage");
    } catch (error) {
      setError("Error while creating NFT");
      setOpenError(true);
    }
  };

  //   create sale function
  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      const price = ethers.utils.parseUnits(formInputPrice, "ether");
      const contract = await connectingWithSmartContract();
      // console.log("Connected to contract");
      const listingPrice = await contract.getListingPrice();
      // console.log(listingPrice);
      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.resellToken(id, price, {
            value: listingPrice.toString(),
          });

      await transaction.wait();
    } catch (error) {
      setError("unable to create the sell");
      setOpenError(true);
    }
  };

  // fetch NFTs
  const fetchNFTs = async () => {
    try {
      // const provider = new ethers.providers.JsonRpcProvider();
     
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      //const signer = provider.getSigner();
      const contract = fetchContract(provider);
      

      const data = await contract.fetchMarketItems();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);
            const {
              data: { image, name, description, collection },
            } = await axios.get(tokenURI);
            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );

            return {
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
              collection
            };
          }
        )
      );
      return items;
    } catch (error) {
      // console.log("Unable to fetch NFTs");
      setError("Error while fetching NFTS");
      setOpenError(true);
    }
  };

  useEffect(() => {
    fetchNFTs();
  }, []);

  //  fetch my nft or listed nfts
  const fetchMyNFTsOrListedNFTs = async (type) => {
    try {
      const contract = await connectingWithSmartContract();

      const data =
        type == "fetchItemsListed"
          ? await contract.fetchItemsListed()
          : await contract.fetchMyNFTs();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            
            const tokenURI = await contract.tokenURI(tokenId);
             

            const {
              data: { image, name, description, collection },
            } = await axios.get(tokenURI);
            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );

            return {
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
              collection
            };
          }
        )
      );
      return items;
    } catch (error) {
      setError("Error while fetching listed NFTs");
      setOpenError(true);
      // console.log("Unable to fetch listed NFTs");
    }
  };

  // useEffect(() => {
  //   fetchMyNFTsOrListedNFTs();
  // },[])

  // function to allow the users to buy nfts
  const buyNFT = async (nft) => {
    try {
      const contract = await connectingWithSmartContract();
      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });

      await transaction.wait();
      router.push("/author");
    } catch (error) {
      setError("Unable to buy nft: ERROR Encountered");
      setOpenError(true);
    }
  };

  return (
    <NFTMarketplaceContext.Provider
      value={{
        checkIfWalletConnected,
        connectWallet,
        uploadToIPFS,
        createNFT,
        fetchNFTs,
        fetchMyNFTsOrListedNFTs,
        buyNFT,
        createSale,
        currentAccount,
        titleData,
        setOpenError,
        openError,
        error,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};