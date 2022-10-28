import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const AnonTreasury = () => {
  const [solBal, setSolBal] = useState();
  const [usdBal, setUsdBal] = useState();
  const [darkBal, setDarkBal] = useState();

  const getBalances = async () => {
    const api_key = process.env.REACT_APP_TREASURY_API_KEY;
    const base_Url = process.env.REACT_APP_BASE_URL;
    const config = {
      headers: {
        Authorization: `${api_key}`,
      },
    };
    const url = `https://akkoros.herokuapp.com/https://api.helius.xyz/v0/addresses/FDfhQ9t7Nq8U4Y2xXynmd9bQW8HMdgbVS5PggeuAaff3/balances?api-key=${api_key}`;
    const { data } = await axios.get(url, config);
    function getUsdAmountByMintID(mintID, data) {
      const res = data.filter(({ mint }) => {
        return mint === mintID;
      })[0];

      return res.amount;
    }

    const usdAmount = getUsdAmountByMintID(
      "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      data.tokens
    );
    //
    function getDarkAmountByMintID(mintID, data) {
      const res = data.filter(({ mint }) => {
        return mint === mintID;
      })[0];

      return res.amount;
    }

    const darkAmount = getDarkAmountByMintID(
      "FmQ7v2QUqXVVtAXkngBh3Mwx7s3mKT55nQ5Z673dURYS",
      data.tokens
    );
    //
    console.log(darkAmount);
    setDarkBal(Math.round((darkAmount / 1000000000000000) * 1000) / 1000);
    console.log(usdAmount);
    setUsdBal(Math.round((usdAmount / 1000000000) * 10) / 10);
    console.log("balances: ", data.nativeBalance / 1000000000);
    setSolBal(Math.round((data.nativeBalance / 1000000000) * 1000) / 1000);
  };
  useEffect(() => {
    getBalances();
  }, []);

  return (
    <div className="mx-5 md:max-w-none px-3 pb-3 shadow-lg shadow-neutral-800 text-2xl">
      <div className="flex justify-center text-center font-semibold p-2 pb-5 text-transparent bg-clip-text bg-gradient-to-br from-white to-green-400">
        Anon's Treasury Balances
      </div>
      <div className="grid grid-cols-1 text-lg sm:grid-cols-3 gap-4 text-center">
        <div className="bg-neutral-800 p-2 border-neutral-800 rounded">
          <div className="text-slate-400">
            SOL Balance
            <div className="text-2xl text-white font-semibold">
              {solBal} SOL
            </div>
          </div>
        </div>
        <div className="bg-neutral-800 p-2 border-neutral-800 rounded">
          <div className="text-slate-400">
            USDC Balance
            <div className="text-2xl text-white font-semibold">
              ${usdBal}K USD
            </div>
          </div>
        </div>
        <div className="bg-neutral-800 p-2 border-neutral-800 rounded">
          <div className="text-slate-400">
            DARK Balance
            <div className="text-2xl text-white font-semibold">
              {darkBal}M $DARK
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AnonTreasury;
