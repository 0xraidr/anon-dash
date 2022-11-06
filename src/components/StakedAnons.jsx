import React from "react";
import { useState, useEffect } from "react";

const StakedAnons = () => {
  const [stakedOg, setStakedOg] = useState();
  const [stakeEvolved, setStakedEvolved] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const base = "https://akkoros.herokuapp.com/";
      const data = await fetch(
        `${base}https://63478066f96c643fcc551e7a--venerable-chimera-d767a7.netlify.app/api/stats`
      )
        .then((res) => res.json())
        .then((data) => data);
      const dataStaked = data;
      setStakedOg(dataStaked[0].gemsStaked);
      setStakedEvolved(dataStaked[1].gemsStaked);
      console.log(dataStaked[1].gemsStaked);
      console.log(dataStaked[0].gemsStaked);
    };
    fetchData();
  }, []);

  return (
    <div className="mx-5 md:max-w-none px-3 pb-3 shadow-lg shadow-neutral-800 text-lg">
      <div className="flex justify-center text-2xl font-semibold p-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-green-400">
        Staked Anons
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
        <div className="bg-neutral-800 p-2 border-neutral-800 rounded">
          <div className="text-slate-400">
            OG ANONS
            <div className="text-white">{stakedOg}/888 Staked</div>
            <div className="text-2xl text-white font-semibold">
              {((stakedOg / 888) * 100).toFixed(2)}%
            </div>
          </div>
        </div>
        <div className="bg-neutral-800 p-2 border-neutral-800 rounded">
          <div className="text-slate-400">
            3D ANONS
            <div className="text-white">{stakeEvolved}/888 Staked</div>
            <div className="text-2xl text-white font-semibold">
              {((stakeEvolved / 888) * 100).toFixed(2)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakedAnons;
