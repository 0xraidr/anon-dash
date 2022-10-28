import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const SocialStats = () => {
  const [discMembers, setDiscMembers] = useState();
  const discordMembers = async () => {
    try {
      const apiResult = await axios({
        method: "get",
        url: `https://discord.com/api/v9/invites/KUDf9KP72Z?with_counts=true&with_expiration=true`,
      });
      setDiscMembers(apiResult.data.approximate_member_count);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    discordMembers();
  }, []);

  return (
    <div className="mx-5 md:max-w-none px-3 pb-3 shadow-lg shadow-neutral-800 text-2xl">
      <div className="flex justify-center font-semibold p-2 pb-5 text-transparent bg-clip-text bg-gradient-to-br from-white to-green-400">
        Social Stats
      </div>
      <div className="grid grid-cols-1 text-lg sm:grid-cols-3 gap-4 text-center">
        <div className="text-slate-400">
          <div className="p-2 bg-neutral-800 border-black rounded">
            Team
            <div className="text-2xl text-white font-semibold">7 Anon's</div>
          </div>
        </div>
        <div className="p-2 bg-neutral-800 border-neutral-800 rounded">
          <div className="text-slate-400">
            Twitter
            <div className="text-2xl text-white font-semibold">
              soon Followers
            </div>
          </div>
        </div>
        <div className="bg-neutral-800 p-2 border-neutral-800 rounded">
          <div className="text-slate-400">
            Discord
            <div className="text-2xl text-white font-semibold">
              {discMembers} Members
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialStats;
