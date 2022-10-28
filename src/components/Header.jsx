import React from "react";
import Logo from "../images/aclogo.svg";
import { FaTwitter, FaDiscord } from "react-icons/fa";

const Header = () => {
  return (
    <div className="text-white mx-2 flex justify-between shadow-lg shadow-neutral-800">
      <div className="px-7 pt-1">
        <img
          src={Logo}
          style={{ height: 83, width: 66 }}
          alt="anon club logo"
          className=""
        />
      </div>
      <div className="text-white p-7 text-3xl flex">
        <div className="pr-4 hover:blur-sm">
          <a
            href="https://twitter.com/theanonclub"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
        <div className="hover:blur-sm">
          <a
            href="https://discord.gg/KUDf9KP72Z"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
