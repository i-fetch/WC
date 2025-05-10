"use client";

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

const ConnectWalletButton = () => {
  const [account, setAccount] = useState("");

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          1: "https://mainnet.infura.io/v3/e5436d014720455e99313f7c85d4cfd1", // You can replace with Polygon, BSC, etc.
        },
      },
    },
  };

  const web3Modal =
    typeof window !== "undefined" &&
    new Web3Modal({
      cacheProvider: false,
      providerOptions,
    });

  const connectWallet = async () => {
    try {
      const instance = await web3Modal.connect();
      const provider = new ethers.BrowserProvider(instance);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
    } catch (err) {
      console.error("Connection failed:", err);
    }
  };

  return (
    <button
      onClick={connectWallet}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
    </button>
  );
};

export default ConnectWalletButton;
