import React, { useState, useEffect, useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AdminServices from "../../services/AdminServices";
import { VotingContext } from "../../utils/VotingContext";
import Web3 from "web3";
const CanditateList = ({ addCanditate, setAddCanditate }) => {
  const [canditates, setCanditates] = useState();
  const { contract ,provider} = useContext(VotingContext);
  const web3 = new Web3(provider);
  const getAllCandidates = async () => {

    let temp = await contract.getCandidates();
    setCanditates(temp);
  };
  useEffect(() => {
    getAllCandidates();
  }, []);
  return (
    <div className="w-11/12 bg-bluegray font-poppins mx-auto mt-8 mb-10 relative">
      <p className=" font-extrabold text-xl pb-5">Canditate List</p>
      <div className="2/12 flex px-10 items-center">
        <div className="flex items-center text-black justify-center gap-3">
          {canditates?.map((candidate, i) => {
            return (
              <div className="flex items-center justify-center " key={i}>
                <div className="bg-darkgray text-white w-[15rem] h-[12rem] p-5 gap-3 flex flex-col justify-center items-center rounded-lg">
                  <figure className="w-[6rem]  h-[8rem] rounded-lg">
                    <img
                      className="rounded-full w-24 h-24"
                      src={
                        candidate.image
                      }
                    />
                  </figure>
                  <div>
                    <p className="text-xl">{web3.toAscii(candidate.name.replace(/00+/, ""))}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
       <div className="relative flex gap-5 mx-5">

          <button
            onClick={() => setAddCanditate(!addCanditate)}
            className="text-lg w-12 h-10   bg-purple     rounded-md cursor-pointer"
          >Add</button>
        <button
          onClick={getAllCandidates}
          className="p-1 w-36 h-10 bg-purple rounded-lg">
          Show Canditate
        </button>
            </div>
      </div>
    </div>
  );
};

export default CanditateList;
