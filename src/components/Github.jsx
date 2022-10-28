import React from "react";

const Githhub = () => {
  return (
    <div className="px-3 pt-3 flex justify-center shadow-lg shadow-black rounded pb-3">
      <div className="container">
        <div className="font-semibold text-2xl text-white flex justify-center pb-5 text-transparent bg-clip-text bg-gradient-to-br from-white to-green-400">
          Github Commits
        </div>
        <div className="bg-neutral-800 p-2 border-neutral-800 rounded">
          <div className="flex justify-center">
            <img
              src="http://ghchart.rshah.org/0xNico"
              alt="Anon Clubs Github chart"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Githhub;
