const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json("hi");
});

app.get("/treasury", (req, res) => {
  const getBalances = async () => {
    const api_key = process.env.REACT_APP_TREASURY_API_KEY;
    const url = `https://api.helius.xyz/v0/addresses/FDfhQ9t7Nq8U4Y2xXynmd9bQW8HMdgbVS5PggeuAaff3/balances?api-key=${api_key}`;
    const { data } = await axios.get(url);
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

    res.json(darkAmount);
  };
  getBalances();
});

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
