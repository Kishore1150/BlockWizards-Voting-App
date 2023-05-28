import React, { useState, useContext } from "react";
import logo from "../Assets/images/Home/logo.png";
import { VotingContext } from "../utils/VotingContext";
import { shortenAddress } from "../utils/shortenAddress";
import { useNavigate } from "react-router";
import { StateProvider } from "../context/ContextProvider";
const Navbar = () => {
  const [isDropDowmOpen, setDropDownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { setRole, role } = StateProvider();
  const handleDropDownOpen = () => {
    setDropDownOpen(true);
  };
  const handleDropDownClose = () => {
    setDropDownOpen(false);
  };

  const { connectWallet, currentAccount } = useContext(VotingContext);

  const onScroll = () => {
    if (window.scrollY > 2) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    return () => window.removeEventListener("scroll", onScroll);
  };
  return (
    <>
      <header className={`w-[100%] fixed z-10 h-[5rem] top-0 bg-bluegray `}>
        <nav className="flex  items-center  justify-between mt-3  w-[95%]  ">
          <div className="flex items-center hover:cursor-pointer ">
            <figure className="ml-5 " onClick={() => navigate("/")}>
              <img src={logo} className="w-16 rounded-full h-14" alt="" />
            </figure>
          </div>
          <div className="flex items-center font-semibold">
            <ul className="flex items-center text-lg gap-20">
              <button
                className="text-bordergray hover:cursor-pointer hover:text-white"
                onMouseEnter={handleDropDownOpen}
                onMouseLeave={handleDropDownClose}>
                {role ? role : "Role"}
              </button>
              <div
                onMouseEnter={handleDropDownOpen}
                onMouseLeave={handleDropDownClose}
                className={` ${
                  isDropDowmOpen ? "opacity-100 visible" : "invisible"
                } dropdown-menu  absolute mt-44 -ml-5  shadow  transition-opacity duration-300 delay-150 pt-5 `}>
                <ul
                  className="flex flex-col gap-3
                bg-bluegray rounded-lg">
                  <li className="flex flex-col items-start gap-3 shadow-xl py-3 px-5 rounded-md">
                    <button
                      onClick={() => setRole("Canditate")}
                      className="text-bordergray  hover:text-white">
                      Canditate Login
                    </button>
                    <button
                      onClick={() => setRole("Voter")}
                      className="text-bordergray  hover:text-white">
                      Voters Login
                    </button>
                    <button
                      onClick={() => navigate("/usersvote")}
                      className="text-bordergray  hover:text-white">
                      Voting Page
                    </button>
                    <button
                      onClick={() => navigate("/admin")}
                      className="text-bordergray  hover:text-white">
                      Admin Page
                    </button>
                  </li>
                </ul>
              </div>
              {role === "Voter" && (
                <div className="">
                  <button
                    onClick={() => navigate("/signup")}
                    className="text-bordergray  hover:text-white">
                    Voters Signup
                  </button>
                </div>
              )}
              <li
                onClick={() => navigate("/Contact")}
                className="text-bordergray hover:cursor-pointer hover:text-white">
                Contact
              </li>
              <li className="text-bordergray hover:text-white hover:cursor-pointer">
                FAQ
              </li>
            </ul>
          </div>
          <div>
            {!currentAccount && (
              <button
                onClick={connectWallet}
                className="bg-pink hover:cursor-pointer text-white py-2 px-4 rounded-lg">
                Connect
              </button>
            )}
            {currentAccount && <h4>{shortenAddress(currentAccount)}</h4>}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
