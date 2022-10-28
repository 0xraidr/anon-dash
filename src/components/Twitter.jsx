import React from "react";

const Twitter = () => {
  const token =
    "AAAAAAAAAAAAAAAAAAAAAEgjiAEAAAAAH6%2FEN%2FXTV%2BT%2BjhmsnR%2Fms3VB5rw%3DgH7XJiBkn7IL5vqoFaBGvvju9v2zP0z10qjSiVRA7KxOoRkU3s";

  //var proxyUrl = "https://cors-anywhere.herokuapp.com/";
  var baseUrl =
    "https://api.twitter.com/2/users/by/username/theanonclub?user.fields=public_metrics";
  fetch(`${baseUrl}`, {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authentication: `Bearer ${token}`,
    },
  })
    .then((resp) => resp.json())
    .then((json) => console.log(json));
  return <div>Twitter</div>;
};

export default Twitter;
