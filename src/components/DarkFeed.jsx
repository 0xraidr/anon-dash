import React from "react";
import { useState, useEffect } from "react";
import DarkLogo from "../images/darklogo.png";

const DarkFeed = () => {
  const [txn, setTxn] = useState([]);
  const [time, setTime] = useState();

  //SUPER DELAYED TO NOT EXHAUST API!!! CHECK BOTTOM OF INTERVAL DURATION BELOW!    " 2000000)"

  useEffect(() => {
    const latestTxn = setInterval(() => {
      fetch(
        "https://api.solscan.io/transfer/token?token_address=FmQ7v2QUqXVVtAXkngBh3Mwx7s3mKT55nQ5Z673dURYS&type=all&offset=0&limit=1&cluster="
      )
        .then((response) => response.json())
        .then((data) => {
          const txInfo = () => {
            let list = {
              amount: data.data.items[0].amountUI,
              transferrer: data.data.items[0].sourceOwnerAccount,
              destAccount: data.data.items[0].destOwnerAccount,
              timestamp: data.data.items[0].priceInfo.updateUnixTime * 1000,
            };
            function timeDifference() {
              var msPerMinute = 60 * 1000;
              var msPerHour = msPerMinute * 60;
              var msPerDay = msPerHour * 24;
              var msPerMonth = msPerDay * 30;
              var msPerYear = msPerDay * 365;

              const current = Date.now();
              var elapsed = current - list.timestamp;

              if (elapsed < msPerMinute) {
                return Math.round(elapsed / 1000) + " seconds ago";
              } else if (elapsed < msPerHour) {
                return Math.round(elapsed / msPerMinute) + " minutes ago";
              } else if (elapsed < msPerDay) {
                return Math.round(elapsed / msPerHour) + " hours ago";
              } else if (elapsed < msPerMonth) {
                return (
                  "approximately " +
                  Math.round(elapsed / msPerDay) +
                  " days ago"
                );
              } else if (elapsed < msPerYear) {
                return (
                  "approximately " +
                  Math.round(elapsed / msPerMonth) +
                  " months ago"
                );
              } else {
                return (
                  "approximately " +
                  Math.round(elapsed / msPerYear) +
                  " years ago"
                );
              }
            }
            setTxn(list);
            setTime(timeDifference(list.timestamp));
            console.log(timeDifference(list.timestamp));
          };
          return txInfo();
        });
    }, 2000);

    return () => {
      clearInterval(latestTxn);
    };
  }, []);
  return (
    <div className="flex pt-3 pr-8 justify-between md:justify-center shadow-neutral-800 text-white ">
      <div className="pl-10">
        <img src={DarkLogo} style={{ height: 63, width: 63 }} alt="darklogo" />
      </div>
      <div className="py-3">
        <div className="grid grid-cols-2 text-sm md:pl-8 md:pr-5">
          <div className="">
            From:{" "}
            {typeof txn.transferrer === "string" &&
              `${txn.transferrer.slice(0, 4)}`}
            ...
            {`${
              typeof txn.transferrer === "string" &&
              txn.transferrer.slice(40, 44)
            }`}
          </div>
          <div className="pl-3">
            {`${Math.round(txn.amount * 1000) / 1000}`} DARK
          </div>
          <div className="pr-5">
            To:{" "}
            {`${
              typeof txn.destAccount === "string" && txn.destAccount.slice(0, 4)
            }`}
            ...
            {`${
              typeof txn.destAccount === "string" &&
              txn.destAccount.slice(40, 44)
            }`}
          </div>
          <div className="pl-5">{time}</div>
        </div>
      </div>
    </div>
  );
};

export default DarkFeed;
