import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const DarkChart = () => {
  //const [tokenData, setTokenData] = useState({ labels: [], datasets: [] });

  const getDarkChart = () => {
    axios
      .get(
        "https://public-api.birdeye.so/public/history_price?address=FmQ7v2QUqXVVtAXkngBh3Mwx7s3mKT55nQ5Z673dURYS&time_from=1657660861&time_to=1665609900"
      )
      .then(function (response) {
        // handle success
        console.log(response.data.data);

        // setTokenData({ labels }, { datasets });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  useEffect(() => {
    getDarkChart();
  }, []);

  return <div>DarkChart</div>;
};

export default DarkChart;
