import React,{useContext} from "react";
import banner from "../../Assets/images/Home/banner.png";
import { VotingContext } from "../../utils/VotingContext";
const LandingSection1 = () => {
  const {contract} = useContext(VotingContext);
  const getWinner = async () => {
   await contract.winner();
  }
  return (
    <>
      <main className="">
        <section className="text-white  h-[40rem] w-[75rem]  bg-backgroundimage">
          <div className="flex flex-col  left-[5rem] items-left h-[0rem] gap-8 relative top-[22rem]">
            <div className="flex items-center relative  w-[20rem]">
              <h1 className=" text-6xl font-extralight ">VOTING</h1>
              <span className=" hover:translate-x-1 relative bottom-10 animate-spin rounded-full ">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="currentColor"
                  class="pages__StyledGlimmer-sc-1hmqm-13 ePgUwQ"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.0848 20.0848V19.5269H0V20.0848H20.0848Z"></path>
                  <path d="M20.0848 0V20.0848L19.5269 20.0848V0H20.0848Z"></path>
                  <path d="M6.69494 20.0848C14.0869 20.078 20.078 14.0869 20.0848 6.69494L20.0848 20.0848L6.69494 20.0848Z"></path>
                  <path d="M33.4747 20.0848C26.0827 20.0917 20.0917 26.0827 20.0848 33.4747L20.0848 20.0848L33.4747 20.0848Z"></path>
                  <path d="M20.0848 20.0848L20.0848 20.6428L40.1696 20.6428V20.0848L20.0848 20.0848Z"></path>
                  <path d="M20.0848 40.1697L20.0848 20.0848L20.6427 20.0848L20.6427 40.1697H20.0848Z"></path>
                </svg>
              </span>
              <h1 className=" text-6xl  font-bold">PROTOCOL</h1>
            </div>

            <p className="font-sm   w-[35rem] text-2xl">
              Vote, decide and lead on the decentralized voting system protocol.
            </p>
            <span className="flex w-full justify-start">
              <button className="p-2 bg-white text-black font-medium text-xl px-4 rounded-lg" onClick={getWinner}>Winner</button>
            </span>
            <div className="flex gap-5 w-[5rem]">
              <button className="w-[5rem]  hover:scale-[1.1] transition-all ease-in-out ">
                <i class="fa-brands fa-twitter text-2xl"></i>
              </button>
              <button className="w-[5rem] hover:scale-[1.1] transition-all ease-in-out">
                <i class="fa-brands fa-github text-2xl"></i>
              </button>
              <button className="w-[5rem] hover:scale-[1.1] transition-all ease-in-out ">
                <i class="fa-brands fa-linkedin text-2xl"></i>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LandingSection1;
