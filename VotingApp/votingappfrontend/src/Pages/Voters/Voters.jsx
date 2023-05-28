import React,{useEffect,useState,useContext} from "react";
import {shortenAddress} from "../../utils/shortenAddress.js"
import Web3 from "web3";
import { VotingContext } from "../../utils/VotingContext.js";

const Voters = () => {
  const{contract,currentAccount,provider} = useContext(VotingContext);
  const [candidatesList, setCandidatesList] = useState();

  const web3 = new Web3(provider);

  const CastVote = async (index) => {
      await contract.vote(index)
   }

   const getVotersList = async () => {
    let val = await contract.getCandidates();
    console.log(val);
    setCandidatesList(val);
  };

  return (
    <>
      <div className="h-[30rem] w-[100%] mt-32">
        <div className="text-center">
          <button onClick={getVotersList} className= " p-2 rounded-lg bg-white   text-black" >View All Candidates</button>
        </div>

        <table className="w-full mt-10 font-poppins text-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Wallet Address</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {candidatesList?.map((candidate, index) => (
              <tr key={index}>
                <td className=" px-4  py-2">
                  <img
                    className="w-16 h-16   relative left-[4.5rem]
                     rounded-md"
                    src={candidate.image}
                    alt=""
                  />
                </td>
                <td className=" px-5 py-2 text-center">{web3.toAscii(candidate.name.replace(/00+/, ""))}</td>
                <td className=" px-4 py-2 text-center">
                  {shortenAddress(candidate.own_address)}
                </td>
                <td className=" px-4 py-2 text-center">
                  <button
                    className="bg-blue  text-white px-4 py-2 rounded-md"
                    onClick={() => CastVote(candidate.index)}>
                    Vote
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Voters;
