import React, { useEffect, useState, useContext } from "react";
import AdminServices from "../../services/AdminServices";
import { VotingContext } from "../../utils/VotingContext";
import Web3 from "web3";
const VotersList = () => {
  const [trues, setTrue] = useState();
  const { contract, provider } = useContext(VotingContext);
  const web3 = new Web3(provider);
  const getTrueData = async () => {
    // await AdminServices.getTrue().then((data) => {
    //   setTrue(data.data);
    // });
    let voters = await contract.getVoters();
    console.log(voters);
    setTrue(voters);
  };
  // useEffect(() => {

  //   getTrueData();
  // }, []);
  return (
    <div className="w-9/12 mx-auto mt-40  bg-bluegray">
      <div className="flex items-center">
        <p className="font-dmsans font-semibold text-xl pb-5">Voters List</p>
        <button onClick={getTrueData} className="p-2 bg-lightpurple mb-5 rounded-xl mx-10">Get Voters</button>
      </div>
      <div className="flex items-center justify-center px-10 border-y-[1px] py-2 border-gray">
        <p className="w-3/12 flex items-center justify-center"> Image</p>
        <p className="w-3/12 flex items-center justify-center"> Name</p>
        <p className="w-5/12 flex items-center justify-center"> Address</p>
      </div>
      <div className=" flex items-center px-10 justify-center w-full">
        <ul className="flex flex-col w-full justify-center">
          {trues?.map((tru) => {
            return (
              <li className="flex items-center w-full group justify-center">
                <span className="w-24 flex items-center justify-center">
                  <img
                    className=" h-16 w-18 my-1 object-contain rounded-full h flex items-center justify-center"
                    src={tru.image}
                    alt={tru.name}
                  />
                </span>
                <p className="w-3/12 flex items-center justify-center">
                  {web3.toAscii(tru.name.replace(/00+/, ""))}
                </p>
                <p className="w-5/12 flex items-center justify-center">
                  {tru.ownAddress}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default VotersList;
