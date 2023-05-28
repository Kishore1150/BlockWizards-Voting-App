import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractAddress, contractABI } from "./config";

export const VotingContext = React.createContext();
const { ethereum } = window;

export const VotingProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

  const checkIfWalletConnect = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        console.log(currentAccount);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object.");
    }
  };

  const updateEthers = async () => {
    let tempProvider = new ethers.providers.Web3Provider(ethereum);
    setProvider(tempProvider);

    const tempSigner = tempProvider.getSigner();

    let tempContract = new ethers.Contract(
      contractAddress,
      contractABI,
      tempSigner
    );
    setContract(tempContract);
  };



  useEffect(() => {
    checkIfWalletConnect();
    updateEthers();
    // eslint-disable-next-line
  }, []);

  return (
    <VotingContext.Provider
      value={{ connectWallet, currentAccount, contract, provider }}>
      {children}
    </VotingContext.Provider>
  );
};
