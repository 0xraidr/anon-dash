import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Dark = () => {
  const [price, setPrice] = useState();
  const [holder, setHolder] = useState();
  const getPrice = () => {
    axios
      .get(
        "https://public-api.birdeye.so/public/price?address=FmQ7v2QUqXVVtAXkngBh3Mwx7s3mKT55nQ5Z673dURYS"
      )
      .then(function (response) {
        // handle success
        setPrice(Math.round(response.data.data.value * 1000) / 1000);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const getHolder = async () => {
    const data = await fetch(
      "https://public-api.solscan.io/token/holders?tokenAddress=FmQ7v2QUqXVVtAXkngBh3Mwx7s3mKT55nQ5Z673dURYS&limit=10&offset=0"
    )
      .then((res) => res.json())
      .then((data) => data.data);

    let list = data.map((data) => {
      let owner = data.owner;
      let rank = data.rank;
      let amount = data.amount;

      let holderInfo = {
        owner: owner,
        rank: rank,
        amount: amount,
      };

      return holderInfo;
    });
    setHolder(list);
  };
  useEffect(() => {
    getPrice();
    getHolder();
  }, []);

  return (
    <div className="mx-5 md:max-w-none px-3 pb-3 shadow-lg shadow-neutral-800 text-lg">
      <div className="flex justify-center text-2xl font-semibold p-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-green-400">
        $DARK Token
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="bg-neutral-800 p-2 border-neutral-800 rounded">
          <div className="text-slate-400">
            Price
            <div className="text-2xl text-white font-semibold">
              ${price} USD
            </div>
          </div>
        </div>
        <div className="bg-neutral-800 p-2 border-neutral-800 rounded">
          <div className="text-slate-400">
            Holders<div className="text-2xl text-white font-semibold"></div>
          </div>
        </div>
        <div className="bg-neutral-800 p-2 border-neutral-800 rounded">
          <div className="text-slate-400">
            Supply
            <div className="text-2xl text-white font-semibold">21,000,000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dark;
